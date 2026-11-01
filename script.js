
/* FRAME LAB — FIXES & NEW ELEMENTS */

/* Mobile menu icon */
.menu svg {
  display: block;
  width: 24px;
  height: 24px;
}

/* Menu open state */
#main-nav.mobile-open {
  display: flex;
}

body.menu-open {
  overflow: hidden;
}

/* Modal states */
.modal.open,
.modal.active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

/* Scroll progress */
.scroll-progress {
  overflow: hidden;
}

#scroll-progress-bar {
  display: block;
  width: 0;
  height: 100%;
  transition: width .08s linear;
}

/* Reveal animation compatibility */
.reveal,
[data-reveal] {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity .7s ease, transform .7s ease;
}

.reveal.visible,
.reveal.is-visible,
[data-reveal].visible,
[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Brief form */
.brief-form label {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.brief-form input,
.brief-form select,
.brief-form textarea {
  width: 100%;
  max-width: 100%;
}

.brief-form textarea {
  resize: vertical;
}

.brief-form input:focus,
.brief-form select:focus,
.brief-form textarea:focus {
  outline: 1px solid #c8f36a;
  outline-offset: 2px;
}

/* Hidden projects */
.project[hidden] {
  display: none !important;
}

/* Contact links */
.contact-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #main-nav.mobile-open {
    display: flex;
  }

  .brief-form input,
  .brief-form select,
  .brief-form textarea {
    font-size: 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal,
  [data-reveal] {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
