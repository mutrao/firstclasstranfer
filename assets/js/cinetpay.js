/**
 * FIRST CLASS TRANSFER — CinetPay Integration
 *
 * Replace the placeholder values below with your real credentials
 * from your CinetPay merchant dashboard (cinetpay.com).
 *
 * CINETPAY_API_KEY  → "Clé API" in your dashboard
 * CINETPAY_SITE_ID  → "Site ID" (numeric) in your dashboard
 * CINETPAY_MODE     → 'TEST' during development, 'PRODUCTION' when live
 * CINETPAY_NOTIFY_URL → URL of your serverless webhook (optional for MVP,
 *                        needed for reliable payment confirmation in production)
 */

const CINETPAY_CONFIG = {
  apikey:     'VOTRE_CLE_API',          // ← remplacer
  site_id:    'VOTRE_SITE_ID',          // ← remplacer
  mode:       'TEST',                   // 'TEST' | 'PRODUCTION'
  notify_url: '',                       // optional: webhook URL
  return_url: window.location.origin + '/firstclasstranfer/confirmation.html',
};

/**
 * Load CinetPay Checkout SDK dynamically (avoids blocking page load).
 */
function loadCinetPaySDK() {
  return new Promise((resolve, reject) => {
    if (window.CinetPay) { resolve(); return; }
    const s = document.createElement('script');
    s.src = 'https://cdn.cinetpay.com/seamless/main.js';
    s.onload = resolve;
    s.onerror = () => reject(new Error('Impossible de charger le SDK CinetPay.'));
    document.head.appendChild(s);
  });
}

/**
 * Initiate a CinetPay payment popup for the given booking.
 *
 * @param {object} booking  - bookingState snapshot
 * @param {function} onSuccess  - called with (transactionId) on payment success
 * @param {function} onFailure  - called with (errorData) on payment failure/cancel
 */
async function initCinetPayCheckout(booking, onSuccess, onFailure) {
  try {
    await loadCinetPaySDK();
  } catch (err) {
    onFailure({ message: err.message });
    return;
  }

  const CP = window.CinetPay;
  if (!CP) { onFailure({ message: 'SDK non disponible.' }); return; }

  // Build a stable transaction ID from the booking reference
  const transactionId = booking.bookingRef || ('FCT-' + Date.now());
  const amount        = booking.totalPrice || 0;

  if (amount <= 0) {
    onFailure({ message: 'Montant invalide. Veuillez sélectionner un véhicule.' });
    return;
  }

  CP.setConfig({
    apikey:     CINETPAY_CONFIG.apikey,
    site_id:    CINETPAY_CONFIG.site_id,
    notify_url: CINETPAY_CONFIG.notify_url,
    return_url: CINETPAY_CONFIG.return_url,
    mode:       CINETPAY_CONFIG.mode,
  });

  CP.getCheckout({
    transaction_id:        transactionId,
    amount:                amount,
    currency:              'XOF',
    channels:              'ALL',           // Orange Money, MTN, Wave, CB…
    description:           `Transfert aéroport — ${transactionId}`,
    customer_name:         booking.name    || '',
    customer_surname:      '',
    customer_email:        booking.email   || 'client@fct.ci',
    customer_phone_number: booking.phone   || '',
    customer_address:      'Abidjan',
    customer_city:         'Abidjan',
    customer_country:      'CI',
    customer_state:        'CI',
    customer_zip_code:     '00225',
  });

  CP.waitResponse(function (data) {
    if (data.status === 'ACCEPTED') {
      onSuccess(transactionId);
    } else {
      onFailure(data);
    }
  });

  CP.onError(function (data) {
    onFailure(data);
  });
}

// Export for use in booking.js
window.FCT_CinetPay = { initCinetPayCheckout, CINETPAY_CONFIG };
