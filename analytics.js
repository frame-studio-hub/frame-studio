(() => {
  'use strict';
  const SUPABASE_URL='https://mqpeealcueqjzakrcutq.supabase.co';
  const SUPABASE_KEY='sb_publishable_FkRZkn5CqQwaN9GbhxBpgg_fMSvotuF';
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
      const res=await fetch(SUPABASE_URL+'/rest/v1/rpc/track_site_visit',{
        method:'POST',
        headers:{'Content-Type':'application/json','apikey':SUPABASE_KEY,'Authorization':'Bearer '+SUPABASE_KEY,'Prefer':'return=minimal'},
        body:JSON.stringify({p_visitor_id:id,p_page_path:location.pathname+location.search,p_referrer:document.referrer,p_ip_address:'',p_user_agent:navigator.userAgent||'',p_browser:d.browser,p_operating_system:d.os,p_device_type:d.device}),
        keepalive:true
      });
      if(!res.ok){const msg=await res.text().catch(()=> '');console.error('[FRAME LAB analytics] HTTP '+res.status,msg);lastSent=0;}
      else console.info('[FRAME LAB analytics] visit recorded');
    }catch(e){console.error('[FRAME LAB analytics] request failed',e);lastSent=0;}
  };
  const start=()=>{send();if(!timer)timer=setInterval(send,60000);};
  const showBanner=()=>{
    if(consent||!document.body)return;
    const el=document.createElement('aside');
    el.className='analytics-consent';el.setAttribute('role','dialog');el.setAttribute('aria-label','Настройки аналитики');
    el.innerHTML='<div><b>ТЕХНИЧЕСКАЯ АНАЛИТИКА</b><p>Мы собираем статистику посещений, страницы, браузера и типа устройства. Можно отказаться — сайт продолжит работать.</p></div><div class="analytics-consent-actions"><button type="button" data-consent="no">ОТКЛОНИТЬ</button><button type="button" data-consent="yes">РАЗРЕШИТЬ</button></div>';
    document.body.append(el);
    el.querySelectorAll('[data-consent]').forEach(button=>button.addEventListener('click',()=>{
      consent=button.dataset.consent;
      try{localStorage.setItem(consentKey,consent);}catch(e){}
      el.remove();
      if(consent==='yes')start();
    }));
  };
  if(consent==='yes')start();
  else if(!consent){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',showBanner,{once:true});else showBanner();}
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)send();});
})();