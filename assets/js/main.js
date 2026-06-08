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
    // Close all
    faqItems.forEach(i => i.classList.remove('active'));
    // Open clicked if was closed
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// =============================================
// HERO QUICK BOOKING FORM
// =============================================
const heroForm = document.getElementById('hero-booking-form');

const PRICING = {
  zone1: { economy: 15000, business: 25000 },
  zone2: { economy: 20000, business: 32000 },
  zone3: { economy: 18000, business: 28000 },
  zone4: { economy: 35000, business: 50000 },
};
const VAN_SURCHARGE = 10000;

function calculatePrice(zone, vehicleType, passengers) {
  if (!zone || !vehicleType) return null;
  const zoneKey = zone.toLowerCase();
  const prices = PRICING[zoneKey];
  if (!prices) return null;

  let base = prices[vehicleType] || prices.economy;
  if (parseInt(passengers) > 4 || vehicleType === 'van') {
    base += VAN_SURCHARGE;
  }
  return base;
}

// Price display in hero form
const zoneSelect = document.getElementById('hero-zone');
const vehicleSelect = document.getElementById('hero-vehicle');
const passengersInput = document.getElementById('hero-passengers');
const priceDisplay = document.getElementById('hero-price-display');

function updateHeroPrice() {
  if (!zoneSelect || !vehicleSelect) return;
  const price = calculatePrice(
    zoneSelect.value,
    vehicleSelect.value,
    passengersInput?.value || 1
  );
  if (priceDisplay) {
    if (price) {
      priceDisplay.innerHTML = `
        <div class="price-estimate">
          <span class="price-label">Estimation:</span>
          <span class="price-amount">${price.toLocaleString('fr-FR')} FCFA</span>
        </div>`;
      priceDisplay.style.display = 'block';
    } else {
      priceDisplay.style.display = 'none';
    }
  }
}

zoneSelect?.addEventListener('change', updateHeroPrice);
vehicleSelect?.addEventListener('change', updateHeroPrice);
passengersInput?.addEventListener('input', updateHeroPrice);

heroForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    zone: zoneSelect?.value || '',
    vehicle: vehicleSelect?.value || '',
    passengers: passengersInput?.value || 1,
    date: document.getElementById('hero-date')?.value || '',
    time: document.getElementById('hero-time')?.value || '',
  };

  // Store in session storage to pre-fill booking page
  sessionStorage.setItem('bookingInit', JSON.stringify(formData));

  // Redirect to booking page
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

// Attach to WhatsApp CTA buttons
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
      if (zoneSelect && data.zone) zoneSelect.value = data.zone;
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
