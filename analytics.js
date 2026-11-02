(() => {
  'use strict';
  const TRACK_URL='https://frame-lab-3wx.pages.dev/analytics/track';
  const consentKey='frame_lab_analytics_consent_v2', visitorKey='frame_lab_visitor';
  const uuid=()=>{
    if(window.crypto&&typeof crypto.randomUUID==='function')return crypto.randomUUID();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{
      const r=Math.random()*16|0;return (c==='x'?r:(r&3|8)).toString(16);
    });
  };
  let consent='',visitor='',timer=null,lastSent=0;
  try{consent=localStorage.getItem(consentKey)||'';}catch(e){console.warn('[FRAME LAB analytics] storage unavailable',e);}
  const getVisitor=()=>{
    if(visitor)return visitor;
    try{
      visitor=localStorage.getItem(visitorKey)||'';
      if(!/^[0-9a-f-]{36}$/i.test(visitor)){visitor=uuid();localStorage.setItem(visitorKey,visitor);}
    }catch(e){visitor=uuid();}
    return visitor;
  };
  const agent=()=>{
    const ua=navigator.userAgent||'';
    return {
      browser:ua.includes('Edg/')?'Edge':ua.includes('Firefox/')?'Firefox':ua.includes('Chrome/')?'Chrome':ua.includes('Safari/')?'Safari':'Other',
      os:/Windows/.test(ua)?'Windows':/Mac OS X/.test(ua)?'macOS':/Android/.test(ua)?'Android':/(iPhone|iPad|iPod)/.test(ua)?'iOS':/Linux/.test(ua)?'Linux':'Other',
      device:/(iPhone|Android.*Mobile|Mobile)/.test(ua)?'Mobile':/(iPad|Tablet)/.test(ua)?'Tablet':'Desktop'
    };
  };
  const send=async()=>{
    if(consent!=='yes'||Date.now()-lastSent<10000)return;
    lastSent=Date.now();
    const d=agent(),id=getVisitor();
    try{
      const res=await fetch(TRACK_URL,{
        method:'POST',
        mode:'cors',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({visitor_id:id,path:location.pathname+location.search,referrer:document.referrer}),
        keepalive:true
      });
      if(!res.ok){const msg=await res.text().catch(()=> '');console.error('[FRAME LAB analytics] HTTP '+res.status,msg);lastSent=0;}
      else console.info('[FRAME LAB analytics] visit recorded');
    }catch(e){console.error('[FRAME LAB analytics] request failed',e);lastSent=0;}
  };
  const start=()=>{send();if(!timer)timer=setInterval(send,60000);};
  const showBanner=()=>{
    if(!document.body||document.querySelector('.analytics-consent'))return;
    const el=document.createElement('aside');
    el.className='analytics-consent';el.setAttribute('role','dialog');el.setAttribute('aria-label','Настройки аналитики');
    el.innerHTML='<div><b>ТЕХНИЧЕСКАЯ АНАЛИТИКА</b><p>Мы собираем статистику посещений, страницы, браузера и типа устройства. Можно отказаться — сайт продолжит работать.</p></div><div class="analytics-consent-actions"><button type="button" data-consent="no">ОТКЛОНИТЬ</button><button type="button" data-consent="yes">РАЗРЕШИТЬ</button></div>';
    document.body.append(el);
    el.querySelectorAll('[data-consent]').forEach(button=>button.addEventListener('click',()=>{
      consent=button.dataset.consent;
      try{localStorage.setItem(consentKey,consent);}catch(e){}
      el.remove();
      if(consent==='yes')start();
      else if(timer){clearInterval(timer);timer=null;}
    }));
  };
  window.addEventListener('frame-lab-open-analytics',showBanner);
  const settings=document.createElement('button');
  settings.type='button';settings.textContent='НАСТРОЙКИ АНАЛИТИКИ';
  settings.setAttribute('aria-label','Открыть настройки аналитики');
  settings.style.cssText='position:fixed;z-index:999;left:12px;bottom:12px;padding:9px 11px;border:1px solid #62695a;background:#090a09;color:#c7ff42;font:9px monospace;letter-spacing:.08em;border-radius:2px;cursor:pointer;opacity:.88';
  settings.addEventListener('click',showBanner);
  const init=()=>{document.body.append(settings);if(!consent)showBanner();};
  if(consent==='yes')start();
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)send();});
})();