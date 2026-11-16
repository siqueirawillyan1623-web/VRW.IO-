(() => {
 const login=document.getElementById('a360-login'),dashboard=document.getElementById('a360-demo');if(!login||!dashboard)return;
 const form=document.getElementById('athleteLogin');
 const open=()=>{login.hidden=true;dashboard.hidden=false;window.scrollTo(0,0);select('inicio')};
 const close=()=>{dashboard.hidden=true;login.hidden=false;if(form)form.reset();window.scrollTo(0,0)};
 form?.addEventListener('submit',e=>{
  e.preventDefault();
  const email=document.getElementById('athleteEmail');
  const pass=document.getElementById('athletePass');
  if(!email.value.trim()||!pass.value){document.getElementById('authMessage').textContent='Preencha e-mail e senha fictícios para continuar.';return}
  // Somente demonstração local: nenhum dado é enviado, guardado ou autenticado.
  document.getElementById('authMessage').textContent='';
  pass.value='';open();
 });
 document.getElementById('exitPreview')?.addEventListener('click',close);
 document.getElementById('exitPreviewProfile')?.addEventListener('click',close);
 function select(name){dashboard.querySelectorAll('[data-view]').forEach(v=>v.hidden=v.dataset.view!==name);dashboard.querySelectorAll('.a360-tabs [data-panel]').forEach(b=>{const on=b.dataset.panel===name;b.classList.toggle('is-current',on);b.setAttribute('aria-current',on?'page':'false')});if(name==='agenda')renderCalendar();}
 dashboard.querySelectorAll('button[data-panel]').forEach(btn=>btn.addEventListener('click',()=>select(btn.dataset.panel)));
 const list=document.getElementById('docsList');const messages={'todos':'Nenhum documento real disponível nesta prévia.','ativo':'Nenhum documento ativo disponível nesta prévia.','a-vencer':'Nenhum documento com vencimento próximo disponível nesta prévia.','revisar':'Nenhum documento marcado para revisão disponível nesta prévia.'};document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b===btn));list.textContent=messages[btn.dataset.filter]}));list.textContent=messages.todos;
 let month=new Date();month.setDate(1);const label=document.getElementById('calMonth'),grid=document.getElementById('calGrid');function renderCalendar(){if(!label||!grid)return;label.textContent=new Intl.DateTimeFormat('pt-BR',{month:'long',year:'numeric'}).format(month);grid.replaceChildren();let first=(month.getDay()+6)%7,days=new Date(month.getFullYear(),month.getMonth()+1,0).getDate();for(let i=0;i<first;i++){const s=document.createElement('span');s.setAttribute('aria-hidden','true');grid.appendChild(s)}for(let d=1;d<=days;d++){const s=document.createElement('span');s.textContent=d;const now=new Date();if(now.getFullYear()===month.getFullYear()&&now.getMonth()===month.getMonth()&&d===now.getDate())s.className='is-today';grid.appendChild(s)}}document.getElementById('calPrev')?.addEventListener('click',()=>{month.setMonth(month.getMonth()-1);renderCalendar()});document.getElementById('calNext')?.addEventListener('click',()=>{month.setMonth(month.getMonth()+1);renderCalendar()});
})();
