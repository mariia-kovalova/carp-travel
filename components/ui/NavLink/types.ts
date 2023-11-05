import { NavBarVariant } from '@/components/ui/NavBar/types';

export interface NavLinkProps {
  href: string;
  text: string;
  variant: NavBarVariant;
  onClick?: () => void;
  className?: string;
}
