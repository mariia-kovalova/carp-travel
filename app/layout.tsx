import type { Metadata } from 'next';
import { Inter, Karantina } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import { Header } from '@/components/Header';
import data from '@/data/common.data.json';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const karantina = Karantina({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-katarina',
});

// const { BASE_URL } = process.env;
const { title, description } = data;

export const metadata: Metadata = {
  title: title,
  description: description,
  // icons: {
  //   icon: [
  //     {
  //       url: 'favicon/favicon-black.png',
  //       media: '(prefers-color-scheme: light)',
  //     },
  //     {
  //       url: 'favicon/favicon-white.png',
  //       media: '(prefers-color-scheme: dark)',
  //     },
  //   ],
  // },
  // openGraph: {
  //   title: info.title,
  //   description: info.description,
  //   siteName: info.title,
  //   type: 'website',
  //   url: BASE_URL,
  //   images: [{ url: 'images/ogp/logo.png' }, { url: 'images/ogp/logo.jpg' }],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${karantina.variable}`}>
        <Header />
        <main>{children}</main>
        <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      </body>
    </html>
  );
}
