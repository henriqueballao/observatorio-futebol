const $=x=>document.getElementById(x);
let clubs=[],facts=[];
const safe=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const conf=window.OBS_CONFIG||{};
async function getDb(table,query=''){
 const u=conf.supabaseUrl.replace(/\/$/,'')+'/rest/v1/'+table+'?'+query;
 const r=await fetch(u,{headers:{apikey:conf.supabasePublishableKey,Accept:'application/json'}});
 if(!r.ok)throw new Error('Banco não disponível'); return r.json();
}
function draw(){
 const d=$('division').value,s=$('state').value,q=$('search').value.toLocaleLowerCase('pt-BR');
 const rows=clubs.filter(c=>(!d||c.reference_division===d)&&(!s||c.state===s)&&c.name.toLocaleLowerCase('pt-BR').includes(q));
 $('clubCount').textContent=clubs.length;
 $('clubs').innerHTML=rows.map(c=>'<tr><td>'+safe(c.name)+'</td><td>'+safe(c.state)+'</td><td>'+safe(c.reference_division)+'</td><td>'+safe(c.status)+'</td></tr>').join('')||'<tr><td colspan="4">Nenhum clube encontrado.</td></tr>';
}
function compare(){
 const metric=$('metric').value,a=$('clubA').value,b=$('clubB').value;
 const matched=facts.filter(f=>f.metric===metric&&(f.club_id===a||f.club_id===b));
 $('factCount').textContent=facts.length;
 if(!matched.length){$('chart').textContent='Não há registros históricos homologados para esta comparação.';$('coverage').textContent='Os anos sem observações verificadas permanecem sem valor.';return}
 const years=[...new Set(matched.map(x=>x.season))].sort((a,b)=>a-b);
 $('chart').innerHTML='<div class="table" style="width:100%"><table><thead><tr><th>Ano</th><th>'+safe(clubs.find(x=>x.club_id===a)?.name)+'</th><th>'+safe(clubs.find(x=>x.club_id===b)?.name)+'</th></tr></thead><tbody>'+years.map(y=>'<tr><td>'+y+'</td>'+[a,b].map(id=>'<td>'+(matched.find(x=>x.club_id===id&&x.season===y)?.value??'—')+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
 $('coverage').textContent='Exibidos '+matched.length+' registros verificados. Tabela provisória; gráfico será implantado no M6.';
}
async function init(){
 try{
  if(conf.supabaseUrl&&conf.supabasePublishableKey){
   const [rows,history]=await Promise.all([getDb('clubs','select=id,name,uf,division_2026,universe_status&order=name'),getDb('research_facts','select=club_id,season,metric,value,unit&status=eq.verified')]);
   clubs=rows.map(c=>({club_id:c.id,name:c.name,state:c.uf,reference_division:c.division_2026,status:c.universe_status}));
   facts=history; $('connection').textContent='Fonte: Supabase. Somente registros homologados são consultados.';
  } else {
   const r=await fetch('./clubs.json'); if(!r.ok)throw new Error('Catálogo local indisponível');
   clubs=(await r.json()).map(c=>({...c,status:'Pendente'}));
   const history=await fetch('./facts.json'); if(!history.ok)throw new Error('Base histórica indisponível');
   const published=await history.json();
   if(!Array.isArray(published)||published.some(x=>x.status!=='verified'||!x.source_id||!x.reviewer_id||!x.researcher_id||x.reviewer_id===x.researcher_id))throw new Error('Base de publicação reprovada');
   facts=published;
   $('connection').textContent='Fonte: arquivos versionados no GitHub. Apenas fatos conferidos são publicados.';
  }
  $('state').innerHTML+=[...new Set(clubs.map(c=>c.state))].sort().map(s=>'<option>'+safe(s)+'</option>').join('');
  for(const id of ['clubA','clubB'])$(id).innerHTML=clubs.map(c=>'<option value="'+safe(c.club_id)+'">'+safe(c.name)+'</option>').join('');
  $('clubB').selectedIndex=clubs.length>1?1:0;
  draw();compare();
 }catch(e){$('connection').textContent='Falha na leitura de dados: '+e.message;$('clubs').innerHTML='<tr><td colspan="4">Dados indisponíveis.</td></tr>'}
}
for(const k of ['division','state','search'])$(k).addEventListener(k==='search'?'input':'change',draw);
for(const k of ['metric','clubA','clubB'])$(k).addEventListener('change',compare);
init();