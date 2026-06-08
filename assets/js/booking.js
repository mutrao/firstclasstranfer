/**
 * FIRST CLASS TRANSFER ABIDJAN
 * Booking Page JavaScript
 */

'use strict';

// =============================================
// PRICING DATA
// =============================================
const PRICING = {
  zone1: { label: 'Plateau / Cocody / Marcory', economy: 15000, business: 25000 },
  zone2: { label: 'Yopougon / Adjamé / Abobo', economy: 20000, business: 32000 },
  zone3: { label: 'Bingerville / Port-Bouët',  economy: 18000, business: 28000 },
  zone4: { label: 'Bassam / Braffedon',         economy: 35000, business: 50000 },
};

const VAN_SURCHARGE = 10000;
const WA_NUMBER = '2250700000000';

// =============================================
// STATE
// =============================================
let bookingState = {
  currentStep: 1,
  totalSteps: 4,

  // Step 1
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

  // Update progress bar
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
  const zoneInfo = PRICING[zone];

  $('#summary-pickup').textContent = zoneInfo ? zoneInfo.label : '—';
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
// STEP 1 - TRIP DETAILS
// =============================================
$('#btn-next-1')?.addEventListener('click', () => {
  if (!validateStep1()) return;

  // Save
  bookingState.zone       = $('#trip-zone')?.value || '';
  bookingState.date       = $('#trip-date')?.value || '';
  bookingState.time       = $('#trip-time')?.value || '';
  bookingState.passengers = parseInt($('#trip-passengers')?.value) || 1;

  // Update vehicle prices for step 2
  renderVehicleOptions();
  showStep(2);
});

function validateStep1() {
  let valid = true;

  const zone = $('#trip-zone');
  const date = $('#trip-date');
  const time = $('#trip-time');
  const pax  = $('#trip-passengers');

  clearError(zone); clearError(date); clearError(time); clearError(pax);

  if (!zone?.value) { showError(zone, 'Veuillez sélectionner votre zone de départ.'); valid = false; }
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
  const zoneInfo = PRICING[zone];
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
      price: zoneInfo.economy + VAN_SURCHARGE,
    },
  ];

  const container = $('#vehicle-options-container');
  if (!container) return;

  container.innerHTML = vehicles.map(v => {
    const priceLabel = formatPrice(pax > 4 && v.id !== 'van' ? v.price + VAN_SURCHARGE : v.price);
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

  // Bind click
  container.querySelectorAll('.vehicle-option').forEach(card => {
    card.addEventListener('click', () => {
      container.querySelectorAll('.vehicle-option').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      bookingState.vehicle = card.dataset.vehicle;

      let price = parseInt(card.dataset.price);
      if (bookingState.passengers > 4 && bookingState.vehicle !== 'van') {
        price += VAN_SURCHARGE;
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

  // Populate payment summary
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
  const zoneInfo = PRICING[zone];

  $('#pay-summary-pickup').textContent  = zoneInfo ? zoneInfo.label : '—';
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

// Payment option selection
$$('.payment-option').forEach(opt => {
  opt.addEventListener('click', () => {
    $$('.payment-option').forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
    bookingState.paymentMethod = opt.dataset.method;
  });
});

// Final confirm
$('#btn-confirm-payment')?.addEventListener('click', () => {
  if (!bookingState.paymentMethod) {
    showToast('Veuillez sélectionner un mode de paiement.', 'error');
    return;
  }

  // Generate booking reference
  bookingState.bookingRef = generateRef();

  // Save to localStorage
  localStorage.setItem('lastBooking', JSON.stringify(bookingState));

  // Show success modal briefly, then redirect
  showConfirmModal();
});

function showConfirmModal() {
  const modal = $('#booking-success-modal');
  const refEl = $('#modal-booking-ref');
  if (refEl) refEl.textContent = bookingState.bookingRef;
  modal?.classList.add('active');

  // Auto-redirect after 2.5s
  setTimeout(() => {
    window.location.href = 'confirmation.html';
  }, 2500);
}

// =============================================
// DATE DEFAULTS
// =============================================
window.addEventListener('DOMContentLoaded', () => {
  const dateInput = $('#trip-date');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
  }

  // Pre-fill from session storage (from hero form)
  const init = sessionStorage.getItem('bookingInit');
  if (init) {
    try {
      const data = JSON.parse(init);
      if ($('#trip-zone') && data.zone) $('#trip-zone').value = data.zone;
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
