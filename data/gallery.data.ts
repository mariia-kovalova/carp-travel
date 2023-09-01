import img1 from '@/public/images/gallery/gallery-photo-1@x1.jpg';
import img2 from '@/public/images/gallery/gallery-photo-2@x1.jpg';
import img3 from '@/public/images/gallery/gallery-photo-3@x1.jpg';

const images = [
  { image: img1, alt: 'lake and forest with mountains at the background' },
  { image: img2, alt: 'house in the forest with mountains at the background' },
  { image: img3, alt: 'mountains' },
  { image: img1, alt: 'lake and forest with mountains at the background' },
  { image: img2, alt: 'house in the forest with mountains at the background' },
  { image: img3, alt: 'mountains' },
];

const images_mobile = [
  { image: img1, alt: 'lake and forest with mountains at the background' },
  { image: img2, alt: 'house in the forest with mountains at the background' },
  { image: img3, alt: 'mountains' },
];

const buttons = {
  back: { text: 'back', aria_label: 'Click to see the previous image' },
  next: { text: 'next', aria_label: 'Click to see the next image' },
};

const info = {
  images,
  images_mobile,
  buttons,
};

export default info;
