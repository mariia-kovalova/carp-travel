const LINKS = {
  hero: 'hero',
  about: 'about',
  services: 'services',
  career: 'career',
  gallery: 'gallery',
  contacts: 'contacts',
};

export const { hero, about, career, contacts, gallery, services } = LINKS;

export const NavBarLinks = [
  { href: `#${about}`, title: 'About' },
  { href: `#${services}`, title: 'Services' },
  { href: `#${career}`, title: 'Career' },
  { href: `#${gallery}`, title: 'Gallery' },
  { href: `#${contacts}`, title: 'Contacts' },
];
