import type {Metadata} from 'next';
import { Instrument_Serif, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ovichem Consult Ltd | Practical Space & Chemical Treatment Specialists',
  description:
    'Warri-based practical treatment specialists with around a decade of experience in fumigation, drinking water treatment, and chemical supplies across residential, commercial, and marine environments.',
  openGraph: {
    title: 'Ovichem Consult Ltd | When Your Space Needs Treatment, Experience Matters',
    description:
      'Fumigation, drinking water treatment, and chemical supplies in Warri, Delta State and beyond. Practical, experienced, and trusted.',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${instrumentSerif.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased text-[#1A1816] bg-[#FAF7F2] min-h-[100dvh] selection:bg-[#B8754F] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

