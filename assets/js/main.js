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
  zone1: { label: 'Zone 1 — Plateau, Cocody, Riviera, Angré, Marcory, Treichville, Port-Bouët', basic: 20000, premium: 25000, business: 45000 },
  zone2: { label: 'Zone 2 — Yopougon, Abobo, Koumassi, Attécoubé', basic: 25000, premium: 32000, business: 55000 },
  zone3: { label: 'Zone 3 — Bingerville, Anyama, Songon, Abatta', basic: 22000, premium: 28000, business: 50000 },
  zone4: { label: 'Zone 4 — Grand-Bassam, Dabou, Assinie, Jacqueville', basic: 45000, premium: 55000, business: 80000 },
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
const passengersInput = document.getElementById('hero-passengers');

let heroDirection = 'departure'; // 'departure' | 'arrival'
let heroDetectedZone = null;

// Hero neighborhood autocomplete data
const HERO_NB_LIST = [
  {d:'Plateau',z:'zone1'},{d:'Cocody',z:'zone1'},{d:'Riviera 1',z:'zone1'},{d:'Riviera 2',z:'zone1'},
  {d:'Riviera 3',z:'zone1'},{d:'Riviera 4',z:'zone1'},{d:'Riviera Golf',z:'zone1'},{d:'Riviera Palmeraie',z:'zone1'},
  {d:'2 Plateaux',z:'zone1'},{d:'2 Plateaux Vallon',z:'zone1'},{d:'Angré',z:'zone1'},{d:'Angré Château',z:'zone1'},
  {d:'Blockhaus',z:'zone1'},{d:'Bonoumin',z:'zone1'},{d:'Mermoz',z:'zone1'},{d:'Ambassades',z:'zone1'},
  {d:'Anono',z:'zone1'},{d:'Treichville',z:'zone1'},{d:'Zone 4',z:'zone1'},{d:'Zone 3',z:'zone1'},
  {d:'Marcory',z:'zone1'},{d:'Marcory Résidentiel',z:'zone1'},{d:'Port-Bouët',z:'zone1'},
  {d:'Vridi',z:'zone1'},{d:'Vridi Canal',z:'zone1'},{d:'Gonzagueville',z:'zone1'},
  {d:'Biétry',z:'zone1'},{d:'Zone Industrielle',z:'zone1'},{d:'Adjamé',z:'zone1'},
  {d:'Williamsville',z:'zone1'},{d:'Jean-Folly',z:'zone1'},{d:'M\'Badon',z:'zone1'},
  {d:'Yopougon',z:'zone2'},{d:'Yopougon Wassakara',z:'zone2'},{d:'Yopougon Niangon',z:'zone2'},
  {d:'Yopougon Selmer',z:'zone2'},{d:'Yopougon Banco',z:'zone2'},{d:'Yopougon Gesco',z:'zone2'},
  {d:'Yopougon SIDECI',z:'zone2'},{d:'Yopougon Lokoa',z:'zone2'},{d:'Yopougon Koweït',z:'zone2'},
  {d:'Yopougon Toits Rouges',z:'zone2'},{d:'Yopougon Académie',z:'zone2'},{d:'Yopougon Doukouré',z:'zone2'},
  {d:'Abobo',z:'zone2'},{d:'Abobo Gare',z:'zone2'},{d:'Abobo PK 18',z:'zone2'},
  {d:'Attécoubé',z:'zone2'},{d:'Koumassi',z:'zone2'},{d:'Koumassi Remblai',z:'zone2'},
  {d:'Bingerville',z:'zone3'},{d:'Bingerville Centre',z:'zone3'},{d:'Moossou',z:'zone3'},
  {d:'Ebimpé',z:'zone3'},{d:'PK 20',z:'zone3'},{d:'PK 22',z:'zone3'},
  {d:'Songon',z:'zone3'},{d:'Anyama',z:'zone3'},{d:'Locodjro',z:'zone3'},
  {d:'Niangon Sud',z:'zone3'},{d:'Abatta',z:'zone3'},{d:'Cocody Abatta',z:'zone3'},
  {d:'Grand-Bassam',z:'zone4'},{d:'Bassam Centre',z:'zone4'},{d:'Assinie',z:'zone4'},
  {d:'Braffedon',z:'zone4'},{d:'Jacqueville',z:'zone4'},{d:'Dabou',z:'zone4'},
  {d:'Sikensi',z:'zone4'},{d:'Azaguié',z:'zone4'},{d:'Bonoua',z:'zone4'},{d:'Alépé',z:'zone4'},
].sort((a,b) => a.d.localeCompare(b.d, 'fr'));

const HERO_ZONE_NAMES = { zone1:'Zone 1', zone2:'Zone 2', zone3:'Zone 3', zone4:'Zone 4' };

function populateHeroDatalist() { /* replaced by custom autocomplete */ }

function initHeroAutocomplete() {
  const input = document.getElementById('hero-neighborhood');
  const dropdown = document.getElementById('hero-nb-dropdown');
  if (!input || !dropdown) return;

  let hiIdx = -1;

  function norm(s) {
    return (s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/\s+/g,' ').trim();
  }

  function renderHeroDropdown(q) {
    hiIdx = -1;
    const nq = norm(q);
    const results = nq
      ? HERO_NB_LIST.filter(e => norm(e.d).includes(nq)).slice(0,30)
      : HERO_NB_LIST.slice(0,50);

    dropdown.innerHTML = results.map(e =>
      `<div class="nb-option" data-value="${e.d}" data-zone="${e.z}">
        <span>${q ? e.d.replace(new RegExp('('+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi'),'<strong style="color:var(--gold,#c9a84c)">$1</strong>') : e.d}</span>
        <span class="nb-zone-tag">${HERO_ZONE_NAMES[e.z]||e.z}</span>
      </div>`
    ).join('') + (q ? `<div class="nb-option nb-add-new" data-value="${q}" data-zone="unknown"><span><i class="fas fa-plus-circle"></i> Utiliser "<strong>${q}</strong>"</span></div>` : '');

    dropdown.querySelectorAll('.nb-option').forEach(el => {
      el.addEventListener('mousedown', ev => {
        ev.preventDefault();
        input.value = el.dataset.value;
        const zone = el.dataset.zone;
        heroDetectedZone = zone !== 'unknown' ? zone : null;
        updateHeroPrice();
        dropdown.style.display = 'none';
        input.setAttribute('aria-expanded','false');
      });
    });
  }

  input.addEventListener('input', () => {
    renderHeroDropdown(input.value.trim());
    dropdown.style.display = 'block';
    input.setAttribute('aria-expanded','true');
    heroDetectedZone = detectZoneHero(input.value);
    updateHeroPrice();
  });
  input.addEventListener('focus', () => {
    renderHeroDropdown(input.value.trim());
    dropdown.style.display = 'block';
    input.setAttribute('aria-expanded','true');
  });
  input.addEventListener('keydown', e => {
    const items = dropdown.querySelectorAll('.nb-option');
    if (e.key==='ArrowDown') { e.preventDefault(); hiIdx=Math.min(hiIdx+1,items.length-1); items.forEach((el,i)=>el.classList.toggle('highlighted',i===hiIdx)); items[hiIdx]?.scrollIntoView({block:'nearest'}); }
    else if (e.key==='ArrowUp') { e.preventDefault(); hiIdx=Math.max(hiIdx-1,0); items.forEach((el,i)=>el.classList.toggle('highlighted',i===hiIdx)); items[hiIdx]?.scrollIntoView({block:'nearest'}); }
    else if (e.key==='Enter' && hiIdx>=0) { e.preventDefault(); items[hiIdx]?.dispatchEvent(new MouseEvent('mousedown')); }
    else if (e.key==='Escape') { dropdown.style.display='none'; input.setAttribute('aria-expanded','false'); }
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('#hero-nb-autocomplete-wrap')) { dropdown.style.display='none'; input.setAttribute('aria-expanded','false'); }
  });
}

function updateHeroPrice() {
  if (!heroDetectedZone) {
    if (priceDisplay) priceDisplay.style.display = 'none';
    return;
  }
  const zoneInfo = PRICING_ZONES[heroDetectedZone];
  if (!zoneInfo) return;

  const fromLabel = window.fctI18n ? window.fctI18n.t('hero_price_from') : 'À partir de';
  const price = zoneInfo.basic;

  if (priceDisplay) {
    priceDisplay.innerHTML = `
      <div class="price-estimate">
        <span class="price-label"><i class="fa-solid fa-map-pin" style="color:var(--gold);margin-right:4px;"></i> ${zoneInfo.label.split('—')[0].trim()} &rarr;</span>
        <span class="price-amount">${fromLabel} ${price.toLocaleString('fr-FR')} FCFA</span>
      </div>`;
    priceDisplay.style.display = 'block';
  }
}

// Direction toggle
function switchHeroDirection(dir) {
  heroDirection = dir;

  document.querySelectorAll('.hero-dir-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.dir === dir);
  });

  const arrNotice = document.getElementById('hero-arr-notice');
  const flightNotice = document.querySelector('.hero-flight-notice span[data-i18n-html]');
  const dateLabel = document.getElementById('hero-date-label');
  const timeLabel = document.getElementById('hero-time-label');

  if (dir === 'arrival') {
    if (arrNotice) arrNotice.style.display = 'flex';
    if (flightNotice && window.fctI18n) {
      flightNotice.setAttribute('data-i18n-html', 'hero_flight_arr_notice');
      flightNotice.innerHTML = window.fctI18n.t('hero_flight_arr_notice');
    }
    if (dateLabel && window.fctI18n) {
      dateLabel.setAttribute('data-i18n', 'hero_date_arr_label');
      dateLabel.textContent = window.fctI18n.t('hero_date_arr_label');
    }
    if (timeLabel && window.fctI18n) {
      timeLabel.setAttribute('data-i18n', 'hero_time_arr_label');
      timeLabel.textContent = window.fctI18n.t('hero_time_arr_label');
    }
  } else {
    if (arrNotice) arrNotice.style.display = 'none';
    if (flightNotice && window.fctI18n) {
      flightNotice.setAttribute('data-i18n-html', 'hero_flight_notice_text');
      flightNotice.innerHTML = window.fctI18n.t('hero_flight_notice_text');
    }
    if (dateLabel && window.fctI18n) {
      dateLabel.setAttribute('data-i18n', 'hero_date_form_label');
      dateLabel.textContent = window.fctI18n.t('hero_date_form_label');
    }
    if (timeLabel && window.fctI18n) {
      timeLabel.setAttribute('data-i18n', 'hero_time_form_label');
      timeLabel.textContent = window.fctI18n.t('hero_time_form_label');
    }
  }
}

document.querySelectorAll('.hero-dir-btn').forEach(btn => {
  btn.addEventListener('click', () => switchHeroDirection(btn.dataset.dir));
});

// Neighbourhood input events
const heroNbInput = document.getElementById('hero-neighborhood');
heroNbInput?.addEventListener('input', () => {
  heroDetectedZone = detectZoneHero(heroNbInput.value);
  updateHeroPrice();
});
heroNbInput?.addEventListener('change', () => {
  heroDetectedZone = detectZoneHero(heroNbInput.value);
  updateHeroPrice();
});

passengersInput?.addEventListener('input', updateHeroPrice);

heroForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const flightDate = document.getElementById('hero-date')?.value || '';
  const flightTime = document.getElementById('hero-time')?.value || '';
  const passengers = document.getElementById('hero-passengers')?.value || 1;
  const luggage    = document.getElementById('hero-luggage')?.value || 1;

  let pickupTime = '';
  if (heroDirection === 'departure' && flightTime) {
    const [h, m] = flightTime.split(':').map(Number);
    const totalMins = h * 60 + m - 210;
    const ph = Math.floor(((totalMins % 1440) + 1440) % 1440 / 60);
    const pm = ((totalMins % 1440) + 1440) % 1440 % 60;
    pickupTime = `${String(ph).padStart(2,'0')}:${String(pm).padStart(2,'0')}`;
  }

  const formData = {
    pickupMethod: 'neighborhood',
    neighborhood: heroNbInput?.value || '',
    zone: heroDetectedZone || '',
    passengers,
    luggage,
    date: flightDate,
    time: heroDirection === 'arrival' ? flightTime : pickupTime,
    flightTime,
    direction: heroDirection,
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
const WA_NUMBER = '33614058484';

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
  initHeroAutocomplete();

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
      if (data.direction) switchHeroDirection(data.direction);
      if (data.neighborhood && heroNbInput) {
        heroNbInput.value = data.neighborhood;
        heroDetectedZone = detectZoneHero(data.neighborhood) || data.zone || null;
      } else if (data.zone) {
        heroDetectedZone = data.zone;
      }
      if (passengersInput && data.passengers) passengersInput.value = data.passengers;
      if (document.getElementById('hero-date') && data.date) {
        document.getElementById('hero-date').value = data.date;
      }
      if (document.getElementById('hero-time') && data.flightTime) {
        document.getElementById('hero-time').value = data.flightTime;
      }
      updateHeroPrice();
    } catch (err) {
      // ignore
    }
  }
});
