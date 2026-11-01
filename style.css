:root {
  --bg: #0b0d0b;
  --panel: #121512;
  --panel-2: #181c18;
  --text: #f1f2eb;
  --muted: #92988e;
  --line: rgba(255,255,255,.12);
  --lime: #c8f36a;
  --mono: "DM Mono", monospace;
  --font: "Manrope", sans-serif;
  --ease: cubic-bezier(.2,.75,.25,1);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

body.modal-open {
  overflow: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  color: inherit;
}

::selection {
  color: var(--bg);
  background: var(--lime);
}

.noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 20;
  opacity: .035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E");
}

.scroll-progress {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: transparent;
}

.scroll-progress span {
  display: block;
  width: 0;
  height: 100%;
  background: var(--lime);
  box-shadow: 0 0 12px rgba(200,243,106,.6);
}

.mono,
.eyebrow,
.section-tag,
.project-type,
.ref-no {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: .12em;
}

.muted {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
}

/* NAVIGATION */

.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  height: 78px;
  padding: 0 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  background: rgba(11,13,11,.88);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 19px;
  font-weight: 800;
  letter-spacing: -.08em;
  white-space: nowrap;
}

.brand-mark {
  width: 27px;
  height: 27px;
  display: grid;
  place-items: center;
  color: var(--bg);
  background: var(--lime);
  font-size: 16px;
  border-radius: 7px;
  letter-spacing: -.08em;
}

.reg {
  color: var(--lime);
  font-size: 10px;
  align-self: flex-start;
  margin-left: -7px;
}

.nav nav {
  display: flex;
  align-items: center;
  gap: clamp(18px, 3vw, 38px);
}

.nav nav a {
  color: #b7bcb3;
  font-size: 12px;
  transition: color .25s;
}

.nav nav a:hover {
  color: var(--lime);
}

.nav-cta {
  border: 1px solid rgba(200,243,106,.5);
  color: var(--lime);
  padding: 12px 17px;
  font-size: 11px;
  transition: .3s;
}

.nav-cta span {
  margin-left: 12px;
}

.nav-cta:hover {
  color: var(--bg);
  background: var(--lime);
}

.menu {
  display: none;
  border: 0;
  background: none;
  font-size: 25px;
  cursor: pointer;
}

/* GENERAL */

.section {
  padding-left: 8%;
  padding-right: 8%;
}

.section-tag {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--line);
  color: var(--lime);
}

.section-tag .mono {
  color: #72796f;
}

h2 {
  font-size: clamp(42px,6vw,82px);
  line-height: .98;
  letter-spacing: -.075em;
  font-weight: 600;
}

h2 em {
  color: var(--lime);
  font-style: normal;
}

/* HERO */

.hero {
  padding-top: 45px;
  min-height: 720px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero-top,
.hero-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--lime);
}

.eyebrow i,
.contact-availability i {
  width: 7px;
  height: 7px;
  display: inline-block;
  border-radius: 50%;
  background: var(--lime);
  box-shadow: 0 0 12px var(--lime);
  animation: pulse 2s infinite;
}

.hero-top .mono {
  color: #70776d;
}

.hero-main {
  display: grid;
  grid-template-columns: 1.15fr .85fr;
  align-items: center;
  gap: 5%;
  padding: 65px 0 45px;
}

.hero h1 {
  font-size: clamp(65px,9.5vw,132px);
  line-height: .88;
  letter-spacing: -.095em;
  font-weight: 800;
}

.outline {
  color: transparent;
  -webkit-text-stroke: 1px rgba(241,242,235,.7);
}

.lime {
  color: var(--lime);
}

.hero-copy {
  max-width: 440px;
  margin-top: 32px;
  color: #a6aca1;
  font-size: 15px;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 27px;
  margin-top: 32px;
}

.button-primary {
  display: inline-flex;
  align-items: center;
  gap: 35px;
  padding: 16px 19px;
  background: var(--lime);
  color: var(--bg);
  font-size: 12px;
  font-weight: 800;
  transition: transform .3s, box-shadow .3s;
}

.button-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 35px rgba(200,243,106,.18);
}

.text-link {
  color: #b7bcb3;
  font-size: 12px;
}

.text-link span {
  color: var(--lime);
  margin-left: 8px;
}

.hero-art {
  position: relative;
  min-height: 410px;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 50% 45%, rgba(200,243,106,.09), transparent 55%),
    #111511;
  border: 1px solid rgba(200,243,106,.16);
  isolation: isolate;
}

.art-grid {
  position: absolute;
  inset: 0;
  opacity: .23;
  background-image:
    linear-gradient(rgba(200,243,106,.15) 1px,transparent 1px),
    linear-gradient(90deg,rgba(200,243,106,.15) 1px,transparent 1px);
  background-size: 38px 38px;
  mask-image: linear-gradient(to bottom,black,transparent);
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(1px);
}

.orb-a {
  width: 190px;
  height: 190px;
  top: 26%;
  left: 29%;
  background: radial-gradient(circle at 30% 25%,#f0ffbd,#b8e84d 32%,#627e2e 65%,#1b2515);
  box-shadow: 0 0 90px rgba(200,243,106,.2);
  animation: float 7s ease-in-out infinite;
}

.orb-b {
  width: 65px;
  height: 65px;
  top: 16%;
  right: 16%;
  background: radial-gradient(circle at 30% 30%,#f4f6e9,#7d8b6d 55%,#20271c);
  animation: float 6s ease-in-out infinite reverse;
}

.orb-c {
  width: 35px;
  height: 35px;
  bottom: 19%;
  left: 17%;
  background: var(--lime);
  opacity: .65;
  box-shadow: 0 0 45px var(--lime);
}

.art-ring {
  position: absolute;
  width: 280px;
  height: 280px;
  border: 1px solid rgba(200,243,106,.6);
  border-radius: 50%;
  top: 16%;
  left: 18%;
  transform: rotateX(65deg) rotate(-25deg);
  box-shadow: 0 0 0 20px rgba(200,243,106,.025),0 0 0 45px rgba(200,243,106,.02);
  animation: rotate 20s linear infinite;
}

.art-label {
  position: absolute;
  z-index: 3;
  top: 39%;
  left: 12%;
  font-size: 45px;
  line-height: .83;
  font-weight: 800;
  letter-spacing: -.1em;
  mix-blend-mode: difference;
}

.art-cross {
  position: absolute;
  top: 10%;
  left: 10%;
  color: var(--lime);
  font-size: 25px;
}

.art-index,
.art-coord {
  position: absolute;
  color: #798171;
  font-size: 8px;
}

.art-index {
  bottom: 18px;
  left: 20px;
}

.art-coord {
  bottom: 18px;
  right: 20px;
}

.hero-foot {
  padding: 18px 0;
  border-top: 1px solid var(--line);
  color: #70776d;
  font-size: 9px;
  letter-spacing: .12em;
}

/* TICKER */

.ticker {
  overflow: hidden;
  background: var(--lime);
  color: var(--bg);
  padding: 17px 0;
  transform: rotate(-1deg) scale(1.02);
}

.ticker-track {
  width: max-content;
  white-space: nowrap;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: .08em;
  animation: ticker 28s linear infinite;
}

.ticker b {
  margin: 0 25px;
}

/* INTRO */

.intro {
  padding-top: 150px;
  padding-bottom: 130px;
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr .8fr;
  gap: 9%;
  padding: 75px 0;
}

.intro-grid h2 {
  font-size: clamp(42px,5.8vw,76px);
}

.big-copy {
  font-size: clamp(17px,1.7vw,22px);
  line-height: 1.6;
  letter-spacing: -.035em;
  margin-bottom: 22px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.stats div {
  padding: 25px 18px;
  border-right: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.stats div:first-child {
  padding-left: 0;
}

.stats div:last-child {
  border-right: 0;
}

.stats strong {
  color: var(--lime);
  font-size: 30px;
  letter-spacing: -.08em;
}

.stats span {
  color: #a1a79d;
  font-size: 11px;
}

/* WORK */

.work {
  padding-top: 100px;
  padding-bottom: 130px;
  background: #101310;
}

.work-head,
.reference-head,
.brief-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 40px;
  padding: 65px 0 40px;
}

.work-head h2,
.reference-head h2,
.brief-head h2 {
  font-size: clamp(45px,6vw,80px);
}

.work-head .muted,
.reference-head .muted,
.brief-head .muted {
  max-width: 330px;
}

.work-sub {
  margin-top: 22px;
  color: var(--muted);
  font-size: 13px;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}

.filter {
  border: 1px solid var(--line);
  padding: 11px 17px;
  background: transparent;
  color: #9ca398;
  cursor: pointer;
  font-size: 11px;
  transition: .25s;
}

.filter span {
  margin-left: 12px;
  color: var(--lime);
}

.filter:hover,
.filter.active {
  color: var(--bg);
  background: var(--lime);
  border-color: var(--lime);
}

.filter.active span {
  color: var(--bg);
}

.projects {
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  gap: 48px 22px;
}

.project {
  min-width: 0;
  transition: opacity .3s, transform .3s;
}

.project[hidden] {
  display: none;
}

.project-open {
  display: block;
  width: 100%;
  padding: 0;
  text-align: left;
  border: 0;
  background: none;
  cursor: pointer;
}

.project-visual {
  position: relative;
  height: 350px;
  overflow: hidden;
  isolation: isolate;
  transition: transform .5s var(--ease);
}

.project-open:hover .project-visual {
  transform: translateY(-5px);
}

.mock-browser {
  position: absolute;
  z-index: 5;
  top: 15px;
  left: 15px;
  right: 15px;
  height: 27px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 10px;
  border: 1px solid rgba(0,0,0,.1);
  background: rgba(255,255,255,.2);
  backdrop-filter: blur(10px);
}

.mock-browser i {
  width: 5px;
  height: 5px;
  background: #777;
  border-radius: 50%;
}

.mock-browser span {
  margin: auto;
  font: 8px var(--mono);
  color: #555;
}

.mock-browser.dark {
  border-color: rgba(255,255,255,.12);
  background: rgba(0,0,0,.22);
}

.mock-browser.dark span {
  color: #aaa;
}

/* BEAUTY CONCEPT */

.beauty {
  color: #332b25;
  background: #e9dfd2;
}

.beauty-top,
.auto-top,
.cafe-top,
.arch-top,
.fit-top,
.obj-top {
  position: absolute;
  top: 66px;
  left: 27px;
  right: 27px;
  display: flex;
  justify-content: space-between;
  font: 10px var(--mono);
  letter-spacing: .1em;
}

.beauty-top span,
.auto-top span,
.cafe-top span,
.arch-top span,
.fit-top span,
.obj-top span {
  font-size: 8px;
}

.beauty-title {
  position: absolute;
  z-index: 2;
  top: 35%;
  left: 9%;
  font-size: clamp(55px,7vw,95px);
  line-height: .78;
  letter-spacing: -.1em;
  font-weight: 700;
}

.beauty-title i {
  font-family: Georgia,serif;
  font-weight: 400;
}

.beauty-caption {
  position: absolute;
  bottom: 25px;
  left: 27px;
  font: 8px var(--mono);
  letter-spacing: .14em;
}

.beauty-shape {
  position: absolute;
  width: 180px;
  height: 260px;
  right: 9%;
  bottom: -65px;
  border-radius: 100px 100px 0 0;
  background: linear-gradient(135deg,#c7a78e,#8f6b55);
  transform: rotate(-12deg);
  box-shadow: inset 20px 0 35px rgba(255,255,255,.2);
}

.beauty-orbit {
  position: absolute;
  width: 230px;
  height: 230px;
  right: 5%;
  bottom: 8%;
  border: 1px solid rgba(255,255,255,.7);
  border-radius: 50%;
}

/* AUTO CONCEPT */

.auto {
  color: #f1f2eb;
  background: radial-gradient(circle at 70% 60%,#37443c,#101512 65%);
}

.auto-title {
  position: absolute;
  z-index: 3;
  top: 31%;
  left: 8%;
  font-size: clamp(57px,7vw,92px);
  line-height: .8;
  font-weight: 800;
  letter-spacing: -.1em;
}

.auto-title span {
  color: transparent;
  -webkit-text-stroke: 1px var(--lime);
}

.auto-line {
  position: absolute;
  right: -10%;
  top: 54%;
  width: 80%;
  height: 1px;
  background: var(--lime);
  transform: rotate(-18deg);
  box-shadow: 0 0 20px var(--lime);
}

.auto-car {
  position: absolute;
  right: 8%;
  bottom: 17%;
  width: 48%;
  height: 70px;
  border-radius: 65% 35% 20% 20%;
  background: linear-gradient(160deg,#89948a,#202b24 60%,#0a0e0b);
  transform: skewX(-20deg);
  box-shadow: 0 20px 35px #000;
}

.auto-car:before,
.auto-car:after {
  content: "";
  position: absolute;
  bottom: -13px;
  width: 38px;
  height: 38px;
  border: 7px solid #171c18;
  border-radius: 50%;
  background: #899187;
}

.auto-car:before { left: 15%; }
.auto-car:after { right: 10%; }

.auto-bottom {
  position: absolute;
  bottom: 22px;
  left: 27px;
  right: 27px;
  display: flex;
  justify-content: space-between;
  font: 8px var(--mono);
  letter-spacing: .1em;
}

/* CAFE CONCEPT */

.cafe {
  color: #392b21;
  background: #e9d9c5;
}

.cafe-title {
  position: absolute;
  z-index: 3;
  top: 30%;
  left: 9%;
  font: 75px/.8 Georgia,serif;
  letter-spacing: -.08em;
}

.cafe-title span {
  color: #a65f3c;
}

.coffee-cup {
  position: absolute;
  right: 13%;
  bottom: 12%;
  width: 130px;
  height: 145px;
  border-radius: 12px 12px 45px 45px;
  background: linear-gradient(100deg,#a86c47,#e0b58c 55%,#9b6443);
  box-shadow: 15px 20px 30px rgba(60,35,20,.2);
  transform: rotate(8deg);
}

.coffee-cup:after {
  content: "";
  position: absolute;
  right: -38px;
  top: 25px;
  width: 45px;
  height: 65px;
  border: 12px solid #ad7955;
  border-left: 0;
  border-radius: 0 50% 50% 0;
}

.coffee-cup i {
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  height: 12px;
  background: #533728;
  border-radius: 50%;
}

.cafe-bottom {
  position: absolute;
  bottom: 22px;
  left: 27px;
  font: 8px var(--mono);
  letter-spacing: .1em;
}

/* ARCHITECTURE CONCEPT */

.architecture {
  color: #242b24;
  background: #d9ddd4;
}

.arch-title {
  position: absolute;
  z-index: 3;
  top: 29%;
  left: 9%;
  font-size: 70px;
  line-height: .83;
  letter-spacing: -.09em;
}

.arch-title em {
  font-family: Georgia,serif;
  font-weight: 400;
}

.arch-building {
  position: absolute;
  right: 10%;
  bottom: 0;
  height: 64%;
  width: 40%;
  display: flex;
  align-items: end;
  gap: 5px;
}

.arch-building div {
  flex: 1;
  height: 90%;
  background: linear-gradient(90deg,#7f8a7b,#c5cabe);
  border: 1px solid rgba(30,40,30,.2);
}

.arch-building div:nth-child(2) {
  height: 65%;
  background: #a5afa1;
}

.arch-building div:nth-child(3) {
  height: 78%;
  background: #657465;
}

.arch-foot {
  position: absolute;
  bottom: 22px;
  left: 27px;
  font: 8px var(--mono);
}

/* FITNESS CONCEPT */

.fitness {
  color: #171c11;
  background: #c9e74d;
}

.fit-title {
  position: absolute;
  z-index: 3;
  top: 30%;
  left: 8%;
  font-size: 82px;
  line-height: .78;
  letter-spacing: -.1em;
  font-weight: 800;
}

.fit-title span {
  color: transparent;
  -webkit-text-stroke: 1px #171c11;
}

.fit-circle {
  position: absolute;
  right: 8%;
  bottom: 16%;
  width: 120px;
  height: 120px;
  border: 1px solid #171c11;
  border-radius: 50%;
  display: grid;
  place-items: center;
  text-align: center;
  font: 9px/1.5 var(--mono);
  transform: rotate(12deg);
}

.fit-bottom {
  position: absolute;
  left: 27px;
  bottom: 22px;
  font: 8px var(--mono);
}

/* OBJECT CONCEPT */

.object {
  color: #302d27;
  background: #ded9ce;
}

.obj-title {
  position: absolute;
  top: 29%;
  left: 8%;
  z-index: 3;
  font-size: 67px;
  line-height: .82;
  letter-spacing: -.09em;
}

.obj-title em {
  font-family: Georgia,serif;
  font-weight: 400;
}

.obj-chair {
  position: absolute;
  width: 170px;
  height: 190px;
  right: 10%;
  bottom: 10%;
  transform: rotate(-8deg);
}

.chair-seat {
  position: absolute;
  bottom: 55px;
  left: 5px;
  width: 145px;
  height: 35px;
  background: #a17d59;
  border-radius: 8px;
  transform: skewY(-10deg);
}

.chair-back {
  position: absolute;
  top: 0;
  left: 30px;
  width: 100px;
  height: 110px;
  border-radius: 45px 45px 8px 8px;
  background: linear-gradient(90deg,#9d7855,#c3a17b);
  transform: perspective(150px) rotateY(-15deg);
}

.chair-leg {
  position: absolute;
  bottom: 0;
  width: 8px;
  height: 80px;
  background: #514537;
}

.chair-leg.l { left: 30px; transform: rotate(8deg); }
.chair-leg.r { right: 25px; transform: rotate(-8deg); }

.obj-bottom {
  position: absolute;
  bottom: 22px;
  left: 27px;
  font: 8px var(--mono);
}

/* PROJECT INFO */

.project-meta {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding-top: 18px;
}

.project-meta h3 {
  font-size: 15px;
  letter-spacing: -.04em;
}

.project-meta p {
  margin-top: 7px;
  color: var(--muted);
  font-size: 11px;
}

.project-type {
  color: var(--lime);
  font-size: 8px;
  white-space: nowrap;
}

.concept-note {
  margin-top: 45px;
  padding-top: 18px;
  border-top: 1px solid var(--line);
  display: flex;
  gap: 12px;
  align-items: center;
  color: var(--muted);
  font-size: 11px;
}

.note-dot {
  width: 7px;
  height: 7px;
  background: var(--lime);
  border-radius: 50%;
  flex: 0 0 auto;
}

/* REFERENCES */

.references {
  padding-top: 120px;
  padding-bottom: 130px;
}

.reference-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 13px;
}

.reference-card {
  min-height: 245px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--line);
  background: var(--panel);
  transition: .35s var(--ease);
}

.reference-card:hover {
  background: var(--lime);
  color: var(--bg);
  transform: translateY(-7px);
}

.ref-no {
  color: var(--lime);
  font-size: 8px;
}

.reference-card:hover .ref-no {
  color: #384426;
}

.reference-card strong {
  margin: 30px 0 12px;
  font-size: 28px;
  letter-spacing: -.07em;
}

.reference-card > span:nth-of-type(2) {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.6;
}

.reference-card:hover > span:nth-of-type(2) {
  color: #34402b;
}

.reference-card b {
  margin-top: auto;
  padding-top: 22px;
  font: 9px var(--mono);
}

/* SERVICES */

.services {
  padding-top: 110px;
  padding-bottom: 130px;
  background: #101310;
}

.services h2 {
  padding: 65px 0 55px;
}

.service-list {
  border-top: 1px solid var(--line);
}

.service {
  display: grid;
  grid-template-columns: 70px 1fr 40px;
  align-items: center;
  gap: 20px;
  padding: 27px 5px;
  border-bottom: 1px solid var(--line);
  transition: padding .3s, background .3s;
}

.service:hover {
  padding-left: 18px;
  background: rgba(200,243,106,.035);
}

.service > .mono {
  color: var(--lime);
}

.service h3 {
  font-size: 22px;
  letter-spacing: -.05em;
}

.service p {
  margin-top: 7px;
  color: var(--muted);
  font-size: 12px;
}

.service-arrow {
  color: var(--lime);
  font-size: 20px;
  transition: transform .3s;
}

.service:hover .service-arrow {
  transform: translate(4px,-4px);
}

/* APPROACH */

.approach {
  padding-top: 120px;
  padding-bottom: 130px;
}

.approach-grid {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 10%;
  padding-top: 70px;
}

.approach-points > div {
  display: grid;
  grid-template-columns: 45px 1fr;
  gap: 20px;
  padding: 22px 0;
  border-bottom: 1px solid var(--line);
}

.approach-points > div:first-child {
  padding-top: 0;
}

.approach-points b {
  color: var(--lime);
  font: 11px var(--mono);
}

.approach-points h3 {
  font-size: 17px;
}

.approach-points p {
  margin-top: 8px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
}

/* PROCESS */

.process {
  padding-top: 100px;
  padding-bottom: 130px;
  background: #101310;
}

.process h2 {
  padding: 65px 0;
}

.steps {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  border-top: 1px solid var(--line);
}

.step {
  padding: 25px 20px 10px 0;
  border-right: 1px solid var(--line);
}

.step:not(:first-child) {
  padding-left: 20px;
}

.step:last-child {
  border-right: 0;
}

.step > span {
  color: var(--lime);
  font: 11px var(--mono);
}

.step h3 {
  margin: 35px 0 12px;
  font-size: 18px;
}

.step p {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
}

/* FAQ */

.faq {
  padding-top: 120px;
  padding-bottom: 130px;
}

.faq-grid {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 10%;
  padding-top: 70px;
}

.faq-list details {
  border-bottom: 1px solid var(--line);
}

.faq-list summary {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding: 23px 0;
  list-style: none;
  cursor: pointer;
  font-size: 14px;
}

.faq-list summary::-webkit-details-marker {
  display: none;
}

.faq-list summary span {
  color: var(--lime);
  font-size: 20px;
  transition: transform .3s;
}

.faq-list details[open] summary span {
  transform: rotate(45deg);
}

.faq-list details p {
  padding: 0 30px 22px 0;
  max-width: 600px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

/* STATEMENT */

.statement {
  position: relative;
  overflow: hidden;
  padding-top: 100px;
  padding-bottom: 100px;
  background: var(--lime);
  color: var(--bg);
}

.statement .eyebrow {
  color: var(--bg);
}

.statement .eyebrow i {
  background: var(--bg);
  box-shadow: none;
}

.statement p {
  position: relative;
  z-index: 2;
  margin-top: 55px;
  font-size: clamp(42px,7.2vw,100px);
  font-weight: 800;
  line-height: .95;
  letter-spacing: -.09em;
}

.statement p em {
  font-family: Georgia,serif;
  font-weight: 400;
}

.statement-star {
  position: absolute;
  right: 8%;
  bottom: 8%;
  font-size: clamp(100px,18vw,240px);
  opacity: .12;
  animation: rotate 40s linear infinite;
}

/* BRIEF */

.brief {
  padding-top: 120px;
  padding-bottom: 130px;
}

.brief-grid {
  display: grid;
  grid-template-columns: 1fr .8fr;
  gap: 8%;
}

.brief-form {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.brief-form label {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #c7ccc3;
  font-size: 12px;
}

.brief-form input,
.brief-form select,
.brief-form textarea {
  width: 100%;
  padding: 15px;
  outline: none;
  border: 1px solid var(--line);
  border-radius: 0;
  background: #121612;
  color: var(--text);
  font-size: 13px;
  transition: border-color .25s;
}

.brief-form input:focus,
.brief-form select:focus,
.brief-form textarea:focus {
  border-color: var(--lime);
}

.brief-form textarea {
  resize: vertical;
  min-height: 110px;
}

.brief-form input::placeholder,
.brief-form textarea::placeholder {
  color: #656d62;
}

.brief-submit {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 20px;
  border: 0;
  background: var(--lime);
  color: var(--bg);
  font-size: 11px;
  font-weight: 800;
  cursor: pointer;
  transition: .3s;
}

.brief-submit:hover {
  background: #e0ff9a;
  transform: translateY(-3px);
}

.brief-result {
  min-height: 300px;
  padding: 25px;
  border: 1px solid var(--line);
  background: var(--panel);
}

.brief-result > .mono {
  color: var(--lime);
  font-size: 9px;
}

.brief-empty {
  margin-top: 70px;
}

.brief-empty b {
  color: #4d5749;
  font: 38px var(--mono);
}

.brief-empty p {
  max-width: 280px;
  margin-top: 17px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
}

#brief-output {
  margin-top: 40px;
}

#brief-output h3 {
  margin-bottom: 15px;
  font-size: 19px;
}

#brief-text {
  white-space: pre-line;
  color: #aeb5aa;
  font-size: 12px;
  line-height: 1.9;
}

.copy-brief {
  margin-top: 25px;
  padding: 12px 15px;
  border: 1px solid var(--lime);
  background: transparent;
  color: var(--lime);
  font: 9px var(--mono);
  cursor: pointer;
}

.copy-status {
  display: block;
  margin-top: 12px;
  color: var(--lime);
  font-size: 11px;
}

/* CONTACT */

.contact {
  padding-top: 110px;
  padding-bottom: 120px;
  background: #101310;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr .7fr;
  align-items: center;
  gap: 10%;
  padding-top: 70px;
}

.contact-grid h2 {
  font-size: clamp(45px,6.5vw,85px);
}

.contact-grid .muted {
  max-width: 470px;
  margin-top: 28px;
}

.contact-availability {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-top: 35px;
  color: var(--lime);
  font: 9px var(--mono);
  letter-spacing: .1em;
}

.contact-card {
  padding: 30px;
  border: 1px solid rgba(200,243,106,.3);
  background: #171c16;
}

.contact-card > .mono {
  color: var(--lime);
  font-size: 9px;
}

.contact-card h3 {
  margin: 35px 0;
  font-size: 26px;
  line-height: 1.2;
  letter-spacing: -.06em;
}

.contact-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 0;
  border-top: 1px solid var(--line);
  font-size: 12px;
  transition: color .25s;
}

.contact-link:hover {
  color: var(--lime);
}

.contact-link b {
  color: var(--lime);
}

.small-note {
  margin-top: 20px;
  color: #747d70;
  font-size: 10px;
  line-height: 1.6;
}

/* FOOTER */

footer {
  min-height: 100px;
  padding: 25px 6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border-top: 1px solid var(--line);
}

footer .mono,
footer > a:last-of-type {
  color: #858c80;
  font-size: 9px;
}

/* MODAL */

.modal {
  position: fixed;
  z-index: 200;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  visibility: hidden;
  opacity: 0;
  transition: opacity .3s, visibility .3s;
}

.modal.open {
  visibility: visible;
  opacity: 1;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,.83);
  backdrop-filter: blur(10px);
}

.modal-panel {
  position: relative;
  z-index: 2;
  width: min(100%,1050px);
  max-height: 92vh;
  overflow-y: auto;
  padding: 28px;
  background: #111511;
  border: 1px solid var(--line);
  transform: translateY(20px);
  transition: transform .35s;
}

.modal.open .modal-panel {
  transform: translateY(0);
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 20px;
  width: 35px;
  height: 35px;
  border: 1px solid var(--line);
  background: transparent;
  font-size: 25px;
  cursor: pointer;
}

.modal-kicker {
  color: var(--lime);
}

.modal-panel h2 {
  margin-top: 20px;
  font-size: 35px;
}

.modal-panel > p {
  margin: 12px 0 25px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
}

.demo-toolbar {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding: 12px;
  border: 1px solid var(--line);
  border-bottom: 0;
  color: var(--lime);
  font-size: 8px;
}

#demo-frame {
  display: block;
  width: 100%;
  height: 480px;
  border: 1px solid var(--line);
  background: white;
}

.modal-disclaimer {
  display: block;
  margin-top: 13px;
  color: var(--muted);
  font-size: 10px;
}

.modal-contact {
  display: inline-block;
  margin-top: 20px;
  color: var(--lime);
  font-size: 12px;
}

/* CURSOR */

.cursor-glow {
  position: fixed;
  z-index: 1;
  width: 280px;
  height: 280px;
  pointer-events: none;
  border-radius: 50%;
  background: radial-gradient(circle,rgba(200,243,106,.045),transparent 70%);
  transform: translate(-50%,-50%);
}

/* REVEAL ANIMATIONS */

.reveal-ready .reveal {
  opacity: 0;
  transform: translateY(25px);
  transition: opacity .8s var(--ease),transform .8s var(--ease);
}

.reveal-ready .reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ANIMATIONS */

@keyframes pulse {
  0%,100% { opacity: 1; box-shadow: 0 0 12px var(--lime); }
  50% { opacity: .45; box-shadow: 0 0 3px var(--lime); }
}

@keyframes float {
  0%,100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-17px) rotate(7deg); }
}

@keyframes rotate {
  to { transform: rotate(335deg); }
}

@keyframes ticker {
  to { transform: translateX(-50%); }
}

/* TABLET */

@media (max-width: 1050px) {
  .nav {
    padding: 0 4%;
  }

  .nav nav {
    gap: 16px;
  }

  .nav nav a {
    font-size: 11px;
  }

  .section {
    padding-left: 6%;
    padding-right: 6%;
  }

  .hero-main {
    grid-template-columns: 1fr .8fr;
    gap: 3%;
  }

  .hero h1 {
    font-size: clamp(60px,8.5vw,100px);
  }

  .hero-art {
    min-height: 350px;
  }

  .project-visual {
    height: 300px;
  }

  .intro-grid,
  .approach-grid,
  .faq-grid {
    gap: 6%;
  }
}

/* MOBILE */

@media (max-width: 700px) {
  html {
    scroll-padding-top: 72px;
  }

  body {
    font-size: 14px;
  }

  .section {
    padding-left: 20px;
    padding-right: 20px;
  }

  .nav {
    height: 68px;
    padding: 0 20px;
    gap: 12px;
  }

  .brand {
    font-size: 18px;
  }

  .brand-mark {
    width: 25px;
    height: 25px;
  }

  .nav-cta {
    display: none;
  }

  .menu {
    display: block;
    margin-left: auto;
    width: 42px;
    height: 42px;
    color: var(--lime);
    border: 1px solid var(--line);
  }

  .nav nav {
    position: absolute;
    top: 67px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 0 20px;
    background: rgba(11,13,11,.98);
    border-bottom: 1px solid var(--line);
    max-height: 0;
    overflow: hidden;
    visibility: hidden;
    transition: max-height .35s, padding .35s, visibility .35s;
  }

  .nav nav.mobile-open {
    max-height: 360px;
    padding-top: 12px;
    padding-bottom: 15px;
    visibility: visible;
  }

  .nav nav a {
    padding: 15px 0;
    border-bottom: 1px solid var(--line);
    font-size: 14px;
  }

  .hero {
    min-height: auto;
    padding-top: 28px;
    padding-bottom: 0;
  }

  .hero-top {
    align-items: flex-start;
  }

  .hero-top .mono {
    display: none;
  }

  .eyebrow {
    font-size: 8px;
  }

  .hero-main {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 38px;
    padding: 65px 0 30px;
  }

  .hero h1 {
    font-size: clamp(54px,13.5vw,86px);
    line-height: .9;
    letter-spacing: -.09em;
  }

  .hero-copy {
    margin-top: 23px;
    max-width: 390px;
    font-size: 13px;
    line-height: 1.75;
  }

  .hero-actions {
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 25px;
  }

  .button-primary {
    padding: 15px;
    gap: 22px;
    font-size: 11px;
  }

  .text-link {
    font-size: 11px;
  }

  .hero-art {
    min-height: 310px;
  }

  .orb-a {
    width: 145px;
    height: 145px;
    left: 33%;
  }

  .orb-b {
    width: 45px;
    height: 45px;
  }

  .art-ring {
    width: 220px;
    height: 220px;
    left: 20%;
  }

  .art-label {
    font-size: 36px;
  }

  .hero-foot {
    padding: 15px 0;
    font-size: 7px;
  }

  .hero-foot span:last-child {
    display: none;
  }

  .ticker {
    padding: 13px 0;
  }

  .ticker-track {
    font-size: 10px;
  }

  .intro,
  .references,
  .approach,
  .faq,
  .brief {
    padding-top: 85px;
    padding-bottom: 85px;
  }

  .section-tag {
    font-size: 8px;
    padding-bottom: 15px;
  }

  .section-tag .mono {
    font-size: 7px;
    text-align: right;
  }

  h2 {
    font-size: clamp(39px,10vw,60px);
  }

  .intro-grid,
  .approach-grid,
  .faq-grid {
    display: flex;
    flex-direction: column;
    gap: 28px;
    padding: 42px 0;
  }

  .intro-grid h2,
  .approach-grid h2,
  .faq-grid h2 {
    font-size: clamp(40px,10vw,58px);
  }

  .big-copy {
    font-size: 16px;
  }

  .muted {
    font-size: 12px;
  }

  .stats {
    grid-template-columns: repeat(2,1fr);
  }

  .stats div {
    min-height: 105px;
    padding: 17px 12px;
    border-bottom: 1px solid var(--line);
  }

  .stats div:nth-child(2) {
    border-right: 0;
  }

  .stats div:nth-child(3),
  .stats div:nth-child(4) {
    border-bottom: 0;
  }

  .stats div:first-child {
    padding-left: 12px;
  }

  .stats strong {
    font-size: 26px;
  }

  .stats span {
    font-size: 10px;
  }

  .work,
  .services,
  .process,
  .contact {
    padding-top: 80px;
    padding-bottom: 85px;
  }

  .work-head,
  .reference-head,
  .brief-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 42px 0 28px;
  }

  .work-head h2,
  .reference-head h2,
  .brief-head h2 {
    font-size: clamp(40px,10vw,59px);
  }

  .work-sub {
    font-size: 11px;
    line-height: 1.7;
  }

  .filters {
    gap: 7px;
    margin-bottom: 22px;
  }

  .filter {
    padding: 10px 12px;
    font-size: 10px;
  }

  .filter span {
    margin-left: 5px;
  }

  .projects {
    grid-template-columns: 1fr;
    gap: 34px;
  }

  .project-visual {
    height: clamp(245px,72vw,340px);
  }

  .beauty-title {
    font-size: clamp(65px,17vw,90px);
  }

  .auto-title {
    font-size: clamp(62px,16vw,85px);
  }

  .cafe-title {
    font-size: clamp(68px,18vw,85px);
  }

  .arch-title {
    font-size: clamp(60px,16vw,80px);
  }

  .fit-title {
    font-size: clamp(68px,18vw,88px);
  }

  .obj-title {
    font-size: clamp(58px,15vw,77px);
  }

  .project-meta {
    gap: 10px;
    padding-top: 13px;
  }

  .project-meta h3 {
    font-size: 13px;
  }

  .project-meta p {
    font-size: 10px;
  }

  .project-type {
    font-size: 7px;
  }

  .concept-note {
    align-items: flex-start;
    font-size: 10px;
    line-height: 1.6;
  }

  .reference-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .reference-card {
    min-height: 190px;
    padding: 21px;
  }

  .reference-card strong {
    margin: 22px 0 8px;
    font-size: 25px;
  }

  .services h2,
  .process h2 {
    padding: 45px 0 35px;
  }

  .service {
    grid-template-columns: 30px 1fr 20px;
    gap: 12px;
    padding: 22px 0;
  }

  .service:hover {
    padding-left: 0;
  }

  .service h3 {
    font-size: 17px;
  }

  .service p {
    font-size: 11px;
    line-height: 1.6;
  }

  .service-arrow {
    font-size: 17px;
  }

  .approach-points > div {
    grid-template-columns: 30px 1fr;
    gap: 12px;
    padding: 19px 0;
  }

  .approach-points h3 {
    font-size: 15px;
  }

  .approach-points p {
    font-size: 11px;
  }

  .steps {
    grid-template-columns: repeat(2,1fr);
  }

  .step {
    min-height: 180px;
    padding: 18px 12px 20px 0;
    border-bottom: 1px solid var(--line);
  }

  .step:not(:first-child) {
    padding-left: 12px;
  }

  .step:nth-child(2) {
    border-right: 0;
  }

  .step:nth-child(3),
  .step:nth-child(4) {
    border-bottom: 0;
  }

  .step h3 {
    margin: 25px 0 9px;
    font-size: 15px;
  }

  .step p {
    font-size: 10px;
    line-height: 1.6;
  }

  .faq-grid {
    padding-bottom: 0;
  }

  .faq-list summary {
    padding: 19px 0;
    font-size: 12px;
  }

  .faq-list details p {
    font-size: 11px;
  }

  .statement {
    padding-top: 75px;
    padding-bottom: 85px;
  }

  .statement p {
    margin-top: 40px;
    font-size: clamp(43px,11vw,68px);
  }

  .statement-star {
    right: 2%;
    bottom: 2%;
    font-size: 130px;
  }

  .brief-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .brief-form {
    gap: 18px;
  }

  .brief-form label {
    font-size: 11px;
  }

  .brief-form input,
  .brief-form select,
  .brief-form textarea {
    padding: 14px;
    font-size: 12px;
  }

  .brief-result {
    min-height: 230px;
    padding: 20px;
  }

  .brief-empty {
    margin-top: 45px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 35px;
    padding-top: 45px;
  }

  .contact-grid h2 {
    font-size: clamp(42px,10.5vw,62px);
  }

  .contact-card {
    padding: 23px;
  }

  .contact-card h3 {
    font-size: 23px;
    margin: 27px 0;
  }

  footer {
    padding: 25px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  footer .mono,
  footer > a:last-of-type {
    font-size: 8px;
  }

  footer > :nth-child(even) {
    text-align: right;
  }

  .modal {
    padding: 10px;
  }

  .modal-panel {
    max-height: 94vh;
    padding: 18px;
  }

  .modal-panel h2 {
    font-size: 27px;
    padding-right: 35px;
  }

  .demo-toolbar {
    flex-direction: column;
    gap: 6px;
    font-size: 7px;
  }

  #demo-frame {
    height: 390px;
  }

  .modal-disclaimer {
    font-size: 9px;
    line-height: 1.5;
  }
}

/* SMALL PHONES */

@media (max-width: 380px) {
  .section {
    padding-left: 16px;
    padding-right: 16px;
  }

  .nav {
    padding: 0 16px;
  }

  .hero h1 {
    font-size: 53px;
  }

  .hero-art {
    min-height: 270px;
  }

  .hero-actions {
    gap: 15px;
  }

  .button-primary {
    gap: 15px;
  }

  .project-visual {
    height: 240px;
  }

  .project-meta {
    flex-direction: column;
  }

  .project-type {
    align-self: flex-start;
  }

  .section-tag .mono {
    max-width: 115px;
  }
}

/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }

  .reveal-ready .reveal {
    opacity: 1;
    transform: none;
  }
}

@media (hover: none) {
  .project-open:hover .project-visual {
    transform: none;
  }

  .reference-card:hover {
    transform: none;
  }
}
