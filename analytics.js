(() => {
  'use strict';
  const TRACK_URL='https://frame-lab-3wx.pages.dev/analytics/track';
  // Per-page random ID only: no persistent visitor identifier and no consent popup.
  const visitorId=window.crypto&&crypto.randomUUID?crypto.randomUUID():'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const r=Math.random()*16|0;return(c==='x'?r:(r&3|8)).toString(16);});
  let sent=false;
  const send=async()=>{
    if(sent)return;
    sent=true;
    try{
      const response=await fetch(TRACK_URL,{
        method:'POST',mode:'cors',keepalive:true,
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({visitor_id:visitorId,path:location.pathname+location.search,referrer:document.referrer})
      });
      if(!response.ok){sent=false;console.error('[FRAME LAB analytics] HTTP '+response.status);}
      else console.info('[FRAME LAB analytics] anonymous page view recorded');
    }catch(error){sent=false;console.error('[FRAME LAB analytics]',error);}
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',send,{once:true});else send();
})();