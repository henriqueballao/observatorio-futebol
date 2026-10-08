-- Supabase/PostgreSQL · Observatório Histórico
create extension if not exists pgcrypto;
create table if not exists clubs (
 id text primary key, name text not null, uf char(2) not null, division_2026 char(1) check(division_2026 in ('A','B','C')), universe_status text not null default 'pending' check(universe_status in ('pending','verified'))
);
create table if not exists sources (
 id uuid primary key default gen_random_uuid(), title text not null, publisher text not null, source_url text not null,
 published_on date, accessed_at timestamptz not null default now(), locator text not null,
 sha256 text, rights_note text
);
create table if not exists competitions (
 id text primary key, name text not null, scope text not null check(scope in ('state','regional','national','international')), tier text
);
create table if not exists research_facts (
 id uuid primary key default gen_random_uuid(), club_id text not null references clubs(id), season integer not null check(season between 1971 and 2100),
 metric text not null check(metric in ('fan_pct','fan_count','revenue','state_titles','regional_titles','national_titles','placement','net_assets','gross_debt','net_debt')),
 value numeric not null, unit text not null, competition_id text references competitions(id),
 accounting_entity text, scope_definition text, currency text, price_basis text,
 source_id uuid not null references sources(id), evidence_locator text not null,
 status text not null default 'pending' check(status in ('pending','verified','disputed','rejected','estimated')),
 researcher_id text not null, reviewer_id text, verified_at timestamptz,
 created_at timestamptz not null default now(),
 constraint reviewer_independent check(status <> 'verified' or (reviewer_id is not null and reviewer_id <> researcher_id and verified_at is not null)),
 constraint financial_context check(metric not in ('revenue','net_assets','gross_debt','net_debt') or (accounting_entity is not null and currency is not null and price_basis is not null)),
 constraint placement_context check(metric <> 'placement' or competition_id is not null)
);
create index if not exists facts_club_season_idx on research_facts(club_id, season);
create index if not exists facts_status_metric_idx on research_facts(status,metric);
-- Leitura anônima limitada estritamente a fatos homologados.
alter table clubs enable row level security;
alter table sources enable row level security;
alter table competitions enable row level security;
alter table research_facts enable row level security;
drop policy if exists clubs_verified_select on clubs;
create policy clubs_verified_select on clubs for select to anon, authenticated using (universe_status='verified');
drop policy if exists sources_verified_select on sources;
create policy sources_verified_select on sources for select to anon, authenticated
 using (exists(select 1 from research_facts f where f.source_id=sources.id and f.status='verified'));
drop policy if exists competitions_select on competitions;
create policy competitions_select on competitions for select to anon, authenticated using(true);
drop policy if exists facts_verified_select on research_facts;
create policy facts_verified_select on research_facts for select to anon, authenticated using(status='verified');
-- Nenhuma política de INSERT/UPDATE/DELETE pública. Escrita controlada por papel administrativo fora do navegador.
