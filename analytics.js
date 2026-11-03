(() => {
  'use strict';
  const TRACK_URL='https://frame-lab-3wx.pages.dev/analytics/track';
  const visitorId=window.crypto&&crypto.randomUUID?crypto.randomUUID():'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const r=Math.random()*16|0;return(c==='x'?r:(r&3|8)).toString(16);});
  let sent=false;
  const getGpu=()=>{
    try {
      const canvas=document.createElement('canvas');
      const gl=canvas.getContext('webgl')||canvas.getContext('experimental-webgl');
      if(!gl)return null;
      const ext=gl.getExtension('WEBGL_debug_renderer_info');
      return ext?String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)||'').slice(0,250):String(gl.getParameter(gl.RENDERER)||'').slice(0,250);
    } catch(_){return null;}
  };
  const getBattery=async()=>{
    try {
      if(!navigator.getBattery)return {};
      const b=await navigator.getBattery();
      return {battery_level:Math.round(b.level*100)/100,battery_charging:!!b.charging};
    } catch(_){return {};}
  };
  const send=async()=>{
    if(sent)return;
    sent=true;
    const battery=await getBattery();
    const payload={
      visitor_id:visitorId,
      path:location.pathname+location.search,
      referrer:document.referrer,
      screen_width:screen.width||null,
      screen_height:screen.height||null,
      language:navigator.language||navigator.languages?.[0]||null,
      timezone:Intl.DateTimeFormat().resolvedOptions().timeZone||null,
      color_scheme:matchMedia('(prefers-color-scheme: dark)').matches?'dark':matchMedia('(prefers-color-scheme: light)').matches?'light':'no-preference',
      cpu_cores:Number.isFinite(navigator.hardwareConcurrency)?navigator.hardwareConcurrency:null,
      device_memory_gb:Number.isFinite(navigator.deviceMemory)?navigator.deviceMemory:null,
      gpu_renderer:getGpu(),
      ...battery
    };
    try {
      const response=await fetch(TRACK_URL,{
        method:'POST',mode:'cors',keepalive:true,
        headers:{'Content-Type':'text/plain;charset=UTF-8'},
        body:JSON.stringify(payload)
      });
      if(!response.ok){sent=false;console.error('[FRAME LAB analytics] HTTP '+response.status);}
    } catch(error){sent=false;console.error('[FRAME LAB analytics]',error);}
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',send,{once:true});else send();
})();