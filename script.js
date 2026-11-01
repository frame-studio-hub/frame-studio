
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

  // CURRENT YEAR
  const year = $("#current-year");
  if (year) year.textContent = new Date().getFullYear();

  // MOBILE MENU
  const menuButton = $(".menu");
  const mainNav = $("#main-nav");

  function closeMenu() {
    if (!menuButton || !mainNav) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Открыть меню");
    mainNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Открыть меню" : "Закрыть меню");
    mainNav?.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  $$("#main-nav a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMenu();
      closeModal();
    }
  });

  // PROJECT FILTERS
  const filterButtons = $$(".filter");
  const projects = $$(".project");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach(item => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      projects.forEach(project => {
        const matches =
          filter === "all" || project.dataset.category === filter;

        project.hidden = !matches;
      });
    });
  });

  // PROJECT DEMOS
  const demoTemplates = {
    beauty: {
      title: "ATELIER / BEAUTY",
      label: "BEAUTY STUDIO",
      heading: "Beauty<br><em>in detail.</em>",
      description: "Премиальное пространство красоты.",
      button: "ЗАПИСАТЬСЯ",
      colors: ["#e8ded1", "#9b7864"],
      text: "Откройте пространство, где внимание к деталям становится частью красоты."
    },
    auto: {
      title: "VANTA / AUTO",
      label: "PERFORMANCE STUDIO",
      heading: "MOVE<br><em>BEYOND.</em>",
      description: "Детейлинг и уход за автомобилями.",
      button: "НАШИ УСЛУГИ",
      colors: ["#151816", "#c8f36a"],
      text: "Точность, технологии и внимание к каждой детали."
    },
    cafe: {
      title: "MORNING / HOSPITALITY",
      label: "COFFEE · BAKERY",
      heading: "Slow<br><em>down.</em>",
      description: "Кофе, выпечка и хорошее настроение.",
      button: "НАШЕ МЕНЮ",
      colors: ["#e8d8bd", "#9c6843"],
      text: "Начните день с хорошего кофе и времени для себя."
    },
    architecture: {
      title: "NØR / ARCHITECTURE",
      label: "ARCHITECTURE STUDIO",
      heading: "Spaces<br><em>for living.</em>",
      description: "Архитектура, в которой есть смысл.",
      button: "СМОТРЕТЬ ПРОЕКТЫ",
      colors: ["#d9d9d2", "#65665e"],
      text: "Создаём пространства, в которых форма встречается с функцией."
    },
    fitness: {
      title: "FORM / FITNESS",
      label: "TRAINING CLUB",
      heading: "BUILT<br><em>BY YOU.</em>",
      description: "Тренировки с продуманным подходом.",
      button: "НАЧАТЬ ТРЕНИРОВКИ",
      colors: ["#d8f06e", "#171914"],
      text: "Движение, дисциплина и работа над собой."
    },
    object: {
      title: "OBJECT / E-COMMERCE",
      label: "CURATED DESIGN",
      heading: "Objects<br><em>with purpose.</em>",
      description: "Предметы, которые меняют пространство.",
      button: "СМОТРЕТЬ КОЛЛЕКЦИЮ",
      colors: ["#e4dfd5", "#776e5f"],
      text: "Подборка предметного дизайна с характером и смыслом."
    }
  };

  function createDemo(data) {
    const [background, accent] = data.colors;

    return `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${data.title}</title>
<style>
*{box-sizing:border-box}
body{margin:0;background:${background};color:#171914;font-family:Arial,sans-serif}
.page{min-height:650px;padding:28px 7%;position:relative;overflow:hidden}
.top{display:flex;justify-content:space-between;gap:15px;align-items:center;
font-size:11px;letter-spacing:2px;border-bottom:1px solid #7775;padding-bottom:20px}
.hero{min-height:470px;display:flex;flex-direction:column;justify-content:center;
position:relative;z-index:1}
h1{font-size:clamp(54px,10vw,110px);line-height:.88;letter-spacing:-.08em;
font-weight:700;margin:30px 0}
h1 em{font-family:Georgia,serif;font-weight:400}
p{font-size:15px;line-height:1.7;max-width:360px}
button{margin-top:25px;padding:16px 22px;border:0;background:${accent};
color:${background};font-weight:700;letter-spacing:1px;cursor:pointer;align-self:flex-start}
.bottom{position:absolute;bottom:22px;left:7%;right:7%;display:flex;
justify-content:space-between;font-size:10px;letter-spacing:1px}
.shape{position:absolute;width:260px;height:260px;border-radius:50%;
background:${accent};opacity:.18;right:-50px;top:30%;filter:blur(2px)}
</style>
</head>
<body>
<div class="page">
<div class="top"><b>${data.title}</b><span>${data.label}</span></div>
<div class="shape"></div>
<main class="hero">
<h1>${data.heading}</h1>
<p>${data.description}<br>${data.text}</p>
<button type="button" onclick="this.textContent='СПАСИБО ЗА ИНТЕРЕС'">${data.button} ↗</button>
</main>
<div class="bottom"><span>CONCEPT WEBSITE</span><span>DESIGNED BY FRAME LAB®</span></div>
</div>
</body>
</html>`;
  }

  // MODAL
  const modal = $("#project-modal");
  const modalTitle = $("#modal-title");
  const modalDesc = $("#modal-desc");
  const demoFrame = $("#demo-frame");
  const modalPanel = $(".modal-panel");

  function openModal(project) {
    if (!modal || !project) return;

    const category = project.dataset.demoCategory;
    const demo = demoTemplates[category];

    if (!demo) return;

    if (modalTitle) modalTitle.textContent = project.dataset.title || demo.title;
    if (modalDesc) modalDesc.textContent = project.dataset.desc || demo.description;
    if (demoFrame) demoFrame.srcdoc = createDemo(demo);

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    $(".modal-close")?.focus();
  }

  function closeModal() {
    if (!modal || !modal.classList.contains("is-open")) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (demoFrame) demoFrame.srcdoc = "";
  }

  $$(".project-open").forEach(button => {
    button.addEventListener("click", () => {
      openModal(button.closest(".project"));
    });
  });

  $$("[data-close]").forEach(element => {
    element.addEventListener("click", closeModal);
  });

  $(".modal-contact")?.addEventListener("click", () => {
    closeModal();
  });

  // SCROLL PROGRESS
  const progressBar = $("#scroll-progress-bar");

  function updateScrollProgress() {
    if (!progressBar) return;

    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress =
      scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("resize", updateScrollProgress);
  updateScrollProgress();

  // BRIEF GENERATOR
  const briefForm = $("#brief-form");
  const briefOutput = $("#brief-output");
  const briefEmpty = $("#brief-empty");
  const briefText = $("#brief-text");
  const copyButton = $("#copy-brief");
  const copyStatus = $("#copy-status");

  let generatedBrief = "";

  briefForm?.addEventListener("submit", event => {
    event.preventDefault();

    if (!briefForm.reportValidity()) return;

    const formData = new FormData(briefForm);

    const get = name =>
      String(formData.get(name) || "").trim() || "Не указано";

    generatedBrief = [
      "НОВЫЙ ПРОЕКТ ДЛЯ FRAME LAB®",
      "",
      `Тип проекта: ${get("type")}`,
      `Сфера: ${get("niche")}`,
      `Стиль: ${get("style")}`,
      `Бюджет: ${get("budget")}`,
      `Необходимые функции: ${get("functions")}`,
      `Дополнительная информация: ${get("details")}`,
      `Контакт: ${get("contact")}`,
      "",
      "Сформировано на сайте FRAME LAB."
    ].join("\n");

    if (briefText) briefText.textContent = generatedBrief;
    if (briefEmpty) briefEmpty.hidden = true;
    if (briefOutput) briefOutput.hidden = false;

    briefOutput?.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  });

  copyButton?.addEventListener("click", async () => {
    if (!generatedBrief) return;

    try {
      await navigator.clipboard.writeText(generatedBrief);

      if (copyStatus) copyStatus.textContent = "Бриф скопирован.";
      copyButton.textContent = "СКОПИРОВАНО ✓";
    } catch {
      const temporary = document.createElement("textarea");
      temporary.value = generatedBrief;
      temporary.style.position = "fixed";
      temporary.style.opacity = "0";
      document.body.appendChild(temporary);
      temporary.select();

      const copied = document.execCommand("copy");
      temporary.remove();

      if (copyStatus) {
        copyStatus.textContent = copied
          ? "Бриф скопирован."
          : "Не удалось скопировать. Выделите текст вручную.";
      }
    }
  });

  // FAQ DETAILS
  $$(".faq-list details").forEach(item => {
    item.addEventListener("toggle", () => {
      const symbol = $("summary span", item);
      if (symbol) symbol.textContent = item.open ? "−" : "+";
    });
  });

  // REVEAL ANIMATIONS
  const revealElements = $$(".section, .project, .reference-card, .step, .service");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -35px 0px"
    });

    revealElements.forEach(element => {
      element.classList.add("reveal");
      observer.observe(element);
    });
  } else {
    revealElements.forEach(element => element.classList.add("is-visible"));
  }
});

