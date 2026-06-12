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
// PLACES (hôtels, cliniques, centres commerciaux, ambassades, lieux)
// =============================================
const PLACES = {
  // ---- HÔTELS ZONE 1 ----
  'sofitel abidjan hotel ivoire': { display: 'Sofitel Abidjan Hotel Ivoire', zone: 'zone1', commune: 'Cocody', type: 'hotel', typeLabel: 'Hôtel' },
  'hotel ivoire': { display: 'Sofitel Abidjan Hotel Ivoire', zone: 'zone1', commune: 'Cocody', type: 'hotel', typeLabel: 'Hôtel' },
  'pullman abidjan': { display: 'Pullman Abidjan', zone: 'zone1', commune: 'Plateau', type: 'hotel', typeLabel: 'Hôtel' },
  'hotel tiama': { display: 'Hôtel Tiama', zone: 'zone1', commune: 'Plateau', type: 'hotel', typeLabel: 'Hôtel' },
  'tiama': { display: 'Hôtel Tiama', zone: 'zone1', commune: 'Plateau', type: 'hotel', typeLabel: 'Hôtel' },
  'radisson blu abidjan': { display: 'Radisson Blu Abidjan Plateau', zone: 'zone1', commune: 'Plateau', type: 'hotel', typeLabel: 'Hôtel' },
  'radisson blu': { display: 'Radisson Blu Abidjan Plateau', zone: 'zone1', commune: 'Plateau', type: 'hotel', typeLabel: 'Hôtel' },
  'novotel abidjan': { display: 'Novotel Abidjan', zone: 'zone1', commune: 'Plateau', type: 'hotel', typeLabel: 'Hôtel' },
  'novotel': { display: 'Novotel Abidjan', zone: 'zone1', commune: 'Plateau', type: 'hotel', typeLabel: 'Hôtel' },
  'ibis abidjan plateau': { display: 'ibis Abidjan Plateau', zone: 'zone1', commune: 'Plateau', type: 'hotel', typeLabel: 'Hôtel' },
  'ibis plateau': { display: 'ibis Abidjan Plateau', zone: 'zone1', commune: 'Plateau', type: 'hotel', typeLabel: 'Hôtel' },
  'ibis styles abidjan': { display: 'ibis Styles Abidjan Marcory', zone: 'zone1', commune: 'Marcory', type: 'hotel', typeLabel: 'Hôtel' },
  'seen hotel': { display: 'Seen Hotel Abidjan', zone: 'zone1', commune: 'Cocody', type: 'hotel', typeLabel: 'Hôtel' },
  'seen hotel abidjan': { display: 'Seen Hotel Abidjan', zone: 'zone1', commune: 'Cocody', type: 'hotel', typeLabel: 'Hôtel' },
  'heden golf hotel': { display: 'Heden Golf Hôtel', zone: 'zone1', commune: 'Cocody', type: 'hotel', typeLabel: 'Hôtel' },
  'heden golf': { display: 'Heden Golf Hôtel', zone: 'zone1', commune: 'Cocody', type: 'hotel', typeLabel: 'Hôtel' },
  'azalai hotel': { display: 'Azalaï Hôtel Abidjan', zone: 'zone1', commune: 'Plateau', type: 'hotel', typeLabel: 'Hôtel' },
  'azalaï': { display: 'Azalaï Hôtel Abidjan', zone: 'zone1', commune: 'Plateau', type: 'hotel', typeLabel: 'Hôtel' },
  'golden tulip le diplomate': { display: 'Golden Tulip Le Diplomate', zone: 'zone1', commune: 'Cocody', type: 'hotel', typeLabel: 'Hôtel' },
  'le diplomate': { display: 'Golden Tulip Le Diplomate', zone: 'zone1', commune: 'Cocody', type: 'hotel', typeLabel: 'Hôtel' },
  'palm club hotel': { display: 'Palm Club Hôtel', zone: 'zone1', commune: 'Cocody', type: 'hotel', typeLabel: 'Hôtel' },
  'best western abidjan': { display: 'Best Western Plus Abidjan', zone: 'zone1', commune: 'Cocody', type: 'hotel', typeLabel: 'Hôtel' },
  'hotel du district': { display: 'Hôtel du District', zone: 'zone1', commune: 'Plateau', type: 'hotel', typeLabel: 'Hôtel' },
  'du district': { display: 'Hôtel du District', zone: 'zone1', commune: 'Plateau', type: 'hotel', typeLabel: 'Hôtel' },
  'hotel les ambassadeurs': { display: 'Hôtel les Ambassadeurs', zone: 'zone1', commune: 'Plateau', type: 'hotel', typeLabel: 'Hôtel' },
  'les ambassadeurs': { display: 'Hôtel les Ambassadeurs', zone: 'zone1', commune: 'Plateau', type: 'hotel', typeLabel: 'Hôtel' },
  'pacific hotel': { display: 'Pacific Hôtel', zone: 'zone1', commune: 'Treichville', type: 'hotel', typeLabel: 'Hôtel' },
  'hotel belle cote': { display: 'Hôtel Belle Côte', zone: 'zone1', commune: 'Cocody', type: 'hotel', typeLabel: 'Hôtel' },
  'belle cote': { display: 'Hôtel Belle Côte', zone: 'zone1', commune: 'Cocody', type: 'hotel', typeLabel: 'Hôtel' },
  'forum golf hotel': { display: 'Forum Golf Hôtel', zone: 'zone1', commune: 'Cocody', type: 'hotel', typeLabel: 'Hôtel' },
  'forum golf': { display: 'Forum Golf Hôtel', zone: 'zone1', commune: 'Cocody', type: 'hotel', typeLabel: 'Hôtel' },
  'residence les bouquets': { display: 'Résidence les Bouquets', zone: 'zone1', commune: 'Cocody', type: 'hotel', typeLabel: 'Hôtel' },
  // ---- HÔTELS ZONE 2 ----
  'hotel cosmos': { display: 'Hôtel Cosmos', zone: 'zone2', commune: 'Yopougon', type: 'hotel', typeLabel: 'Hôtel' },
  'ivotel': { display: 'Ivotel', zone: 'zone2', commune: 'Yopougon', type: 'hotel', typeLabel: 'Hôtel' },
  // ---- HÔTELS ZONE 3 ----
  'hotel du lac bingerville': { display: 'Hôtel du Lac Bingerville', zone: 'zone3', commune: 'Bingerville', type: 'hotel', typeLabel: 'Hôtel' },
  // ---- HÔTELS ZONE 4 ----
  'palm beach hotel assinie': { display: 'Palm Beach Hôtel Assinie', zone: 'zone4', commune: 'Assinie', type: 'hotel', typeLabel: 'Hôtel' },
  'ecolodge assinie': { display: 'Ecolodge Assinie', zone: 'zone4', commune: 'Assinie', type: 'hotel', typeLabel: 'Hôtel' },
  'hotel les flots bassam': { display: 'Hôtel les Flots Grand-Bassam', zone: 'zone4', commune: 'Grand-Bassam', type: 'hotel', typeLabel: 'Hôtel' },
  'les flots bassam': { display: 'Hôtel les Flots Grand-Bassam', zone: 'zone4', commune: 'Grand-Bassam', type: 'hotel', typeLabel: 'Hôtel' },
  'holiday inn bassam': { display: 'Holiday Inn Resort Grand-Bassam', zone: 'zone4', commune: 'Grand-Bassam', type: 'hotel', typeLabel: 'Hôtel' },
  // ---- CLINIQUES / HÔPITAUX ----
  'chu de cocody': { display: 'CHU de Cocody', zone: 'zone1', commune: 'Cocody', type: 'hospital', typeLabel: 'Hôpital' },
  'chu cocody': { display: 'CHU de Cocody', zone: 'zone1', commune: 'Cocody', type: 'hospital', typeLabel: 'Hôpital' },
  'pisam': { display: 'PISAM (Polyclinique Sainte-Anne-Marie)', zone: 'zone1', commune: 'Cocody', type: 'hospital', typeLabel: 'Clinique' },
  'polyclinique sainte anne marie': { display: 'PISAM (Polyclinique Sainte-Anne-Marie)', zone: 'zone1', commune: 'Cocody', type: 'hospital', typeLabel: 'Clinique' },
  'clinique biassey': { display: 'Clinique Biassey', zone: 'zone1', commune: 'Cocody', type: 'hospital', typeLabel: 'Clinique' },
  'biassey': { display: 'Clinique Biassey', zone: 'zone1', commune: 'Cocody', type: 'hospital', typeLabel: 'Clinique' },
  'chu de treichville': { display: 'CHU de Treichville', zone: 'zone1', commune: 'Treichville', type: 'hospital', typeLabel: 'Hôpital' },
  'chu treichville': { display: 'CHU de Treichville', zone: 'zone1', commune: 'Treichville', type: 'hospital', typeLabel: 'Hôpital' },
  'clinique les deux plateaux': { display: 'Clinique des 2 Plateaux', zone: 'zone1', commune: 'Cocody', type: 'hospital', typeLabel: 'Clinique' },
  'clinique 2 plateaux': { display: 'Clinique des 2 Plateaux', zone: 'zone1', commune: 'Cocody', type: 'hospital', typeLabel: 'Clinique' },
  'chu de yopougon': { display: 'CHU de Yopougon', zone: 'zone2', commune: 'Yopougon', type: 'hospital', typeLabel: 'Hôpital' },
  'chu yopougon': { display: 'CHU de Yopougon', zone: 'zone2', commune: 'Yopougon', type: 'hospital', typeLabel: 'Hôpital' },
  // ---- CENTRES COMMERCIAUX ----
  'cap sud': { display: 'Cap Sud (Marcory)', zone: 'zone1', commune: 'Marcory', type: 'shopping', typeLabel: 'Centre commercial' },
  'sococe': { display: 'Sococé Marcory', zone: 'zone1', commune: 'Marcory', type: 'shopping', typeLabel: 'Centre commercial' },
  'sococé': { display: 'Sococé Marcory', zone: 'zone1', commune: 'Marcory', type: 'shopping', typeLabel: 'Centre commercial' },
  'mall of abidjan': { display: 'Mall of Abidjan', zone: 'zone1', commune: 'Marcory', type: 'shopping', typeLabel: 'Centre commercial' },
  'playce marcory': { display: 'Playce Marcory', zone: 'zone1', commune: 'Marcory', type: 'shopping', typeLabel: 'Centre commercial' },
  'playce adjame': { display: 'Playce Adjamé', zone: 'zone1', commune: 'Adjamé', type: 'shopping', typeLabel: 'Centre commercial' },
  'playce adjamé': { display: 'Playce Adjamé', zone: 'zone1', commune: 'Adjamé', type: 'shopping', typeLabel: 'Centre commercial' },
  'cap nord': { display: 'Cap Nord (Adjamé)', zone: 'zone1', commune: 'Adjamé', type: 'shopping', typeLabel: 'Centre commercial' },
  'cosmos yopougon': { display: 'Cosmos Yopougon', zone: 'zone2', commune: 'Yopougon', type: 'shopping', typeLabel: 'Centre commercial' },
  // ---- LIEUX EMBLÉMATIQUES ----
  'palais de la culture': { display: 'Palais de la Culture', zone: 'zone1', commune: 'Treichville', type: 'landmark', typeLabel: 'Lieu' },
  'stade felix houphouet boigny': { display: 'Stade Félix Houphouët-Boigny', zone: 'zone1', commune: 'Treichville', type: 'landmark', typeLabel: 'Stade' },
  'stade fhb': { display: 'Stade Félix Houphouët-Boigny', zone: 'zone1', commune: 'Treichville', type: 'landmark', typeLabel: 'Stade' },
  'stade robert champroux': { display: 'Stade Robert Champroux', zone: 'zone1', commune: 'Marcory', type: 'landmark', typeLabel: 'Stade' },
  'stade de la paix': { display: 'Stade de la Paix (Bouaké)', zone: 'zone4', commune: 'Hors Abidjan', type: 'landmark', typeLabel: 'Stade' },
  'palais presidentiel': { display: 'Palais Présidentiel', zone: 'zone1', commune: 'Plateau', type: 'landmark', typeLabel: 'Lieu' },
  'assemblee nationale': { display: 'Assemblée Nationale', zone: 'zone1', commune: 'Plateau', type: 'landmark', typeLabel: 'Lieu' },
  'assemblée nationale': { display: 'Assemblée Nationale', zone: 'zone1', commune: 'Plateau', type: 'landmark', typeLabel: 'Lieu' },
  'bceao abidjan': { display: 'Tour BCEAO', zone: 'zone1', commune: 'Plateau', type: 'landmark', typeLabel: 'Lieu' },
  'tour bceao': { display: 'Tour BCEAO', zone: 'zone1', commune: 'Plateau', type: 'landmark', typeLabel: 'Lieu' },
  'cite administrative': { display: 'Cité Administrative', zone: 'zone1', commune: 'Plateau', type: 'landmark', typeLabel: 'Lieu' },
  'cité administrative': { display: 'Cité Administrative', zone: 'zone1', commune: 'Plateau', type: 'landmark', typeLabel: 'Lieu' },
  'pont charles de gaulle': { display: 'Pont Charles-de-Gaulle', zone: 'zone1', commune: 'Plateau', type: 'landmark', typeLabel: 'Lieu' },
  'pont de gaulle': { display: 'Pont Charles-de-Gaulle', zone: 'zone1', commune: 'Plateau', type: 'landmark', typeLabel: 'Lieu' },
  'pont houphouet boigny': { display: 'Pont Félix Houphouët-Boigny', zone: 'zone1', commune: 'Plateau', type: 'landmark', typeLabel: 'Lieu' },
  'gare routiere adjame': { display: 'Gare Routière d\'Adjamé', zone: 'zone1', commune: 'Adjamé', type: 'landmark', typeLabel: 'Lieu' },
  'gare routière adjamé': { display: 'Gare Routière d\'Adjamé', zone: 'zone1', commune: 'Adjamé', type: 'landmark', typeLabel: 'Lieu' },
  'port autonome abidjan': { display: 'Port Autonome d\'Abidjan', zone: 'zone1', commune: 'Treichville', type: 'landmark', typeLabel: 'Lieu' },
  'universite felix houphouet boigny': { display: 'Université FHB', zone: 'zone1', commune: 'Cocody', type: 'landmark', typeLabel: 'Université' },
  'universite de cocody': { display: 'Université FHB', zone: 'zone1', commune: 'Cocody', type: 'landmark', typeLabel: 'Université' },
  'inphb': { display: 'INPHB Yamoussoukro', zone: 'zone4', commune: 'Hors Abidjan', type: 'landmark', typeLabel: 'Université' },
  // ---- AMBASSADES / CONSULATS ----
  'ambassade de france': { display: 'Ambassade de France', zone: 'zone1', commune: 'Cocody', type: 'embassy', typeLabel: 'Ambassade' },
  'ambassade des etats unis': { display: 'Ambassade des États-Unis', zone: 'zone1', commune: 'Cocody', type: 'embassy', typeLabel: 'Ambassade' },
  'ambassade usa': { display: 'Ambassade des États-Unis', zone: 'zone1', commune: 'Cocody', type: 'embassy', typeLabel: 'Ambassade' },
  'ambassade du maroc': { display: 'Ambassade du Maroc', zone: 'zone1', commune: 'Cocody', type: 'embassy', typeLabel: 'Ambassade' },
  'ambassade du nigeria': { display: 'Ambassade du Nigeria', zone: 'zone1', commune: 'Cocody', type: 'embassy', typeLabel: 'Ambassade' },
  // ---- AÉROPORT ----
  'aeroport fhb': { display: 'Aéroport FHB Abidjan', zone: 'zone1', commune: 'Port-Bouët', type: 'landmark', typeLabel: 'Aéroport' },
  'aéroport fhb': { display: 'Aéroport FHB Abidjan', zone: 'zone1', commune: 'Port-Bouët', type: 'landmark', typeLabel: 'Aéroport' },
  'aeroport international': { display: 'Aéroport FHB Abidjan', zone: 'zone1', commune: 'Port-Bouët', type: 'landmark', typeLabel: 'Aéroport' },
};

// =============================================
// ZONES DATA
// =============================================
const ZONES = {
  zone1: {
    label: 'Zone 1 — Plateau, Cocody, Marcory, Port-Bouët, Treichville',
    basic: 20000,
    premium: 25000,
    business: 45000,
    description: 'Communes proches du centre et de l\'aéroport',
    included: 'Plateau, Cocody, Riviera, Angré, Marcory, Treichville, Port-Bouët, Adjamé'
  },
  zone2: {
    label: 'Zone 2 — Yopougon, Abobo, Koumassi, Attécoubé',
    basic: 25000,
    premium: 32000,
    business: 55000,
    description: 'Communes de la rive nord et ouest',
    included: 'Yopougon, Abobo, Koumassi, Attécoubé'
  },
  zone3: {
    label: 'Zone 3 — Bingerville, Anyama, Songon, Abatta',
    basic: 22000,
    premium: 28000,
    business: 50000,
    description: 'Est et banlieue proche',
    included: 'Bingerville, Anyama, Songon, Abatta, PK 20, PK 22'
  },
  zone4: {
    label: 'Zone 4 — Grand-Bassam, Dabou, Assinie, Jacqueville',
    basic: 45000,
    premium: 55000,
    business: 80000,
    description: 'Périphérie éloignée',
    included: 'Grand-Bassam, Assinie, Dabou, Jacqueville, Bonoua, Azaguié, Alépé'
  },
};

const WA_NUMBER = '33614058484';

// =============================================
// STATE
// =============================================
let bookingState = {
  currentStep: 1,
  totalSteps: 4,

  // Step 1
  direction: 'departure', // 'departure' | 'arrival'
  pickupMethod: 'neighborhood', // 'neighborhood' or 'address'
  neighborhood: '',
  address: '',
  zone: '',
  date: '',
  time: '',
  passengers: 1,
  luggage: 1,

  // Step 2
  vehicle: '',
  basePrice: 0,
  totalPrice: 0,

  // Step 3
  name: '',
  phone: '',
  email: '',
  airline: '',
  flightNumber: '',
  flightTime: '',
  specialRequests: '',
  notifEmail: true,
  notifWhatsapp: true,

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
  const isArrival = bookingState.direction === 'arrival';

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

  // Direction-aware sidebar labels
  const pickupLabelEl = $('#summary-pickup-label');
  const destLabelEl = $('#summary-destination-label');
  const dirIconEl = $('#summary-dir-icon');
  if (isArrival) {
    if (pickupLabelEl) pickupLabelEl.innerHTML = '<i class="fas fa-plane-arrival" id="summary-dir-icon" style="color:var(--gold);margin-right:4px;"></i> Arrivée depuis';
    if (destLabelEl) destLabelEl.innerHTML = '<i class="fas fa-map-marker-alt" style="color:var(--gold);margin-right:4px;"></i> Destination';
  } else {
    if (pickupLabelEl) pickupLabelEl.innerHTML = '<i class="fas fa-plane-departure" id="summary-dir-icon" style="color:var(--gold);margin-right:4px;"></i> Départ';
    if (destLabelEl) destLabelEl.innerHTML = '<i class="fas fa-map-marker-alt" style="color:var(--gold);margin-right:4px;"></i> Arrivée';
  }

  // Direction badge
  const dirBadge = $('#summary-direction-badge');
  if (dirBadge) {
    dirBadge.style.display = 'block';
    dirBadge.textContent = isArrival ? '← Depuis l\'Aéroport' : '→ Vers l\'Aéroport';
  }

  $('#summary-pickup').textContent = isArrival ? 'Aéroport FHB, Abidjan' : pickupLabel;
  $('#summary-destination').textContent = isArrival ? pickupLabel : 'Aéroport FHB, Abidjan';
  $('#summary-date').textContent = bookingState.date ? formatDate(bookingState.date) : '—';
  $('#summary-time').textContent = bookingState.time || '—';
  const luggageLabel = bookingState.luggage === 0 ? 'Aucun bagage'
    : bookingState.luggage === 1 ? '1 valise'
    : `${bookingState.luggage} valises`;
  $('#summary-passengers').textContent = `${bookingState.passengers || '—'} pax · ${luggageLabel}`;
  $('#summary-vehicle').textContent = getVehicleLabel(bookingState.vehicle) || '—';

  const totalEl = $('#summary-total-amount');
  if (totalEl) {
    if (bookingState.totalPrice > 0) {
      totalEl.textContent = bookingState.totalPrice.toLocaleString('fr-FR') + ' FCFA';
    } else if (zoneInfo) {
      const fromLabel = window.fctI18n ? window.fctI18n.t('hero_price_from') : 'À partir de';
      totalEl.textContent = `${fromLabel} ${zoneInfo.basic.toLocaleString('fr-FR')} FCFA`;
    } else {
      totalEl.textContent = '—';
    }
  }
}

function getVehicleLabel(v) {
  switch (v) {
    case 'basic':    return 'Économique (Corolla / i20)';
    case 'premium':  return 'Premium (Mercedes-Benz Classe V 300d XL)';
    case 'business': return 'Business (Mercedes / BMW)';
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
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function detectZoneFromNeighborhood(input) {
  if (!input) return null;
  const normalized = normalizeStr(input);
  // Check neighborhoods first (direct key)
  if (NEIGHBORHOODS[normalized]) return NEIGHBORHOODS[normalized];
  // Check places (direct key)
  if (PLACES[normalized]) return PLACES[normalized];
  // Partial match in neighborhoods
  for (const [key, val] of Object.entries(NEIGHBORHOODS)) {
    if (normalized.includes(key) || key.includes(normalized)) return val;
  }
  // Partial match in places
  for (const [key, val] of Object.entries(PLACES)) {
    if (normalized.includes(key) || key.includes(normalized)) return val;
  }
  return null;
}

// ---- CUSTOM NEIGHBORHOOD AUTOCOMPLETE ----
const NB_ALL_ENTRIES = (() => {
  const seen = new Set();
  const arr = [];
  // Neighborhoods first
  for (const [, val] of Object.entries(NEIGHBORHOODS)) {
    if (!seen.has(val.display)) {
      seen.add(val.display);
      arr.push({ display: val.display, zone: val.zone, commune: val.commune, type: 'neighborhood', typeLabel: '' });
    }
  }
  // Places (hotels, landmarks, etc.)
  for (const [, val] of Object.entries(PLACES)) {
    if (!seen.has(val.display)) {
      seen.add(val.display);
      arr.push({ display: val.display, zone: val.zone, commune: val.commune, type: val.type, typeLabel: val.typeLabel });
    }
  }
  return arr.sort((a, b) => a.display.localeCompare(b.display, 'fr'));
})();

function populateDatalist() {
  // legacy: no-op (datalist replaced by custom autocomplete)
}

let nbDropdownOpen = false;
let nbHighlightIdx = -1;

function initNeighborhoodAutocomplete() {
  const input = document.getElementById('trip-location');
  const dropdown = document.getElementById('nb-dropdown');
  if (!input || !dropdown) return;

  input.addEventListener('input', () => {
    const q = input.value.trim();
    nbHighlightIdx = -1;
    renderNbDropdown(q);
    if (q) {
      dropdown.style.display = 'block';
      input.setAttribute('aria-expanded', 'true');
      nbDropdownOpen = true;
    }
    // Update zone detection and unknown notice
    const match = detectZoneFromNeighborhood(q);
    if (q && !match) {
      document.getElementById('unknown-nb-notice').style.display = 'block';
    } else {
      document.getElementById('unknown-nb-notice').style.display = 'none';
    }
    updateZoneDisplay(q);
  });

  input.addEventListener('focus', () => {
    const q = input.value.trim();
    renderNbDropdown(q);
    dropdown.style.display = 'block';
    input.setAttribute('aria-expanded', 'true');
    nbDropdownOpen = true;
  });

  input.addEventListener('keydown', (e) => {
    const items = dropdown.querySelectorAll('.nb-option');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      nbHighlightIdx = Math.min(nbHighlightIdx + 1, items.length - 1);
      updateNbHighlight(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      nbHighlightIdx = Math.max(nbHighlightIdx - 1, 0);
      updateNbHighlight(items);
    } else if (e.key === 'Enter' && nbHighlightIdx >= 0) {
      e.preventDefault();
      items[nbHighlightIdx]?.click();
    } else if (e.key === 'Escape') {
      closeNbDropdown();
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#nb-autocomplete-wrap')) closeNbDropdown();
  });
}

function updateNbHighlight(items) {
  items.forEach((el, i) => el.classList.toggle('highlighted', i === nbHighlightIdx));
  items[nbHighlightIdx]?.scrollIntoView({ block: 'nearest' });
}

function renderNbDropdown(q) {
  const dropdown = document.getElementById('nb-dropdown');
  const input = document.getElementById('trip-location');
  if (!dropdown) return;

  const normalized = normalizeStr(q);
  let results = [];
  if (!q) {
    results = NB_ALL_ENTRIES.slice(0, 60);
  } else {
    results = NB_ALL_ENTRIES.filter(e => {
      const n = normalizeStr(e.display);
      const c = normalizeStr(e.commune);
      const t = normalizeStr(e.typeLabel || '');
      return n.includes(normalized) || normalized.includes(n) || c.includes(normalized) || t.includes(normalized);
    }).slice(0, 40);
  }

  const zoneNames = { zone1: 'Zone 1', zone2: 'Zone 2', zone3: 'Zone 3', zone4: 'Zone 4' };
  const typeIcons = {
    neighborhood: 'fa-map-pin',
    hotel: 'fa-hotel',
    hospital: 'fa-hospital',
    shopping: 'fa-bag-shopping',
    landmark: 'fa-landmark',
    embassy: 'fa-flag',
  };

  let html = results.map(e => {
    const icon = typeIcons[e.type] || 'fa-map-pin';
    const badge = e.typeLabel ? `<span class="nb-type-badge nb-type-${e.type}">${e.typeLabel}</span>` : '';
    const sub = e.commune && e.commune !== e.display ? `<small style="color:#8892a4;margin-left:6px;">— ${e.commune}</small>` : '';
    return `
    <div class="nb-option" role="option" data-value="${e.display}" data-zone="${e.zone}" tabindex="-1">
      <span class="nb-option-left"><i class="fas ${icon} nb-type-icon"></i>${highlightMatch(e.display, q)}${sub}</span>
      <span class="nb-option-right">${badge}<span class="nb-zone-tag">${zoneNames[e.zone] || e.zone}</span></span>
    </div>`;
  }).join('');

  if (q && results.length === 0) {
    html = `<div class="nb-no-results">Aucun résultat pour "<strong>${q}</strong>"</div>`;
  }

  if (q) {
    html += `<div class="nb-option nb-add-new" role="option" data-value="${q}" data-zone="unknown" tabindex="-1">
      <span class="nb-option-left"><i class="fas fa-location-arrow nb-type-icon"></i>Utiliser "<strong>${q}</strong>" comme adresse</span>
    </div>`;
  }

  dropdown.innerHTML = html;

  dropdown.querySelectorAll('.nb-option').forEach(el => {
    el.addEventListener('mousedown', (e) => {
      e.preventDefault();
      const val = el.dataset.value;
      const zone = el.dataset.zone;
      if (input) input.value = val;
      bookingState.neighborhood = val; // live update for sidebar
      if (zone === 'unknown') {
        document.getElementById('unknown-nb-notice').style.display = 'block';
        bookingState.neighborhoodUnknown = true;
      } else {
        document.getElementById('unknown-nb-notice').style.display = 'none';
        bookingState.neighborhoodUnknown = false;
      }
      updateZoneDisplay(val);
      closeNbDropdown();
      updateSummary();
    });
  });
}

function highlightMatch(text, q) {
  if (!q) return text;
  const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<strong style="color:var(--gold,#c9a84c);">$1</strong>');
}

function updateZoneDisplay(q) {
  const match = detectZoneFromNeighborhood(q);
  if (match) {
    showZoneDetectedCard(match.zone);
  } else {
    const zoneCard = document.getElementById('zone-detected');
    if (zoneCard) zoneCard.style.display = 'none';
  }
}

function closeNbDropdown() {
  const dropdown = document.getElementById('nb-dropdown');
  const input = document.getElementById('trip-location');
  if (dropdown) { dropdown.style.display = 'none'; }
  if (input) input.setAttribute('aria-expanded', 'false');
  nbDropdownOpen = false;
}

function showZoneDetectedCard(zoneKey) {
  const card = document.getElementById('zone-detected');
  if (!card) return;
  const z = ZONES[zoneKey];
  if (!z) { card.style.display = 'none'; return; }
  card.style.display = 'flex';
  const fromLabel = window.fctI18n ? window.fctI18n.t('hero_price_from') : 'À partir de';
  card.innerHTML = `
    <div class="zone-detected-icon"><i class="fa-solid fa-map-pin"></i></div>
    <div class="zone-detected-info">
      <div class="zone-detected-label">${z.label}</div>
      <div class="zone-detected-prices">
        <span class="zd-price zd-price-main"><i class="fas fa-tag"></i> ${fromLabel} <strong>${z.basic.toLocaleString('fr-FR')} FCFA</strong></span>
      </div>
      <div class="zone-detected-note"><i class="fas fa-check-circle"></i> Prix fixe, tout inclus — aucun supplément caché. Le tarif final dépend du véhicule choisi.</div>
    </div>`;
}

// =============================================
// DIRECTION TOGGLE
// =============================================
function switchDirection(dir) {
  bookingState.direction = dir;

  // Toggle active class on dir-btn buttons
  document.querySelectorAll('.dir-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.direction === dir);
  });

  const banner = document.getElementById('arrival-info-banner');
  const locationLabel = document.getElementById('location-label');
  const destinationLabel = document.getElementById('destination-label');
  const originFixedGroup = document.getElementById('origin-fixed-group');
  const destinationGroup = document.querySelector('#trip-destination')?.closest('.form-group');
  const step1Title = document.getElementById('step1-title');
  const step1Desc = document.getElementById('step1-desc');
  const tripDateLabel = document.getElementById('trip-date-label');
  const tripTimeLabel = document.getElementById('trip-time-label');
  const flightTimeLabel = document.getElementById('flight-time-label');

  if (dir === 'arrival') {
    // Show arrival info banner
    if (banner) banner.style.display = 'flex';

    // Show fixed origin (airport), hide destination field (or make it show neighborhood)
    if (originFixedGroup) originFixedGroup.style.display = 'block';
    if (destinationGroup) destinationGroup.style.display = 'none';

    if (locationLabel) locationLabel.innerHTML = '<i class="fas fa-map-marker-alt"></i> Votre destination <span style="color:var(--error)">*</span>';

    // Update date/time labels
    if (tripDateLabel) tripDateLabel.innerHTML = '<i class="fas fa-calendar"></i> Date d\'atterrissage <span style="color:var(--error)">*</span>';
    if (tripTimeLabel) tripTimeLabel.innerHTML = '<i class="fas fa-clock"></i> Heure de prise en charge <span style="color:var(--error)">*</span>';
    if (flightTimeLabel) flightTimeLabel.innerHTML = '<i class="fas fa-clock"></i> Heure d\'atterrissage <span style="color:var(--error)">*</span>';

    // Update step title
    if (step1Title) step1Title.textContent = 'Détails du Trajet — Arrivée';
    if (step1Desc) step1Desc.textContent = 'Indiquez votre destination, la date et l\'heure d\'atterrissage.';
  } else {
    // Hide arrival info banner
    if (banner) banner.style.display = 'none';

    // Hide fixed origin, show destination field
    if (originFixedGroup) originFixedGroup.style.display = 'none';
    if (destinationGroup) destinationGroup.style.display = 'block';

    if (locationLabel) locationLabel.innerHTML = '<i class="fas fa-map-marker-alt"></i> Votre point de départ <span style="color:var(--error)">*</span>';

    // Restore date/time labels
    if (tripDateLabel) tripDateLabel.innerHTML = '<i class="fas fa-calendar"></i> Date de départ <span style="color:var(--error)">*</span>';
    if (tripTimeLabel) tripTimeLabel.innerHTML = '<i class="fas fa-clock"></i> Heure de prise en charge <span style="color:var(--error)">*</span>';
    if (flightTimeLabel) flightTimeLabel.innerHTML = '<i class="fas fa-clock"></i> Heure de vol <span style="color:var(--error)">*</span>';

    // Restore step title
    if (step1Title) step1Title.textContent = 'Détails du Trajet';
    if (step1Desc) step1Desc.textContent = 'Indiquez votre point de départ, la date et l\'heure souhaitée.';
  }

  updateSummary();
}

// Expose globally
window.switchDirection = switchDirection;

// =============================================
// METHOD TOGGLE (unified — auto-detected from input)
// =============================================
function switchMethod(method) {
  // No-op: method is now auto-detected from the unified input value
  bookingState.pickupMethod = method;
}

// Expose globally for legacy compatibility
window.switchMethod = switchMethod;

// =============================================
// STEP 1 - TRIP DETAILS
// =============================================
function onNext1() {
  if (!validateStep1()) return;

  const locationVal = $('#trip-location')?.value?.trim() || '';
  const match = detectZoneFromNeighborhood(locationVal);
  if (match) {
    bookingState.pickupMethod = 'neighborhood';
    bookingState.neighborhood = locationVal;
    bookingState.zone = match.zone;
    bookingState.neighborhoodUnknown = false;
  } else {
    bookingState.pickupMethod = 'address';
    bookingState.address = locationVal;
    bookingState.zone = $('#trip-zone-manual')?.value || '';
    bookingState.neighborhoodUnknown = true;
  }

  bookingState.date       = $('#trip-date')?.value || '';
  bookingState.time       = $('#trip-time')?.value || '';
  bookingState.passengers = parseInt($('#trip-passengers')?.value) || 1;
  bookingState.luggage    = parseInt($('#trip-luggage')?.value) || 0;

  renderVehicleOptions();
  showStep(2);
}

function validateStep1() {
  let valid = true;

  const date = $('#trip-date');
  const time = $('#trip-time');
  const pax  = $('#trip-passengers');

  clearError(date); clearError(time); clearError(pax);

  const locInput = $('#trip-location');
  const zoneManual = $('#trip-zone-manual');
  clearError(locInput);
  const locVal = locInput?.value?.trim();
  if (!locVal) {
    showError(locInput, 'Veuillez indiquer votre point de départ.');
    valid = false;
  } else {
    const match = detectZoneFromNeighborhood(locVal);
    if (!match) {
      // Free address — require manual zone selection
      if (zoneManual) clearError(zoneManual);
      if (!zoneManual?.value) {
        showError(zoneManual, 'Veuillez sélectionner votre zone approximative.');
        valid = false;
      }
    }
  }

  if (!date?.value) { showError(date, 'Veuillez choisir une date.'); valid = false; }
  if (!time?.value) { showError(time, 'Veuillez indiquer l\'heure de prise en charge.'); valid = false; }
  if (!pax?.value || parseInt(pax.value) < 1) { showError(pax, 'Nombre de passagers invalide.'); valid = false; }

  return valid;
}

function updateLuggageHint() {
  const pax     = parseInt($('#trip-passengers')?.value) || 1;
  const luggage = parseInt($('#trip-luggage')?.value) || 0;
  const hint    = $('#luggage-vehicle-hint');
  if (!hint) return;

  const rec = getRecommendedVehicle(pax, luggage);
  const labels = { basic: 'Économique', premium: 'Premium (Van)', business: 'Business' };
  const icons  = { basic: 'fa-car', premium: 'fa-van-shuttle', business: 'fa-car-side' };
  const forced = (pax >= 3 || luggage >= 3);

  hint.style.display = 'flex';
  hint.className = `luggage-hint ${forced ? 'luggage-hint-warn' : 'luggage-hint-info'}`;
  hint.innerHTML = `
    <i class="fas ${icons[rec]}"></i>
    <span>
      ${forced
        ? `<strong>Premium (Van) recommandé</strong> — à partir de 3 passagers ou 3 valises, le Van est le choix adapté.`
        : `Véhicule recommandé : <strong>${labels[rec]}</strong> pour ${pax} passager(s) + ${luggage} valise(s).`
      }
    </span>`;
}

// =============================================
// STEP 2 - VEHICLE SELECTION
// =============================================
// Returns recommended vehicle type based on passengers + luggage
function getRecommendedVehicle(pax, luggage) {
  // Premium (Van) required: 3+ passengers OR 3+ bags
  if (pax >= 3 || luggage >= 3) return 'premium';
  // Basic: 1-2 pax, 1-2 bags
  if (pax <= 2 && luggage <= 2) return 'basic';
  return 'premium';
}

// Realistic capacity constraints
function isVehicleViable(vehicleId, pax, luggage) {
  if (vehicleId === 'basic')    return pax <= 2 && luggage <= 2;
  if (vehicleId === 'business') return pax <= 2 && luggage <= 2;
  if (vehicleId === 'premium')  return pax <= 6 && luggage <= 8;
  return false;
}

function renderVehicleOptions() {
  const zone = bookingState.zone || 'zone1';
  const zoneInfo = ZONES[zone];
  if (!zoneInfo) return;

  const pax     = bookingState.passengers;
  const luggage = bookingState.luggage;
  const recommended = getRecommendedVehicle(pax, luggage);

  const vehicles = [
    {
      id: 'basic',
      label: 'Économique',
      model: 'Toyota Corolla / Hyundai i20',
      icon: 'fa-car',
      capacity: '1–2 passagers · 2 valises max',
      desc: 'Idéal pour un voyageur solo ou un couple léger',
      price: zoneInfo.basic,
    },
    {
      id: 'premium',
      label: 'Premium',
      model: 'Mercedes-Benz Classe V 300d Extra Long',
      icon: 'fa-van-shuttle',
      capacity: 'Jusqu\'à 6 passagers · 8 valises',
      desc: 'Le plus polyvalent — familles, groupes, gros bagages',
      price: zoneInfo.premium,
      featured: true,
    },
    {
      id: 'business',
      label: 'Business',
      model: 'Mercedes Classe E / BMW Série 5',
      icon: 'fa-car-side',
      capacity: '1–2 passagers · 2 valises',
      desc: 'Berline luxe — idéal pour appels & réunions en route',
      price: zoneInfo.business,
    },
  ];

  const container = $('#vehicle-options-container');
  if (!container) return;

  container.innerHTML = vehicles.map(v => {
    const viable = isVehicleViable(v.id, pax, luggage);
    const isRec  = v.id === recommended;
    const badge  = isRec ? '<span class="vehicle-badge-rec">Recommandé</span>' : '';
    const unavailMsg = !viable
      ? `<span class="vehicle-unavail"><i class="fas fa-exclamation-triangle"></i> Capacité insuffisante pour ${pax} pax + ${luggage} valise(s)</span>`
      : '';

    return `
      <div class="vehicle-option ${isRec ? 'featured' : ''} ${!viable ? 'vehicle-unavailable' : ''}"
           data-vehicle="${v.id}" data-price="${v.price}" ${!viable ? 'data-unavailable="1"' : ''}>
        <div class="vehicle-radio-indicator"></div>
        <div class="vehicle-info">
          <h4><i class="fas ${v.icon}" style="color:var(--gold);margin-right:8px;"></i>${v.label} ${badge}</h4>
          <p>${v.model}</p>
          <p class="vehicle-desc-short">${v.desc}</p>
          <p class="vehicle-capacity"><i class="fas fa-users"></i> ${v.capacity}</p>
          ${unavailMsg}
        </div>
        <div class="vehicle-price-tag">
          ${formatPrice(v.price)}
          <small>TTC, tout inclus</small>
        </div>
      </div>`;
  }).join('');

  container.querySelectorAll('.vehicle-option:not([data-unavailable])').forEach(card => {
    card.addEventListener('click', () => {
      container.querySelectorAll('.vehicle-option').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      bookingState.vehicle    = card.dataset.vehicle;
      bookingState.basePrice  = parseInt(card.dataset.price);
      bookingState.totalPrice = bookingState.basePrice;
      updateSummary();
    });
  });

  // Auto-select recommended
  const recCard = container.querySelector(`[data-vehicle="${recommended}"]`);
  if (recCard && !recCard.dataset.unavailable) {
    recCard.click();
  }
}

function onBack2() { showStep(1); }
function onNext2() {
  if (!bookingState.vehicle) {
    showToast('Veuillez sélectionner un véhicule.', 'error');
    return;
  }
  showStep(3);
}

// =============================================
// STEP 3 - PERSONAL INFO
// =============================================
function onBack3() { showStep(2); }
function onNext3() {
  if (!validateStep3()) return;

  bookingState.name            = $('#client-name')?.value?.trim() || '';
  // Combine country code + number into full E.164-style phone
  const phoneCode   = $('#client-phone-code')?.value || '';
  const phoneNumber = $('#client-phone-number')?.value?.trim().replace(/^0/, '') || '';
  bookingState.phone = phoneCode && phoneNumber ? phoneCode + ' ' + phoneNumber : ($('#client-phone')?.value?.trim() || '');
  bookingState.email           = $('#client-email')?.value?.trim() || '';
  bookingState.airline         = $('#client-airline')?.value?.trim() || '';
  bookingState.flightNumber    = $('#client-flight')?.value?.trim() || '';
  bookingState.flightTime      = $('#client-flight-time')?.value?.trim() || '';
  bookingState.specialRequests = $('#client-requests')?.value?.trim() || '';
  bookingState.notifEmail      = $('#notif-email')?.checked ?? true;
  bookingState.notifWhatsapp   = $('#notif-whatsapp')?.checked ?? true;

  // Collect special request checkboxes
  const srMap = {
    sr_child_seat: 'Siège enfant',
    sr_luggage_help: 'Aide bagages',
    sr_meet_greet: 'Pancarte nominative',
    sr_water: 'Eau minérale',
    sr_silent: 'Trajet silencieux',
    sr_stop: 'Arrêt intermédiaire',
    sr_wifi: 'Wi-Fi à bord',
    sr_accessible: 'Accessibilité PMR',
  };
  const checkedSr = Object.entries(srMap)
    .filter(([id]) => document.getElementById(id)?.checked)
    .map(([, label]) => label);
  if (checkedSr.length) {
    const existing = bookingState.specialRequests;
    bookingState.specialRequests = [
      ...checkedSr,
      ...(existing ? [existing] : []),
    ].join(', ');
  }

  renderPaymentSummary();
  showStep(4);
}

function validateStep3() {
  let valid = true;
  const name    = $('#client-name');
  const phone   = $('#client-phone');
  const email   = $('#client-email');
  const airline = $('#client-airline');
  const flight  = $('#client-flight');

  clearError(name); clearError(phone); clearError(email);
  clearError(airline); clearError(flight);

  if (!name?.value?.trim()) { showError(name, 'Veuillez entrer votre nom.'); valid = false; }
  const phoneNumberInput = $('#client-phone-number');
  clearError(phoneNumberInput);
  const phoneVal = phoneNumberInput?.value?.trim() || phone?.value?.trim() || '';
  if (!phoneVal || phoneVal.replace(/\D/g,'').length < 6) {
    showError(phoneNumberInput || phone, 'Numéro de téléphone invalide.'); valid = false;
  }
  if (!email?.value?.trim() || !isValidEmail(email.value)) {
    showError(email, 'Adresse email invalide.'); valid = false;
  }
  if (!airline?.value?.trim()) {
    showError(airline, 'Veuillez indiquer la compagnie aérienne.'); valid = false;
  }
  if (!flight?.value?.trim()) {
    showError(flight, 'Veuillez indiquer le numéro de vol.'); valid = false;
  }
  return valid;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// =============================================
// STEP 4 - CONFIRMATION
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

  const isArrival = bookingState.direction === 'arrival';

  // Direction display
  const dirDisplay = isArrival
    ? 'Aéroport FHB → ' + (pickupDisplay !== '—' ? pickupDisplay : 'Destination')
    : (pickupDisplay !== '—' ? pickupDisplay : 'Départ') + ' → Aéroport FHB';

  if ($('#pay-summary-direction')) $('#pay-summary-direction').textContent = isArrival ? 'Arrivée depuis l\'aéroport' : 'Départ vers l\'aéroport';
  $('#pay-summary-pickup').textContent  = isArrival ? 'Aéroport FHB, Abidjan' : pickupDisplay;
  $('#pay-summary-dest').textContent    = isArrival ? pickupDisplay : 'Aéroport FHB, Abidjan';
  $('#pay-summary-date').textContent    = formatDate(bookingState.date);
  $('#pay-summary-time').textContent    = bookingState.time;
  $('#pay-summary-vehicle').textContent = getVehicleLabel(bookingState.vehicle);
  if ($('#pay-summary-passengers')) $('#pay-summary-passengers').textContent = bookingState.passengers + ' passager(s)';
  const lgLabel = bookingState.luggage === 0 ? 'Aucun' : bookingState.luggage === 1 ? '1 valise' : `${bookingState.luggage} valises`;
  if ($('#pay-summary-luggage')) $('#pay-summary-luggage').textContent = lgLabel;
  $('#pay-summary-name').textContent    = bookingState.name;
  $('#pay-summary-phone').textContent   = bookingState.phone;
  if ($('#pay-summary-airline')) $('#pay-summary-airline').textContent = bookingState.airline || 'Non renseigné';
  $('#pay-summary-flight').textContent  = bookingState.flightNumber || 'Non renseigné';
  if ($('#pay-summary-flight-time')) $('#pay-summary-flight-time').textContent = bookingState.flightTime || 'Non renseigné';

  // Notifications
  const notifParts = [];
  if (bookingState.notifEmail) notifParts.push('Email');
  if (bookingState.notifWhatsapp) notifParts.push('WhatsApp');
  if ($('#pay-summary-notifs')) $('#pay-summary-notifs').textContent = notifParts.length ? notifParts.join(' + ') : 'Aucune';

  $('#pay-summary-total').textContent   = formatPrice(bookingState.totalPrice);
}

function onBack4() { showStep(3); }

// =============================================
// CINETPAY ONLINE PAYMENT
// =============================================
function onPayOnline() {
  const errorEl = document.getElementById('payment-error');
  const errorMsg = document.getElementById('payment-error-msg');
  if (errorEl) errorEl.style.display = 'none';

  if (!bookingState.bookingRef) bookingState.bookingRef = generateRef();

  const btn = document.getElementById('btn-pay-online');
  if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Chargement…'; }

  window.FCT_CinetPay.initCinetPayCheckout(
    bookingState,
    // onSuccess
    (transactionId) => {
      bookingState.paymentMethod  = 'online';
      bookingState.paymentStatus  = 'paid';
      bookingState.transactionId  = transactionId;
      finishBooking();
    },
    // onFailure
    (data) => {
      if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-mobile-screen-button"></i> <span>Payer en ligne maintenant</span>'; }
      const msg = data.message || 'Paiement non abouti. Veuillez réessayer ou choisir le paiement en espèces.';
      if (errorMsg) errorMsg.textContent = msg;
      if (errorEl) errorEl.style.display = 'block';
    }
  );
}

function onConfirmBooking() {
  bookingState.paymentMethod = 'cash';
  bookingState.paymentStatus = 'pending';
  if (!bookingState.bookingRef) bookingState.bookingRef = generateRef();
  finishBooking();
}

function finishBooking() {
  localStorage.setItem('lastBooking', JSON.stringify(bookingState));

  // Save to persistent bookings list for admin
  const allBookings = JSON.parse(localStorage.getItem('fct_bookings') || '[]');
  const bookingRecord = {
    ...bookingState,
    id: bookingState.bookingRef,
    createdAt: new Date().toISOString(),
    status: 'pending',
    driverId: null,
    driverName: null,
    adminNotes: '',
    auditLog: [
      { action: 'created', at: new Date().toISOString(), by: 'client' }
    ]
  };
  allBookings.unshift(bookingRecord);
  localStorage.setItem('fct_bookings', JSON.stringify(allBookings));

  // Trigger WhatsApp if notifWhatsapp is checked
  if (bookingState.notifWhatsapp) {
    const isArrival = bookingState.direction === 'arrival';
    const dirLabel = isArrival ? 'Arrivée depuis l\'aéroport' : 'Départ vers l\'aéroport';
    const pickup = bookingState.pickupMethod === 'neighborhood' && bookingState.neighborhood
      ? bookingState.neighborhood
      : bookingState.address || (ZONES[bookingState.zone] ? ZONES[bookingState.zone].label : '—');
    const departure = isArrival ? 'Aéroport FHB, Abidjan' : pickup;
    const destination = isArrival ? pickup : 'Aéroport FHB, Abidjan';

    const waMsg = [
      'Bonjour First Class Transfer 👋',
      '',
      'Nouvelle réservation confirmée :',
      `📋 Réf : ${bookingState.bookingRef}`,
      `↔️ Direction : ${dirLabel}`,
      `📍 Départ : ${departure}`,
      `🏁 Destination : ${destination}`,
      `📅 Date : ${formatDate(bookingState.date)}`,
      `🕐 Heure : ${bookingState.time}`,
      `🚗 Véhicule : ${getVehicleLabel(bookingState.vehicle)}`,
      `👥 Passagers : ${bookingState.passengers}`,
      `🧳 Bagages : ${bookingState.luggage}`,
      `👤 Nom : ${bookingState.name}`,
      `📱 Téléphone : ${bookingState.phone}`,
      `✉️ Email : ${bookingState.email}`,
      `✈️ Compagnie : ${bookingState.airline || 'Non renseigné'}`,
      `🔢 Vol : ${bookingState.flightNumber || 'Non renseigné'}`,
      `⏰ Heure vol : ${bookingState.flightTime || 'Non renseigné'}`,
      `💰 Total : ${formatPrice(bookingState.totalPrice)}`,
      '',
      'Merci !',
    ].join('\n');

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`, '_blank');
  }

  showConfirmModal();
}

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
  initNeighborhoodAutocomplete();

  // Date default
  const dateInput = $('#trip-date');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
  }

  // Direction toggle buttons
  $$('.dir-btn').forEach(btn => {
    btn.addEventListener('click', () => switchDirection(btn.dataset.direction));
  });

  // Unified location input → live zone detection
  const nbInput = document.getElementById('trip-location');
  if (nbInput) {
    nbInput.addEventListener('input', () => {
      const val = nbInput.value.trim();
      bookingState.neighborhood = val; // live update for sidebar
      const match = detectZoneFromNeighborhood(val);
      if (match) {
        bookingState.zone = match.zone;
        showZoneDetectedCard(match.zone);
      } else {
        bookingState.zone = '';
        const card = document.getElementById('zone-detected');
        if (card) card.style.display = 'none';
      }
      updateSummary();
    });
    // Also fire on change (datalist selection)
    nbInput.addEventListener('change', () => {
      const val = nbInput.value.trim();
      bookingState.neighborhood = val;
      const match = detectZoneFromNeighborhood(val);
      if (match) {
        bookingState.zone = match.zone;
        showZoneDetectedCard(match.zone);
      }
      updateSummary();
    });
  }

  // Pre-fill from session storage (from hero form)
  const init = sessionStorage.getItem('bookingInit');
  if (init) {
    try {
      const data = JSON.parse(init);
      if (data.neighborhood) {
        if (nbInput) {
          nbInput.value = data.neighborhood;
          bookingState.neighborhood = data.neighborhood;
          const match = detectZoneFromNeighborhood(data.neighborhood);
          if (match) {
            bookingState.pickupMethod = 'neighborhood';
            bookingState.zone = match.zone;
            showZoneDetectedCard(match.zone);
          }
        }
      } else if (data.zone) {
        const zoneManual = document.getElementById('trip-zone-manual');
        if (zoneManual) { zoneManual.value = data.zone; bookingState.zone = data.zone; }
        document.getElementById('unknown-nb-notice').style.display = 'block';
      }
      if ($('#trip-date') && data.date)         { $('#trip-date').value = data.date; bookingState.date = data.date; }
      if ($('#trip-time') && data.time)         { $('#trip-time').value = data.time; bookingState.time = data.time; }
      if ($('#trip-passengers') && data.passengers) { $('#trip-passengers').value = data.passengers; bookingState.passengers = parseInt(data.passengers) || 1; }
      if ($('#trip-luggage') && data.luggage !== undefined) { $('#trip-luggage').value = data.luggage; bookingState.luggage = parseInt(data.luggage) || 0; }
      if (data.flightTime && $('#client-flight-time')) $('#client-flight-time').value = data.flightTime;
      if (data.direction) switchDirection(data.direction);
    } catch (err) { /* ignore */ }
  }

  // Live luggage/passengers hint + sidebar sync
  ['trip-passengers', 'trip-luggage'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', () => {
      updateLuggageHint();
      bookingState.passengers = parseInt($('#trip-passengers')?.value) || 1;
      bookingState.luggage = parseInt($('#trip-luggage')?.value) || 0;
      updateSummary();
    });
  });
  updateLuggageHint();

  // Live date/time → sidebar sync
  document.getElementById('trip-date')?.addEventListener('change', () => {
    bookingState.date = $('#trip-date')?.value || '';
    updateSummary();
  });
  document.getElementById('trip-time')?.addEventListener('change', () => {
    bookingState.time = $('#trip-time')?.value || '';
    updateSummary();
  });
  document.getElementById('trip-time')?.addEventListener('input', () => {
    bookingState.time = $('#trip-time')?.value || '';
    updateSummary();
  });

  // Step navigation buttons
  $('#btn-next-1')?.addEventListener('click', onNext1);
  $('#btn-back-2')?.addEventListener('click', onBack2);
  $('#btn-next-2')?.addEventListener('click', onNext2);
  $('#btn-back-3')?.addEventListener('click', onBack3);
  $('#btn-next-3')?.addEventListener('click', onNext3);
  $('#btn-back-4')?.addEventListener('click', onBack4);
  $('#btn-pay-online')?.addEventListener('click', onPayOnline);
  $('#btn-confirm-booking')?.addEventListener('click', onConfirmBooking);

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
