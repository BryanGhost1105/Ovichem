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
  title: 'Ovichem Consult Ltd | Chemical, Environmental & Engineering Services',
  description:
    'Ovichem Consult Limited provides quality chemicals, environmental services, water treatment, and engineering support from Effurun-Warri, Delta State.',
  keywords: [
    'fumigation services in Warri',
    'pest control Delta State',
    'water treatment Warri',
    'fumigation chemicals Nigeria',
    'chemical supply Warri',
  ],
  openGraph: {
    title: 'Ovichem Consult Ltd | Chemical, Environmental & Engineering Services',
    description:
      'Quality chemicals, environmental services, water treatment, and engineering support from Effurun-Warri, Delta State.',
    type: 'website',
    siteName: 'Ovichem Consult Ltd',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${instrumentSerif.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased text-primary-700 bg-white min-h-[100dvh] selection:bg-primary-700 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

