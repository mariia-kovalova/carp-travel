const LINKS = {
  hero: 'hero',
  about: 'about',
  services: 'services',
  career: 'career',
  gallery: 'gallery',
  contact: 'contact',
};

export const { hero, about, career, contact, gallery, services } = LINKS;

export const NavBarLinks = [
  { href: `#${about}`, title: 'About' },
  { href: `#${services}`, title: 'Services' },
  { href: `#${career}`, title: 'Career' },
  { href: `#${gallery}`, title: 'Gallery' },
  { href: `#${contact}`, title: 'Contacts' },
];
