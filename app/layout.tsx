import type { Metadata } from 'next';

import info from '@/data/website.data.json';

import Header from '@/components/Header/Header';

import fonts from './fonts';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: info.title,
  description: info.description,
  icons: {
    icon: [
      {
        url: 'favicon/favicon-black.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'favicon/favicon-white.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fonts.inter.className} text-white bg-fall-back`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
