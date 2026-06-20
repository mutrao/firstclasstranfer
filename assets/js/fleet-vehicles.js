/**
 * FIRST CLASS TRANSFER ABIDJAN
 * Fleet vehicle artwork — self-contained black Mercedes illustrations
 * with the branded "First Class Transfer" plate integrated into the bumper.
 * No external images required (works offline / on GitHub Pages).
 */
'use strict';

(function () {

  // ---- three-pointed Mercedes star ----
  function star(cx, cy, r, sfx) {
    const rad = a => a * Math.PI / 180;
    const lr = [cx + r * Math.cos(rad(30)), cy + r * Math.sin(rad(30))];
    const ll = [cx + r * Math.cos(rad(150)), cy + r * Math.sin(rad(150))];
    return `<g stroke="url(#chrome${sfx})" stroke-width="2.4" stroke-linecap="round" fill="none">
      <circle cx="${cx}" cy="${cy}" r="${r}"/>
      <line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy - r}"/>
      <line x1="${cx}" y1="${cy}" x2="${lr[0].toFixed(1)}" y2="${lr[1].toFixed(1)}"/>
      <line x1="${cx}" y1="${cy}" x2="${ll[0].toFixed(1)}" y2="${ll[1].toFixed(1)}"/>
    </g>`;
  }

  // ---- horizontal grille slats ----
  function slats(x1, x2, yT, yB, n) {
    let s = '';
    for (let i = 1; i <= n; i++) {
      const y = yT + i * (yB - yT) / (n + 1);
      s += `<path d="M${x1} ${y.toFixed(1)} L${x2} ${y.toFixed(1)}" stroke="#474d57" stroke-width="1.4" opacity="0.8"/>`;
    }
    return s;
  }

  // ---- branded number plate (integrated, slight perspective) ----
  function plate(cx, ty, w, h) {
    const tlx = cx - w / 2, trx = cx + w / 2, brx = cx + w / 2 + 6, blx = cx - w / 2 - 6, by = ty + h;
    const bandTx = tlx + 22, bandBx = blx + 23;
    const fx = tlx + 4, fy = ty + 6, seg = 13 / 3;
    return `<g>
      <path d="M${tlx},${ty} L${trx},${ty} L${brx},${by} L${blx},${by} Z" fill="#f6f7f9" stroke="#b3b8c0" stroke-width="1.2"/>
      <path d="M${tlx + 4},${ty + 3} L${trx - 4},${ty + 3} L${brx - 4},${by - 3} L${blx + 4},${by - 3} Z" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
      <path d="M${tlx},${ty} L${bandTx},${ty} L${bandBx},${by} L${blx},${by} Z" fill="#0a4fc4"/>
      <rect x="${fx}" y="${fy}" width="${seg.toFixed(2)}" height="8" fill="#ff8200"/>
      <rect x="${(fx + seg).toFixed(2)}" y="${fy}" width="${seg.toFixed(2)}" height="8" fill="#ffffff"/>
      <rect x="${(fx + 2 * seg).toFixed(2)}" y="${fy}" width="${seg.toFixed(2)}" height="8" fill="#009a44"/>
      <text x="${tlx + 11}" y="${by - 6}" text-anchor="middle" font-family="Arial,sans-serif" font-size="9" font-weight="700" fill="#ffffff">CI</text>
      <text x="${cx + 13}" y="${ty + h / 2 + 4.5}" text-anchor="middle" font-family="'Arial Narrow',Arial,sans-serif" font-size="13" font-weight="800" fill="#15171c">FIRST CLASS TRANSFER</text>
    </g>`;
  }

  function defs(sfx) {
    return `<defs>
      <radialGradient id="studio${sfx}" cx="50%" cy="34%" r="80%">
        <stop offset="0%" stop-color="#f5f7fa"/>
        <stop offset="55%" stop-color="#d3d9e1"/>
        <stop offset="100%" stop-color="#a9b3c0"/>
      </radialGradient>
      <linearGradient id="body${sfx}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#5a6273"/>
        <stop offset="12%" stop-color="#2e333d"/>
        <stop offset="34%" stop-color="#161a20"/>
        <stop offset="72%" stop-color="#090b10"/>
        <stop offset="100%" stop-color="#05060a"/>
      </linearGradient>
      <linearGradient id="glass${sfx}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2c3c54"/>
        <stop offset="100%" stop-color="#0a1320"/>
      </linearGradient>
      <radialGradient id="grille${sfx}" cx="50%" cy="40%" r="72%">
        <stop offset="0%" stop-color="#24282f"/>
        <stop offset="100%" stop-color="#050608"/>
      </radialGradient>
      <linearGradient id="chrome${sfx}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#eef2f7"/>
        <stop offset="50%" stop-color="#c2cad4"/>
        <stop offset="100%" stop-color="#8b95a1"/>
      </linearGradient>
      <radialGradient id="shadow${sfx}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="rgba(0,0,0,0.5)"/>
        <stop offset="70%" stop-color="rgba(0,0,0,0.2)"/>
        <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
      </radialGradient>
    </defs>`;
  }

  // ---- sedan (Classe A / Classe E) ----
  function sedan(sfx, exec) {
    return `<g stroke-linejoin="round">
      <rect x="176" y="336" width="66" height="24" rx="11" fill="#0a0c10"/>
      <rect x="478" y="336" width="66" height="24" rx="11" fill="#0a0c10"/>
      <path d="M276 158 L306 92 Q310 84 320 84 L400 84 Q410 84 414 92 L444 158 Z" fill="url(#body${sfx})"/>
      <path d="M300 152 L320 100 L400 100 L420 152 Z" fill="url(#glass${sfx})"/>
      <path d="M150 332 L150 252 Q150 234 170 228 L232 212 Q252 160 288 156 L360 152 L432 156 Q468 160 488 212 L550 228 Q570 234 570 252 L570 332 Q570 346 556 346 L164 346 Q150 346 150 332 Z" fill="url(#body${sfx})"/>
      <ellipse cx="318" cy="208" rx="120" ry="34" fill="#ffffff" opacity="0.06"/>
      <path d="M360 158 L360 226" stroke="#ffffff" stroke-opacity="0.07" stroke-width="2"/>
      <path d="M316 214 L404 214 L416 270 L304 270 Z" fill="url(#grille${sfx})" stroke="#3a3f48" stroke-width="1"/>
      ${slats(312, 408, 214, 270, exec ? 5 : 4)}
      ${star(360, 242, 12, sfx)}
      <path d="M214 214 L298 205 L303 223 L222 233 Z" fill="url(#glass${sfx})" stroke="#11151c" stroke-width="1"/>
      <path d="M506 214 L422 205 L417 223 L498 233 Z" fill="url(#glass${sfx})" stroke="#11151c" stroke-width="1"/>
      <path d="M220 210 L296 202" stroke="#cfe6ff" stroke-width="2.4" stroke-linecap="round" opacity="0.9"/>
      <path d="M500 210 L424 202" stroke="#cfe6ff" stroke-width="2.4" stroke-linecap="round" opacity="0.9"/>
      <rect x="198" y="298" width="74" height="26" rx="6" fill="#0a0c10"/>
      <rect x="448" y="298" width="74" height="26" rx="6" fill="#0a0c10"/>
      ${exec ? `<path d="M250 340 L470 340" stroke="url(#chrome${sfx})" stroke-width="3" stroke-linecap="round"/>` : ''}
    </g>`;
  }

  // ---- van (Classe V) ----
  function van(sfx) {
    return `<g stroke-linejoin="round">
      <rect x="168" y="332" width="70" height="26" rx="12" fill="#0a0c10"/>
      <rect x="482" y="332" width="70" height="26" rx="12" fill="#0a0c10"/>
      <path d="M150 340 L150 232 Q150 214 170 210 L214 202 L214 150 Q214 120 246 118 L474 118 Q506 120 506 150 L506 202 L550 210 Q570 214 570 232 L570 340 Q570 352 558 352 L162 352 Q150 352 150 340 Z" fill="url(#body${sfx})"/>
      <path d="M236 196 L250 134 Q252 128 260 128 L460 128 Q468 128 470 134 L484 196 Z" fill="url(#glass${sfx})"/>
      <path d="M252 130 L468 130" stroke="#ffffff" stroke-opacity="0.10" stroke-width="2"/>
      <ellipse cx="300" cy="242" rx="124" ry="28" fill="#ffffff" opacity="0.05"/>
      <path d="M298 206 L422 206 L422 252 L298 252 Z" fill="url(#grille${sfx})" stroke="#3a3f48" stroke-width="1"/>
      ${slats(306, 414, 206, 252, 3)}
      ${star(360, 229, 14, sfx)}
      <path d="M196 206 L292 202 L292 224 L196 226 Z" fill="url(#glass${sfx})" stroke="#11151c" stroke-width="1"/>
      <path d="M524 206 L428 202 L428 224 L524 226 Z" fill="url(#glass${sfx})" stroke="#11151c" stroke-width="1"/>
      <path d="M202 208 L288 205" stroke="#cfe6ff" stroke-width="2.6" stroke-linecap="round" opacity="0.9"/>
      <path d="M518 208 L432 205" stroke="#cfe6ff" stroke-width="2.6" stroke-linecap="round" opacity="0.9"/>
      <rect x="190" y="300" width="80" height="26" rx="6" fill="#0a0c10"/>
      <rect x="450" y="300" width="80" height="26" rx="6" fill="#0a0c10"/>
    </g>`;
  }

  function buildVehicle(kind) {
    const sfx = (kind + Math.random().toString(36).slice(2, 7)).replace(/[^a-z0-9]/gi, '');
    const isVan = kind === 'van';
    const carBody = isVan ? van(sfx) : sedan(sfx, kind === 'exec');
    const plateY = isVan ? 304 : 300;
    const label = isVan ? 'Mercedes-Benz Classe V noire'
      : kind === 'exec' ? 'Mercedes-Benz Classe E noire' : 'Mercedes-Benz Classe A noire';
    return `<svg class="fleet-svg" viewBox="0 0 720 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${label} — First Class Transfer Abidjan" xmlns="http://www.w3.org/2000/svg">
      ${defs(sfx)}
      <rect width="720" height="400" fill="url(#studio${sfx})"/>
      <rect y="300" width="720" height="100" fill="#97a3b2" opacity="0.22"/>
      <ellipse cx="360" cy="360" rx="240" ry="26" fill="url(#shadow${sfx})"/>
      ${carBody}
      ${plate(360, plateY, 170, 40)}
    </svg>`;
  }

  function init() {
    document.querySelectorAll('[data-vehicle-art]').forEach(el => {
      el.innerHTML = buildVehicle(el.getAttribute('data-vehicle-art'));
    });
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
