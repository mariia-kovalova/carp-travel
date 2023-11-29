import { Metadata } from 'next';
import data from '@/data/meta.data.json';

const { title, description, keywords, locale, images, icons } = data;

const { BASE_URL } = process.env;

export const meta: Metadata = {
  title: title,
  description: description,
  keywords: keywords,
  metadataBase: new URL(BASE_URL as string),
  alternates: {
    canonical: BASE_URL as string,
  },
  openGraph: {
    title: title,
    description: description,
    url: BASE_URL as string,
    siteName: title,
    locale: locale,
    type: 'website',
    images: images,
  },
  twitter: {
    title: title,
    description: description,
    card: 'summary_large_image',
    images: images,
  },
  icons: icons,
};
