import type {Metadata} from 'next';
import { Instrument_Serif, Plus_Jakarta_Sans } from 'next/font/google';
import { siteUrl } from '../lib/site-url';
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
  metadataBase: siteUrl,
  title: 'Ovichem Consult | Chemical, Environmental & Engineering',
  description:
    'Industrial and laboratory chemical supply, water treatment, environmental monitoring, fumigation, and engineering services in Warri, Delta State, Nigeria.',
  alternates: siteUrl ? { canonical: '/' } : undefined,
  icons: {
    icon: '/company-photos/logo-removebg-preview.png',
    apple: '/company-photos/logo-removebg-preview.png',
  },
  keywords: [
    'industrial chemical supplier Warri',
    'laboratory chemicals Nigeria',
    'water treatment services Delta State',
    'environmental monitoring Nigeria',
    'environmental audit Warri',
    'fumigation and pest control Warri',
    'engineering consultancy Delta State',
  ],
  openGraph: {
    title: 'Ovichem Consult Ltd | Chemical, Environmental & Engineering Services in Warri',
    description: 'Industrial and laboratory chemical supply, water treatment, environmental monitoring, fumigation, and engineering services in Warri, Delta State, Nigeria.',
    type: 'website',
    locale: 'en_NG',
    siteName: 'Ovichem Consult Ltd',
    images: [{
      url: '/company-photos/hero-images/team%20(2).jpg',
      alt: 'Ovichem Consult Limited field team',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ovichem Consult Ltd | Chemical, Environmental & Engineering Services in Warri',
    description: 'Industrial and laboratory chemical supply, water treatment, environmental monitoring, fumigation, and engineering services in Warri, Delta State, Nigeria.',
    images: ['/company-photos/hero-images/team%20(2).jpg'],
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

