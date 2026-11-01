"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  // YEAR
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  // MOBILE MENU
  const menuToggle = $("#menu-toggle");
  const nav = $("#nav");

  function closeMenu() {
    menuToggle?.classList.remove("active");
    nav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Открыть меню");
    document.body.classList.remove("menu-open");
  }

  menuToggle?.addEventListener("click", () => {
    const open = !nav.classList.contains("open");

    nav.classList.toggle("open", open);
    menuToggle.classList.toggle("active", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
    document.body.classList.toggle("menu-open", open);
  });

  $$("#nav a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // SCROLL PROGRESS
  const progressBar = $("#progress-bar");

  function updateProgress() {
    if (!progressBar) return;

    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = maxScroll > 0
      ? (window.scrollY / maxScroll) * 100
      : 0;

    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  // PROJECT FILTERS
  const filters = $$(".filter");
  const projects = $$(".project");

  filters.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.filter;

      filters.forEach(filter => {
        const active = filter === button;
        filter.classList.toggle("active", active);
        filter.setAttribute("aria-pressed", String(active));
      });

      projects.forEach(project => {
        project.hidden =
          category !== "all" &&
          project.dataset.category !== category;
      });
    });
  });

  // PROJECT CONTENT
  const concepts = {
    beauty: {
      title: "ATELIER — Beauty studio",
      description: "Концепция цифрового пространства для премиальной студии красоты.",
      label: "BEAUTY / BRAND",
      background: "#e8ded1",
      foreground: "#30271f",
      accent: "#9b7864",
      heading: "Beauty in detail."
    },

    auto: {
      title: "VANTA — Automotive",
      description: "Концепция сайта для автомобильного детейлинга и ухода за автомобилями.",
      label: "AUTOMOTIVE",
      background: "#151816",
      foreground: "#f1f1eb",
      accent: "#c8f36a",
      heading: "NO LIMITS."
    },

    cafe: {
      title: "MORNING — Coffee & bakery",
      description: "Концепция сайта кофейни с акцентом на атмосферу и визуальную подачу.",
      label: "HOSPITALITY",
      background: "#e8d8bd",
      foreground: "#33261b",
      accent: "#9c6843",
      heading: "Slow down."
    },

    architecture: {
      title: "NØR — Architecture",
      description: "Концепция цифрового портфолио архитектурной студии.",
      label: "ARCHITECTURE",
      background: "#d9d9d2",
      foreground: "#292a26",
      accent: "#65665e",
      heading: "Space to live."
    },

    fitness: {
      title: "FORM — Training club",
      description: "Концепция сайта фитнес-клуба с динамичной визуальной системой.",
      label: "FITNESS",
      background: "#d8f06e",
      foreground: "#171914",
      accent: "#171914",
      heading: "Built by you."
    },

    object: {
      title: "OBJECT — Design store",
      description: "Концепция интернет-магазина предметного дизайна.",
      label: "E-COMMERCE",
      background: "#e4dfd5",
      foreground: "#292820",
      accent: "#776e5f",
      heading: "Objects with purpose."
    }
  };

  // PROJECT MODAL
  const modal = $("#project-modal");
  const modalTitle = $("#modal-title");
  const modalDescription = $("#modal-description");
  const modalPreview = $("#modal-preview");
  const modalBrief = $("#modal-brief");

  function openProject(project) {
    const data = concepts[project.dataset.demo];

    if (!data || !modal) return;

    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;

    modalPreview.innerHTML = `
      <div class="concept-window" style="
        --concept-bg:${data.background};
        --concept-fg:${data.foreground};
        --concept-accent:${data.accent};
      ">
        <div class="concept-top">
          <strong>${data.label}</strong>
          <span>CONCEPT WEBSITE</span>
        </div>
        <div class="concept-main">
          <span>FRAME LAB® PRESENTS</span>
          <h3>${data.heading}</h3>
          <div class="concept-line"></div>
          <p>Digital experience / Creative direction / Web design</p>
        </div>
        <div class="concept-bottom">
          <span>DESIGNED WITH PURPOSE</span>
          <span>01 — 06</span>
        </div>
      </div>
    `;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modalBrief?.setAttribute("href", "#brief");
    $(".modal-close")?.focus();
  }

  function closeModal() {
    if (!modal) return;

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  $$(".project-open").forEach(button => {
    button.addEventListener("click", () => {
      openProject(button.closest(".project"));
    });
  });

  $$("[data-close]").forEach(element => {
    element.addEventListener("click", closeModal);
  });

  modalBrief?.addEventListener("click", closeModal);

  // KEYBOARD
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMenu();
      closeModal();
    }
  });

  // CALCULATOR
  const calcType = $("#calc-type");
  const calcDesign = $("#calc-design");
  const calcFeatures = $("#calc-features");
  const calcButton = $("#calculate-button");
  const calcResult = $("#calc-result");

  calcButton?.addEventListener("click", () => {
    const base = Number(calcType?.value || 0);
    const multiplier = Number(calcDesign?.value || 1);
    const extra = Number(calcFeatures?.value || 0);

    const total = Math.round(base * multiplier + extra);
    const min = Math.round(total * 0.9);
    const max = Math.round(total * 1.1);

    if (calcResult) {
      calcResult.textContent = `$${min}–$${max}`;
      calcResult.classList.remove("result-pop");
      void calcResult.offsetWidth;
      calcResult.classList.add("result-pop");
    }
  });

  // BRIEF GENERATOR
  const briefForm = $("#brief-form");
  const briefResult = $("#brief-result");
  const briefText = $("#brief-text");
  const copyButton = $("#copy-brief");
  const copyStatus = $("#copy-status");

  let generatedBrief = "";

  briefForm?.addEventListener("submit", event => {
    event.preventDefault();

    if (!briefForm.reportValidity()) return;

    const data = new FormData(briefForm);
    const get = name => String(data.get(name) || "").trim() || "Не указано";

    generatedBrief = [
      "НОВАЯ ЗАЯВКА — FRAME LAB®",
      "",
      `Тип проекта: ${get("type")}`,
      `Сфера бизнеса: ${get("niche")}`,
      `Стиль: ${get("style")}`,
      `Бюджет: ${get("budget")}`,
      `Описание проекта: ${get("details")}`,
      `Контакт: ${get("contact")}`,
      "",
      "Сформировано на сайте FRAME LAB."
    ].join("\n");

    if (briefText) briefText.textContent = generatedBrief;
    if (briefResult) {
      briefResult.hidden = false;
      briefResult.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    if (copyStatus) copyStatus.textContent = "";
  });

  copyButton?.addEventListener("click", async () => {
    if (!generatedBrief) return;

    let success = false;

    try {
      await navigator.clipboard.writeText(generatedBrief);
      success = true;
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = generatedBrief;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();

      try {
        success = document.execCommand("copy");
      } catch {
        success = false;
      }

      textarea.remove();
    }

    if (copyStatus) {
      copyStatus.textContent = success
        ? "Заявка скопирована."
        : "Не удалось скопировать. Выделите текст вручную.";
    }

    if (success) {
      copyButton.textContent = "СКОПИРОВАНО ✓";
    }
  });

  // FAQ
  $$(".faq-list details").forEach(item => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;

      $$(".faq-list details").forEach(other => {
        if (other !== item) other.open = false;
      });
    });
  });

  // SCROLL REVEAL
  const revealElements = $$(".section, .project, .service, .process-card");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });

    revealElements.forEach(element => {
      element.classList.add("reveal");
      observer.observe(element);
    });
  } else {
    revealElements.forEach(element => element.classList.add("visible"));
  }
});
