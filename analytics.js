(() => {
  'use strict';
  const TRACK_URL='https://frame-lab-3wx.pages.dev/analytics/track';
  const consentKey='frame_lab_analytics_consent', visitorKey='frame_lab_visitor';
  let consent='';
  try { consent=localStorage.getItem(consentKey)||''; } catch { return; }
  let visitor='';
  const getVisitor=()=>{
    if(visitor) return visitor;
    try {
      visitor=localStorage.getItem(visitorKey)||'';
      if(!/^[0-9a-f-]{36}$/i.test(visitor)){
        visitor=crypto.randomUUID();
        localStorage.setItem(visitorKey,visitor);
      }
      return visitor;
    } catch { return ''; }
  };
  let lastSent=0;
  const send=async()=>{
    if(consent!=='yes'||document.hidden||Date.now()-lastSent<15000)return;
    const id=getVisitor();if(!id)return;
    lastSent=Date.now();
    try{
      const res=await fetch(TRACK_URL,{method:'POST',headers:{'Content-Type':'application/json'},mode:'cors',keepalive:true,body:JSON.stringify({visitor_id:id,path:location.pathname+location.search,referrer:document.referrer})});
      if(!res.ok)lastSent=0;
    }catch{lastSent=0;}
  };
  const banner=()=>{
    const el=document.createElement('aside');
    el.className='analytics-consent';
    el.setAttribute('role','dialog');
    el.setAttribute('aria-label','Настройки аналитики');
    el.innerHTML='<div><b>ТЕХНИЧЕСКАЯ АНАЛИТИКА</b><p>Мы собираем статистику посещений, IP-адрес, страницу, браузер и тип устройства. Эти данные доступны только администратору. Можно отказаться — сайт продолжит работать.</p></div><div class="analytics-consent-actions"><button type="button" data-consent="no">ОТКЛОНИТЬ</button><button type="button" data-consent="yes">РАЗРЕШИТЬ</button></div>';
    document.body.append(el);
    el.querySelectorAll('[data-consent]').forEach(b=>b.addEventListener('click',()=>{
      consent=b.dataset.consent;
      try { localStorage.setItem(consentKey,consent); } catch {}
      el.remove();
      if(consent==='yes'){send();setInterval(send,60000);}
    }));
  };
  if(consent==='yes'){send();setInterval(send,60000);}
  else if(!consent) { if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',banner,{once:true}); else banner(); }
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)send();});
})();