'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import fumigationImage from '../assets/company photos/EnvironmentalImg.jpeg';
import projectSuppliesImage from '../assets/company photos/pump2.jpeg';
import waterTreatmentSuppliesImage from '../assets/company photos/products (9).jpg';
import chemicalChem2Image from '../assets/company photos/chemicals img/chem2.jpeg';
import chemicalFolderImage from '../assets/company photos/chemicals img/chemimg.jpeg';
import chemicalChlorineImage from '../assets/company photos/chemicals img/chlorine.jpg';
import chemicalKeg1Image from '../assets/company photos/chemicals img/Keg1.jpg';
import chemicalKeg2Image from '../assets/company photos/chemicals img/Keg2.jpg';
import chemicalMethanolImage from '../assets/company photos/chemicals img/methanol.jpeg';
import environmentalImage from '../assets/company photos/environmental img/eniviron img.jpeg';
import environmentalFumigationImage from '../assets/company photos/environmental img/fumigation image.jpg';
import environmentalFieldImage from '../assets/company photos/environmental img/IMG-20260708-WA0003.jpg';
import environmentalTeamImage from '../assets/company photos/environmental img/team (2).jpg';
import environmentalWorkImage from '../assets/company photos/environmental img/work in progress (3).jpg';
import charissaLogo from '../assets/company photos/our clients/Charissa logo.png';
import deuxLogo from '../assets/company photos/our clients/deux.webp';
import dewaylesLogo from '../assets/company photos/our clients/Dewayles-Group-of-Companies-Logo.jpg';
import matrixLogo from '../assets/company photos/our clients/matrix logo.png';
import nuwayLogo from '../assets/company photos/our clients/Nuway-Logo-transparent1.png';
import ociLogo from '../assets/company photos/our clients/OCI-LOGO.png-transparent.png';
import opacLogo from '../assets/company photos/our clients/OPAC-logo-698px.png';
import seepcoLogo from '../assets/company photos/our clients/seepco.jpeg';

const imagePath = (fileName: string) => `/company-photos/${fileName}`;
const logoImage = imagePath('logo-removebg-preview.png');
const heroImages = [
  imagePath('hero-images/engineering image.jpg'),
  imagePath('hero-images/Keg1.jpg'),
  imagePath('hero-images/Keg2.jpg'),
  imagePath('hero-images/team (1).jpg'),
  imagePath('hero-images/team (2).jpg'),
  imagePath('hero-images/work in progress (8).jpg'),
];
const waterTreatmentImage = waterTreatmentSuppliesImage;
const chemicalImage = chemicalChlorineImage;
const aboutImage = imagePath('about.jpg');
const equipmentImage = imagePath('IMG-20260708-WA0001.jpg');
const marineImage = projectSuppliesImage;
const waterTestImage = imagePath('engineering/IMG-20260804-WA0006.jpg');
const waterAwarenessImage = imagePath('water.jpg');
const environmentalGalleryImages = [
  fumigationImage,
  imagePath('eniviron img.jpeg'),
];
const waterTreatmentGalleryImages = [
  waterTreatmentImage,
  imagePath('products (10).jpg'),
];

const chemicalSalesImages = [
  chemicalFolderImage,
  chemicalChlorineImage,
  chemicalKeg1Image,
  chemicalKeg2Image,
  chemicalMethanolImage,
  chemicalChem2Image,
];
const environmentalServicesImages = [
  environmentalImage,
  environmentalFumigationImage,
  environmentalFieldImage,
  environmentalTeamImage,
  environmentalWorkImage,
];
const engineeringImages = [
  imagePath('engineering/IMG-20260804-WA0005.jpg'),
  imagePath('engineering/IMG-20260804-WA0006.jpg'),
  imagePath('engineering/team (1).jpg'),
  imagePath('engineering/team (5).jpg'),
];
const clientLogos = [
  { name: 'SEEPCO', image: seepcoLogo },
  { name: 'Charissa', image: charissaLogo },
  { name: 'Dewayles Group of Companies', image: dewaylesLogo },
  { name: 'Matrix', image: matrixLogo },
  { name: 'Nuway', image: nuwayLogo },
  { name: 'OCI', image: ociLogo },
  { name: 'OPAC', image: opacLogo },
  { name: 'DEUX', image: deuxLogo },
];
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  ChevronRight,
  Plus,
  X,
  MapPin,
  Clock,
  ArrowRight,
  Award,
  Layers,
  Check,
  Package,
  Wrench,
  Ship,
  Menu,
} from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAboutTab, setActiveAboutTab] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeChemicalSalesImage, setActiveChemicalSalesImage] = useState(0);
  const [activeEnvironmentalServicesImage, setActiveEnvironmentalServicesImage] = useState(0);
  const [activeEnvironmentalGalleryImage, setActiveEnvironmentalGalleryImage] = useState(0);
  const [activeWaterTreatmentGalleryImage, setActiveWaterTreatmentGalleryImage] = useState(0);
  const [activeEngineeringImage, setActiveEngineeringImage] = useState(0);
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const [activeWhyUseUsPoint, setActiveWhyUseUsPoint] = useState(0);

  useEffect(() => {
    const slideshowInterval = window.setInterval(() => {
      setActiveHeroImage((current) => (current + 1) % heroImages.length);
      setActiveChemicalSalesImage((current) => (current + 1) % chemicalSalesImages.length);
      setActiveEnvironmentalServicesImage((current) => (current + 1) % environmentalServicesImages.length);
      setActiveEnvironmentalGalleryImage((current) => (current + 1) % environmentalGalleryImages.length);
      setActiveWaterTreatmentGalleryImage((current) => (current + 1) % waterTreatmentGalleryImages.length);
      setActiveEngineeringImage((current) => (current + 1) % engineeringImages.length);
    }, 3800);

    return () => window.clearInterval(slideshowInterval);
  }, []);

  // Monitor scroll position to adapt header background and text colors
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileMenuOpen]);

  const navigateToSection = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    setMobileMenuOpen(false);

    const scrollToSection = () => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const headerHeight = document.getElementById('main-navigation-header')?.getBoundingClientRect().height ?? 0;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.history.pushState(null, '', `#${sectionId}`);
      window.scrollTo({ top: Math.max(0, sectionTop), behavior: 'smooth' });
    };

    const navigationDelay = mobileMenuOpen ? 350 : 0;
    window.setTimeout(() => {
      requestAnimationFrame(() => requestAnimationFrame(scrollToSection));
    }, navigationDelay);
  };

  useEffect(() => {
    const scrollToCurrentHash = () => {
      const sectionId = window.location.hash.slice(1);
      if (!sectionId) return;

      requestAnimationFrame(() => requestAnimationFrame(() => {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const headerHeight = document.getElementById('main-navigation-header')?.getBoundingClientRect().height ?? 0;
        window.scrollTo({
          top: Math.max(0, section.getBoundingClientRect().top + window.scrollY - headerHeight),
          behavior: 'auto',
        });
      }));
    };

    window.addEventListener('hashchange', scrollToCurrentHash);
    window.addEventListener('load', scrollToCurrentHash);
    scrollToCurrentHash();

    return () => {
      window.removeEventListener('hashchange', scrollToCurrentHash);
      window.removeEventListener('load', scrollToCurrentHash);
    };
  }, []);

  // WhatsApp Inquiry Generator State
  const [inquirySpace, setInquirySpace] = useState('Domestic Home / Residence');
  const [inquiryNeed, setInquiryNeed] = useState('Fumigation & Pest Control');
  const [inquiryLocation, setInquiryLocation] = useState('Warri, Delta State');

  const defaultWhatsappNumber = '2348051759119';
  const defaultPhoneNumber = '+234 08051759119';
  const secondaryPhoneNumber = '+234 07019121877';
  const defaultEmail = 'ovichemconsultltd@yahoo.com';

  const generateWhatsappUrl = (service?: string, space?: string, loc?: string) => {
    const s = service || inquiryNeed;
    const sp = space || inquirySpace;
    const l = loc || inquiryLocation;
    const text = encodeURIComponent(
      `Hello Ovichem Consult Limited. I would like to inquire about ${s} for my ${sp} in ${l}. Please let me know your availability and next steps.`
    );
    return `https://wa.me/${defaultWhatsappNumber}?text=${text}`;
  };

  const aboutTabs = [
    {
      id: 0,
      title: 'Experienced & practical specialists',
      description:
        'Ovichem Consult Limited is a Nigerian chemical, environmental and engineering servicing company with experience in providing industrial and laboratory chemical supplies/support services, water treatment solutions, environmental monitoring and auditing, and technical engineering support services.The company has developed practical experience in water quality assessment and treatment, borehole water treatment, water treatment plant installation and maintenance, environmental inspection and monitoring, air quality and noise assessment, environmental audit reporting, sanitation, disinfection and pest-control support services. ',
    },
  ];

  const whyUseUsPoints = [
    ['O', 'Optimal Solutions and Operational Excellence'],
    ['V', 'Value driven and Viability'],
    ['I', 'Integrity and Innovation'],
    ['C', 'Competence and Chemical Expertise'],
    ['H', 'Honesty and HSE Compliant'],
    ['E', 'Efficiency and Engineering Excellence'],
    ['M', 'Management and Merit'],
  ];

  const productItems = [
    { name: 'Industrial chemicals', description: 'Methanol, rigwash, xylene, chlorine, aluminium sulphate, acetic acid etc.', image: chemicalImage },
    { name: 'Laboratory supplies', description: 'Laboratory chemicals, reagents, equipment and everyday testing items.', image: equipmentImage },
    { name: 'Water-treatment supplies', description: 'Water-treatment products, treatment plants, pumps and related equipment.', image: waterTreatmentImage },
    { name: 'Project supplies', description: 'Tools, general consumables and materials for industrial work.', image: marineImage },
  ];

  const faqItems = [
    {
      question: 'How much does pest control cost?',
      answer:
        'Pricing depends on the pest type, infestation severity, property size, and treatment method required. We provide transparent, upfront quotes following a brief telephone or WhatsApp consultation.',
    },
    {
      question: 'Is pest control safe for children and pets?',
      answer:
        'Yes. We use approved, low-toxicity professional formulations and establish clear re-entry safety timelines (typically 2 to 4 hours) to keep your family, staff, and pets completely safe.',
    },
    {
      question: 'How quickly can you respond?',
      answer:
        'We offer same-day and emergency dispatch across Warri and surrounding Delta State communities for urgent termite discoveries, rodent problems, or sudden pest outbreaks.',
    },
    {
      question: 'How long does pest treatment take?',
      answer:
        'Most standard residential and commercial treatments take between 45 and 90 minutes, depending on the property square footage, building layout, and targeted treatment scope.',
    },
    {
      question: 'Do I need to leave the property during treatment?',
      answer:
        'For comprehensive misting and whole-facility fumigation, we recommend vacating during application and observing the standard ventilation window before returning.',
    },
    {
      question: 'Do you provide drinking water treatment and lab diagnostics?',
      answer:
        'Yes. We conduct multi-parameter raw borehole and reservoir testing, followed by tailored coagulation, iron removal, and filtration solutions to make water clean and potable.',
    },
    {
      question: 'Can I purchase chemicals or equipment directly from Ovichem?',
      answer:
        'Yes. We supply certified termiticides, water conditioning coagulants, and commercial spray equipment with mixing instructions for estate managers and facility teams.',
    },
  ];

  return (
    <div className="relative min-h-[100dvh] bg-white text-[#06042D] flex flex-col font-sans selection:bg-[#06042D] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Ovichem Consult Limited',
            description:
              'Fumigation services, water treatment, and fumigative chemical supply for homes and businesses.',
            areaServed: ['Warri', 'Delta State', 'Nigeria'],
            serviceType: [
              'Fumigation services',
              'Pest control',
              'Water treatment',
              'Fumigative chemical supply',
            ],
          }),
        }}
      />
      
      {/* 1. ADAPTIVE FIXED NAVIGATION HEADER */}
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] shadow-md text-[#06042D]'
            : 'bg-transparent border-b border-white/15 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-6">
            <a
              id="brand-logo-link"
              href="#"
              className="flex items-center gap-3.5 group focus:outline-none"
            >
              <div className="rounded-xl bg-white/95 px-2 py-1 shadow-lg shadow-black/15">
                <Image
                  src={logoImage}
                  alt="Ovichem Consult Limited logo"
                  width={150}
                  height={70}
                  className="h-12 sm:h-14 w-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                  priority
                  unoptimized
                />
              </div>
            </a>

            <div
              className={`hidden lg:block h-8 w-px transition-colors duration-300 ${
                isScrolled ? 'bg-[#06042D]/15' : 'bg-white/20'
              }`}
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav-menu"
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 lg:gap-8 text-sm font-medium transition-colors duration-300"
          >
            <a
              href="#hero-section"
              onClick={(event) => navigateToSection(event, 'hero-section')}
              className={`transition-colors ${
                isScrolled
                  ? 'text-[#06042D]/70 hover:text-[#06042D]'
                  : 'text-white/90 hover:text-[#F0B84D] drop-shadow-sm'
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(event) => navigateToSection(event, 'about')}
              className={`transition-colors ${
                isScrolled
                  ? 'text-[#06042D]/70 hover:text-[#06042D]'
                  : 'text-white/90 hover:text-[#F0B84D] drop-shadow-sm'
              }`}
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={(event) => navigateToSection(event, 'services')}
              className={`transition-colors ${
                isScrolled
                  ? 'text-[#06042D]/70 hover:text-[#06042D]'
                  : 'text-white/90 hover:text-[#F0B84D] drop-shadow-sm'
              }`}
            >
              What we do
            </a>
            <a
              href="#products"
              onClick={(event) => navigateToSection(event, 'products')}
              className={`transition-colors ${
                isScrolled
                  ? 'text-[#06042D]/70 hover:text-[#06042D]'
                  : 'text-white/90 hover:text-[#F0B84D] drop-shadow-sm'
              }`}
            >
              Products
            </a>
            <a
              href="#why-choose-us"
              onClick={(event) => navigateToSection(event, 'why-choose-us')}
              className={`transition-colors ${
                isScrolled
                  ? 'text-[#06042D]/70 hover:text-[#06042D]'
                  : 'text-white/90 hover:text-[#F0B84D] drop-shadow-sm'
              }`}
            >
              Why use us
            </a>
            <a
              href="#clients"
              onClick={(event) => navigateToSection(event, 'clients')}
              className={`transition-colors ${
                isScrolled
                  ? 'text-[#06042D]/70 hover:text-[#06042D]'
                  : 'text-white/90 hover:text-[#F0B84D] drop-shadow-sm'
              }`}
            >
              Our clients
            </a>
            <a
              href="#contact"
              onClick={(event) => navigateToSection(event, 'contact')}
              className={`transition-colors ${
                isScrolled
                  ? 'text-[#06042D]/70 hover:text-[#990909]'
                  : 'text-white/90 hover:text-[#F0B84D] drop-shadow-sm'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Right Action Button */}
         

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center">
            <button
              id="mobile-menu-trigger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-[#06042D] hover:bg-black/5'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-menu"
              role="navigation"
              aria-label="Mobile Navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-3 transition-colors ${
                isScrolled
                  ? 'bg-white/98 backdrop-blur-xl border-[#E5E5E5] text-[#06042D]'
                  : 'bg-[#06042D]/95 backdrop-blur-xl border-white/15 text-white'
              }`}
            >
              <div className="flex flex-col space-y-2 text-sm font-medium">
                <a
                  href="#hero-section"
                  onClick={(event) => navigateToSection(event, 'hero-section')}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isScrolled
                      ? 'hover:bg-black/5 text-[#06042D]'
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={(event) => navigateToSection(event, 'about')}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isScrolled
                      ? 'hover:bg-black/5 text-[#06042D]'
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  About Us
                </a>
                <a
                  href="#services"
                  onClick={(event) => navigateToSection(event, 'services')}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isScrolled
                      ? 'hover:bg-black/5 text-[#06042D]'
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  What we do
                </a>
                <a
                  href="#products"
                  onClick={(event) => navigateToSection(event, 'products')}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isScrolled
                      ? 'hover:bg-black/5 text-[#06042D]'
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  Products
                </a>
                <a
                  href="#why-choose-us"
                  onClick={(event) => navigateToSection(event, 'why-choose-us')}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isScrolled
                      ? 'hover:bg-black/5 text-[#06042D]'
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  Why use us
                </a>
                <a
                  href="#clients"
                  onClick={(event) => navigateToSection(event, 'clients')}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isScrolled
                      ? 'hover:bg-black/5 text-[#06042D]'
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  Our clients
                </a>
                <a
                  href="#contact"
                  onClick={(event) => navigateToSection(event, 'contact')}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isScrolled
                      ? 'hover:bg-black/5 text-[#06042D]'
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  Contact
                </a>
              </div>

              <div
                className={`pt-3 border-t flex flex-col gap-2.5 ${
                  isScrolled ? 'border-[#E5E5E5]' : 'border-white/10'
                }`}
              >
             
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. HERO SECTION */}
      <section
        id="hero-section"
        className="relative min-h-[88dvh] lg:min-h-[92dvh] flex flex-col justify-center overflow-hidden text-white pt-24 sm:pt-28"
      >
        <div
          id="hero-bg-container"
          className="absolute inset-0 z-0 overflow-hidden bg-[#06042D]"
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={heroImages[activeHeroImage]}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
              className="absolute inset-0 overflow-hidden bg-[#06042D]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat blur-xl"
                style={{ backgroundImage: `url('${heroImages[activeHeroImage]}')` }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${heroImages[activeHeroImage]}')` }}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-[#06042D]/55 via-[#0D0A47]/45 to-[#06042D]/50" />
          <div className="absolute inset-0 bg-primary-900/15 backdrop-blur-[0.5px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 w-full">
          <div className="max-w-3xl lg:max-w-4xl space-y-5 sm:space-y-6">
            
          

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              id="hero-main-title"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-serif-display text-[#FFFFFF] leading-[1.03] tracking-tight drop-shadow-sm font-normal"
            >
              Welcome to Ovichem Consult Limited
            </motion.h1>

            {/* Strategic Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              id="hero-subtitle"
              className="text-sm sm:text-base md:text-lg text-white/90 font-normal leading-relaxed max-w-2xl pt-1 drop-shadow-sm"
            >
              Chemicals, Enivronmental Services and Engineering
            </motion.p>



            {/* Warri & Delta State Footnote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-white/70"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F0B84D]" />
                <span>
                  <strong className="text-white font-medium">Based in Warri, Delta State</strong> — Taking projects across the state and beyond
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. CLIENTS SECTION */}
      <section id="clients" className="border-b border-[#E5E5E5] bg-[#FAFAFA] py-10 sm:py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="space-y-4 lg:col-span-5">
            <div className="inline-flex items-center rounded-full border border-[#E4980B]/30 bg-[#E4980B]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#990909]">
              Our clients
            </div>
            <h2 className="font-serif-display text-3xl leading-[1.08] tracking-tight text-[#06042D] sm:text-5xl">
              Our clients
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="flex h-24 items-center justify-center border border-[#E6E1D9] bg-white px-4 py-3 shadow-[0_8px_20px_rgba(6,4,45,0.04)] transition-transform duration-300 hover:-translate-y-1 sm:h-28"
              >
                <Image
                  src={client.image}
                  alt={`${client.name} logo`}
                  className="max-h-full w-full object-contain"
                  sizes="(min-width: 1024px) 15vw, (min-width: 640px) 25vw, 42vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section
        id="services"
        className="py-12 sm:py-16 bg-[#F8F7FC] hover:bg-white border-b border-[#E5E5E5]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 sm:mb-12">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-100 border border-accent-300 text-[#990909] text-xs font-semibold uppercase tracking-wider">
                What we do
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-display text-[#06042D] tracking-tight leading-[1.08]">
                What we do
              </h2>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Environmental Services */}
            <div
              id="service-card-environmental-services"
              className="order-2 p-2 rounded-[2rem] bg-white border border-[#E5E5E5] shadow-md flex flex-col group hover:border-[#F0B84D] hover:shadow-lg transition-all"
            >
              <div className="relative h-80 rounded-[calc(2rem-0.5rem)] overflow-hidden bg-primary-900">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={
                      typeof environmentalServicesImages[activeEnvironmentalServicesImage] === 'string'
                        ? environmentalServicesImages[activeEnvironmentalServicesImage]
                        : environmentalServicesImages[activeEnvironmentalServicesImage].src
                    }
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={environmentalServicesImages[activeEnvironmentalServicesImage]}
                      alt="Environmental services field work"
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    Environmental Services
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-serif-display font-medium text-white">
                    Environmental Services
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-[#990909] italic">
                    “Creating cleaner, safer and more sustainable environments.”
                  </p>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    We provide reliable and professional environmental services designed to protect people, facilities and the environment. 
                  </p>
                  <ul className="text-xs text-[#524B44] space-y-2 pt-2 border-t border-[#E5E5E5]/50">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> 	Environmental Audit Reporting (EAR)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> Air Quality Monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> 	Noise Measurement
                    </li>
                     <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> 	Decontamination, Disinfection and Disinfestation
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E5E5E5]/50">
                  <a
                    href={generateWhatsappUrl('Fumigation & Pest Control')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#E4980B] group-hover:text-[#990909]"
                  >
                    <span>Ask about environmental services</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Engineering */}
            <div
              id="service-card-engineering"
              className="order-3 p-2 rounded-[2rem] bg-white border border-[#E5E5E5]/70 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col group hover:border-[#E4980B]/50 transition-all"
            >
              <div className="relative h-80 rounded-[calc(2rem-0.5rem)] overflow-hidden bg-[#1E293B]">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={engineeringImages[activeEngineeringImage]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={engineeringImages[activeEngineeringImage]}
                      alt="Engineering services project"
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    Engineering
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-serif-display font-medium text-white">
                    Engineering
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-[#990909] italic">
                    “Innovative engineering solutions built for performance, safety and reliability”
                  </p>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    We provide practical and cost-effective engineering solutions that helps organizations improve operational efficiency, reliability and safety.
                  </p>
                  <ul className="text-xs text-[#524B44] space-y-2 pt-2 border-t border-[#E5E5E5]/50">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> 	Water Treatment
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> 	Water Treatment Plant/Equipment Installation, Operation and Maintenance
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> 		Commissioning and Start-Up
                    </li>
                     <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> 		Rehabilitation and Upgrade
                    </li>
                     <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> 		Technical Consultancy and Support Services
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E5E5E5]/50">
                  <a
                    href={generateWhatsappUrl('Drinking Water Treatment')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#E4980B] group-hover:text-[#990909]"
                  >
                    <span>Ask about Engineering services</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Chemical Sales, Supply and Support Services */}
            <div
              id="service-card-chemical-sales"
              className="order-1 p-2 rounded-[2rem] bg-white border border-[#E5E5E5]/70 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col group hover:border-[#E4980B]/50 transition-all"
            >
              <div className="relative h-80 rounded-[calc(2rem-0.5rem)] overflow-hidden bg-[#1E2E28]">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={
                      typeof chemicalSalesImages[activeChemicalSalesImage] === 'string'
                        ? chemicalSalesImages[activeChemicalSalesImage]
                        : chemicalSalesImages[activeChemicalSalesImage].src
                    }
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={chemicalSalesImages[activeChemicalSalesImage]}
                      alt="Chemical sales and supply products"
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    Chemicals
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-serif-display font-medium text-white">
                    Chemical Sales, Supply and Support Services
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-[#990909] italic">
                    “Get the chemicals you need for the job.”
                  </p>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                      We supply industrial chemicals and laboratory chemicals/reagents for various applications across multiple industries                  </p>
                  <ul className="text-xs text-[#524B44] space-y-2 pt-2 border-t border-[#E5E5E5]/50">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> 	Methanol
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> 	Chlorine
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" />	Aluminum Sulphate
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" />		Rigwash
                    </li>
                      <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" />		Ion Exchange Resins
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" />		Birm Managanese Greensand
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" />		Xylene
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E5E5E5]/50">
                  <a
                    href={generateWhatsappUrl('Chemical Sales & Supplies')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#E4980B] group-hover:text-[#990909]"
                  >
                    <span>Discuss supply requirements</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. PRODUCTS SECTION */}
      <section id="products" className="scroll-mt-24 border-b border-[#E5E5E5]/70 bg-[#F6F1EA] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-stretch">
            <div className="flex flex-col justify-between rounded-2xl border border-[#E5E5E5] bg-[#06042D] p-7 text-white shadow-sm sm:p-9 lg:col-span-5">
              <div className="space-y-5">
                <div className="inline-flex items-center rounded-full border border-[#F0B84D]/40 bg-[#F0B84D]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#F0B84D]">
                  Products we supply
                </div>
                <h2 className="max-w-lg text-3xl leading-[1.08] tracking-tight sm:text-5xl">
                  Chemicals, equipment and supplies for the job
                </h2>
                <p className="max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                    We supply Industrial and laboratory chemicals/reagents, water-treatment equipment and general project supplies for various applications across multiple industries. 

                </p>
              </div>
              <div className="mt-12 flex items-center gap-3 border-t border-white/15 pt-5 text-xs text-white/60">
                <Package className="h-4 w-4 text-[#F0B84D]" />
                <span>Specification-led supply for field and laboratory work</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
              {productItems.map((product) => (
                <article key={product.name} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white shadow-sm">
                  <div className="relative h-72 shrink-0 overflow-hidden bg-[#1E2E28]">
                    <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex min-h-[174px] flex-1 flex-col justify-between gap-4 p-5">
                    <div className="space-y-3">
                      <h3 className="text-xl font-medium leading-tight text-[#06042D]">{product.name}</h3>
                      <p className="text-xs leading-relaxed text-[#666666]">{product.description}</p>
                    </div>
                    <a href={generateWhatsappUrl(product.name)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-[#990909] transition-colors hover:text-[#E4980B]">
                      Ask about this product <ChevronRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MINI PROJECT GALLERY */}
      <section id="project-gallery" className="scroll-mt-24 border-b border-[#E5E5E5]/70 bg-[#F8F7FC] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#990909]">From our work</p>
              <h2 className="mt-2 text-3xl text-[#06042D] sm:text-4xl">A look at what we do</h2>
            </div>
            <a href="#contact" className="inline-flex items-center gap-1 text-sm font-semibold text-[#990909] hover:text-[#E4980B]">
              Talk to the team <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { image: environmentalGalleryImages[activeEnvironmentalGalleryImage], label: 'Environmental services' },
              { image: waterTreatmentGalleryImages[activeWaterTreatmentGalleryImage], label: 'Water treatment' },
              { image: imagePath('methanol.jpeg'), label: 'Chemical supply' },
            ].map((item) => (
              <div key={item.label} className="relative h-72 overflow-hidden rounded-2xl bg-[#06042D] sm:h-80">
                <Image src={item.image} alt={item.label} fill className="object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-5 pb-4 pt-12">
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ABOUT US SECTION */}
      <section id="about" className="scroll-mt-24 py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#E5E5E5]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6">
              <div className="p-2 rounded-[2.5rem] bg-white border border-[#E5E5E5]/80 shadow-[0_15px_35px_rgba(0,0,0,0.04)]">
                <div className="relative h-[420px] sm:h-[500px] rounded-[calc(2.5rem-0.5rem)] overflow-hidden">
                  <Image
                    src={aboutImage}
                    alt="Ovichem Consult team and field operations"
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-white">
                    
                    <p className="text-xs text-[#E0D7CE] mt-0.5">
                      More than a decade of practical treatment and chemical work across Nigeria.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#E4980B]/10 border border-[#E4980B]/30 text-[#990909] text-xs font-semibold uppercase tracking-wider">
                About Us
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif-display text-[#06042D] tracking-tight leading-[1.1]">
                Quality, reliability, and practical expertise
              </h2>

              <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                  Ovichem Consult Limited is an indigenous Chemical, Environmental Services and Engineering Company. We provide quality, reliable, and cost-effective solutions to multiple industries.
              </p>

              <div className="space-y-4 pt-2">
                {aboutTabs.map((tab, idx) => (
                  <div
                    key={tab.id}
                    onClick={() => setActiveAboutTab(idx)}
                    className={`cursor-pointer pl-5 py-2 border-l-[3px] transition-all ${
                      activeAboutTab === idx
                        ? 'border-[#E4980B] bg-[#F3ECE2]/50 rounded-r-xl'
                        : 'border-[#E5E5E5] hover:border-[#E4980B]/40'
                    }`}
                  >
                    <h4 className={`text-base sm:text-lg font-serif-display font-medium ${
                      activeAboutTab === idx ? 'text-[#06042D]' : 'text-[#7A726A]'
                    }`}>
                      {tab.title}
                    </h4>
                    {activeAboutTab === idx && (
                      <p className="text-xs sm:text-sm text-[#666666] mt-1.5 leading-relaxed">
                        {tab.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href={generateWhatsappUrl('General Property Consultation')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#E4980B] hover:bg-[#990909] text-white text-sm font-normal px-7 py-3.5 rounded-full shadow-md shadow-black/15 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Talk with our team on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. WHY USE US, MISSION & VALUES SECTION */}
      <section id="why-choose-us" className="scroll-mt-24 py-24 sm:py-32 bg-[#F6F1EA] border-b border-[#E5E5E5]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#E4980B]/10 border border-[#E4980B]/30 text-[#990909] text-xs font-semibold uppercase tracking-wider">
              Why use us
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-display text-[#06042D] tracking-tight">
              Why use Ovichem?
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl mx-auto">
              We combine chemical expertise, environmental responsibility and engineering discipline to deliver dependable work.
            </p>
          </div>

          <div className="mb-12">
            <div className="relative hidden grid-cols-7 lg:grid">
              <div className="absolute left-[7.14%] right-[7.14%] top-[3.35rem] h-px bg-[#06042D]/15" aria-hidden="true" />
              {whyUseUsPoints.map(([letter, meaning], index) => (
                <button
                  key={letter}
                  type="button"
                  onClick={() => setActiveWhyUseUsPoint(index)}
                  onMouseEnter={() => setActiveWhyUseUsPoint(index)}
                  className="group relative flex min-w-0 flex-col items-center px-3 text-center"
                  aria-label={`${letter}: ${meaning}`}
                >
                  <span className={`relative z-10 font-serif-display text-6xl leading-none transition-colors duration-300 ${activeWhyUseUsPoint === index ? 'text-[#E4980B]' : 'text-[#06042D] group-hover:text-[#E4980B]'}`}>
                    {letter}
                  </span>
                  <span className={`mt-7 max-w-[10rem] text-xs leading-relaxed transition-colors duration-300 ${activeWhyUseUsPoint === index ? 'text-[#06042D]' : 'text-[#6F6860] group-hover:text-[#06042D]'}`}>
                    {meaning}
                  </span>
                  <span className={`mt-4 h-1 w-10 transition-colors duration-300 ${activeWhyUseUsPoint === index ? 'bg-[#E4980B]' : 'bg-transparent group-hover:bg-[#E4980B]/60'}`} aria-hidden="true" />
                </button>
              ))}
            </div>

            <div className="relative lg:hidden">
              <div className="absolute bottom-8 left-[1.1rem] top-8 w-px bg-[#06042D]/15" aria-hidden="true" />
              <div className="space-y-1">
                {whyUseUsPoints.map(([letter, meaning], index) => (
                  <button
                    key={letter}
                    type="button"
                    onClick={() => setActiveWhyUseUsPoint(index)}
                    className="group relative flex w-full items-start gap-5 py-3 text-left"
                    aria-label={`${letter}: ${meaning}`}
                  >
                    <span className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 bg-[#F6F1EA] font-serif-display text-xl font-semibold transition-colors duration-300 ${activeWhyUseUsPoint === index ? 'border-[#E4980B] text-[#E4980B]' : 'border-[#06042D]/20 text-[#06042D] group-hover:border-[#E4980B] group-hover:text-[#E4980B]'}`}>
                      {letter}
                    </span>
                    <span className={`pt-1 text-sm leading-relaxed transition-colors duration-300 ${activeWhyUseUsPoint === index ? 'font-medium text-[#06042D]' : 'text-[#6F6860] group-hover:text-[#06042D]'}`}>
                      {meaning}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
            <div className="rounded-2xl bg-white border border-[#E5E5E5]/80 p-7 sm:p-9 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-[#E4980B]" />
                <h3 className="text-2xl font-serif-display text-[#06042D]">Our mission</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#666666]">
                Our mission is to provide valued, excellent and professional services to our clients in the area of Chemicals, Environmental Services and Engineering, taking coqnizance of the safety and protection of personnel, equipment, and the environment
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-[#E5E5E5]/80 p-7 sm:p-9 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-2 mb-3">
                <ArrowRight className="w-5 h-5 text-[#E4980B]" />
                <h3 className="text-2xl font-serif-display text-[#06042D]">Our vision</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#666666]">
                To be the foremost and the best Chemicals, Environmental Services, and Engineering company that compares favorably with leading industries anywhere in the world and to be the best service provider in our segment of the industry wherever we work.</p>
            </div>

            <div className="rounded-2xl bg-white border border-[#E5E5E5]/80 p-7 sm:p-9 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-[#E4980B]" />
                <h3 className="text-2xl font-serif-display text-[#06042D]">Core values</h3>
              </div>
              <div className="space-y-3">
                {['Quality', 'Integrity', 'Professionalism', 'Teamwork', 'Excellence'].map((value) => (
                  <div key={value} className="flex items-center gap-3 border-b border-[#E5E5E5] pb-3 text-sm font-semibold text-[#524B44] last:border-b-0 last:pb-0">
                    <Check className="h-4 w-4 shrink-0 text-[#E4980B]" strokeWidth={2.5} />
                    {value}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. DIRECT CONTACT SECTION */}
      <section
        id="contact"
        className="scroll-mt-24 border-b border-[#E5E5E5]/70 bg-[#F6F1EA] py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-6 lg:col-span-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#990909]">Contact us</p>
                <h2 className="max-w-xl text-4xl leading-[1.05] tracking-tight text-[#06042D] sm:text-6xl font-serif-display">
                  Let&apos;s discuss.....
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-[#666666] sm:text-base">
                  Tell us what you need and our team will help you choose the right optimal solution.
                </p>
              </div>

              <div className="space-y-5 border-y border-[#D9CEC0] py-6 text-sm text-[#524B44]">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#E4980B]" />
                  <span>
                    <strong className="block text-xs font-semibold uppercase tracking-wider text-[#786E64]">Call or WhatsApp</strong>
                    <a href={`tel:${defaultPhoneNumber.replace(/\s+/g, '')}`} className="block hover:text-[#990909]">{defaultPhoneNumber}</a>
                    <a href={`tel:${secondaryPhoneNumber.replace(/\s+/g, '')}`} className="block hover:text-[#990909]">{secondaryPhoneNumber}</a>
                  </span>
                </div>
                <a href={`mailto:${defaultEmail}`} className="flex items-start gap-3 transition-colors hover:text-[#990909]">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#E4980B]" />
                  <span><strong className="block text-xs font-semibold uppercase tracking-wider text-[#786E64]">Email</strong>{defaultEmail}</span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E4980B]" />
                  <span><strong className="block text-xs font-semibold uppercase tracking-wider text-[#786E64]">Visit us at</strong>Suite 1.03 Alfa Plaza, Opposite Coca Cola Depot, Enerhen Road, Enerhen, Effurun, Warri, Delta State, Nigeria.</span>
                </div>
              </div>

              <a
                href={`tel:${defaultPhoneNumber.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06042D] px-7 py-3.5 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#990909]"
              >
                <Phone className="h-4 w-4" />
                <span>Call us now</span>
              </a>
            </div>

          </div>
        </div>
      </section>

     
      {/* 12. RESTYLED FOOTER (Exact Match to Image 3 Style: Light Minimalist Editorial) */}
      <footer className="bg-[#FFFFFF] text-[#666666] border-t border-[#E5E5E5]/70 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Col 1: Brand & Bio (Exact Match to Image 3) */}
            <div className="md:col-span-2 lg:col-span-4 space-y-4">
              <a href="#" className="flex items-center gap-3 group focus:outline-none">
                <Image src={logoImage} alt="Ovichem Consult Limited logo" width={180} height={82} className="h-16 w-auto object-contain" unoptimized />
              </a>
            </div>

            {/* Col 2: All pages (Exact Match to Image 3) */}
            <div className="md:col-span-1 lg:col-span-3 space-y-4 md:pl-6">
              <h4 className="text-xl font-serif-display font-medium text-[#06042D]">
                All pages
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#666666]">
                <li>
                  <a href="#" className="hover:text-[#E4980B] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#E4980B] transition-colors">
                    Why Ovichem
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#E4980B] transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-[#E4980B] transition-colors">
                    Products
                  </a>
                </li>
                
                
                <li>
                  <a href="#" className="hover:text-[#E4980B] transition-colors">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#E4980B] transition-colors">
                    Terms of use
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Social media (Exact Match to Image 3) */}
            <div className="md:col-span-1 lg:col-span-2 space-y-4">
              <h4 className="text-xl font-serif-display font-medium text-[#06042D]">
                Social media
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#666666]">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E4980B] transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E4980B] transition-colors"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E4980B] transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href={generateWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E4980B] transition-colors text-[#E4980B] font-medium"
                  >
                    WhatsApp Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact Us (Exact Match to Image 3) */}
            <div className="md:col-span-1 lg:col-span-3 space-y-4">
              <h4 className="text-xl font-serif-display font-medium text-[#06042D]">
                Get in touch
              </h4>
              <div className="space-y-2.5 text-xs sm:text-sm text-[#666666]">
                <p>
                  <a
                    href={`mailto:${defaultEmail}`}
                    className="hover:text-[#E4980B] transition-colors"
                  >
                    {defaultEmail}
                  </a>
                </p>
                <p>
                  <a
                    href={`tel:${defaultPhoneNumber.replace(/\s+/g, '')}`}
                    className="hover:text-[#E4980B] transition-colors"
                  >
                    {defaultPhoneNumber}
                  </a>
                </p>
                <p>
                  <a
                    href={`tel:${secondaryPhoneNumber.replace(/\s+/g, '')}`}
                    className="hover:text-[#E4980B] transition-colors"
                  >
                    {secondaryPhoneNumber}
                  </a>
                </p>
                <p className="text-xs text-[#8C837A] pt-1 leading-relaxed">
                  Suite 1-03 Alfa Plaza, Opposite Coca Cola Depot <br />
                  Enerhen Road, Enerhen, Effurun, Warri, Delta State, Nigeria.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Trademark */}
          <div className="pt-8 border-t border-[#E5E5E5]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C837A]">
            <p>© {new Date().getFullYear()} Ovichem Consult Limited. All rights reserved.</p>
            <p className="italic font-serif-display text-sm text-[#7A726A]">
              “Every space is different. The treatment should be too.”
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}















