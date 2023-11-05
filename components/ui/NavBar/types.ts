export type NavBarVariant = 'header' | 'mobile-menu';

export interface NavBarProps {
  variant: NavBarVariant;
  onClick?: () => void;
  className?: string;
}
