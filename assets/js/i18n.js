/**
 * FIRST CLASS TRANSFER ABIDJAN
 * Internationalisation — FR / EN
 * Devises — FCFA / EUR / USD / GBP
 */

'use strict';

// ─── Exchange rates (FCFA as base) ────────────────────────────────────────────
// EUR is pegged: 1 EUR = 655.957 XOF
const RATES = { XOF: 1, EUR: 1 / 655.957, USD: 1 / 590, GBP: 1 / 750, CAD: 1 / 435 };
const CURRENCY_LABELS = { XOF: 'FCFA', EUR: '€', USD: '$', GBP: '£', CAD: 'CA$' };
const CURRENCY_DECIMALS = { XOF: 0, EUR: 0, USD: 0, GBP: 0, CAD: 0 };

// ─── Translations ──────────────────────────────────────────────────────────────
const T = {
  fr: {
    // Navbar
    nav_services: 'Services', nav_fleet: 'Flotte', nav_pricing: 'Tarifs',
    nav_faq: 'FAQ', nav_call: 'Appel', nav_book: 'Réserver',
    nav_book_now: 'Réserver Maintenant', nav_home: 'Accueil',
    // Hero
    hero_badge: 'Service Premium · Ponctuel · Fiable',
    hero_title_line1: 'Votre Transfert Aéroport,',
    hero_title_em: 'Simplement Parfait',
    hero_desc: 'Réservez votre transfert vers l\'Aéroport Félix-Houphouët-Boigny en 2 minutes — départ ou arrivée. Confirmation immédiate. Votre chauffeur vous contacte sur WhatsApp le jour J.',
    hero_book_btn: 'Réserver Maintenant',
    hero_stat_transfers: 'Transferts réalisés',
    hero_stat_satisfied: 'Clients satisfaits',
    hero_stat_avail: 'Disponibilité',
    // Booking card
    hero_card_title: 'Estimation instantanée',
    hero_card_sub: 'Obtenez votre tarif en quelques secondes',
    hero_by_nb: 'Par quartier', hero_by_zone: 'Par zone',
    hero_nb_label: 'Votre quartier de départ',
    hero_nb_ph: 'Ex: Cocody Riviera 2, Angré, Yopougon...',
    hero_zone_label: 'Zone de départ',
    hero_zone_ph: 'Sélectionnez votre zone',
    hero_vehicle_label: 'Véhicule', hero_pax_label: 'Passagers',
    hero_date_label: 'Date', hero_time_label: 'Heure',
    hero_cta: 'Voir les Disponibilités',
    trust_confirm: 'Confirmation immédiate',
    trust_cancel: 'Annulation flexible',
    trust_wa: 'Suivi WhatsApp',
    // How it works
    hiw_label: 'Comment ça marche',
    hiw_title: 'Simple dans les <em class="gold">2 sens</em>',
    hiw_sub: 'Que vous partiez à l\'aéroport ou que vous arriviez à Abidjan, nous gérons tout en 3 étapes.',
    hiw_tab_dep: '<i class="fas fa-plane-departure"></i> Départ vers l\'aéroport',
    hiw_tab_arr: '<i class="fas fa-plane-arrival"></i> Arrivée depuis l\'aéroport',
    hiw_dep1_title: 'Réservez en ligne',
    hiw_dep1_desc: 'Indiquez votre adresse de départ, la date, l\'heure et votre numéro de vol. Notre formulaire prend moins de 2 minutes.',
    hiw_dep2_title: 'Choisissez votre véhicule',
    hiw_dep2_desc: 'Sélectionnez Économique, Premium (Van) ou Business selon votre groupe et vos bagages. Le tarif est affiché clairement par zone, sans frais cachés.',
    hiw_dep3_title: 'Le chauffeur vous contacte',
    hiw_dep3_desc: 'Le jour J, votre chauffeur vous envoie un message WhatsApp avec ses coordonnées. Il arrive à l\'heure exacte convenue, sans exception.',
    hiw_arr1_title: 'Réservez en ligne',
    hiw_arr1_desc: 'Indiquez votre numéro de vol, l\'heure d\'atterrissage et votre adresse de destination à Abidjan. Rapide et simple.',
    hiw_arr2_title: 'Choisissez votre véhicule',
    hiw_arr2_desc: 'Sélectionnez le véhicule adapté à votre groupe et vos bagages. Tarif fixe selon votre zone de destination, sans surprise.',
    hiw_arr3_title: 'Votre chauffeur vous attend',
    hiw_arr3_desc: 'Dans le hall d\'arrivée, votre chauffeur vous attend avec une pancarte à votre nom et le logo First Class Transfer. Il s\'occupe de vos bagages.',
    // Fleet
    fleet_label: 'Notre Flotte',
    fleet_title: 'Des Véhicules <em class="gold">Premium</em><br>pour Chaque Besoin',
    fleet_sub: 'Tous nos véhicules sont climatisés, régulièrement entretenus et conduits par des chauffeurs professionnels.',
    fleet_popular: '⭐ Le Plus Populaire',
    fleet_basic_tag: 'Idéal pour un voyage solo ou en duo',
    fleet_premium_tag: 'Le choix idéal pour 95% des voyages',
    fleet_business_tag: 'Pour les déplacements professionnels exigeants',
    fleet_book: 'Réserver', fleet_zone_suffix: '· Zone 1',
    // Ambiance
    amb_label: 'L\'Expérience First Class',
    amb_title: 'Le Luxe Ivoirien,<br><em class="gold">à Chaque Trajet</em>',
    amb_sub: 'De Cocody à l\'aéroport FHB — confort, ponctualité et style, à chaque fois.',
    // Pricing
    pr_label: 'Nos Tarifs',
    pr_title: 'Tarifs Clairs,<br><em class="gold">Sans Frais Cachés</em>',
    pr_sub: 'Le prix affiché est le prix payé. Aucun supplément surprise.',
    pr_col_zone: 'Zone',
    pr_book_btn: 'Réserver au Meilleur Tarif',
    pr_included: 'Ce qui est inclus',
    pr_supplements: 'Suppléments possibles',
    // Testimonials
    test_label: 'Témoignages',
    test_title: 'Ce que disent<br><em class="gold">nos Clients</em>',
    // FAQ
    faq_label: 'Questions fréquentes',
    faq_title: 'Tout ce que vous<br><em class="gold">devez savoir</em>',
    // CTA banner
    cta_label: 'Prêt à voyager ?',
    cta_title: 'Réservez votre transfert<br><em class="gold">dès maintenant</em>',
    cta_desc: 'Plus besoin de stresser pour trouver un taxi le matin. Réservez en 2 minutes et voyagez l\'esprit serein.',
    cta_btn: 'Réserver Maintenant',
    cta_wa_btn: 'Contacter sur WhatsApp',
    // Footer
    footer_privacy: 'Confidentialité', footer_cgv: 'CGV', footer_legal: 'Mentions légales',
    footer_rights: '© 2025 First Class Transfer Abidjan. Tous droits réservés.',
    // Booking page
    booking_label: 'Réservation en ligne',
    booking_title: 'Réservez votre <em class="gold">Transfert Aéroport</em>',
    booking_sub: 'Complétez les 4 étapes ci-dessous. La réservation prend moins de 3 minutes. Paiement directement avec le chauffeur.',
    step1_label: 'Trajet', step2_label: 'Véhicule',
    step3_label: 'Informations', step4_label: 'Confirmation',
    step1_title: 'Détails du Trajet',
    step1_desc: 'Indiquez votre point de départ, la date et l\'heure souhaitée.',
    step2_title: 'Choisissez votre Véhicule',
    step2_desc: 'Les tarifs affichés sont calculés selon votre zone de départ.',
    step3_title: 'Vos Informations',
    step3_desc: 'Ces informations permettront au chauffeur de vous contacter.',
    step4_title: 'Récapitulatif & Confirmation',
    step4_desc: 'Vérifiez vos informations et confirmez votre réservation.',
    dir_dep_label: 'Vers l\'Aéroport', dir_dep_sub: 'Je pars en voyage',
    dir_arr_label: 'Depuis l\'Aéroport', dir_arr_sub: 'J\'arrive à Abidjan',
    arr_banner: '<strong>Votre chauffeur vous attendra dans le hall d\'arrivée</strong> avec une pancarte à votre nom et le logo First Class Transfer.<br>Il vous aidera avec vos bagages. Aucun souci — il vous contactera directement sur WhatsApp à votre atterrissage.',
    method_nb: 'Par quartier', method_addr: 'Par adresse précise',
    nb_label: 'Votre quartier de départ',
    nb_ph: 'Ex: Cocody Riviera 2, Angré, Yopougon...',
    addr_label: 'Adresse complète de départ',
    addr_ph: 'Ex: Rue des Jardins, Cocody Riviera 2',
    btn_continue: 'Continuer', btn_back: 'Retour',
    name_label: 'Nom complet', name_ph: 'Prénom Nom',
    phone_label: 'Téléphone WhatsApp', phone_ph: '+33 6 14 05 84 84',
    email_label: 'Email', email_ph: 'vous@exemple.com',
    airline_label: 'Compagnie aérienne', airline_ph: 'Ex: Air Côte d\'Ivoire, Air France...',
    flight_label: 'N° de vol', flight_ph: 'Ex: ET 302, AF 703...',
    flight_time_label: 'Heure de vol',
    requests_label: 'Demandes spéciales', requests_ph: 'Ex: siège enfant, aide bagages...',
    notif_title: 'Confirmation de réservation',
    notif_email: 'Confirmation par email',
    notif_wa: 'Confirmation sur WhatsApp',
    confirm_btn: 'Confirmer ma réservation',
    modal_title: 'Réservation Confirmée !',
    modal_redirect: 'Vous allez être redirigé vers la page de confirmation...',
    // Summary labels
    sum_title: 'Votre réservation',
    sum_departure: 'Départ', sum_arrival: 'Arrivée',
    sum_date: 'Date', sum_time: 'Heure',
    sum_pax: 'Passagers', sum_vehicle: 'Véhicule',
    sum_total: 'Total estimé',
    sum_payment_note: 'Paiement sur place (espèces) ou via lien WhatsApp',
    // Hero form extras
    hero_pax_form_label: 'Passagers',
    hero_luggage_label: 'Bagages',
    hero_flight_block_title: 'Votre Vol',
    hero_date_form_label: 'Date de décollage',
    hero_time_form_label: 'Heure de décollage',
    hero_flight_notice_text: 'Votre ponctualité, notre priorité — nous vous prenons en charge <strong>3h30 avant votre décollage</strong>, avec un délai ajusté selon votre zone. Parce qu\'un vol raté, ça n\'arrive pas avec First Class Transfer.',
    // HiW tab labels
    hiw_tab_dep_text: 'Départ vers l\'aéroport',
    hiw_tab_arr_text: 'Arrivée depuis l\'aéroport',
    // Fleet taglines
    fleet_eco_tagline: 'Idéal pour un voyage solo ou en duo',
    fleet_premium_tagline: 'Le choix idéal pour familles et groupes',
    fleet_business_tagline: 'Pour les déplacements professionnels exigeants',
    // Fleet features — Économique
    fleet_eco_feat1: '<strong>1–2 passagers max</strong>',
    fleet_eco_feat2: '<strong style="white-space:nowrap">4 valises taille M</strong><br><small style="color:var(--text-muted);margin-left:20px">65×44×26 cm</small>',
    fleet_eco_feat3: 'Climatisation',
    fleet_eco_feat4: 'Chargeur USB',
    // Fleet features — Premium
    fleet_premium_feat1: '<strong>Jusqu\'à 6 passagers</strong>',
    fleet_premium_feat2: '<strong style="white-space:nowrap">8–10 valises taille M/L</strong><br><small style="color:var(--text-muted);margin-left:20px">jusqu\'à 75×53×29 cm</small>',
    fleet_premium_feat3: 'Familles, groupes, gros bagages',
    fleet_premium_feat4: 'Climatisation puissante',
    fleet_premium_feat5: 'Chargeurs USB &amp; Wi-Fi',
    // Fleet features — Business
    fleet_business_feat1: '<strong>1–2 passagers</strong>',
    fleet_business_feat2: '<strong style="white-space:nowrap">2–4 valises taille M</strong><br><small style="color:var(--text-muted);margin-left:20px">65×44×26 cm · coffre berline</small>',
    fleet_business_feat3: 'Sièges cuir, silence total',
    fleet_business_feat4: 'Idéal appels &amp; réunions en route',
    fleet_business_feat5: 'Eau minérale &amp; chargeur inclus',
    // Ambiance overlays
    amb_overlay1: 'Élégance à chaque trajet',
    amb_overlay2: 'Clientèle exigeante',
    amb_overlay3: 'Voyageurs d\'affaires',
    amb_overlay4: 'Aéroport FHB, Abidjan',
    amb_overlay5: 'Intérieur Business cuir',
    // Pricing table details
    pr_eco_desc: 'Corolla · 1–2 pax · 4 val. taille M',
    pr_premium_desc: 'Van · 6 pax · 8 val. M/L',
    pr_business_desc: 'Mercedes · 1–2 pax · 2 valises',
    pr_zone1_areas: 'Plateau · Cocody · Riviera · Angré · Marcory · Treichville · Port-Bouët · Adjamé',
    pr_zone2_areas: 'Yopougon · Abobo · Koumassi · Attécoubé',
    pr_zone3_areas: 'Bingerville · Anyama · Songon · Abatta · PK 20 · PK 22',
    pr_zone4_areas: 'Grand-Bassam · Dabou · Assinie · Jacqueville · Bonoua · Azaguié · Alépé',
    pr_incl_title: 'Ce qui est inclus',
    pr_incl1: 'Bagages en soute (quantité raisonnable)',
    pr_incl2: 'Attente jusqu\'à 15 minutes',
    pr_incl3: 'Péages autoroutiers inclus',
    pr_incl4: 'Prix garanti à la réservation',
    pr_incl5: 'Retard de vol : attente gratuite jusqu\'à 1h',
    pr_supp_title: 'Suppléments possibles',
    pr_supp_note: '(affichés clairement)',
    pr_supp1: 'Trajet de nuit (22h–5h) : <strong>+3 000 FCFA</strong>',
    pr_supp2: 'Attente &gt; 15 min (hors retard vol) : <strong>+2 000 FCFA / 15 min</strong>',
    pr_no_hidden: 'Aucun supplément ne peut être ajouté sans accord préalable. Votre tarif est verrouillé à la réservation.',
    // Testimonials
    test1_text: '"Le chauffeur était là 10 minutes avant l\'heure convenue. Voiture impeccable, conduite douce. Le message WhatsApp le matin m\'a rassurée. Je recommande à 100% !"',
    test1_role: 'Consultante, Cocody',
    test2_text: '"En tant qu\'expatrié, j\'utilise First Class Transfer pour chaque vol. Fiable, professionnel, et le paiement en ligne est super pratique. C\'est mon service de référence."',
    test2_role: 'Expatrié français, Plateau',
    test3_text: '"J\'avais un vol tôt le matin depuis Yopougon. Le chauffeur était ponctuel malgré la distance. Prix honnête, voiture propre. J\'ai pris le Business et c\'était top !"',
    test3_role: 'Homme d\'affaires, Yopougon',
    // FAQ
    faq1_q: 'Comment se passe la réservation ?',
    faq1_a: 'La réservation se fait entièrement en ligne via notre formulaire. Renseignez votre zone de départ, date, heure, type de véhicule et informations personnelles. Vous recevez une confirmation par email avec votre numéro de réservation.',
    faq2_q: 'Comment le chauffeur me contacte-t-il ?',
    faq2_a: 'La veille ou le matin même de votre transfert, votre chauffeur vous envoie un message WhatsApp avec son prénom, son numéro de téléphone, le modèle et la plaque du véhicule. Il confirme l\'heure et l\'adresse de prise en charge.',
    faq3_q: 'Comment s\'effectue le paiement ?',
    faq3_a: 'Le paiement s\'effectue directement avec votre chauffeur le jour du transfert (espèces), ou via un lien de paiement mobile (Orange Money, Wave, MTN MoMo) envoyé par WhatsApp après confirmation.',
    faq4_q: 'Puis-je annuler ou modifier ma réservation ?',
    faq4_a: 'Oui. Toute annulation effectuée plus de 24h avant le départ est entièrement remboursée. En dessous de 24h, une retenue de 50% est appliquée. Contactez-nous via WhatsApp ou email avec votre numéro de réservation.',
    faq5_q: 'Les tarifs incluent-ils les péages et bagages ?',
    faq5_a: 'Absolument. Nos tarifs sont fixes et tout compris : carburant, péages autoroutiers et bagages standards (1 valise + 1 bagage à main par passager). Aucun supplément caché ne vous sera facturé.',
    faq6_q: 'Desservez-vous aussi les arrivées à l\'aéroport ?',
    faq6_a: 'Oui, absolument ! Nous assurons les deux directions. Pour une arrivée, sélectionnez "Depuis l\'Aéroport" lors de la réservation. Votre chauffeur vous attendra dans le hall d\'arrivée avec une pancarte à votre nom. Il suivra votre vol en cas de retard.',
    // Footer
    footer_brand_desc: 'Service premium de transfert vers l\'Aéroport Félix-Houphouët-Boigny. Réservation en ligne, paiement sécurisé, suivi WhatsApp.',
    footer_col_services: 'Services',
    footer_svc1: 'Transfert Économie',
    footer_svc2: 'Transfert Business',
    footer_svc3: 'Groupes & Familles',
    footer_svc4: 'Nos Tarifs',
    footer_col_info: 'Informations',
    footer_faq_link: 'FAQ',
    footer_how_link: 'Comment ça marche',
    footer_cancel_link: 'Politique d\'annulation',
    footer_legal_link: 'Mentions légales',
    footer_col_contact: 'Contact',
    footer_avail: 'Service disponible 24h/7j',
  },

  en: {
    nav_services: 'Services', nav_fleet: 'Fleet', nav_pricing: 'Pricing',
    nav_faq: 'FAQ', nav_call: 'Call', nav_book: 'Book',
    nav_book_now: 'Book Now', nav_home: 'Home',
    hero_badge: 'Premium Service · Punctual · Reliable',
    hero_title_line1: 'Your Airport Transfer,',
    hero_title_em: 'Simply Perfect',
    hero_desc: 'Book your transfer to Félix-Houphouët-Boigny Airport in 2 minutes — departure or arrival. Instant confirmation. Your driver contacts you on WhatsApp on the day.',
    hero_book_btn: 'Book Now',
    hero_stat_transfers: 'Transfers completed',
    hero_stat_satisfied: 'Satisfied clients',
    hero_stat_avail: 'Availability',
    hero_card_title: 'Instant Estimate',
    hero_card_sub: 'Get your price in seconds',
    hero_by_nb: 'By neighborhood', hero_by_zone: 'By zone',
    hero_nb_label: 'Your departure neighborhood',
    hero_nb_ph: 'E.g: Cocody Riviera 2, Angré, Yopougon...',
    hero_zone_label: 'Departure zone',
    hero_zone_ph: 'Select your zone',
    hero_vehicle_label: 'Vehicle', hero_pax_label: 'Passengers',
    hero_date_label: 'Date', hero_time_label: 'Time',
    hero_cta: 'Check Availability',
    trust_confirm: 'Instant confirmation',
    trust_cancel: 'Flexible cancellation',
    trust_wa: 'WhatsApp tracking',
    hiw_label: 'How it works',
    hiw_title: 'Simple in <em class="gold">both directions</em>',
    hiw_sub: 'Whether you\'re heading to the airport or arriving in Abidjan, we handle everything in 3 steps.',
    hiw_tab_dep: '<i class="fas fa-plane-departure"></i> Departure to airport',
    hiw_tab_arr: '<i class="fas fa-plane-arrival"></i> Arrival from airport',
    hiw_dep1_title: 'Book online',
    hiw_dep1_desc: 'Enter your departure address, date, time and flight number. Our form takes less than 2 minutes.',
    hiw_dep2_title: 'Choose your vehicle',
    hiw_dep2_desc: 'Select Économique, Premium (Van) or Business based on your group and luggage. Price clearly shown by zone, no hidden fees.',
    hiw_dep3_title: 'Driver contacts you',
    hiw_dep3_desc: 'On the day, your driver sends you a WhatsApp message with their details. They arrive at the exact agreed time, without exception.',
    hiw_arr1_title: 'Book online',
    hiw_arr1_desc: 'Enter your flight number, landing time and destination address in Abidjan. Quick and easy.',
    hiw_arr2_title: 'Choose your vehicle',
    hiw_arr2_desc: 'Select the vehicle suited to your group and luggage. Fixed price based on your destination zone, no surprises.',
    hiw_arr3_title: 'Your driver awaits you',
    hiw_arr3_desc: 'In the arrivals hall, your driver waits with a sign bearing your name and the First Class Transfer logo. They take care of your luggage.',
    fleet_label: 'Our Fleet',
    fleet_title: '<em class="gold">Premium</em> Vehicles<br>for Every Need',
    fleet_sub: 'All our vehicles are air-conditioned, regularly maintained and driven by professional chauffeurs.',
    fleet_popular: '⭐ Most Popular',
    fleet_basic_tag: 'Ideal for solo or duo travel',
    fleet_premium_tag: 'The ideal choice for 95% of trips',
    fleet_business_tag: 'For demanding business travel',
    fleet_book: 'Book', fleet_zone_suffix: '· Zone 1',
    amb_label: 'The First Class Experience',
    amb_title: 'Ivorian Luxury,<br><em class="gold">Every Journey</em>',
    amb_sub: 'From Cocody to FHB Airport — comfort, punctuality and style, every time.',
    pr_label: 'Our Pricing',
    pr_title: 'Clear Prices,<br><em class="gold">No Hidden Fees</em>',
    pr_sub: 'The displayed price is the price you pay. No surprise surcharges.',
    pr_col_zone: 'Zone',
    pr_book_btn: 'Book at the Best Rate',
    pr_included: 'What\'s included',
    pr_supplements: 'Possible supplements',
    test_label: 'Reviews',
    test_title: 'What our<br><em class="gold">Clients say</em>',
    faq_label: 'Frequently asked questions',
    faq_title: 'Everything you<br><em class="gold">need to know</em>',
    cta_label: 'Ready to travel?',
    cta_title: 'Book your transfer<br><em class="gold">right now</em>',
    cta_desc: 'No more stressing about finding a taxi in the morning. Book in 2 minutes and travel with peace of mind.',
    cta_btn: 'Book Now',
    cta_wa_btn: 'Contact on WhatsApp',
    footer_privacy: 'Privacy', footer_cgv: 'T&C', footer_legal: 'Legal',
    footer_rights: '© 2025 First Class Transfer Abidjan. All rights reserved.',
    booking_label: 'Online booking',
    booking_title: 'Book your <em class="gold">Airport Transfer</em>',
    booking_sub: 'Complete the 4 steps below. Booking takes less than 3 minutes. Payment directly with the driver.',
    step1_label: 'Trip', step2_label: 'Vehicle',
    step3_label: 'Details', step4_label: 'Confirm',
    step1_title: 'Trip Details',
    step1_desc: 'Enter your departure point, date and desired time.',
    step2_title: 'Choose your Vehicle',
    step2_desc: 'Prices shown are calculated based on your departure zone.',
    step3_title: 'Your Details',
    step3_desc: 'This information allows the driver to contact you.',
    step4_title: 'Summary & Confirmation',
    step4_desc: 'Check your information and confirm your booking.',
    dir_dep_label: 'To the Airport', dir_dep_sub: 'I\'m departing',
    dir_arr_label: 'From the Airport', dir_arr_sub: 'I\'m arriving in Abidjan',
    arr_banner: '<strong>Your driver will await you in the arrivals hall</strong> with a sign bearing your name and the First Class Transfer logo.<br>They will help with your luggage. No worries — they will contact you directly on WhatsApp upon landing.',
    method_nb: 'By neighborhood', method_addr: 'By full address',
    nb_label: 'Your departure neighborhood',
    nb_ph: 'E.g: Cocody Riviera 2, Angré, Yopougon...',
    addr_label: 'Full departure address',
    addr_ph: 'E.g: Rue des Jardins, Cocody Riviera 2',
    btn_continue: 'Continue', btn_back: 'Back',
    name_label: 'Full name', name_ph: 'First Last',
    phone_label: 'WhatsApp Phone', phone_ph: '+33 6 14 05 84 84',
    email_label: 'Email', email_ph: 'you@example.com',
    airline_label: 'Airline', airline_ph: 'E.g: Air Côte d\'Ivoire, Air France...',
    flight_label: 'Flight number', flight_ph: 'E.g: ET 302, AF 703...',
    flight_time_label: 'Flight time',
    requests_label: 'Special requests', requests_ph: 'E.g: child seat, luggage help...',
    notif_title: 'Booking confirmation',
    notif_email: 'Email confirmation',
    notif_wa: 'WhatsApp confirmation',
    confirm_btn: 'Confirm my Booking',
    modal_title: 'Booking Confirmed!',
    modal_redirect: 'You will be redirected to the confirmation page...',
    sum_title: 'Your booking',
    sum_departure: 'Departure', sum_arrival: 'Arrival',
    sum_date: 'Date', sum_time: 'Time',
    sum_pax: 'Passengers', sum_vehicle: 'Vehicle',
    sum_total: 'Estimated total',
    sum_payment_note: 'Payment on site (cash) or via WhatsApp link',
    // Hero form extras
    hero_pax_form_label: 'Passengers',
    hero_luggage_label: 'Luggage',
    hero_flight_block_title: 'Your Flight',
    hero_date_form_label: 'Departure date',
    hero_time_form_label: 'Departure time',
    hero_flight_notice_text: 'Your punctuality, our priority — we pick you up <strong>3h30 before your flight</strong>, adjusted to your zone. Because a missed flight never happens with First Class Transfer.',
    // HiW tab labels
    hiw_tab_dep_text: 'Departure to airport',
    hiw_tab_arr_text: 'Arrival from airport',
    // Fleet taglines
    fleet_eco_tagline: 'Perfect for solo or duo travel',
    fleet_premium_tagline: 'The ideal choice for families and groups',
    fleet_business_tagline: 'For high-standard business travel',
    // Fleet features — Economy
    fleet_eco_feat1: '<strong>1–2 passengers max</strong>',
    fleet_eco_feat2: '<strong style="white-space:nowrap">4 M-size suitcases</strong><br><small style="color:var(--text-muted);margin-left:20px">65×44×26 cm</small>',
    fleet_eco_feat3: 'Air conditioning',
    fleet_eco_feat4: 'USB charger',
    // Fleet features — Premium
    fleet_premium_feat1: '<strong>Up to 6 passengers</strong>',
    fleet_premium_feat2: '<strong style="white-space:nowrap">8–10 M/L suitcases</strong><br><small style="color:var(--text-muted);margin-left:20px">up to 75×53×29 cm</small>',
    fleet_premium_feat3: 'Families, groups, heavy luggage',
    fleet_premium_feat4: 'Powerful air conditioning',
    fleet_premium_feat5: 'USB chargers &amp; Wi-Fi',
    // Fleet features — Business
    fleet_business_feat1: '<strong>1–2 passengers</strong>',
    fleet_business_feat2: '<strong style="white-space:nowrap">2–4 M-size suitcases</strong><br><small style="color:var(--text-muted);margin-left:20px">65×44×26 cm · sedan trunk</small>',
    fleet_business_feat3: 'Leather seats, total quiet',
    fleet_business_feat4: 'Perfect for calls &amp; meetings on the go',
    fleet_business_feat5: 'Mineral water &amp; charger included',
    // Ambiance overlays
    amb_overlay1: 'Elegance on every ride',
    amb_overlay2: 'Discerning clientele',
    amb_overlay3: 'Business travelers',
    amb_overlay4: 'FHB Airport, Abidjan',
    amb_overlay5: 'Business leather interior',
    // Pricing table details
    pr_eco_desc: 'Corolla · 1–2 pax · 4 M bags',
    pr_premium_desc: 'Van · 6 pax · 8 M/L bags',
    pr_business_desc: 'Mercedes · 1–2 pax · 2 bags',
    pr_zone1_areas: 'Plateau · Cocody · Riviera · Angré · Marcory · Treichville · Port-Bouët · Adjamé',
    pr_zone2_areas: 'Yopougon · Abobo · Koumassi · Attécoubé',
    pr_zone3_areas: 'Bingerville · Anyama · Songon · Abatta · PK 20 · PK 22',
    pr_zone4_areas: 'Grand-Bassam · Dabou · Assinie · Jacqueville · Bonoua · Azaguié · Alépé',
    pr_incl_title: "What's included",
    pr_incl1: 'Hold luggage (reasonable amount)',
    pr_incl2: 'Wait of up to 15 minutes included',
    pr_incl3: 'Motorway tolls included',
    pr_incl4: 'Price locked at booking',
    pr_incl5: 'Flight delay: free wait up to 1 hour',
    pr_supp_title: 'Possible surcharges',
    pr_supp_note: '(clearly displayed)',
    pr_supp1: 'Night journey (10pm–5am): <strong>+3,000 FCFA</strong>',
    pr_supp2: 'Wait &gt; 15 min (excl. flight delay): <strong>+2,000 FCFA / 15 min</strong>',
    pr_no_hidden: 'No surcharge can be added without prior agreement. Your rate is locked at booking.',
    // Testimonials
    test1_text: '"The driver arrived 10 minutes early. Immaculate car, smooth ride. The WhatsApp message that morning put my mind at ease. 100% recommended!"',
    test1_role: 'Consultant, Cocody',
    test2_text: '"As an expat, I use First Class Transfer for every single flight. Reliable, professional, and the payment process is incredibly easy. It\'s my go-to service."',
    test2_role: 'French expat, Plateau',
    test3_text: '"I had an early morning flight from Yopougon. The driver was right on time despite the distance. Fair price, spotless car. I went Business — absolutely top notch!"',
    test3_role: 'Business traveler, Yopougon',
    // FAQ
    faq1_q: 'How does the booking process work?',
    faq1_a: 'Booking is entirely online through our form. Enter your departure zone, date, time, vehicle type and personal details. You receive an email confirmation with your booking reference — done in under 3 minutes.',
    faq2_q: 'How will the driver contact me?',
    faq2_a: 'The evening before or the morning of your transfer, your driver sends you a WhatsApp message with their first name, phone number, vehicle model and licence plate. They confirm the pickup time and address.',
    faq3_q: 'How does payment work?',
    faq3_a: 'Payment is made directly with your driver on the day (cash), or via a mobile payment link (Orange Money, Wave, MTN MoMo) sent to you by WhatsApp after your booking is confirmed.',
    faq4_q: 'Can I cancel or change my booking?',
    faq4_a: 'Yes. Any cancellation made more than 24 hours before departure is fully refunded. Within 24 hours, a 50% fee applies. Contact us via WhatsApp or email with your booking reference.',
    faq5_q: 'Are tolls and luggage included in the price?',
    faq5_a: 'Absolutely. Our rates are fixed and all-inclusive: fuel, motorway tolls and standard luggage (1 suitcase + 1 hand luggage per passenger). No hidden charges, ever.',
    faq6_q: 'Do you also cover airport arrivals?',
    faq6_a: 'Yes, absolutely! We cover both directions. For an arrival, select "From the Airport" when booking online. Your driver will be waiting in the arrivals hall with a sign bearing your name. They will track your flight in case of delay.',
    // Footer
    footer_brand_desc: 'Premium transfer service to Félix-Houphouët-Boigny Airport. Online booking, secure payment, WhatsApp tracking.',
    footer_col_services: 'Services',
    footer_svc1: 'Economy Transfer',
    footer_svc2: 'Business Transfer',
    footer_svc3: 'Groups & Families',
    footer_svc4: 'Our Pricing',
    footer_col_info: 'Information',
    footer_faq_link: 'FAQ',
    footer_how_link: 'How it works',
    footer_cancel_link: 'Cancellation policy',
    footer_legal_link: 'Legal notice',
    footer_col_contact: 'Contact',
    footer_avail: 'Service available 24/7',
  },
};

// ─── State ─────────────────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('fct_lang') || detectLang();
let currentCurrency = localStorage.getItem('fct_currency') || 'XOF';

function detectLang() {
  const browser = (navigator.language || 'fr').toLowerCase().slice(0, 2);
  return ['fr', 'en'].includes(browser) ? browser : 'fr';
}

// ─── Translation engine ────────────────────────────────────────────────────────
function t(key) {
  return (T[currentLang] || T.fr)[key] || (T.fr)[key] || key;
}

function applyTranslations() {
  const lang = currentLang;
  document.documentElement.lang = lang;

  // Text content (escapes HTML)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val) el.textContent = val;
  });

  // HTML content (allows tags like <em>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    const val = t(key);
    if (val) el.innerHTML = val;
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    const val = t(key);
    if (val) el.placeholder = val;
  });

  // aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    const val = t(key);
    if (val) el.setAttribute('aria-label', val);
  });

  // Update active state of lang buttons
  document.querySelectorAll('.i18n-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ─── Currency engine ───────────────────────────────────────────────────────────
function convertPrice(fcfa) {
  const rate = RATES[currentCurrency] || 1;
  return Math.round(fcfa * rate);
}

function formatPrice(fcfa) {
  const amount = convertPrice(fcfa);
  const symbol = CURRENCY_LABELS[currentCurrency];
  const decimals = CURRENCY_DECIMALS[currentCurrency] || 0;
  const formatted = amount.toLocaleString('fr-FR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return currentCurrency === 'XOF'
    ? formatted + ' ' + symbol
    : symbol + ' ' + formatted;
}

function applyPrices() {
  // Static price cells with data-price-fcfa attribute
  document.querySelectorAll('[data-price-fcfa]').forEach(el => {
    const fcfa = parseInt(el.dataset.priceFcfa, 10);
    if (!isNaN(fcfa)) el.textContent = formatPrice(fcfa);
  });

  // Currency selector update
  document.querySelectorAll('.i18n-currency-select').forEach(sel => {
    sel.value = currentCurrency;
  });

  // Let booking.js know prices changed (if it's loaded)
  document.dispatchEvent(new CustomEvent('fct:currency-changed', {
    detail: { currency: currentCurrency, formatPrice }
  }));
}

// ─── Public setters ────────────────────────────────────────────────────────────
function setLanguage(lang) {
  if (!T[lang]) return;
  currentLang = lang;
  localStorage.setItem('fct_lang', lang);
  applyTranslations();
}

function setCurrency(currency) {
  if (!RATES[currency]) return;
  currentCurrency = currency;
  localStorage.setItem('fct_currency', currency);
  applyPrices();
}

// Expose globally so booking.js can call formatPrice
window.fctI18n = { t, setLanguage, setCurrency, formatPrice, convertPrice, currentLang: () => currentLang, currentCurrency: () => currentCurrency };

// ─── Switcher HTML injection ───────────────────────────────────────────────────
function injectSwitcher() {
  // Inject into every .nav-cta found on the page
  document.querySelectorAll('.nav-cta').forEach(cta => {
    if (cta.querySelector('.i18n-switcher')) return; // already injected

    const switcher = document.createElement('div');
    switcher.className = 'i18n-switcher';
    switcher.innerHTML = `
      <div class="i18n-lang-group">
        <button class="i18n-lang-btn ${currentLang === 'fr' ? 'active' : ''}" data-lang="fr" aria-label="Français">FR</button>
        <button class="i18n-lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en" aria-label="English">EN</button>
      </div>
      <select class="i18n-currency-select" aria-label="Currency">
        <option value="XOF" ${currentCurrency === 'XOF' ? 'selected' : ''}>FCFA</option>
        <option value="EUR" ${currentCurrency === 'EUR' ? 'selected' : ''}>€ EUR</option>
        <option value="USD" ${currentCurrency === 'USD' ? 'selected' : ''}>$ USD</option>
        <option value="GBP" ${currentCurrency === 'GBP' ? 'selected' : ''}>£ GBP</option>
        <option value="CAD" ${currentCurrency === 'CAD' ? 'selected' : ''}>CA$</option>
      </select>`;

    // Insert before the first child of nav-cta
    cta.insertBefore(switcher, cta.firstChild);

    switcher.querySelectorAll('.i18n-lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
    switcher.querySelector('.i18n-currency-select').addEventListener('change', e => {
      setCurrency(e.target.value);
    });
  });
}

function injectMobileSwitcher() {
  document.querySelectorAll('.i18n-switcher-mobile').forEach(container => {
    if (container.querySelector('.i18n-lang-btn')) return;
    container.innerHTML = `
      <button class="i18n-lang-btn ${currentLang === 'fr' ? 'active' : ''}" data-lang="fr">FR</button>
      <button class="i18n-lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
      <select class="i18n-currency-select">
        <option value="XOF" ${currentCurrency === 'XOF' ? 'selected' : ''}>FCFA</option>
        <option value="EUR" ${currentCurrency === 'EUR' ? 'selected' : ''}>€ EUR</option>
        <option value="USD" ${currentCurrency === 'USD' ? 'selected' : ''}>$ USD</option>
        <option value="GBP" ${currentCurrency === 'GBP' ? 'selected' : ''}>£ GBP</option>
        <option value="CAD" ${currentCurrency === 'CAD' ? 'selected' : ''}>CA$</option>
      </select>`;
    container.querySelectorAll('.i18n-lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
    container.querySelector('.i18n-currency-select').addEventListener('change', e => {
      setCurrency(e.target.value);
    });
  });
}

// ─── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  injectSwitcher();
  injectMobileSwitcher();
  applyTranslations();
  applyPrices();
});
