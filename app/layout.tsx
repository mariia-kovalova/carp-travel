import type { Metadata } from 'next';
import { Inter, Karantina } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import { Header } from '@/components/Header';

import { meta } from '@/data/meta.data';
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

export const metadata: Metadata = meta;

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
