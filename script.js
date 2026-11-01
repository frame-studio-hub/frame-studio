:root {
  --bg: #090a09;
  --panel: #111310;
  --text: #f0f0e9;
  --muted: #85877e;
  --lime: #c7ff42;
  --line: rgba(255,255,255,.13);
  --font: "Manrope", sans-serif;
  --mono: "DM Mono", monospace;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; scroll-padding-top: 90px; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font);
  overflow-x: hidden;
  cursor: default;
}

a { color: inherit; text-decoration: none; }
button { font: inherit; }
::selection { background: var(--lime); color: #090a09; }

.noise {
  position: fixed;
  inset: -50%;
  z-index: 20;
  pointer-events: none;
  opacity: .045;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E");
  animation: noiseMove .2s steps(2) infinite;
}

@keyframes noiseMove {
  0% { transform: translate(0,0); }
  25% { transform: translate(2%,-1%); }
  50% { transform: translate(-1%,2%); }
  75% { transform: translate(1%,1%); }
}

.cursor-glow {
  position: fixed;
  z-index: 1;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(circle, rgba(191,255,54,.075), transparent 68%);
  transform: translate(-50%,-50%);
  opacity: 0;
  transition: opacity .3s;
}

.scroll-progress {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 2px;
  width: 0;
  background: var(--lime);
}

.header {
  height: 82px;
  padding: 0 6vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 50;
  width: 100%;
  border-bottom: 1px solid rgba(255,255,255,.09);
}

.logo {
  font-size: 21px;
  font-weight: 800;
  letter-spacing: -1.5px;
}
.logo span { color: var(--lime); }
.logo sup { font: 10px var(--mono); vertical-align: top; margin-left: 3px; }

.nav { display: flex; gap: 36px; }
.nav a, .header-contact {
  font: 10px var(--mono);
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #b4b6ad;
  transition: color .25s;
}
.nav a:hover, .header-contact:hover { color: var(--lime); }

.header-contact span { color: var(--lime); margin-left: 12px; }

.menu-toggle {
  display: none;
  background: none;
  border: 0;
  width: 36px;
  height: 36px;
  cursor: pointer;
}
.menu-toggle span {
  display: block;
  height: 1px;
  background: var(--text);
  margin: 7px 0;
}

/* HERO */

.hero {
  min-height: 850px;
  height: 100svh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  padding: 145px 6vw 60px;
  isolation: isolate;
  background:
    radial-gradient(ellipse at 78% 45%, rgba(109,132,50,.13), transparent 32%),
    radial-gradient(ellipse at 20% 75%, rgba(60,72,48,.12), transparent 35%),
    linear-gradient(120deg, #090a09, #10120e 60%, #090a09);
}

.hero-grid {
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: .22;
  background-image:
    linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px);
  background-size: 75px 75px;
  mask-image: linear-gradient(to bottom, black, transparent 95%);
}

.hero-topline, .hero-kicker, .section-heading, .eyebrow, .section-note,
.art-corner, .project-meta span, .filters button, .process-card > span,
.concept-disclaimer, .scene-label, .scene-coordinate, .hero-index {
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 1.2px;
}

.hero-topline {
  display: flex;
  justify-content: space-between;
  color: #777b70;
}

.status-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--lime);
  box-shadow: 0 0 12px var(--lime);
  margin-right: 8px;
  animation: blink 1.5s infinite;
}

@keyframes blink { 50% { opacity: .3; } }

.hero-content {
  position: relative;
  z-index: 4;
  margin-top: clamp(90px, 13vh, 160px);
}

.hero-kicker { color: var(--lime); display: flex; align-items: center; gap: 12px; }
.kicker-line { height: 1px; width: 32px; background: var(--lime); }

.hero-title {
  font-size: clamp(62px, 10.2vw, 156px);
  line-height: .82;
  letter-spacing: -.095em;
  font-weight: 800;
  margin-top: 28px;
  position: relative;
  z-index: 2;
}

.outline-text {
  color: transparent;
  -webkit-text-stroke: 1px rgba(240,240,233,.68);
}

.title-last { font-size: .77em; letter-spacing: -.085em; }
.lime-dot { color: var(--lime); }

.hero-bottom {
  display: flex;
  align-items: end;
  justify-content: space-between;
  max-width: 580px;
  margin-top: 38px;
}
.hero-bottom p {
  color: #a0a297;
  font-size: 13px;
  line-height: 1.9;
  max-width: 350px;
}

.round-link {
  border: 1px solid rgba(255,255,255,.3);
  border-radius: 50%;
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  font-size: 22px;
  transition: .3s;
}
.round-link:hover { background: var(--lime); color: #090a09; transform: rotate(45deg); }

.hero-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(1px);
}
.orb-one {
  width: 350px; height: 350px;
  right: 7%; top: 22%;
  border: 1px solid rgba(199,255,66,.13);
  box-shadow: inset 0 0 80px rgba(199,255,66,.045), 0 0 100px rgba(199,255,66,.04);
  animation: orbRotate 25s linear infinite;
}
.orb-one::before, .orb-one::after {
  content: "";
  position: absolute;
  inset: 24px;
  border: 1px solid rgba(199,255,66,.13);
  border-radius: 50%;
  transform: rotateX(65deg) rotate(35deg);
}
.orb-one::after { transform: rotateY(65deg) rotate(-35deg); }
.orb-two {
  width: 10px; height: 10px;
  background: var(--lime);
  right: 23%; top: 38%;
  box-shadow: 0 0 40px 15px rgba(199,255,66,.15);
  animation: float 5s ease-in-out infinite;
}
@keyframes orbRotate { to { transform: rotate(360deg); } }
@keyframes float { 50% { transform: translate(15px,-22px); } }

/* MOVING SCENE */

.scene {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 52%;
  height: 180px;
  z-index: 3;
  opacity: .75;
}
.scene-label { position: absolute; top: 10px; left: 15%; color: #777b70; }
.scene-coordinate { position: absolute; bottom: 24px; right: 8%; color: #777b70; }
.road {
  position: absolute;
  bottom: 48px;
  left: 0;
  width: 100%;
  height: 45px;
  transform: perspective(150px) rotateX(35deg);
  border-top: 1px solid rgba(199,255,66,.22);
  border-bottom: 1px solid rgba(199,255,66,.12);
  background: linear-gradient(90deg, transparent, rgba(199,255,66,.05), transparent);
}
.road-line {
  position: absolute;
  top: 50%;
  height: 1px;
  width: 100%;
  background: repeating-linear-gradient(90deg, rgba(199,255,66,.5) 0 35px, transparent 35px 70px);
  animation: roadMove 1s linear infinite;
}
@keyframes roadMove { to { background-position: -70px 0; } }

.car {
  position: absolute;
  bottom: 76px;
  left: -180px;
  width: 160px;
  height: 45px;
  animation: drive 12s linear infinite;
}
.car-body {
  position: absolute;
  bottom: 7px;
  width: 150px;
  height: 28px;
  background: linear-gradient(160deg, #d8e6a8, #7e963e 70%, #303a1c);
  clip-path: polygon(12% 25%, 25% 0, 70% 0, 88% 28%, 100% 50%, 97% 100%, 4% 100%, 0 55%);
  box-shadow: 0 0 30px rgba(199,255,66,.2);
}
.car-window {
  position: absolute;
  z-index: 2;
  bottom: 31px;
  left: 43px;
  width: 58px;
  height: 19px;
  background: #171c14;
  clip-path: polygon(20% 0, 80% 0, 100% 100%, 0 100%);
}
.car-light {
  position: absolute;
  z-index: 3;
  right: 2px;
  bottom: 16px;
  width: 18px;
  height: 5px;
  background: #f5ffd6;
  box-shadow: 0 0 24px 7px rgba(199,255,66,.4);
}
.wheel {
  position: absolute;
  z-index: 4;
  bottom: 0;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: radial-gradient(circle, #999 0 15%, #20221e 18% 55%, #050505 60%);
  border: 2px solid #45483e;
  animation: wheelSpin .5s linear infinite;
}
.wheel-left { left: 25px; }
.wheel-right { right: 25px; }
@keyframes wheelSpin { to { transform: rotate(360deg); } }
@keyframes drive {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(100vw + 400px)); }
}

.hero-index {
  position: absolute;
  left: 6vw;
  bottom: 42px;
  display: flex;
  gap: 12px;
  align-items: center;
  color: #7d8075;
}
.hero-index span:first-child { color: var(--lime); }
.index-line { width: 40px; height: 1px; background: #666; }

/* TICKER */

.ticker {
  overflow: hidden;
  background: var(--lime);
  color: #11130d;
  padding: 18px 0;
  transform: rotate(-1deg) scale(1.02);
  position: relative;
  z-index: 5;
}
.ticker-track {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 38px;
  width: max-content;
  animation: ticker 28s linear infinite;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}
.ticker-track b { font-size: 18px; }
@keyframes ticker { to { transform: translateX(-50%); } }

/* SHARED SECTIONS */

.section {
  padding: 145px 8vw;
  position: relative;
}
.section-heading {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--line);
  padding-bottom: 18px;
  color: #92958a;
}
.eyebrow { color: var(--lime); }
.section-note { color: #777b70; }

/* ABOUT */

.about { background: #e9e9df; color: #11130f; }
.about .section-heading { border-color: rgba(0,0,0,.2); }
.about .section-note { color: #77796f; }
.about-layout {
  display: grid;
  grid-template-columns: 1.4fr .6fr;
  gap: 7vw;
  padding: 100px 0 85px;
}
.about-title {
  font-size: clamp(50px, 7.5vw, 108px);
  line-height: .91;
  letter-spacing: -.085em;
  font-weight: 800;
}
.lime-text { color: #a5d52c; }
.outline-dark {
  color: transparent;
  -webkit-text-stroke: 1px #11130f;
}
.about-side { padding-top: 10px; max-width: 330px; }
.about-symbol {
  font-size: 52px;
  font-weight: 800;
  letter-spacing: -5px;
  margin-bottom: 32px;
}
.about-symbol span { color: #a5d52c; }
.about-side p { font-size: 13px; line-height: 1.9; margin-bottom: 20px; }
.about-side .muted { color: #73756c; }
.text-link {
  display: inline-block;
  font: 10px var(--mono);
  letter-spacing: 1px;
  margin-top: 12px;
  border-bottom: 1px solid #111;
  padding-bottom: 8px;
}
.text-link span { margin-left: 18px; }
.about-bottom {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  border-top: 1px solid rgba(0,0,0,.2);
  padding-top: 20px;
}
.about-bottom div { display: flex; gap: 15px; font: 10px var(--mono); }
.about-bottom strong { color: #9ac42c; }
.about-bottom span { color: #66685e; }

/* WORK */

.work { background: #0b0d0a; }
.work-intro {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin: 75px 0 55px;
}
.work-intro h2, .services-title {
  font-size: clamp(58px, 9vw, 120px);
  line-height: .82;
  letter-spacing: -.09em;
}
.work-intro p {
  max-width: 310px;
  font-size: 12px;
  color: #93968a;
  line-height: 1.9;
}
.filters { display: flex; gap: 10px; margin-bottom: 28px; flex-wrap: wrap; }
.filters button {
  color: #999c90;
  border: 1px solid rgba(255,255,255,.16);
  background: transparent;
  border-radius: 40px;
  padding: 12px 19px;
  cursor: pointer;
  transition: .25s;
}
.filters button span { color: var(--lime); margin-left: 7px; }
.filters button:hover, .filters button.active {
  color: #11130d;
  background: var(--lime);
  border-color: var(--lime);
}
.filters button.active span { color: #11130d; }

.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 55px 24px;
}
.project-card { min-width: 0; transition: opacity .3s, transform .3s; }
.project-card.hidden { display: none; }
.project-art {
  height: clamp(260px, 34vw, 470px);
  overflow: hidden;
  position: relative;
  isolation: isolate;
}
.art-corner {
  position: absolute;
  top: 22px;
  left: 22px;
  z-index: 5;
  color: rgba(255,255,255,.55);
  font-size: 8px;
}

/* Artwork 1 */
.art-beauty {
  background: radial-gradient(ellipse at 50% 50%, #d4a78d, #6c4037 48%, #211b1a 100%);
  display: grid;
  place-items: center;
}
.beauty-glow {
  position: absolute;
  width: 65%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #f2c3a3;
  filter: blur(75px);
  opacity: .4;
}
.beauty-ring {
  position: absolute;
  width: 55%;
  aspect-ratio: 1;
  border: 1px solid rgba(255,235,214,.6);
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(255,220,190,.2), inset 0 0 60px rgba(255,220,190,.15);
  animation: orbRotate 25s linear infinite;
}
.beauty-type {
  position: relative;
  z-index: 2;
  font: 800 clamp(45px,7vw,95px) var(--font);
  letter-spacing: -.1em;
  color: #fff1e5;
}
.beauty-type span { font: 12px var(--mono); vertical-align: top; }
.beauty-sub { position: absolute; bottom: 35px; font: 9px var(--mono); letter-spacing: 4px; }

/* Artwork 2 */
.art-auto {
  background: linear-gradient(145deg,#343a35,#111512 65%,#090b0a);
}
.auto-number {
  position: absolute;
  right: 9%;
  top: 8%;
  font-size: 180px;
  line-height: 1;
  font-weight: 800;
  letter-spacing: -.1em;
  color: rgba(255,255,255,.055);
}
.auto-car-shape {
  position: absolute;
  width: 75%;
  height: 28%;
  left: 13%;
  top: 42%;
  background: linear-gradient(160deg,#c6d2bd,#647268 60%,#222b27);
  clip-path: polygon(5% 55%,22% 20%,42% 5%,72% 12%,91% 48%,100% 70%,96% 90%,4% 90%,0 72%);
  filter: drop-shadow(0 30px 30px rgba(0,0,0,.6));
  animation: carFloat 5s ease-in-out infinite;
}
@keyframes carFloat { 50% { transform: translateY(-8px); } }
.auto-title {
  position: absolute;
  left: 8%;
  bottom: 9%;
  font-size: clamp(40px,6vw,76px);
  line-height: .78;
  letter-spacing: -.08em;
  font-weight: 800;
}
.auto-caption { position: absolute; right: 7%; bottom: 12%; font: 8px var(--mono); color: #aaa; }

/* Artwork 3 */
.art-cafe {
  background: #d5c7a8;
  color: #292a20;
}
.cafe-sun {
  position: absolute;
  width: 65%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%,#f4e5c7,#bd8157);
  left: 18%;
  top: 5%;
  box-shadow: 0 0 70px rgba(255,220,170,.3);
}
.cafe-title {
  position: absolute;
  z-index: 2;
  top: 30%;
  left: 9%;
  font-size: clamp(50px,7vw,95px);
  font-weight: 800;
  letter-spacing: -.1em;
  line-height: .8;
}
.cafe-title span { color: #a64f2e; }
.cafe-bottom { position: absolute; bottom: 25px; left: 9%; font: 9px var(--mono); letter-spacing: 2px; }

/* Artwork 4 */
.art-architecture {
  background: linear-gradient(135deg,#c5c5b9,#777d73 60%,#282d28);
  color: #f4f0e5;
}
.arch-shape {
  position: absolute;
  border: 1px solid rgba(255,255,255,.45);
  width: 52%;
  height: 90%;
  bottom: -20%;
  transform: perspective(300px) rotateY(-25deg);
}
.arch-one { left: 12%; background: linear-gradient(90deg,rgba(255,255,255,.15),transparent); }
.arch-two { right: 8%; transform: perspective(300px) rotateY(25deg); }
.arch-title {
  position: absolute;
  z-index: 3;
  left: 8%;
  top: 27%;
  font-size: clamp(36px,5.5vw,75px);
  font-weight: 800;
  line-height: .82;
  letter-spacing: -.08em;
}
.arch-title i { font-weight: 400; }
.arch-bottom { position: absolute; bottom: 25px; left: 8%; font: 8px var(--mono); letter-spacing: 1px; }

/* Artwork 5 */
.art-sport {
  background: radial-gradient(circle at 65% 35%,#b5d94d,#4c642c 38%,#192016 75%);
}
.sport-circle {
  position: absolute;
  width: 55%;
  aspect-ratio: 1;
  border: 1px solid rgba(255,255,255,.5);
  border-radius: 50%;
  right: 10%;
  top: 10%;
  box-shadow: 0 0 80px rgba(199,255,66,.2), inset 0 0 80px rgba(199,255,66,.15);
  animation: orbRotate 20s linear infinite;
}
.sport-title {
  position: absolute;
  left: 8%;
  bottom: 14%;
  font-size: clamp(43px,6vw,82px);
  font-weight: 800;
  letter-spacing: -.09em;
  line-height: .8;
}
.sport-small { position: absolute; right: 8%; bottom: 18%; font: 8px var(--mono); }

/* Artwork 6 */
.art-object {
  background: radial-gradient(circle at center,#323a2c,#11150f 65%,#080a08);
}
.object-orbit {
  position: absolute;
  width: 55%;
  height: 55%;
  border: 1px solid rgba(199,255,66,.5);
  border-radius: 50%;
  left: 23%;
  top: 14%;
}
.orbit-a { transform: rotateX(65deg) rotate(25deg); }
.orbit-b { transform: rotateY(65deg) rotate(-35deg); }
.object-core {
  position: absolute;
  left: 43%;
  top: 33%;
  width: 16%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%,#f3ffb8,#9bc52d 50%,#384c12);
  box-shadow: 0 0 55px rgba(199,255,66,.5);
  animation: float 4s ease-in-out infinite;
}
.object-title {
  position: absolute;
  left: 8%;
  bottom: 12%;
  font-size: clamp(33px,4.5vw,62px);
  font-weight: 800;
  letter-spacing: -.09em;
  line-height: .85;
}
.object-title span { font: 10px var(--mono); vertical-align: top; }
.object-small { position: absolute; right: 8%; bottom: 16%; font: 8px var(--mono); }

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-top: 18px;
}
.project-meta span { color: #8d9185; font-size: 8px; }
.project-meta h3 { font-size: 16px; font-weight: 600; margin-top: 7px; }
.project-type { color: var(--lime) !important; }
.concept-disclaimer { color: #777b70; margin-top: 45px; font-size: 9px; }

/* SERVICES */

.services { background: #e9e9df; color: #10120e; }
.services .section-heading { border-color: rgba(0,0,0,.2); }
.services .section-note { color: #77796f; }
.services-title { margin: 85px 0 65px; }
.services-title .outline-text { -webkit-text-stroke-color: #11130f; }
.service-row {
  display: grid;
  grid-template-columns: 70px 1fr 50px;
  align-items: center;
  border-top: 1px solid rgba(0,0,0,.22);
  padding: 28px 0;
  transition: padding .3s;
}
.service-row:last-child { border-bottom: 1px solid rgba(0,0,0,.22); }
.service-row:hover { padding-left: 15px; }
.service-num { color: #8b8d82; font: 10px var(--mono); }
.service-row h3 { font-size: clamp(22px,3vw,35px); letter-spacing: -.05em; }
.service-row p { color: #77796f; font-size: 12px; margin-top: 6px; }
.service-arrow { color: #9ac42c; font-size: 24px; text-align: right; }

/* PROCESS */

.process {
  background:
    radial-gradient(ellipse at 85% 25%,rgba(199,255,66,.07),transparent 30%),
    #0b0d0a;
}
.process-title {
  font-size: clamp(60px,10vw,130px);
  line-height: .85;
  letter-spacing: -.09em;
  margin: 90px 0 65px;
}
.process-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
.process-card {
  min-height: 250px;
  border: 1px solid var(--line);
  padding: 24px 20px;
  position: relative;
  background: linear-gradient(145deg,rgba(255,255,255,.035),transparent);
  transition: border-color .3s, transform .3s;
}
.process-card:hover { border-color: var(--lime); transform: translateY(-7px); }
.process-card > span { color: #85897d; font-size: 8px; }
.process-icon { color: var(--lime); font-size: 32px; margin: 35px 0 20px; }
.process-card h3 { font-size: 18px; margin-bottom: 10px; }
.process-card p { color: #8c9084; font-size: 11px; line-height: 1.8; }

/* CONTACT */

.contact {
  min-height: 650px;
  padding: 120px 8vw;
  position: relative;
  overflow: hidden;
  background: var(--lime);
  color: #10120e;
  isolation: isolate;
}
.contact-orb {
  position: absolute;
  z-index: -1;
  width: 600px;
  height: 600px;
  right: -100px;
  top: 0;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,.2);
  box-shadow: inset 0 0 100px rgba(0,0,0,.08), 0 0 100px rgba(0,0,0,.08);
  animation: orbRotate 35s linear infinite;
}
.contact-orb::before, .contact-orb::after {
  content: "";
  position: absolute;
  inset: 40px;
  border: 1px solid rgba(0,0,0,.18);
  border-radius: 50%;
  transform: rotateX(65deg);
}
.contact-orb::after { transform: rotateY(65deg); }
.contact .eyebrow { color: #303a1c; }
.contact h2 {
  font-size: clamp(60px,10vw,130px);
  line-height: .82;
  letter-spacing: -.095em;
  margin: 45px 0 30px;
}
.contact h2 span:not(.lime-text) {
  color: transparent;
  -webkit-text-stroke: 1px #10120e;
}
.contact-content p { font-size: 13px; max-width: 350px; line-height: 1.8; }
.contact-button {
  display: inline-flex;
  gap: 35px;
  align-items: center;
  margin-top: 35px;
  padding: 17px 22px;
  background: #10120e;
  color: white;
  font: 10px var(--mono);
  letter-spacing: 1px;
  transition: .3s;
}
.contact-button span { color: var(--lime); font-size: 16px; }
.contact-button:hover { background: #303a1c; transform: translateY(-4px); }
.contact-side {
  position: absolute;
  bottom: 40px;
  right: 8vw;
  font: 9px/1.8 var(--mono);
  text-align: right;
}

/* FOOTER */

.footer {
  min-height: 100px;
  padding: 25px 6vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  color: #777b70;
}
.footer > span, .footer > a:last-child { font: 8px var(--mono); letter-spacing: 1px; }
.footer > a:last-child:hover { color: var(--lime); }

/* REVEAL */

.reveal {
  opacity: 0;
  transform: translateY(25px);
  transition: opacity .8s ease, transform .8s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }

@media (hover: hover) and (pointer: fine) {
  body { cursor: crosshair; }
  body:has(a:hover), body:has(button:hover) { cursor: pointer; }
  .cursor-glow { opacity: 1; }
}

@media (max-width: 900px) {
  .hero { min-height: 780px; }
  .hero-title { font-size: clamp(65px,12vw,110px); }
  .scene { width: 65%; }
  .about-layout { grid-template-columns: 1fr; gap: 45px; }
  .about-side { max-width: 500px; }
  .process-grid { grid-template-columns: 1fr 1fr; }
  .project-art { height: 330px; }
}

@media (max-width: 650px) {
  .header { height: 70px; padding: 0 6vw; }
  .logo { font-size: 19px; }
  .header-contact { display: none; }
  .menu-toggle { display: block; z-index: 60; }
  .nav {
    display: none;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    padding: 28px 6vw;
    background: #10120e;
    border-bottom: 1px solid var(--line);
    flex-direction: column;
    gap: 25px;
  }
  .nav.open { display: flex; }
  .nav a { font-size: 12px; }

  .hero {
    min-height: 760px;
    height: 100svh;
    padding: 115px 6vw 50px;
  }
  .hero-topline { font-size: 7px; gap: 15px; }
  .hero-topline span:last-child { text-align: right; max-width: 120px; }
  .hero-content { margin-top: 125px; }
  .hero-title { font-size: clamp(58px,13vw,88px); }
  .hero-bottom { margin-top: 30px; }
  .hero-bottom p { font-size: 11px; max-width: 260px; }
  .round-link { width: 43px; height: 43px; flex-shrink: 0; }
  .orb-one { width: 210px; height: 210px; top: 23%; right: -35px; }
  .scene { width: 100%; height: 145px; }
  .scene-label { left: 6%; font-size: 7px; }
  .car { transform: scale(.75); transform-origin: left bottom; }
  .hero-index { bottom: 22px; }
  .ticker { padding: 14px 0; }
  .ticker-track { font-size: 10px; }

  .section { padding: 90px 6vw; }
  .section-heading { font-size: 8px; }
  .section-note { text-align: right; }
  .about-layout { padding: 65px 0 55px; }
  .about-title { font-size: clamp(47px,11vw,70px); }
  .about-side p { font-size: 12px; }
  .about-bottom { grid-template-columns: 1fr 1fr; gap: 18px; }

  .work-intro { display: block; margin: 60px 0 40px; }
  .work-intro h2, .services-title { font-size: 65px; }
  .work-intro p { margin-top: 25px; }
  .filters { gap: 7px; }
  .filters button { padding: 10px 13px; font-size: 8px; }
  .projects-grid { grid-template-columns: 1fr; gap: 38px; }
  .project-art { height: 310px; }
  .project-meta h3 { font-size: 14px; }
  .concept-disclaimer { line-height: 1.8; }

  .services-title { margin: 65px 0 45px; }
  .service-row { grid-template-columns: 38px 1fr 25px; padding: 22px 0; }
  .service-row h3 { font-size: 22px; }
  .service-row p { font-size: 10px; max-width: 260px; line-height: 1.7; }
  .process-title { margin: 65px 0 45px; font-size: 65px; }
  .process-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
  .process-card { min-height: 220px; padding: 17px 13px; }
  .process-card h3 { font-size: 15px; }
  .process-card p { font-size: 10px; }

  .contact { min-height: 590px; padding: 90px 6vw; }
  .contact h2 { font-size: clamp(55px,12vw,80px); }
  .contact-orb { width: 350px; height: 350px; right: -200px; top: 100px; }
  .contact-side { right: 6vw; bottom: 25px; }
  .footer { flex-wrap: wrap; padding: 25px 6vw; }
  .footer > span { order: 3; width: 100%; }
  .cursor-glow { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }
  .reveal { opacity: 1; transform: none; }
}
