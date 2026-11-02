(() => {
  'use strict';
  const SUPABASE_URL='https://mqpeealcueqjzakrcutq.supabase.co';
  const SUPABASE_KEY='sb_publishable_FkRZkn5CqQwaN9GbhxBpgg_fMSvotuF';
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
  const agent=()=>{
    const ua=navigator.userAgent||'';
    const browser=ua.includes('Edg/')?'Edge':ua.includes('Firefox/')?'Firefox':ua.includes('Chrome/')?'Chrome':ua.includes('Safari/')?'Safari':'Other';
    const os=/Windows/.test(ua)?'Windows':/Mac OS X/.test(ua)?'macOS':/Android/.test(ua)?'Android':/(iPhone|iPad|iPod)/.test(ua)?'iOS':/Linux/.test(ua)?'Linux':'Other';
    const device=/(iPhone|Android.*Mobile|Mobile)/.test(ua)?'Mobile':/(iPad|Tablet)/.test(ua)?'Tablet':'Desktop';
    return {browser,os,device};
  };
  let lastSent=0;
  const send=async()=>{
    if(consent!=='yes'||document.hidden||Date.now()-lastSent<15000)return;
    const id=getVisitor();if(!id)return;
    lastSent=Date.now();
    const d=agent();
    try{
      const res=await fetch(SUPABASE_URL+'/rest/v1/rpc/track_site_visit',{
        method:'POST',
        headers:{'Content-Type':'application/json','apikey':SUPABASE_KEY,'Authorization':'Bearer '+SUPABASE_KEY},
        body:JSON.stringify({p_visitor_id:id,p_page_path:location.pathname+location.search,p_referrer:document.referrer,p_ip_address:'',p_user_agent:navigator.userAgent||'',p_browser:d.browser,p_operating_system:d.os,p_device_type:d.device}),
        keepalive:true
      });
      if(!res.ok)lastSent=0;
    }catch{lastSent=0;}
  };
  const banner=()=>{
    const el=document.createElement('aside');
    el.className='analytics-consent';
    el.setAttribute('role','dialog');
    el.setAttribute('aria-label','Настройки аналитики');
    el.innerHTML='<div><b>ТЕХНИЧЕСКАЯ АНАЛИТИКА</b><p>Мы собираем статистику посещений, страницы, браузера и типа устройства. Можно отказаться — сайт продолжит работать.</p></div><div class="analytics-consent-actions"><button type="button" data-consent="no">ОТКЛОНИТЬ</button><button type="button" data-consent="yes">РАЗРЕШИТЬ</button></div>';
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