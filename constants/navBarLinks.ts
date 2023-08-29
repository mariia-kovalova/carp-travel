import LINKS from './links';

const { about, career, contact, gallery, services } = LINKS;

const NavBarLinks = [
  { href: `#${about}`, title: 'About' },
  { href: `#${services}`, title: 'Services' },
  { href: `#${career}`, title: 'Career' },
  { href: `#${gallery}`, title: 'Gallery' },
  { href: `#${contact}`, title: 'Contacts' },
];

export default NavBarLinks;
