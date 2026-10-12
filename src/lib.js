const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';
export const u = (p = '') => base + p.replace(/^\//, '');
export const site = {
  name: 'Dr. Magdalena Börsig-Hover',
  claim: 'Geschichte verstehen. Gegenwart deuten. Verantwortung übernehmen.',
  email: 'boersig-hover@t-online.de',
  strasse: 'Schererweg 23',
  ort: '82418 Murnau',
};
