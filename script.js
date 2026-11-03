(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches;



  // FRAME LAB sound design. Enabled by default; browser audio unlocks on first user gesture.
  const soundToggle = $('.sound-toggle');
  let soundEnabled = true, soundContext = null, lastUiSound = 0;
  if (soundToggle) {
    soundToggle.setAttribute('aria-pressed', 'true');
    soundToggle.setAttribute('aria-label', 'Выключить звуковые эффекты');
    const state = $('span', soundToggle); if (state) state.textContent = 'ON';
  }
  const ensureAudio = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      soundContext ||= new AudioCtx();
      if (soundContext.state === 'suspended') soundContext.resume();
      return soundContext;
    } catch (_) { return null; }
  };
  const tone = (ctx, frequency, delay, duration, volume, type='sine', endFrequency=null) => {
    const osc=ctx.createOscillator(), gain=ctx.createGain();
    const t=ctx.currentTime+delay;
    osc.type=type;
    osc.frequency.setValueAtTime(frequency,t);
    if(endFrequency) osc.frequency.exponentialRampToValueAtTime(Math.max(1,endFrequency),t+duration);
    gain.gain.setValueAtTime(.0001,t);
    gain.gain.exponentialRampToValueAtTime(Math.max(.0002,volume),t+.009);
    gain.gain.exponentialRampToValueAtTime(.0001,t+duration);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(t); osc.stop(t+duration+.015);
  };
  const playUiSound = (kind='tap') => {
    if (!soundEnabled) return;
    const now=performance.now();
    if(now-lastUiSound<65) return;
    lastUiSound=now;
    const ctx=ensureAudio(); if(!ctx) return;
    // Quiet, short, original synthesized sounds — no downloaded audio or autoplay.
    if(kind==='open') {
      tone(ctx,440,0,.12,.018,'sine',660);
      tone(ctx,880,.045,.11,.012,'sine',1175);
    } else if(kind==='close') {
      tone(ctx,660,0,.11,.014,'sine',440);
      tone(ctx,520,.035,.09,.009,'sine',350);
    } else if(kind==='select') {
      tone(ctx,520,0,.075,.014,'triangle',740);
    } else if(kind==='success') {
      tone(ctx,523,0,.13,.018,'sine',659);
      tone(ctx,659,.10,.14,.018,'sine',784);
      tone(ctx,784,.20,.19,.016,'sine',1046);
    } else if(kind==='send') {
      tone(ctx,390,0,.09,.015,'triangle',520);
      tone(ctx,780,.07,.12,.012,'sine',980);
    } else {
      tone(ctx,kind==='soft'?280:360,0,.055,kind==='soft'?.007:.012,'sine',kind==='soft'?250:430);
    }
  };
  soundToggle?.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundToggle.setAttribute('aria-pressed', String(soundEnabled));
    soundToggle.setAttribute('aria-label', soundEnabled ? 'Выключить звуковые эффекты' : 'Включить звуковые эффекты');
    const state = $('span', soundToggle); if (state) state.textContent = soundEnabled ? 'ON' : 'OFF';
    if(soundEnabled) playUiSound('open');
  });
  // First touch/click unlocks the Web Audio context. This is required by Android Chrome.
  document.addEventListener('pointerdown', event => {
    if(!soundEnabled) return;
    const target=event.target.closest('button,a,.project-card,.choice-card,summary,input,select');
    if(!target) return;
    const kind=target===soundToggle?'soft':
      target.classList.contains('menu-toggle')?'open':
      target.classList.contains('project-card')?'select':
      target.classList.contains('sound-toggle')?'soft':
      target.matches('input,select')?'select':'tap';
    playUiSound(kind);
  }, {capture:true,passive:true});
  document.addEventListener('click', event => {
    const target=event.target.closest('.service-item,summary,.project-card');
    if(!target || !soundEnabled) return;
    if(target.matches('summary')) playUiSound('open');
    else if(target.classList.contains('service-item')) playUiSound('select');
  }, {passive:true});
  document.addEventListener('submit', event => {
    if(!soundEnabled) return;
    playUiSound('send');
  }, true);

  // Touch parallax for the hero sculpture: no device-orientation permission or sensor polling.
  const heroStage = $('.hero-stage');
  if (heroStage && coarsePointer && !reduceMotion) {
    let touchFrame = 0;
    heroStage.addEventListener('pointermove', event => {
      if (event.pointerType !== 'touch') return;
      const rect = heroStage.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - .5) * 2));
      const y = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - .5) * 2));
      cancelAnimationFrame(touchFrame);
      touchFrame = requestAnimationFrame(() => {
        heroStage.style.setProperty('--touch-x', x.toFixed(2));
        heroStage.style.setProperty('--touch-y', y.toFixed(2));
      });
    }, { passive:true });
    heroStage.addEventListener('pointerleave', () => {
      heroStage.style.setProperty('--touch-x', '0'); heroStage.style.setProperty('--touch-y', '0');
    }, { passive:true });
  }

  // Scroll progress and soft cursor light.
  const progress = $('.scroll-progress span');
  const glow = $('.cursor-glow');
  if (!coarsePointer && !reduceMotion && glow) {
    window.addEventListener('pointermove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    }, { passive: true });
  }
  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener('scroll', updateScroll, { passive: true }); updateScroll();

  // Reveal on entry.
  const revealEls = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    // Enable hidden/reveal styling only after the observer is ready.
    document.documentElement.classList.add('js');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
    }), { threshold: .08, rootMargin: '0px 0px 80px 0px' });
    revealEls.forEach(el => observer.observe(el));
    // Fail open on mobile browsers where intersection callbacks can stall.
    window.setTimeout(() => revealEls.forEach(el => el.classList.add('in-view')), 2600);
  } else revealEls.forEach(el => el.classList.add('in-view'));

  // Header menu.
  const menuButton = $('.menu-toggle'), mobileMenu = $('.mobile-menu');
  const closeMenu = () => {
    menuButton?.setAttribute('aria-expanded', 'false'); menuButton?.setAttribute('aria-label', 'Открыть меню');
    mobileMenu?.classList.remove('open'); mobileMenu?.setAttribute('aria-hidden', 'true'); document.body.classList.remove('menu-open');
  };
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    mobileMenu.classList.toggle('open', open); mobileMenu.setAttribute('aria-hidden', String(!open)); document.body.classList.toggle('menu-open', open);
  });
  $$('.mobile-menu a').forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('keydown', e => { if (e.key === 'Escape') { closeMenu(); closeProjectModal(); } });

  // Project filters and live search work together.
  const filterButtons = $$('.filter-btn'), projectCards = $$('.project-card');
  const projectSearch = $('#project-search'), projectSearchEmpty = $('#project-search-empty');
  let activeProjectFilter = 'all';
  const updateProjectResults = () => {
    const query = (projectSearch?.value || '').trim().toLocaleLowerCase('ru');
    let visible = 0;
    projectCards.forEach(card => {
      const matchesCategory = activeProjectFilter === 'all' || card.dataset.category === activeProjectFilter;
      const matchesText = !query || card.textContent.toLocaleLowerCase('ru').includes(query);
      const show = matchesCategory && matchesText;
      card.classList.toggle('hidden', !show);
      card.classList.toggle('search-hidden', !show);
      if (show) visible++;
    });
    if (projectSearchEmpty) projectSearchEmpty.hidden = visible !== 0;
  };
  filterButtons.forEach(button => button.addEventListener('click', () => {
    activeProjectFilter = button.dataset.filter;
    filterButtons.forEach(b => { const active = b === button; b.classList.toggle('active', active); b.setAttribute('aria-pressed', String(active)); });
    updateProjectResults();
  }));
  projectSearch?.addEventListener('input', updateProjectResults);

  // Project detail modal.
  const projectData = {
    '01': { title: 'AETHER®', category: 'АЙДЕНТИКА / ФИРМЕННАЯ СИСТЕМА', description: 'Исследование визуальной идентичности на пересечении формы, материи и света. Типографика соединяется с тактильным миром отражающих поверхностей.' },
    '02': { title: 'NØRD STUDIO', category: 'ВЕБ-ДИЗАЙН / ЦИФРОВОЙ ОПЫТ', description: 'Концепция сайта студии предметного дизайна. Выразительная типографика, редакционная подача и спокойный минималистичный интерфейс.' },
    '03': { title: 'VANTA OBJECTS', category: 'ЦИФРОВОЙ ПРОДУКТ / АРТ-ДИРЕКШН', description: 'Концепция цифрового бренда объектов: орбитальная геометрия, тёмные поверхности и точная модульная айдентика.' },
    '04': { title: 'FLUX CAMPAIGN', category: 'ВИЗУАЛЬНЫЙ КОНТЕНТ / КАМПАНИЯ', description: 'Эксперимент с визуальной кампанией, построенной на текучих формах, смене материалов и контрастном художественном направлении.' },
    '05': { title: 'OBJECT / 05', category: 'АРТ-ДИРЕКШН / АЙДЕНТИКА', description: 'Исследование контраста: скульптурная геометрия, сдержанные поверхности и гибкий графический язык.' },
    '06': { title: 'SØL RETREAT', category: 'ВЕБ-ДИЗАЙН / ЦИФРОВОЙ ОПЫТ', description: 'Концепция цифрового пространства для отдыха: спокойный ритм, мягкая палитра и иммерсивная редакционная композиция.' },
    '07': { title: 'ÉLAN BEAUTY', category: 'ВЕБ-ДИЗАЙН / BEAUTY-СФЕРА', description: 'Концепция сайта для beauty-студии: презентация услуг и мастеров, атмосфера бренда и короткий путь к онлайн-записи.' },
    '08': { title: 'FORMA SKIN', category: 'ВЕБ-ДИЗАЙН / КОСМЕТОЛОГИЯ', description: 'Концепция сайта косметологической студии: понятная презентация процедур, экспертный подход, ответы на вопросы и удобная запись на консультацию.' },
    '09': { title: 'MESA', category: 'ВЕБ-ДИЗАЙН / РЕСТОРАН', description: 'Концепция сайта ресторана: меню, атмосфера, информация о пространстве и быстрый сценарий бронирования столика.' }
  };
  const modal = $('#project-modal'); let lastFocused = null;
  function openProjectModal(id) {
    const item = projectData[id]; if (!item || !modal) return;
    lastFocused = document.activeElement;
    $('#modal-title').textContent = item.title; $('#modal-kicker').textContent = `CONCEPT PROJECT / ${id}`;
    $('#modal-category').textContent = item.category; $('#modal-description').textContent = item.description;
    const detailLink = $('#modal-project-link'); if (detailLink) { detailLink.href = `pages/projects/project.html?id=${encodeURIComponent(id)}`; detailLink.removeAttribute('target'); detailLink.removeAttribute('rel'); detailLink.textContent = 'СМОТРЕТЬ ПРОЕКТ ↗'; }
    modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; $('.modal-close').focus();
  }
  function closeProjectModal() {
    if (!modal?.classList.contains('open')) return;
    modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = '';
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }
  window.closeProjectModal = closeProjectModal;
  projectCards.forEach(card => {
    card.addEventListener('click', () => openProjectModal(card.dataset.project));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProjectModal(card.dataset.project); } });
  });
  $$('[data-close-modal]').forEach(el => el.addEventListener('click', closeProjectModal));

  // Process step indicator.
  const steps = $$('.process-step'), lineFill = $('.process-line span');
  steps.forEach(step => step.addEventListener('click', () => {
    steps.forEach(s => s.classList.toggle('active', s === step));
    if (lineFill) lineFill.style.top = `${Number(step.dataset.step) * 20}%`;
  }));

  // Magnetic hover on larger pointers.
  if (!coarsePointer && !reduceMotion) {
    $$('.magnetic').forEach(el => {
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect(), dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${dx * .08}px, ${dy * .12}px)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }

  // Ambient canvas: subtle depth particles, low-cost and DPR-capped.
  const ambient = $('#ambient-canvas'), aCtx = ambient?.getContext('2d');
  let ambientW = 0, ambientH = 0, particles = [], ambientFrame = 0;
  function resizeAmbient() {
    if (!ambient || !aCtx) return;
    const dpr = Math.min(devicePixelRatio || 1, 1.5); ambientW = innerWidth; ambientH = innerHeight;
    ambient.width = Math.round(ambientW * dpr); ambient.height = Math.round(ambientH * dpr); aCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(65, Math.max(24, Math.floor(ambientW / 20)));
    particles = Array.from({ length: count }, () => ({ x: Math.random() * ambientW, y: Math.random() * ambientH, r: Math.random() * 1.3 + .25, vx: (Math.random() - .5) * .12, vy: (Math.random() - .5) * .1, alpha: Math.random() * .25 + .05 }));
  }
  function drawAmbient() {
    if (!aCtx) return;
    aCtx.clearRect(0, 0, ambientW, ambientH);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = ambientW; if (p.x > ambientW) p.x = 0;
      if (p.y < 0) p.y = ambientH; if (p.y > ambientH) p.y = 0;
      aCtx.beginPath(); aCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2); aCtx.fillStyle = `rgba(199,255,66,${p.alpha})`; aCtx.fill();
    });
    // A single subtle particle frame is enough; avoid a permanent animation loop.
  }
  resizeAmbient(); drawAmbient();
  window.addEventListener('resize', () => { resizeAmbient(); drawAmbient(); }, { passive: true });

  // Creative Lab interactive field.
  const labCanvas = $('#lab-canvas'), labCtx = labCanvas?.getContext('2d'), labVisual = $('#lab-visual');
  const modeButton = $('#lab-mode'), resetButton = $('#lab-reset'), labState = $('#lab-state');
  let labW = 0, labH = 0, labPoints = [], labMode = 0, labPointer = { x: .5, y: .5, active: false }, labRaf = 0;
  const modes = ['ORBITAL', 'FIELD', 'WAVE'];
  function resizeLab() {
    if (!labCanvas || !labCtx || !labVisual) return;
    const r = labVisual.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 1.5);
    labW = r.width; labH = r.height; labCanvas.width = Math.round(labW * dpr); labCanvas.height = Math.round(labH * dpr); labCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(180, Math.max(90, Math.floor(labW * labH / 1500)));
    labPoints = Array.from({ length: n }, (_, i) => ({ a: Math.random() * Math.PI * 2, radius: .12 + Math.random() * .38, speed: (Math.random() * .002 + .0004) * (i % 2 ? 1 : -1), size: Math.random() * 1.6 + .4, phase: Math.random() * 8 }));
  }
  function drawLab(time = 0) {
    if (!labCtx) return;
    labCtx.clearRect(0, 0, labW, labH);
    const cx = labW * (.5 + (labPointer.x - .5) * .09), cy = labH * (.5 + (labPointer.y - .5) * .09);
    const pulse = Math.sin(time * .0005) * 4;
    labCtx.save(); labCtx.translate(cx, cy);
    labPoints.forEach((p, i) => {
      if (!reduceMotion) p.a += p.speed;
      let x, y;
      if (labMode === 0) { const rr = p.radius * Math.min(labW, labH) + pulse; x = Math.cos(p.a) * rr; y = Math.sin(p.a * 1.08) * rr * .72; }
      else if (labMode === 1) { const rr = p.radius * Math.min(labW, labH); x = Math.cos(p.a * 2 + p.phase) * rr; y = Math.sin(p.a * 3) * rr * .6; }
      else { const xx = (i / labPoints.length - .5) * labW; x = xx; y = Math.sin(xx * .025 + time * .001 + p.phase) * (labH * .22) + Math.cos(p.a) * 28; }
      const dx = x - (labPointer.x - .5) * labW * .45, dy = y - (labPointer.y - .5) * labH * .45, dist = Math.hypot(dx, dy);
      if (labPointer.active && dist < 90) { x += dx / (dist || 1) * (90 - dist) * .25; y += dy / (dist || 1) * (90 - dist) * .25; }
      labCtx.beginPath(); labCtx.arc(x, y, p.size, 0, Math.PI * 2); labCtx.fillStyle = `rgba(199,255,66,${.25 + .45 * (1 - p.radius)})`; labCtx.fill();
      if (i % 9 === 0) { labCtx.beginPath(); labCtx.moveTo(x, y); labCtx.lineTo(x * .72, y * .72); labCtx.strokeStyle = 'rgba(199,255,66,.09)'; labCtx.lineWidth = .6; labCtx.stroke(); }
    });
    labCtx.restore();
    if (!reduceMotion && !coarsePointer) labRaf = requestAnimationFrame(drawLab);
  }
  if (labVisual) {
    labVisual.addEventListener('pointermove', e => { const r = labVisual.getBoundingClientRect(); labPointer = { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height, active: true }; });
    labVisual.addEventListener('pointerleave', () => { labPointer.active = false; });
    modeButton?.addEventListener('click', () => { labMode = (labMode + 1) % modes.length; if (labState) labState.textContent = `FIELD: ${modes[labMode]}`; if (reduceMotion) drawLab(0); });
    resetButton?.addEventListener('click', () => { labMode = 0; labPointer = { x: .5, y: .5, active: false }; if (labState) labState.textContent = 'FIELD: ORBITAL'; resizeLab(); if (reduceMotion) drawLab(0); });
    resizeLab(); if (reduceMotion || coarsePointer) drawLab(0); else drawLab();
    if ('ResizeObserver' in window) new ResizeObserver(resizeLab).observe(labVisual); else window.addEventListener('resize', resizeLab, { passive: true });
  }
  // Guided project planner: creates a client-controlled brief (no backend or auto-send).
  const planner = $('#project-planner');
  if (planner) {
    const plannerSteps = $$('.planner-step', planner);
    const stepLabel = $('#planner-step-label');
    const progressFill = $('#planner-progress-fill');
    const resultPanel = $('#planner-result');
    const briefOutput = $('#brief-output');
    let plannerIndex = 0;
    const stepNames = ['ЧТО НУЖНО СОЗДАТЬ?', 'НЕМНОГО О ЗАДАЧЕ', 'КОНТАКТЫ И БЮДЖЕТ'];
    const showPlannerStep = index => {
      plannerIndex = Math.max(0, Math.min(2, index));
      plannerSteps.forEach((step, i) => { step.hidden = i !== plannerIndex; step.classList.toggle('active', i === plannerIndex); });
      resultPanel.hidden = true;
      stepLabel.textContent = `ШАГ 0${plannerIndex + 1} / 03 — ${stepNames[plannerIndex]}`;
      progressFill.style.width = `${(plannerIndex + 1) / 3 * 100}%`;
    };
    const fieldValue = name => {
      const field = planner.elements.namedItem(name);
      if (!field) return 'Не указано';
      if (field instanceof RadioNodeList) return field.value || 'Не выбрано';
      return field.value.trim() || 'Не указано';
    };
    $$('[data-next]', planner).forEach(button => button.addEventListener('click', () => {
      if (plannerIndex === 0 && !planner.querySelector('input[name="service"]:checked')) {
        planner.querySelector('.choice-grid').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
        planner.querySelector('.choice-grid').classList.add('needs-choice');
        setTimeout(() => planner.querySelector('.choice-grid')?.classList.remove('needs-choice'), 900);
        return;
      }
      showPlannerStep(plannerIndex + 1);
      $('#start').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }));
    $$('[data-back]', planner).forEach(button => button.addEventListener('click', () => showPlannerStep(plannerIndex - 1)));
    planner.addEventListener('submit', async event => {
      event.preventDefault();
      if (!planner.reportValidity()) return;
      const lines = [
        'ЗАЯВКА В FRAME LAB',
        '────────────────────────',
        `Направление: ${fieldValue('service')}`,
        `Предварительный состав: ${{'Сайт под ключ':'структура, дизайн, адаптивная разработка и запуск — точный состав согласуем после обсуждения','Лендинг':'одна продающая страница, структура, дизайн и адаптивная разработка','Интернет-магазин':'каталог, карточки товаров, сценарий заказа и интерфейс магазина','Дизайн интерфейса':'структура экранов, пользовательские сценарии и дизайн-макеты',
        'Дизайн сайта':'структура страниц, визуальная концепция и адаптивные дизайн-макеты без разработки','Фирменный стиль':'визуальное направление, логотип и базовые правила использования — состав уточним','Редизайн':'аудит текущего решения, обновление структуры и визуального языка','Пока не знаю':'поможем определить подходящий формат после разговора'}[fieldValue('service')] || 'Определим вместе после знакомства с задачей'}`,
        `Бизнес: ${fieldValue('business')}`,
        `Цель: ${fieldValue('goal')}`,
        `Желаемый срок: ${fieldValue('deadline')}`,
        `Материалы: ${fieldValue('materials')}`,
        `Ссылка / референс: ${fieldValue('reference')}`,
        `Дополнительно: ${fieldValue('details')}`,
        `Имя: ${fieldValue('client')}`,
        `Контакт: ${fieldValue('contact')}`,
        `Бюджет: ${fieldValue('budget')}`,
        '────────────────────────',
        'Собрано на сайте frame-lab.'
      ];
      briefOutput.textContent = lines.join('\n');
      plannerSteps.forEach(step => { step.hidden = true; });
      resultPanel.hidden = false;
      stepLabel.textContent = 'ГОТОВО / БРИФ СФОРМИРОВАН';
      progressFill.style.width = '100%';
      resultPanel.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });

      // Save the brief before telling the visitor that the request was sent.
      const submitButton = planner.querySelector('button[type="submit"]');
      const status = $('#copy-status');
      const resultMessage = $('#planner-result p');
      if (submitButton) { submitButton.disabled = true; submitButton.textContent = 'ОТПРАВЛЯЕМ…'; }
      if (status) { status.textContent = 'Отправляем заявку в FRAME LAB…'; status.classList.remove('is-error'); }
      try {
        const payload = Object.fromEntries(new FormData(planner).entries());
        payload.brief = lines.join('\n');
        const response = await fetch('https://frame-lab-3wx.pages.dev/public/requests', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data.error || `Ошибка сервера (${response.status})`);
        if (resultMessage) resultMessage.textContent = 'Заявка успешно сохранена в FRAME LAB. Мы свяжемся с вами по указанному контакту.';
        if (status) status.textContent = 'Заявка сохранена. Можете скопировать бриф себе.';
      } catch (error) {
        if (resultMessage) resultMessage.textContent = 'Не удалось отправить заявку автоматически. Скопируйте бриф и отправьте его нам в Instagram.';
        if (status) { status.textContent = 'Ошибка отправки: ' + error.message + '. Бриф можно скопировать и отправить вручную.'; status.classList.add('is-error'); }
        console.error('[FRAME LAB request]', error);
      } finally {
        if (submitButton) { submitButton.disabled = false; submitButton.textContent = 'СОБРАТЬ БРИФ'; }
      }
    });
    $('#copy-brief')?.addEventListener('click', async () => {
      const text = briefOutput.textContent;
      const status = $('#copy-status');
      try {
        if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
        else {
          const temp = document.createElement('textarea'); temp.value = text; temp.style.position = 'fixed'; temp.style.opacity = '0';
          document.body.appendChild(temp); temp.select();
          if (!document.execCommand('copy')) throw new Error('copy unavailable');
          temp.remove();
        }
        status.textContent = 'Бриф скопирован. Откройте Instagram и вставьте его в сообщение.';
      } catch (_) { status.textContent = 'Не удалось скопировать автоматически. Выделите текст выше и скопируйте его вручную.'; }
    });
    $('#restart-brief')?.addEventListener('click', () => {
      planner.reset(); showPlannerStep(0);
      $('#start').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    });
    // Service rows become shortcuts into the brief, preselecting the closest service.
    const serviceMap = ['Фирменный стиль', 'Дизайн сайта', 'Сайт под ключ', 'Пока не знаю', 'Пока не знаю', 'Пока не знаю'];
    $$('.service-item').forEach((item, index) => {
      const link = document.createElement('a'); link.className = 'service-brief-link'; link.href = '#start';
      link.innerHTML = 'ОБСУДИТЬ ЭТУ УСЛУГУ <span aria-hidden="true">↗</span>';
      link.addEventListener('click', () => {
        const target = [...planner.querySelectorAll('input[name="service"]')].find(input => input.value === serviceMap[index]);
        if (target) target.checked = true;
        showPlannerStep(0);
      });
      const main = $('.service-main', item); if (main) main.appendChild(link);
    });
  }

  $('#year').textContent = new Date().getFullYear();
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(ambientFrame); cancelAnimationFrame(labRaf); }
    else if (!reduceMotion && !coarsePointer && labCtx) drawLab();
  });
})();
