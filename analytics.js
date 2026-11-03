(() => {
  'use strict';
  const TRACK_URL = 'https://frame-lab-3wx.pages.dev/analytics/track';
  const eventId = window.crypto?.randomUUID
    ? window.crypto.randomUUID()
    : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        return c === 'x' ? r : (r & 3 | 8).toString(16);
      });

  const getGpu = () => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) return null;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      return String(gl.getParameter(ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER) || '').slice(0, 250);
    } catch (_) { return null; }
  };

  const getBattery = async () => {
    try {
      if (!navigator.getBattery) return {};
      const battery = await navigator.getBattery();
      return {
        battery_level: Math.round(battery.level * 100) / 100,
        battery_charging: !!battery.charging
      };
    } catch (_) { return {}; }
  };

  const send = async () => {
    const battery = await getBattery();
    const payload = {
      visitor_id: eventId,
      path: location.pathname,
      referrer: (() => {
        try { return document.referrer ? new URL(document.referrer).origin : ''; }
        catch (_) { return ''; }
      })(),
      screen_width: window.innerWidth || null,
      screen_height: window.innerHeight || null,
      language: navigator.language || navigator.languages?.[0] || null,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
      color_scheme: matchMedia('(prefers-color-scheme: dark)').matches ? 'dark'
        : matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'no-preference',
      cpu_cores: Number.isFinite(navigator.hardwareConcurrency) ? navigator.hardwareConcurrency : null,
      device_memory_gb: Number.isFinite(navigator.deviceMemory) ? navigator.deviceMemory : null,
      gpu_renderer: getGpu(),
      ...battery
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