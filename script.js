document.addEventListener("DOMContentLoaded", () => {
  // =========================================
  // MOBILE MENU
  // =========================================

  const menuButton = document.querySelector(".menu");
  const navigation = document.querySelector("#main-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("active");

      menuButton.classList.toggle("active", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    });
  }

  // =========================================
  // PROJECT FILTERS
  // =========================================

  const filterButtons = document.querySelectorAll(".filter");
  const projects = document.querySelectorAll(".project");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";

      filterButtons.forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      projects.forEach((project) => {
        const category = project.dataset.category || "all";
        const show = filter === "all" || category === filter;

        project.hidden = !show;
        project.classList.toggle("filtered-out", !show);
      });
    });
  });

  // =========================================
  // PROJECT MODAL
  // =========================================

  const modal = document.querySelector("#project-modal");
  const modalTitle = document.querySelector("#modal-title");
  const modalDesc = document.querySelector("#modal-desc");
  const demoFrame = document.querySelector("#demo-frame");

  const openButtons = document.querySelectorAll(".project-open");

  function closeModal() {
    if (!modal) return;

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (demoFrame) {
      demoFrame.srcdoc = "";
    }
  }

  function createDemo(title, category) {
    const themes = {
      beauty: {
        accent: "#d6a98c",
        label: "BEAUTY STUDIO",
        heading: "Beauty is a feeling.",
        description: "A digital experience designed around beauty, confidence and details.",
        button: "DISCOVER MORE"
      },
      auto: {
        accent: "#b8ff65",
        label: "AUTOMOTIVE",
        heading: "Drive your vision.",
        description: "Powerful visuals. Clear structure. A bold digital identity.",
        button: "EXPLORE"
      },
      cafe: {
        accent: "#e7bd83",
        label: "RESTAURANT",
        heading: "A taste of something special.",
        description: "An elegant online space for memorable food and experiences.",
        button: "VIEW MENU"
      },
      architecture: {
        accent: "#c5c5bd",
        label: "ARCHITECTURE",
        heading: "Space. Form. Emotion.",
        description: "Minimalism, architecture and carefully selected details.",
        button: "EXPLORE PROJECT"
      },
      fitness: {
        accent: "#b8ff65",
        label: "FITNESS",
        heading: "Become your next level.",
        description: "Energy, movement and a strong visual identity.",
        button: "GET STARTED"
      },
      object: {
        accent: "#b8ff65",
        label: "PRODUCT DESIGN",
        heading: "Designed to stand out.",
        description: "A digital showcase for products that deserve attention.",
        button: "DISCOVER"
      }
    };

    const theme = themes[category] || themes.object;

    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${escapeHTML(title)}</title>
        <style>
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            min-height: 100vh;
            background: #10110f;
            color: #f4f4ee;
            font-family: Arial, sans-serif;
            overflow: hidden;
          }

          .page {
            min-height: 100vh;
            padding: 35px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            overflow: hidden;
          }

          .page::before {
            content: "";
            position: absolute;
            width: 420px;
            height: 420px;
            border-radius: 50%;
            background: ${theme.accent};
            opacity: .12;
            filter: blur(100px);
            right: -120px;
            top: 10%;
          }

          header, footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            position: relative;
            z-index: 1;
          }

          .logo {
            font-size: 17px;
            font-weight: 800;
            letter-spacing: -1px;
          }

          .logo span {
            color: ${theme.accent};
          }

          .tag {
            color: ${theme.accent};
            font-size: 10px;
            letter-spacing: 3px;
          }

          main {
            max-width: 750px;
            position: relative;
            z-index: 1;
            padding: 55px 0;
          }

          .number {
            color: ${theme.accent};
            font-size: 12px;
            letter-spacing: 3px;
            margin-bottom: 25px;
          }

          h1 {
            font-size: clamp(42px, 8vw, 100px);
            line-height: .95;
            letter-spacing: -5px;
            max-width: 700px;
            margin-bottom: 30px;
          }

          p {
            color: #a4a49d;
            line-height: 1.7;
            max-width: 420px;
            font-size: 14px;
          }

          button {
            margin-top: 35px;
            padding: 17px 25px;
            border: none;
            background: ${theme.accent};
            color: #10110f;
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 2px;
            cursor: pointer;
          }

          footer {
            color: #777;
            font-size: 10px;
            letter-spacing: 2px;
          }

          @media(max-width: 600px) {
            .page { padding: 24px; }
            h1 { letter-spacing: -3px; }
          }
        </style>
      </head>
      <body>
        <div class="page">
          <header>
            <div class="logo">FRAME<span>.</span></div>
            <div class="tag">${theme.label}</div>
          </header>

          <main>
            <div class="number">SELECTED DIGITAL PROJECT / 001</div>
            <h1>${theme.heading}</h1>
            <p>${theme.description}</p>
            <button onclick="this.textContent='THANK YOU!'">
              ${theme.button}
            </button>
          </main>

          <footer>
            <span>FRAME STUDIO</span>
            <span>DESIGNED WITH PURPOSE</span>
          </footer>
        </div>
      </body>
      </html>
    `;
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => {
      const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      };

      return entities[character];
    });
  }

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!modal) return;

      const project = button.closest(".project");

      const title =
        button.dataset.title ||
        project?.querySelector("h3")?.textContent?.trim() ||
        "Digital project";

      const description =
        button.dataset.desc ||
        project?.querySelector("p")?.textContent?.trim() ||
        "A FRAME Studio digital project.";

      const category =
        button.dataset.category ||
        project?.dataset.category ||
        "object";

      if (modalTitle) modalTitle.textContent = title;
      if (modalDesc) modalDesc.textContent = description;

      if (demoFrame) {
        demoFrame.srcdoc = createDemo(title, category);
      }

      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
    });
  });

  if (modal) {
    modal.querySelectorAll("[data-close-modal], .modal-close").forEach((button) => {
      button.addEventListener("click", closeModal);
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();

      if (navigation && menuButton) {
        navigation.classList.remove("active");
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      }
    }
  });

  // =========================================
  // SCROLL PROGRESS
  // =========================================

  const progressBar = document.querySelector(
    "#scroll-progress, .scroll-progress"
  );

  function updateProgress() {
    if (!progressBar) return;

    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress =
      scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

    progressBar.style.width = `${progress}%`;
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  // =========================================
  // REVEAL ANIMATIONS
  // =========================================

  const revealElements = document.querySelectorAll(
    ".reveal, [data-reveal]"
  );

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }

  // =========================================
  // CURSOR GLOW
  // =========================================

  const cursorGlow = document.querySelector(
    ".cursor-glow, #cursor-glow"
  );

  if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", (event) => {
      cursorGlow.style.left = `${event.clientX}px`;
      cursorGlow.style.top = `${event.clientY}px`;
    });
  }

  // =========================================
  // BRIEF GENERATOR
  // =========================================

  const briefForm = document.querySelector("#brief-form");
  const briefOutput = document.querySelector("#brief-output");
  const briefEmpty = document.querySelector("#brief-empty");
  const briefText = document.querySelector("#brief-text");
  const copyButton = document.querySelector("#copy-brief");
  const copyStatus = document.querySelector("#copy-status");

  let generatedBrief = "";

  if (briefForm) {
    briefForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(briefForm);

      const type = formData.get("type") || "Not specified";
      const niche = formData.get("niche") || "Not specified";
      const style = formData.get("style") || "Not specified";
      const details = formData.get("details") || "No additional details";

      generatedBrief = `
FRAME STUDIO — PROJECT BRIEF

PROJECT TYPE:
${type}

BUSINESS / NICHE:
${niche}

DESIRED STYLE:
${style}

PROJECT DETAILS:
${details}

Created through the FRAME Studio website.
      `.trim();

      if (briefText) {
        briefText.textContent = generatedBrief;
      }

      if (briefOutput) {
        briefOutput.hidden = false;
        briefOutput.classList.add("active");
      }

      if (briefEmpty) {
        briefEmpty.hidden = true;
      }

      if (copyStatus) {
        copyStatus.textContent = "";
      }

      briefOutput?.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    });
  }

  // =========================================
  // COPY BRIEF
  // =========================================

  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      if (!generatedBrief) return;

      try {
        await navigator.clipboard.writeText(generatedBrief);

        if (copyStatus) {
          copyStatus.textContent = "Brief copied successfully.";
        }

        copyButton.textContent = "COPIED ✓";

        setTimeout(() => {
          copyButton.textContent = "COPY BRIEF";
        }, 2000);

      } catch (error) {
        if (briefText) {
          briefText.focus();
        }

        if (copyStatus) {
          copyStatus.textContent =
            "Select and copy the brief manually.";
        }
      }
    });
  }

  // =========================================
  // CURRENT YEAR
  // =========================================

  const yearElement = document.querySelector("#current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
