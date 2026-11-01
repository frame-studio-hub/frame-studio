const menu=document.querySelector('.menu');
const nav=document.querySelector('#main-nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('mobile-open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰';});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('mobile-open');menu?.setAttribute('aria-expanded','false');menu.textContent='☰';}));

// Portfolio category filters
const filterButtons=[...document.querySelectorAll('.filter')];
const projects=[...document.querySelectorAll('.project')];
filterButtons.forEach(button=>button.addEventListener('click',()=>{
  filterButtons.forEach(b=>b.classList.toggle('active',b===button));
  const filter=button.dataset.filter;
  projects.forEach(project=>{project.hidden=filter!=='all'&&project.dataset.category!==filter;});
}));

// Concept detail dialog
const modal=document.querySelector('#project-modal');
const modalTitle=document.querySelector('#modal-title');
const modalDesc=document.querySelector('#modal-desc');
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');}
const demoFrame=document.querySelector('#demo-frame');
const demoContent={
 'ATELIER / BEAUTY':{bg:'#eee7dc',ink:'#29251f',accent:'#9c765b',brand:'ATELIER',tag:'BEAUTY STUDIO',headline:'Beauty is\nan art.',sub:'A considered space for care, confidence and everyday rituals.',cta:'EXPLORE SERVICES',cards:[['01 / HAIR','Thoughtful care','Personalised services, made around you.'],['02 / SKIN','Skin rituals','A slower, more intentional approach.'],['03 / BEAUTY','The details','Small details. A lasting impression.']]},
 'VANTA / AUTO':{bg:'#101513',ink:'#f1f2e9',accent:'#c8f34a',brand:'VANTA®',tag:'AUTOMOTIVE DETAILING',headline:'BUILT TO\nSTAND OUT.',sub:'Precision detailing for people who care about every line, surface and finish.',cta:'VIEW SERVICES',cards:[['01 / DETAIL','Exterior care','A refined finish, panel by panel.'],['02 / PROTECT','Paint protection','Keep the details looking their best.'],['03 / RESTORE','Interior reset','A cleaner, calmer driving space.']]},
 'MORNING / HOSPITALITY':{bg:'#f2e8d8',ink:'#30271f',accent:'#b66a3c',brand:'MORNING CLUB',tag:'COFFEE · BAKERY',headline:'Make room\nfor slow.',sub:'Good coffee, warm bread and a little more time for yourself.',cta:'SEE THE MENU',cards:[['01 / COFFEE','A daily ritual','Carefully prepared, always welcoming.'],['02 / BAKERY','Fresh from the oven','Simple ingredients. Beautiful flavour.'],['03 / SPACE','Stay a little','Your favourite corner is waiting.']]},
 'NØR / ARCHITECTURE':{bg:'#e8e8e2',ink:'#222722',accent:'#66735e',brand:'NØR',tag:'ARCHITECTURE OFFICE',headline:'Spaces for\nliving well.',sub:'Architecture shaped by light, material and the way people live.',cta:'DISCOVER PROJECTS',cards:[['01 / RESIDENTIAL','Quiet forms','Homes designed around everyday life.'],['02 / INTERIORS','Material honesty','A balance of texture, light and function.'],['03 / PROCESS','From idea to space','A clear process, from first sketch onward.']]},
 'FORM / FITNESS':{bg:'#d9ef46',ink:'#151810',accent:'#303b1b',brand:'FORM CLUB',tag:'STRENGTH · MOVEMENT',headline:'BUILT BY\nYOURSELF.',sub:'Training with purpose. Progress at your pace. A community that moves together.',cta:'FIND YOUR CLASS',cards:[['01 / STRENGTH','Build foundations','Coaching that meets you where you are.'],['02 / CONDITIONING','Find your rhythm','Sessions built for energy and focus.'],['03 / COMMUNITY','Move together','Good people. Consistent progress.']]},
 'OBJECT / E-COMMERCE':{bg:'#e9e5dd',ink:'#282823',accent:'#9a7654',brand:'OBJECT',tag:'CURATED DESIGN STORE',headline:'Objects with\npurpose.',sub:'A considered collection of pieces made to be used, loved and lived with.',cta:'EXPLORE THE EDIT',cards:[['01 / SEATING','The everyday chair','Useful forms with a point of view.'],['02 / LIGHTING','A softer glow','Lighting that changes the atmosphere.'],['03 / OBJECTS','Details that matter','The finishing touches to your space.']]}
};
function makeDemo(data){
 const cards=data.cards.map((c,i)=>`<article class="card"><small>${c[0]}</small><h3>${c[1]}</h3><p>${c[2]}</p><a href="#about">DISCOVER ↗</a></article>`).join('');
 return `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${data.brand} — Concept</title><style>*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:${data.bg};color:${data.ink};font-family:Arial,sans-serif}.nav{height:58px;padding:0 6%;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid ${data.ink}22;font-size:10px;letter-spacing:.12em}.nav b{font-size:16px;letter-spacing:-.05em}.nav a{color:inherit;text-decoration:none;margin-left:18px}.hero{padding:9vh 8% 7vh;min-height:420px;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden}.eyebrow,small{font-size:9px;letter-spacing:.15em;color:${data.accent}}h1{font-size:clamp(54px,10vw,112px);letter-spacing:-.09em;line-height:.83;margin:34px 0 22px;white-space:pre-line;max-width:800px}.sub{font-size:14px;line-height:1.7;max-width:370px;opacity:.72}.cta{display:inline-block;margin-top:28px;background:${data.ink};color:${data.bg};padding:14px 18px;text-decoration:none;font-size:9px;letter-spacing:.12em;width:max-content}.orb{position:absolute;width:210px;height:210px;border:1px solid ${data.accent}88;border-radius:50%;right:12%;top:20%;box-shadow:0 0 0 30px ${data.accent}10,0 0 0 60px ${data.accent}08}.section{padding:55px 8%}.label{font-size:9px;letter-spacing:.14em;color:${data.accent}}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:26px}.card{border:1px solid ${data.ink}33;padding:22px;min-height:180px;display:flex;flex-direction:column}.card h3{font-size:23px;letter-spacing:-.06em;margin:24px 0 8px}.card p{font-size:12px;line-height:1.6;opacity:.7}.card a{font-size:9px;letter-spacing:.1em;color:${data.accent};text-decoration:none;margin-top:auto;padding-top:20px}.about{background:${data.ink};color:${data.bg};padding:48px 8%;display:flex;justify-content:space-between;gap:24px;align-items:end}.about h2{font-size:clamp(30px,5vw,58px);letter-spacing:-.07em;max-width:500px;margin:15px 0 0}.about p{font-size:12px;line-height:1.7;max-width:260px;opacity:.7}footer{padding:22px 8%;font-size:9px;letter-spacing:.12em;display:flex;justify-content:space-between}@media(max-width:600px){.nav a{margin-left:8px;font-size:8px}.orb{width:100px;height:100px;right:7%;top:25%}.grid{grid-template-columns:1fr}.card{min-height:145px}.about{display:block}.about p{margin-top:20px}.hero{min-height:370px}}</style><header class="nav"><b>${data.brand}</b><div><a href="#work">COLLECTION</a><a href="#about">ABOUT</a></div></header><main><section class="hero"><span class="eyebrow">${data.tag}</span><div class="orb"></div><h1>${data.headline}</h1><p class="sub">${data.sub}</p><a class="cta" href="#work">${data.cta} ↗</a></section><section class="section" id="work"><span class="label">SELECTED / 01—03</span><div class="grid">${cards}</div></section><section class="about" id="about"><div><span class="label">A LITTLE ABOUT US</span><h2>Good work starts with a clear point of view.</h2></div><p>This is an interactive website concept. Explore the sections, test the navigation and imagine how your own brand could look.</p></section></main><footer><span>${data.brand}</span><span>CONCEPT BY FRAME® · 2026</span></footer></html>`;
}
document.querySelectorAll('.project').forEach(project=>{
  project.querySelector('.project-open').addEventListener('click',()=>{
    modalTitle.textContent=project.dataset.title;
    modalDesc.textContent=project.dataset.desc;
    const data=demoContent[project.dataset.title];
    if(data)demoFrame.srcdoc=makeDemo(data);
    modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');
    modal.querySelector('.modal-close').focus();
  });
});
modal?.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal();});
modal?.querySelector('.modal-contact')?.addEventListener('click',closeModal);

// Subtle cursor glow on pointer devices
if(matchMedia('(pointer:fine)').matches){
  const glow=document.createElement('div');glow.className='cursor-glow';document.body.append(glow);
  window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';},{passive:true});
}


// FRAME V2: scroll progress
const progressBar=document.querySelector('#scroll-progress-bar');
function updateProgress(){const max=document.documentElement.scrollHeight-window.innerHeight;const value=max>0?(window.scrollY/max)*100:0;if(progressBar)progressBar.style.width=value+'%';}
window.addEventListener('scroll',updateProgress,{passive:true});window.addEventListener('resize',updateProgress);updateProgress();

// FRAME V2: gentle reveal-on-scroll
const revealTargets=document.querySelectorAll('.section-tag,.intro-grid,.stats,.work-head,.project,.reference-card,.service,.approach-points>div,.step,.faq-list details,.brief-head,.brief-form,.brief-result,.contact-grid');
if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
 document.documentElement.classList.add('reveal-ready');
 revealTargets.forEach((el,index)=>{el.classList.add('reveal');el.style.transitionDelay=(index%4)*65+'ms';});
 const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}}),{threshold:.12});
 revealTargets.forEach(el=>revealObserver.observe(el));
}

// FRAME V2: interactive project brief builder
const briefForm=document.querySelector('#brief-form');
const briefOutput=document.querySelector('#brief-output');
const briefEmpty=document.querySelector('#brief-empty');
const briefText=document.querySelector('#brief-text');
briefForm?.addEventListener('submit',event=>{
 event.preventDefault();const data=new FormData(briefForm);
 const niche=String(data.get('niche')||'').trim();if(!niche){briefForm.elements.niche.focus();return;}
 const details=String(data.get('details')||'').trim();
 const result=[`Тип проекта: ${data.get('type')}`,`Сфера: ${niche}`,`Визуальное направление: ${data.get('style')}`,`Задача и пожелания: ${details||'Обсудить при первом контакте.'}`].join('\n');
 briefText.textContent=result;briefEmpty.hidden=true;briefOutput.hidden=false;
});
document.querySelector('#copy-brief')?.addEventListener('click',async()=>{
 const status=document.querySelector('#copy-status');
 try{await navigator.clipboard.writeText('Новый проект для FRAME\n'+briefText.textContent);status.textContent='Бриф скопирован.';}
 catch(error){status.textContent='Не удалось скопировать автоматически — выделите текст вручную.';}
});
