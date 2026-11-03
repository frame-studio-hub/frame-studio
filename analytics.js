(() => {
  'use strict';
  const TRACK_URL = 'https://frame-lab-3wx.pages.dev/analytics/track';
  // One-time random event ID: not persisted and not reused across visits.
  const eventId = window.crypto?.randomUUID
    ? window.crypto.randomUUID()
    : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        return (c === 'x' ? r : (r & 3 | 8)).toString(16);
      });
  const send = async () => {
    const payload = {
      visitor_id: eventId,
      path: location.pathname,
      referrer: (() => {
        try { return document.referrer ? new URL(document.referrer).origin : ''; }
        catch (_) { return ''; }
      })(),
      screen_width: window.innerWidth || null,
      screen_height: window.innerHeight || null
    };
    try {
      const response = await fetch(TRACK_URL, {
        method: 'POST', mode: 'cors', keepalive: true,
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) console.error('[FRAME LAB analytics] HTTP ' + response.status);
    } catch (error) {
      console.error('[FRAME LAB analytics]', error);
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', send, { once: true });
  else send();
})();
