import { Inter, Karantina } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

const karantina = Karantina({
  weight: ['400'],
  subsets: ['latin'],
});

const fonts = {
  inter,
  karantina,
};

export default fonts;
