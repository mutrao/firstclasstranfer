/**
 * FIRST CLASS TRANSFER ABIDJAN
 * Booking Page JavaScript
 */

'use strict';

// =============================================
// NEIGHBORHOODS DATA
// =============================================
const NEIGHBORHOODS = {
  // ---- ZONE 1 ----
  'plateau': { display: 'Plateau', zone: 'zone1', commune: 'Plateau' },
  'cocody': { display: 'Cocody', zone: 'zone1', commune: 'Cocody' },
  'cocody-danga': { display: 'Cocody-Danga', zone: 'zone1', commune: 'Cocody' },
  'cocody-riviera': { display: 'Cocody-Riviera', zone: 'zone1', commune: 'Cocody' },
  'riviera 1': { display: 'Riviera 1', zone: 'zone1', commune: 'Cocody' },
  'riviera 2': { display: 'Riviera 2', zone: 'zone1', commune: 'Cocody' },
  'riviera 3': { display: 'Riviera 3', zone: 'zone1', commune: 'Cocody' },
  'riviera 4': { display: 'Riviera 4', zone: 'zone1', commune: 'Cocody' },
  'riviera golf': { display: 'Riviera Golf', zone: 'zone1', commune: 'Cocody' },
  'riviera palmeraie': { display: 'Riviera Palmeraie', zone: 'zone1', commune: 'Cocody' },
  '2 plateaux': { display: '2 Plateaux', zone: 'zone1', commune: 'Cocody' },
  'ii plateaux': { display: 'II Plateaux', zone: 'zone1', commune: 'Cocody' },
  '2 plateaux vallon': { display: '2 Plateaux Vallon', zone: 'zone1', commune: 'Cocody' },
  'angre': { display: 'Angré', zone: 'zone1', commune: 'Cocody' },
  'angré': { display: 'Angré', zone: 'zone1', commune: 'Cocody' },
  'angre chateau': { display: 'Angré Château', zone: 'zone1', commune: 'Cocody' },
  'angré château': { display: 'Angré Château', zone: 'zone1', commune: 'Cocody' },
  'blockhaus': { display: 'Blockhaus', zone: 'zone1', commune: 'Cocody' },
  'bonoumin': { display: 'Bonoumin', zone: 'zone1', commune: 'Cocody' },
  'mermoz': { display: 'Mermoz', zone: 'zone1', commune: 'Cocody' },
  'cocody village': { display: 'Cocody Village', zone: 'zone1', commune: 'Cocody' },
  'ambassades': { display: 'Ambassades', zone: 'zone1', commune: 'Cocody' },
  'anono': { display: 'Anono', zone: 'zone1', commune: 'Cocody' },
  'mbadon': { display: "M'Badon", zone: 'zone1', commune: 'Cocody' },
  "m'badon": { display: "M'Badon", zone: 'zone1', commune: 'Cocody' },
  'treichville': { display: 'Treichville', zone: 'zone1', commune: 'Treichville' },
  'zone 4': { display: 'Zone 4', zone: 'zone1', commune: 'Treichville' },
  'zone 3': { display: 'Zone 3', zone: 'zone1', commune: 'Marcory' },
  'marcory': { display: 'Marcory', zone: 'zone1', commune: 'Marcory' },
  'marcory residentiel': { display: 'Marcory Résidentiel', zone: 'zone1', commune: 'Marcory' },
  'marcory résidentiel': { display: 'Marcory Résidentiel', zone: 'zone1', commune: 'Marcory' },
  'port-bouet': { display: 'Port-Bouët', zone: 'zone1', commune: 'Port-Bouët' },
  'port-bouët': { display: 'Port-Bouët', zone: 'zone1', commune: 'Port-Bouët' },
  'vridi': { display: 'Vridi', zone: 'zone1', commune: 'Port-Bouët' },
  'vridi canal': { display: 'Vridi Canal', zone: 'zone1', commune: 'Port-Bouët' },
  'gonzagueville': { display: 'Gonzagueville', zone: 'zone1', commune: 'Port-Bouët' },
  'jean-folly': { display: 'Jean-Folly', zone: 'zone1', commune: 'Port-Bouët' },
  'bietry': { display: 'Biétry', zone: 'zone1', commune: 'Port-Bouët' },
  'biétry': { display: 'Biétry', zone: 'zone1', commune: 'Port-Bouët' },
  'zone industrielle': { display: 'Zone Industrielle', zone: 'zone1', commune: 'Port-Bouët' },
  'adjame': { display: 'Adjamé', zone: 'zone1', commune: 'Adjamé' },
  'adjamé': { display: 'Adjamé', zone: 'zone1', commune: 'Adjamé' },
  'adjame liberte': { display: 'Adjamé Liberté', zone: 'zone1', commune: 'Adjamé' },
  'adjamé liberté': { display: 'Adjamé Liberté', zone: 'zone1', commune: 'Adjamé' },
  'marche adjame': { display: 'Marché Adjamé', zone: 'zone1', commune: 'Adjamé' },
  'marché adjamé': { display: 'Marché Adjamé', zone: 'zone1', commune: 'Adjamé' },
  'williamsville': { display: 'Williamsville', zone: 'zone1', commune: 'Adjamé' },

  // ---- ZONE 2 ----
  'yopougon': { display: 'Yopougon', zone: 'zone2', commune: 'Yopougon' },
  'yopougon wassakara': { display: 'Yopougon Wassakara', zone: 'zone2', commune: 'Yopougon' },
  'yopougon niangon': { display: 'Yopougon Niangon', zone: 'zone2', commune: 'Yopougon' },
  'yopougon selmer': { display: 'Yopougon Selmer', zone: 'zone2', commune: 'Yopougon' },
  'yopougon koute': { display: 'Yopougon Kouté', zone: 'zone2', commune: 'Yopougon' },
  'yopougon kouté': { display: 'Yopougon Kouté', zone: 'zone2', commune: 'Yopougon' },
  'yopougon banco': { display: 'Yopougon Banco', zone: 'zone2', commune: 'Yopougon' },
  'yopougon sideci': { display: 'Yopougon SIDECI', zone: 'zone2', commune: 'Yopougon' },
  'yopougon lokoa': { display: 'Yopougon Lokoa', zone: 'zone2', commune: 'Yopougon' },
  'yopougon koweit': { display: 'Yopougon Koweït', zone: 'zone2', commune: 'Yopougon' },
  'yopougon koweït': { display: 'Yopougon Koweït', zone: 'zone2', commune: 'Yopougon' },
  'yopougon gesco': { display: 'Yopougon Gesco', zone: 'zone2', commune: 'Yopougon' },
  'yopougon academie': { display: 'Yopougon Académie', zone: 'zone2', commune: 'Yopougon' },
  'yopougon académie': { display: 'Yopougon Académie', zone: 'zone2', commune: 'Yopougon' },
  'yopougon doukouré': { display: 'Yopougon Doukouré', zone: 'zone2', commune: 'Yopougon' },
  'yopougon doukoure': { display: 'Yopougon Doukouré', zone: 'zone2', commune: 'Yopougon' },
  'yopougon toits rouges': { display: 'Yopougon Toits Rouges', zone: 'zone2', commune: 'Yopougon' },
  'abobo': { display: 'Abobo', zone: 'zone2', commune: 'Abobo' },
  'abobo baoulé': { display: 'Abobo Baoulé', zone: 'zone2', commune: 'Abobo' },
  'abobo baoule': { display: 'Abobo Baoulé', zone: 'zone2', commune: 'Abobo' },
  'abobo gare': { display: 'Abobo Gare', zone: 'zone2', commune: 'Abobo' },
  'abobo pk 18': { display: 'Abobo PK 18', zone: 'zone2', commune: 'Abobo' },
  'abobo derriere rails': { display: 'Abobo Derrière Rails', zone: 'zone2', commune: 'Abobo' },
  'abobo derrière rails': { display: 'Abobo Derrière Rails', zone: 'zone2', commune: 'Abobo' },
  'abobo sagbe': { display: 'Abobo Sagbé', zone: 'zone2', commune: 'Abobo' },
  'abobo sagbé': { display: 'Abobo Sagbé', zone: 'zone2', commune: 'Abobo' },
  "abobo n'dotre": { display: "Abobo N'Dotre", zone: 'zone2', commune: 'Abobo' },
  'abobo ndotre': { display: "Abobo N'Dotre", zone: 'zone2', commune: 'Abobo' },
  'attecoube': { display: 'Attécoubé', zone: 'zone2', commune: 'Attécoubé' },
  'attécoubé': { display: 'Attécoubé', zone: 'zone2', commune: 'Attécoubé' },
  'koumassi': { display: 'Koumassi', zone: 'zone2', commune: 'Koumassi' },
  'koumassi remblai': { display: 'Koumassi Remblai', zone: 'zone2', commune: 'Koumassi' },
  'koumassi grand campement': { display: 'Koumassi Grand Campement', zone: 'zone2', commune: 'Koumassi' },
  'koumassi commerce': { display: 'Koumassi Commerce', zone: 'zone2', commune: 'Koumassi' },

  // ---- ZONE 3 ----
  'bingerville': { display: 'Bingerville', zone: 'zone3', commune: 'Bingerville' },
  'bingerville centre': { display: 'Bingerville Centre', zone: 'zone3', commune: 'Bingerville' },
  'bingerville carrefour': { display: 'Bingerville Carrefour', zone: 'zone3', commune: 'Bingerville' },
  'moossou': { display: 'Moossou', zone: 'zone3', commune: 'Bingerville' },
  'anono bingerville': { display: 'Anono (Bingerville)', zone: 'zone3', commune: 'Bingerville' },
  'akromiabla': { display: 'Akromiabla', zone: 'zone3', commune: 'Bingerville' },
  'ebimpe': { display: 'Ebimpé', zone: 'zone3', commune: 'Bingerville' },
  'ebimpé': { display: 'Ebimpé', zone: 'zone3', commune: 'Bingerville' },
  'grand-bassam route': { display: 'Grand-Bassam Route', zone: 'zone3', commune: 'Bingerville' },
  'alepe route': { display: 'Alépé Route', zone: 'zone3', commune: 'Bingerville' },
  'alépé route': { display: 'Alépé Route', zone: 'zone3', commune: 'Bingerville' },
  'pk 20': { display: 'PK 20', zone: 'zone3', commune: 'Bingerville' },
  'pk 22': { display: 'PK 22', zone: 'zone3', commune: 'Bingerville' },
  'songon': { display: 'Songon', zone: 'zone3', commune: 'Songon' },
  'songon agban': { display: 'Songon Agban', zone: 'zone3', commune: 'Songon' },
  'anyama': { display: 'Anyama', zone: 'zone3', commune: 'Anyama' },
  'anyama adjame': { display: 'Anyama Adjamé', zone: 'zone3', commune: 'Anyama' },
  'anyama adjamé': { display: 'Anyama Adjamé', zone: 'zone3', commune: 'Anyama' },
  'anyama liberation': { display: 'Anyama Libération', zone: 'zone3', commune: 'Anyama' },
  'anyama libération': { display: 'Anyama Libération', zone: 'zone3', commune: 'Anyama' },
  'locodjro': { display: 'Locodjro', zone: 'zone3', commune: 'Attécoubé' },
  'niangon sud': { display: 'Niangon Sud', zone: 'zone3', commune: 'Yopougon' },
  'abatta': { display: 'Abatta', zone: 'zone3', commune: 'Bingerville' },
  'cocody abatta': { display: 'Cocody Abatta', zone: 'zone3', commune: 'Bingerville' },

  // ---- ZONE 4 ----
  'grand-bassam': { display: 'Grand-Bassam', zone: 'zone4', commune: 'Grand-Bassam' },
  'assinie': { display: 'Assinie', zone: 'zone4', commune: 'Assinie' },
  'bassam centre': { display: 'Bassam Centre', zone: 'zone4', commune: 'Grand-Bassam' },
  'braffedon': { display: 'Braffedon', zone: 'zone4', commune: 'Grand-Bassam' },
  'jacqueville': { display: 'Jacqueville', zone: 'zone4', commune: 'Jacqueville' },
  'dabou': { display: 'Dabou', zone: 'zone4', commune: 'Dabou' },
  'sikensi': { display: 'Sikensi', zone: 'zone4', commune: 'Sikensi' },
  'lakota route': { display: 'Lakota Route', zone: 'zone4', commune: 'Périphérie' },
  'azaguie': { display: 'Azaguié', zone: 'zone4', commune: 'Azaguié' },
  'azaguié': { display: 'Azaguié', zone: 'zone4', commune: 'Azaguié' },
  'agboville': { display: 'Agboville', zone: 'zone4', commune: 'Agboville' },
  'adzope': { display: 'Adzopé', zone: 'zone4', commune: 'Adzopé' },
  'adzopé': { display: 'Adzopé', zone: 'zone4', commune: 'Adzopé' },
  'tiassale route': { display: 'Tiassalé Route', zone: 'zone4', commune: 'Périphérie' },
  'tiassalé route': { display: 'Tiassalé Route', zone: 'zone4', commune: 'Périphérie' },
  'bonoua': { display: 'Bonoua', zone: 'zone4', commune: 'Bonoua' },
  'aboisso route': { display: 'Aboisso Route', zone: 'zone4', commune: 'Périphérie' },
  'alepe': { display: 'Alépé', zone: 'zone4', commune: 'Alépé' },
  'alépé': { display: 'Alépé', zone: 'zone4', commune: 'Alépé' },
  'san-pedro route': { display: 'San-Pédro Route (départ Abidjan)', zone: 'zone4', commune: 'Périphérie' },
};

// =============================================
// ZONES DATA
// =============================================
const ZONES = {
  zone1: {
    label: 'Zone 1 — Plateau, Cocody, Marcory, Port-Bouët, Treichville',
    economy: 15000,
    business: 25000,
    van: 25000,
    description: 'Communes proches du centre et de l\'aéroport',
    included: 'Plateau, Cocody, Riviera, Angré, Marcory, Treichville, Port-Bouët, Adjamé'
  },
  zone2: {
    label: 'Zone 2 — Yopougon, Abobo, Koumassi, Attécoubé',
    economy: 20000,
    business: 32000,
    van: 30000,
    description: 'Communes de la rive nord et ouest',
    included: 'Yopougon, Abobo, Koumassi, Attécoubé'
  },
  zone3: {
    label: 'Zone 3 — Bingerville, Anyama, Songon, Abatta',
    economy: 18000,
    business: 28000,
    van: 28000,
    description: 'Est et banlieue proche',
    included: 'Bingerville, Anyama, Songon, Abatta, PK 20, PK 22'
  },
  zone4: {
    label: 'Zone 4 — Grand-Bassam, Dabou, Assinie, Jacqueville',
    economy: 35000,
    business: 50000,
    van: 50000,
    description: 'Périphérie éloignée',
    included: 'Grand-Bassam, Assinie, Dabou, Jacqueville, Bonoua, Azaguié, Alépé'
  },
};

const WA_NUMBER = '2250700000000';

// =============================================
// STATE
// =============================================
let bookingState = {
  currentStep: 1,
  totalSteps: 4,

  // Step 1
  pickupMethod: 'neighborhood', // 'neighborhood' or 'address'
  neighborhood: '',
  address: '',
  zone: '',
  date: '',
  time: '',
  passengers: 1,

  // Step 2
  vehicle: '',
  basePrice: 0,
  totalPrice: 0,

  // Step 3
  name: '',
  phone: '',
  email: '',
  flightNumber: '',
  specialRequests: '',

  // Step 4
  paymentMethod: '',
  bookingRef: '',
};

// =============================================
// DOM HELPERS
// =============================================
function $(selector) { return document.querySelector(selector); }
function $$(selector) { return document.querySelectorAll(selector); }

function showStep(step) {
  $$('.form-step').forEach(s => s.classList.remove('active'));
  const target = $(`#step-${step}`);
  if (target) target.classList.add('active');

  $$('.progress-step').forEach((s, i) => {
    const stepNum = i + 1;
    s.classList.remove('active', 'completed');
    if (stepNum < step) s.classList.add('completed');
    else if (stepNum === step) s.classList.add('active');
  });

  bookingState.currentStep = step;
  updateSummary();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateSummary() {
  const zone = bookingState.zone;
  const zoneInfo = ZONES[zone];

  // Show neighborhood or address in pickup summary
  let pickupLabel = '—';
  if (bookingState.pickupMethod === 'neighborhood' && bookingState.neighborhood) {
    pickupLabel = bookingState.neighborhood;
    if (zoneInfo) pickupLabel += ' (' + zoneInfo.label.split('—')[0].trim() + ')';
  } else if (bookingState.pickupMethod === 'address' && bookingState.address) {
    pickupLabel = bookingState.address;
  } else if (zoneInfo) {
    pickupLabel = zoneInfo.label;
  }

  $('#summary-pickup').textContent = pickupLabel;
  $('#summary-destination').textContent = 'Aéroport FHB, Abidjan';
  $('#summary-date').textContent = bookingState.date ? formatDate(bookingState.date) : '—';
  $('#summary-time').textContent = bookingState.time || '—';
  $('#summary-passengers').textContent = bookingState.passengers || '—';
  $('#summary-vehicle').textContent = getVehicleLabel(bookingState.vehicle) || '—';

  const totalEl = $('#summary-total-amount');
  if (totalEl) {
    totalEl.textContent = bookingState.totalPrice > 0
      ? bookingState.totalPrice.toLocaleString('fr-FR') + ' FCFA'
      : '—';
  }
}

function getVehicleLabel(v) {
  switch (v) {
    case 'economy':  return 'Économie';
    case 'business': return 'Business';
    case 'van':      return 'Van (Minivan)';
    default:         return '';
  }
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
}

function generateRef() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
  let ref = 'FCT-';
  for (let i = 0; i < 8; i++) {
    ref += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return ref;
}

function formatPrice(p) {
  return p.toLocaleString('fr-FR') + ' FCFA';
}

// =============================================
// NEIGHBORHOOD / ZONE DETECTION
// =============================================

/** Normalize a string for matching (lowercase, no accents, no extra spaces) */
function normalizeStr(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function detectZoneFromNeighborhood(input) {
  if (!input) return null;
  const normalized = normalizeStr(input);
  // Direct key lookup
  if (NEIGHBORHOODS[normalized]) return NEIGHBORHOODS[normalized];
  // Partial match — find first entry whose key contains input or input contains key
  for (const [key, val] of Object.entries(NEIGHBORHOODS)) {
    if (normalized.includes(key) || key.includes(normalized)) return val;
  }
  return null;
}

function populateDatalist() {
  const datalist = document.getElementById('neighborhoods-list');
  if (!datalist) return;
  // Build unique display names per zone, sorted alphabetically
  const entries = Object.values(NEIGHBORHOODS);
  const seen = new Set();
  const unique = entries.filter(e => {
    if (seen.has(e.display)) return false;
    seen.add(e.display);
    return true;
  });
  unique.sort((a, b) => a.display.localeCompare(b.display, 'fr'));
  datalist.innerHTML = unique.map(e =>
    `<option value="${e.display}" data-zone="${e.zone}">${e.display} — ${e.commune}</option>`
  ).join('');
}

function showZoneDetectedCard(zoneKey) {
  const card = document.getElementById('zone-detected');
  if (!card) return;
  const z = ZONES[zoneKey];
  if (!z) { card.style.display = 'none'; return; }
  card.style.display = 'flex';
  card.innerHTML = `
    <div class="zone-detected-icon"><i class="fa-solid fa-map-pin"></i></div>
    <div class="zone-detected-info">
      <div class="zone-detected-label">${z.label}</div>
      <div class="zone-detected-prices">
        <span class="zd-price"><i class="fas fa-car"></i> Économie : <strong>${z.economy.toLocaleString('fr-FR')} FCFA</strong></span>
        <span class="zd-price"><i class="fas fa-car-side"></i> Business : <strong>${z.business.toLocaleString('fr-FR')} FCFA</strong></span>
        <span class="zd-price"><i class="fas fa-van-shuttle"></i> Van : <strong>${z.van.toLocaleString('fr-FR')} FCFA</strong></span>
      </div>
      <div class="zone-detected-note"><i class="fas fa-check-circle"></i> Prix fixe, tout inclus — aucun supplément caché</div>
    </div>`;
}

// =============================================
// METHOD TOGGLE
// =============================================
function switchMethod(method) {
  bookingState.pickupMethod = method;

  $$('.method-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.method === method);
  });

  const neighborhoodField = document.getElementById('neighborhood-field');
  const addressField = document.getElementById('address-field');

  if (method === 'neighborhood') {
    if (neighborhoodField) neighborhoodField.style.display = 'block';
    if (addressField) addressField.style.display = 'none';
  } else {
    if (neighborhoodField) neighborhoodField.style.display = 'none';
    if (addressField) addressField.style.display = 'block';
  }
}

// Expose globally for inline onclick
window.switchMethod = switchMethod;

// =============================================
// STEP 1 - TRIP DETAILS
// =============================================
$('#btn-next-1')?.addEventListener('click', () => {
  if (!validateStep1()) return;

  // Save state
  if (bookingState.pickupMethod === 'neighborhood') {
    bookingState.neighborhood = $('#trip-neighborhood')?.value?.trim() || '';
    const match = detectZoneFromNeighborhood(bookingState.neighborhood);
    if (match) bookingState.zone = match.zone;
  } else {
    bookingState.address = $('#trip-address')?.value?.trim() || '';
    bookingState.zone = $('#trip-zone-manual')?.value || '';
  }

  bookingState.date       = $('#trip-date')?.value || '';
  bookingState.time       = $('#trip-time')?.value || '';
  bookingState.passengers = parseInt($('#trip-passengers')?.value) || 1;

  renderVehicleOptions();
  showStep(2);
});

function validateStep1() {
  let valid = true;

  const date = $('#trip-date');
  const time = $('#trip-time');
  const pax  = $('#trip-passengers');

  clearError(date); clearError(time); clearError(pax);

  if (bookingState.pickupMethod === 'neighborhood') {
    const nbInput = $('#trip-neighborhood');
    clearError(nbInput);
    const val = nbInput?.value?.trim();
    if (!val) {
      showError(nbInput, 'Veuillez indiquer votre quartier de départ.');
      valid = false;
    } else {
      const match = detectZoneFromNeighborhood(val);
      if (!match) {
        showError(nbInput, 'Quartier non reconnu. Essayez un autre nom ou sélectionnez votre zone manuellement.');
        valid = false;
      }
    }
  } else {
    const addrInput = $('#trip-address');
    const zoneManual = $('#trip-zone-manual');
    clearError(addrInput); clearError(zoneManual);
    if (!addrInput?.value?.trim()) {
      showError(addrInput, 'Veuillez entrer votre adresse de départ.');
      valid = false;
    }
    if (!zoneManual?.value) {
      showError(zoneManual, 'Veuillez sélectionner votre zone approximative.');
      valid = false;
    }
  }

  if (!date?.value) { showError(date, 'Veuillez choisir une date.'); valid = false; }
  if (!time?.value) { showError(time, 'Veuillez indiquer l\'heure de prise en charge.'); valid = false; }
  if (!pax?.value || parseInt(pax.value) < 1) { showError(pax, 'Nombre de passagers invalide.'); valid = false; }

  return valid;
}

// =============================================
// STEP 2 - VEHICLE SELECTION
// =============================================
function renderVehicleOptions() {
  const zone = bookingState.zone;
  const zoneInfo = ZONES[zone];
  if (!zoneInfo) return;

  const pax = bookingState.passengers;

  const vehicles = [
    {
      id: 'economy',
      label: 'Économie',
      model: 'Toyota Corolla / Hyundai i10',
      icon: 'fa-car',
      desc: 'Confortable, jusqu\'à 4 passagers + bagages',
      price: zoneInfo.economy,
    },
    {
      id: 'business',
      label: 'Business',
      model: 'Toyota Camry / Peugeot 508',
      icon: 'fa-car-side',
      desc: 'Premium, jusqu\'à 4 passagers, confort supérieur',
      price: zoneInfo.business,
      featured: true,
    },
    {
      id: 'van',
      label: 'Van / Minivan',
      model: 'Toyota HiAce',
      icon: 'fa-van-shuttle',
      desc: 'Idéal familles et groupes, jusqu\'à 8 passagers',
      price: zoneInfo.van,
    },
  ];

  const container = $('#vehicle-options-container');
  if (!container) return;

  container.innerHTML = vehicles.map(v => {
    const displayPrice = (pax > 4 && v.id !== 'van') ? zoneInfo.van : v.price;
    const priceLabel = formatPrice(displayPrice);
    return `
      <div class="vehicle-option ${v.featured ? 'featured' : ''}" data-vehicle="${v.id}" data-price="${v.price}">
        <div class="vehicle-radio-indicator"></div>
        <div class="vehicle-info">
          <h4><i class="fas ${v.icon}" style="color:var(--gold);margin-right:8px;"></i>${v.label}</h4>
          <p>${v.model} — ${v.desc}</p>
        </div>
        <div class="vehicle-price-tag">
          ${priceLabel}
          <small>TTC, tout inclus</small>
        </div>
      </div>`;
  }).join('');

  container.querySelectorAll('.vehicle-option').forEach(card => {
    card.addEventListener('click', () => {
      container.querySelectorAll('.vehicle-option').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      bookingState.vehicle = card.dataset.vehicle;

      let price = parseInt(card.dataset.price);
      if (bookingState.passengers > 4 && bookingState.vehicle !== 'van') {
        price = zoneInfo.van;
      }
      bookingState.basePrice  = price;
      bookingState.totalPrice = price;
      updateSummary();
    });
  });
}

$('#btn-back-2')?.addEventListener('click', () => showStep(1));
$('#btn-next-2')?.addEventListener('click', () => {
  if (!bookingState.vehicle) {
    showToast('Veuillez sélectionner un véhicule.', 'error');
    return;
  }
  showStep(3);
});

// =============================================
// STEP 3 - PERSONAL INFO
// =============================================
$('#btn-back-3')?.addEventListener('click', () => showStep(2));
$('#btn-next-3')?.addEventListener('click', () => {
  if (!validateStep3()) return;

  bookingState.name           = $('#client-name')?.value?.trim() || '';
  bookingState.phone          = $('#client-phone')?.value?.trim() || '';
  bookingState.email          = $('#client-email')?.value?.trim() || '';
  bookingState.flightNumber   = $('#client-flight')?.value?.trim() || '';
  bookingState.specialRequests= $('#client-requests')?.value?.trim() || '';

  renderPaymentSummary();
  showStep(4);
});

function validateStep3() {
  let valid = true;
  const name  = $('#client-name');
  const phone = $('#client-phone');
  const email = $('#client-email');

  clearError(name); clearError(phone); clearError(email);

  if (!name?.value?.trim()) { showError(name, 'Veuillez entrer votre nom.'); valid = false; }
  if (!phone?.value?.trim() || phone.value.trim().length < 8) {
    showError(phone, 'Numéro de téléphone invalide.'); valid = false;
  }
  if (!email?.value?.trim() || !isValidEmail(email.value)) {
    showError(email, 'Adresse email invalide.'); valid = false;
  }
  return valid;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// =============================================
// STEP 4 - PAYMENT
// =============================================
function renderPaymentSummary() {
  const zone = bookingState.zone;
  const zoneInfo = ZONES[zone];

  let pickupDisplay = '—';
  if (bookingState.pickupMethod === 'neighborhood' && bookingState.neighborhood) {
    pickupDisplay = bookingState.neighborhood;
  } else if (bookingState.pickupMethod === 'address' && bookingState.address) {
    pickupDisplay = bookingState.address;
  } else if (zoneInfo) {
    pickupDisplay = zoneInfo.label;
  }

  $('#pay-summary-pickup').textContent  = pickupDisplay;
  $('#pay-summary-dest').textContent    = 'Aéroport FHB, Abidjan';
  $('#pay-summary-date').textContent    = formatDate(bookingState.date);
  $('#pay-summary-time').textContent    = bookingState.time;
  $('#pay-summary-vehicle').textContent = getVehicleLabel(bookingState.vehicle);
  $('#pay-summary-name').textContent    = bookingState.name;
  $('#pay-summary-phone').textContent   = bookingState.phone;
  $('#pay-summary-flight').textContent  = bookingState.flightNumber || 'Non renseigné';
  $('#pay-summary-total').textContent   = formatPrice(bookingState.totalPrice);
}

$('#btn-back-4')?.addEventListener('click', () => showStep(3));

$$('.payment-option').forEach(opt => {
  opt.addEventListener('click', () => {
    $$('.payment-option').forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
    bookingState.paymentMethod = opt.dataset.method;
  });
});

$('#btn-confirm-payment')?.addEventListener('click', () => {
  if (!bookingState.paymentMethod) {
    showToast('Veuillez sélectionner un mode de paiement.', 'error');
    return;
  }

  bookingState.bookingRef = generateRef();
  localStorage.setItem('lastBooking', JSON.stringify(bookingState));
  showConfirmModal();
});

function showConfirmModal() {
  const modal = $('#booking-success-modal');
  const refEl = $('#modal-booking-ref');
  if (refEl) refEl.textContent = bookingState.bookingRef;
  modal?.classList.add('active');

  setTimeout(() => {
    window.location.href = 'confirmation.html';
  }, 2500);
}

// =============================================
// INIT
// =============================================
window.addEventListener('DOMContentLoaded', () => {
  // Populate datalist
  populateDatalist();

  // Date default
  const dateInput = $('#trip-date');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
  }

  // Method toggle buttons
  $$('.method-btn').forEach(btn => {
    btn.addEventListener('click', () => switchMethod(btn.dataset.method));
  });

  // Neighborhood input → live zone detection
  const nbInput = document.getElementById('trip-neighborhood');
  if (nbInput) {
    nbInput.addEventListener('input', () => {
      const val = nbInput.value.trim();
      const match = detectZoneFromNeighborhood(val);
      if (match) {
        bookingState.zone = match.zone;
        showZoneDetectedCard(match.zone);
      } else {
        const card = document.getElementById('zone-detected');
        if (card) card.style.display = 'none';
      }
    });
    // Also fire on change (datalist selection)
    nbInput.addEventListener('change', () => {
      const val = nbInput.value.trim();
      const match = detectZoneFromNeighborhood(val);
      if (match) {
        bookingState.zone = match.zone;
        showZoneDetectedCard(match.zone);
      }
    });
  }

  // Pre-fill from session storage (from hero form)
  const init = sessionStorage.getItem('bookingInit');
  if (init) {
    try {
      const data = JSON.parse(init);
      if (data.neighborhood) {
        switchMethod('neighborhood');
        if (nbInput) {
          nbInput.value = data.neighborhood;
          const match = detectZoneFromNeighborhood(data.neighborhood);
          if (match) { bookingState.zone = match.zone; showZoneDetectedCard(match.zone); }
        }
      } else if (data.zone) {
        // Legacy zone-based pre-fill: switch to address method and set manual zone
        switchMethod('address');
        const zoneManual = document.getElementById('trip-zone-manual');
        if (zoneManual) zoneManual.value = data.zone;
        bookingState.zone = data.zone;
      }
      if ($('#trip-date') && data.date) $('#trip-date').value = data.date;
      if ($('#trip-time') && data.time) $('#trip-time').value = data.time;
      if ($('#trip-passengers') && data.passengers) $('#trip-passengers').value = data.passengers;
    } catch (err) { /* ignore */ }
  }

  showStep(1);
});

// =============================================
// VALIDATION HELPERS
// =============================================
function showError(input, message) {
  if (!input) return;
  input.classList.add('error');
  const err = document.createElement('p');
  err.className = 'field-error';
  err.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
  input.parentNode.appendChild(err);
}

function clearError(input) {
  if (!input) return;
  input.classList.remove('error');
  input.parentNode.querySelectorAll('.field-error').forEach(e => e.remove());
}

// =============================================
// TOAST NOTIFICATIONS
// =============================================
function showToast(message, type = 'info') {
  let toast = document.getElementById('toast-container');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-container';
    toast.style.cssText = `
      position: fixed;
      bottom: 90px;
      right: 24px;
      z-index: 9000;
      display: flex;
      flex-direction: column;
      gap: 8px;
    `;
    document.body.appendChild(toast);
  }

  const item = document.createElement('div');
  item.style.cssText = `
    background: ${type === 'error' ? '#e74c3c' : '#2ecc71'};
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 0.88rem;
    font-weight: 500;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    animation: fadeInUp 0.3s ease;
    max-width: 300px;
  `;
  item.textContent = message;
  toast.appendChild(item);

  setTimeout(() => {
    item.style.opacity = '0';
    item.style.transition = 'opacity 0.3s ease';
    setTimeout(() => item.remove(), 300);
  }, 3500);
}
