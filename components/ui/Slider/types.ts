type EffectVariants = 'fade' | 'coverflow';

export interface SliderProps {
  id: string;
  data: {}[];
  element: React.FC<any>;
  effect?: EffectVariants;
  slidesPerView?: number;
  isInteractive?: boolean;
  isLoop?: boolean;
  isAutoplay?: boolean;
  isNavigation?: boolean;
  isPagination?: boolean;
  onPaginationUpdate?: (num: number) => void;
}
