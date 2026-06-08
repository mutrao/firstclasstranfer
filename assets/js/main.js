/**
 * FIRST CLASS TRANSFER ABIDJAN
 * Main JavaScript - Landing Page
 */

'use strict';

// =============================================
// NAVBAR SCROLL EFFECT
// =============================================
const navbar = document.querySelector('.navbar');

function handleNavbarScroll() {
  if (window.scrollY > 60) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });

// =============================================
// MOBILE NAVIGATION
// =============================================
const hamburger = document.querySelector('.nav-hamburger');
const mobileNav = document.querySelector('.nav-mobile');
const mobileClose = document.querySelector('.nav-mobile-close');

hamburger?.addEventListener('click', () => {
  mobileNav?.classList.add('active');
  document.body.style.overflow = 'hidden';
});

mobileClose?.addEventListener('click', closeMobileNav);

mobileNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMobileNav);
});

function closeMobileNav() {
  mobileNav?.classList.remove('active');
  document.body.style.overflow = '';
}

// =============================================
// INTERSECTION OBSERVER ANIMATIONS
// =============================================
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observerOptions = {
  root: null,
  rootMargin: '0px 0px -60px 0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

animatedElements.forEach(el => observer.observe(el));

// =============================================
// FAQ ACCORDION
// =============================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question?.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    faqItems.forEach(i => i.classList.remove('active'));
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// =============================================
// PRICING / NEIGHBORHOODS DATA (shared inline)
// =============================================
const PRICING_ZONES = {
  zone1: { label: 'Zone 1 — Plateau, Cocody, Riviera, Angré, Marcory, Treichville, Port-Bouët', economy: 15000, business: 25000, van: 25000 },
  zone2: { label: 'Zone 2 — Yopougon, Abobo, Koumassi, Attécoubé', economy: 20000, business: 32000, van: 30000 },
  zone3: { label: 'Zone 3 — Bingerville, Anyama, Songon, Abatta', economy: 18000, business: 28000, van: 28000 },
  zone4: { label: 'Zone 4 — Grand-Bassam, Dabou, Assinie, Jacqueville', economy: 35000, business: 50000, van: 50000 },
};

// Compact neighborhood→zone map for hero use
const HERO_NEIGHBORHOODS = {
  // Zone 1
  'plateau': 'zone1', 'cocody': 'zone1', 'riviera 1': 'zone1', 'riviera 2': 'zone1',
  'riviera 3': 'zone1', 'riviera 4': 'zone1', 'riviera golf': 'zone1', 'riviera palmeraie': 'zone1',
  '2 plateaux': 'zone1', 'ii plateaux': 'zone1', '2 plateaux vallon': 'zone1',
  'angre': 'zone1', 'angré': 'zone1', 'angre chateau': 'zone1', 'blockhaus': 'zone1',
  'bonoumin': 'zone1', 'mermoz': 'zone1', 'cocody village': 'zone1', 'ambassades': 'zone1',
  'anono': 'zone1', 'treichville': 'zone1', 'zone 4': 'zone1', 'zone 3': 'zone1',
  'marcory': 'zone1', 'marcory residentiel': 'zone1', 'port-bouet': 'zone1', 'port-bouët': 'zone1',
  'vridi': 'zone1', 'vridi canal': 'zone1', 'gonzagueville': 'zone1', 'bietry': 'zone1',
  'zone industrielle': 'zone1', 'adjame': 'zone1', 'adjamé': 'zone1', 'williamsville': 'zone1',
  'marche adjame': 'zone1', 'jean-folly': 'zone1', 'biétry': 'zone1',
  // Zone 2
  'yopougon': 'zone2', 'yopougon wassakara': 'zone2', 'yopougon niangon': 'zone2',
  'yopougon selmer': 'zone2', 'yopougon banco': 'zone2', 'yopougon gesco': 'zone2',
  'yopougon sideci': 'zone2', 'yopougon lokoa': 'zone2', 'yopougon koweit': 'zone2',
  'yopougon toits rouges': 'zone2', 'abobo': 'zone2', 'abobo gare': 'zone2',
  'abobo pk 18': 'zone2', 'attecoube': 'zone2', 'attécoubé': 'zone2',
  'koumassi': 'zone2', 'koumassi remblai': 'zone2', 'koumassi commerce': 'zone2',
  // Zone 3
  'bingerville': 'zone3', 'bingerville centre': 'zone3', 'moossou': 'zone3',
  'ebimpe': 'zone3', 'ebimpé': 'zone3', 'pk 20': 'zone3', 'pk 22': 'zone3',
  'songon': 'zone3', 'anyama': 'zone3', 'locodjro': 'zone3', 'niangon sud': 'zone3',
  'abatta': 'zone3', 'cocody abatta': 'zone3',
  // Zone 4
  'grand-bassam': 'zone4', 'assinie': 'zone4', 'bassam centre': 'zone4',
  'braffedon': 'zone4', 'jacqueville': 'zone4', 'dabou': 'zone4', 'sikensi': 'zone4',
  'azaguie': 'zone4', 'azaguié': 'zone4', 'agboville': 'zone4', 'bonoua': 'zone4',
  'alepe': 'zone4', 'alépé': 'zone4',
};

function normalizeHero(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ').trim();
}

function detectZoneHero(input) {
  if (!input) return null;
  const n = normalizeHero(input);
  if (HERO_NEIGHBORHOODS[n]) return HERO_NEIGHBORHOODS[n];
  for (const [key, zone] of Object.entries(HERO_NEIGHBORHOODS)) {
    if (n.includes(key) || key.includes(n)) return zone;
  }
  return null;
}

// =============================================
// HERO QUICK BOOKING FORM
// =============================================
const heroForm = document.getElementById('hero-booking-form');
const priceDisplay = document.getElementById('hero-price-display');
const vehicleSelect = document.getElementById('hero-vehicle');
const passengersInput = document.getElementById('hero-passengers');
const heroMethodBtns = document.querySelectorAll('.hero-method-btn');

let heroPickupMethod = 'neighborhood';
let heroDetectedZone = null;

// Populate hero datalist
function populateHeroDatalist() {
  const datalist = document.getElementById('hero-neighborhoods-list');
  if (!datalist) return;
  const names = [
    'Plateau','Cocody','Riviera 1','Riviera 2','Riviera 3','Riviera 4','Riviera Golf','Riviera Palmeraie',
    '2 Plateaux','2 Plateaux Vallon','Angré','Angré Château','Blockhaus','Bonoumin','Mermoz',
    'Ambassades','Treichville','Zone 4','Marcory','Marcory Résidentiel','Port-Bouët','Vridi',
    'Vridi Canal','Gonzagueville','Biétry','Zone Industrielle','Adjamé','Williamsville',
    'Yopougon','Yopougon Wassakara','Yopougon Niangon','Yopougon Selmer','Yopougon Banco',
    'Yopougon Gesco','Yopougon Toits Rouges','Abobo','Abobo Gare','Attécoubé',
    'Koumassi','Koumassi Remblai',
    'Bingerville','Bingerville Centre','Moossou','Ebimpé','PK 20','PK 22',
    'Songon','Anyama','Locodjro','Niangon Sud','Abatta','Cocody Abatta',
    'Grand-Bassam','Assinie','Braffedon','Jacqueville','Dabou','Sikensi','Azaguié','Bonoua','Alépé'
  ];
  names.sort((a, b) => a.localeCompare(b, 'fr'));
  datalist.innerHTML = names.map(n => `<option value="${n}">`).join('');
}

function updateHeroPrice() {
  const vehicle = vehicleSelect?.value;
  const passengers = parseInt(passengersInput?.value) || 1;
  if (!heroDetectedZone || !vehicle) {
    if (priceDisplay) priceDisplay.style.display = 'none';
    return;
  }
  const zoneInfo = PRICING_ZONES[heroDetectedZone];
  if (!zoneInfo) return;

  let price;
  if (vehicle === 'van' || passengers > 4) {
    price = zoneInfo.van;
  } else {
    price = zoneInfo[vehicle] || zoneInfo.economy;
  }

  if (priceDisplay) {
    priceDisplay.innerHTML = `
      <div class="price-estimate">
        <span class="price-label"><i class="fa-solid fa-map-pin" style="color:var(--gold);margin-right:4px;"></i> ${zoneInfo.label.split('—')[0].trim()} détectée &rarr;</span>
        <span class="price-amount">${price.toLocaleString('fr-FR')} FCFA</span>
      </div>`;
    priceDisplay.style.display = 'block';
  }
}

// Hero method toggle
function switchHeroMethod(method) {
  heroPickupMethod = method;
  heroDetectedZone = null;
  if (priceDisplay) priceDisplay.style.display = 'none';

  heroMethodBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.method === method);
  });

  const nbField = document.getElementById('hero-neighborhood-field');
  const zoneField = document.getElementById('hero-zone-field');
  if (nbField) nbField.style.display = method === 'neighborhood' ? 'block' : 'none';
  if (zoneField) zoneField.style.display = method === 'address' ? 'block' : 'none';
}

heroMethodBtns.forEach(btn => {
  btn.addEventListener('click', () => switchHeroMethod(btn.dataset.method));
});

// Neighborhood input events
const heroNbInput = document.getElementById('hero-neighborhood');
heroNbInput?.addEventListener('input', () => {
  const zone = detectZoneHero(heroNbInput.value);
  heroDetectedZone = zone;
  updateHeroPrice();
});
heroNbInput?.addEventListener('change', () => {
  const zone = detectZoneHero(heroNbInput.value);
  heroDetectedZone = zone;
  updateHeroPrice();
});

// Zone select (legacy / address method)
const heroZoneSelect = document.getElementById('hero-zone');
heroZoneSelect?.addEventListener('change', () => {
  heroDetectedZone = heroZoneSelect.value || null;
  updateHeroPrice();
});

vehicleSelect?.addEventListener('change', updateHeroPrice);
passengersInput?.addEventListener('input', updateHeroPrice);

heroForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    pickupMethod: heroPickupMethod,
    neighborhood: heroPickupMethod === 'neighborhood' ? (heroNbInput?.value || '') : '',
    zone: heroDetectedZone || heroZoneSelect?.value || '',
    vehicle: vehicleSelect?.value || '',
    passengers: passengersInput?.value || 1,
    date: document.getElementById('hero-date')?.value || '',
    time: document.getElementById('hero-time')?.value || '',
  };

  sessionStorage.setItem('bookingInit', JSON.stringify(formData));
  window.location.href = 'booking.html';
});

// =============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// =============================================
// COUNTER ANIMATION (STATS)
// =============================================
function animateCounter(el) {
  const target = parseInt(el.dataset.target || el.textContent.replace(/\D/g, ''));
  const suffix = el.dataset.suffix || '';
  const duration = 1500;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString('fr-FR') + suffix;
  }, 16);
}

const statNumbers = document.querySelectorAll('.hero-stat .num[data-target]');
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNumbers.forEach(el => statsObserver.observe(el));

// =============================================
// WHATSAPP REDIRECT
// =============================================
const WA_NUMBER = '2250700000000';

function openWhatsApp(message = '') {
  const text = encodeURIComponent(message || 'Bonjour, je souhaite réserver un transfert aéroport.');
  window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
}

document.querySelectorAll('[data-whatsapp]').forEach(btn => {
  btn.addEventListener('click', () => {
    const message = btn.dataset.whatsapp;
    openWhatsApp(message);
  });
});

// =============================================
// INIT DATE & TIME DEFAULTS
// =============================================
window.addEventListener('DOMContentLoaded', () => {
  populateHeroDatalist();

  const dateInput = document.getElementById('hero-date');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
  }

  // Restore from session storage if coming back
  const saved = sessionStorage.getItem('bookingInit');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      if (data.pickupMethod === 'neighborhood' && data.neighborhood) {
        switchHeroMethod('neighborhood');
        if (heroNbInput) {
          heroNbInput.value = data.neighborhood;
          heroDetectedZone = detectZoneHero(data.neighborhood);
        }
      } else if (data.zone) {
        switchHeroMethod('address');
        if (heroZoneSelect) heroZoneSelect.value = data.zone;
        heroDetectedZone = data.zone;
      }
      if (vehicleSelect && data.vehicle) vehicleSelect.value = data.vehicle;
      if (passengersInput && data.passengers) passengersInput.value = data.passengers;
      if (document.getElementById('hero-date') && data.date) {
        document.getElementById('hero-date').value = data.date;
      }
      if (document.getElementById('hero-time') && data.time) {
        document.getElementById('hero-time').value = data.time;
      }
      updateHeroPrice();
    } catch (err) {
      // ignore
    }
  }
});
