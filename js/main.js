const navbar=document.getElementById('navbar');
  window.addEventListener('scroll',()=>{navbar.classList.toggle('scrolled',window.scrollY>60)},{passive:true});
  const reveals=document.querySelectorAll('.reveal');
  const observer=new IntersectionObserver((entries)=>{entries.forEach((entry,i)=>{if(entry.isIntersecting){setTimeout(()=>entry.target.classList.add('visible'),i*80);observer.unobserve(entry.target)}})},{threshold:0.12});
  reveals.forEach(el=>observer.observe(el));
  const days=['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
  const today=days[new Date().getDay()];
  document.querySelectorAll('.horaires-table tr').forEach(row=>{if(row.cells[0]&&row.cells[0].textContent.trim()===today)row.classList.add('today')});
  function showCat(cat,btn){document.querySelectorAll('.menu-category').forEach(c=>c.classList.remove('active'));document.querySelectorAll('.menu-tab').forEach(t=>t.classList.remove('active'));document.getElementById('cat-'+cat).classList.add('active');btn.classList.add('active');}