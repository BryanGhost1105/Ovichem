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
  title: 'Ovichem Consult Ltd | Fumigation, Water Treatment & Chemicals in Warri',
  description:
    'Ovichem Consult provides fumigation services, water treatment, and fumigative chemical supplies for homes and businesses in Warri, Delta State, and beyond.',
  keywords: [
    'fumigation services in Warri',
    'pest control Delta State',
    'water treatment Warri',
    'fumigation chemicals Nigeria',
    'chemical supply Warri',
  ],
  openGraph: {
    title: 'Ovichem Consult Ltd | Fumigation, Water Treatment & Chemicals in Warri',
    description:
      'Fumigation services, water treatment, and professional chemical supplies for homes and businesses in Warri, Delta State, and beyond.',
    type: 'website',
    siteName: 'Ovichem Consult Ltd',
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

