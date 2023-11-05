type SectionTitleVariants = 'h1' | 'h2';

export interface SectionTitleProps {
  tag?: SectionTitleVariants;
  className?: string;
  isInversed?: boolean;
  title: {
    accent: string;
    text: string;
  };
}
