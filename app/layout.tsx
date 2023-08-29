import '../styles/globals.css';
import type { Metadata } from 'next';
import { inter } from './fonts';
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'Carp Travel App',
  description:
    'We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-white bg-fall-back`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
