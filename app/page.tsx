'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from '../assets/company photos/logo-removebg-preview.png';
import heroImage from '../assets/company photos/IMG-20260804-WA0010.jpg';
import fumigationImage from '../assets/company photos/work in progress (1).jpg';
import waterTreatmentImage from '../assets/company photos/IMG-20260804-WA0005.jpg';
import chemicalImage from '../assets/company photos/products (1).jpg';
import teamImage from '../assets/company photos/team (1).jpg';
import aboutImage from '../assets/company photos/about.jpg';
import waterSystemImage from '../assets/company photos/work in progress (2).jpg';
import equipmentImage from '../assets/company photos/products (2).jpg';
import marineImage from '../assets/company photos/work in progress (3).jpg';
import waterTestImage from '../assets/company photos/IMG-20260804-WA0006.jpg';
import waterAwarenessImage from '../assets/company photos/water.jpg';
import fumigationServiceImage from '../assets/company photos/fumigation image.jpg';
import waterTreatmentServiceImage from '../assets/company photos/water treatment image.jpg';
import engineeringServiceImage from '../assets/company photos/engineering image.jpg';
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Plus,
  X,
  Star,
  MapPin,
  Clock,
  ArrowRight,
  Award,
  Layers,
  Check,
  ZoomIn,
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

  // Gallery & Products State
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'wip' | 'products' | 'expertise'>('all');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<{
    id: string;
    category: 'wip' | 'products' | 'expertise';
    categoryLabel: string;
    badge: string;
    title: string;
    subtitle: string;
    locationOrTier: string;
    image: string;
    description: string;
    specifications: string[];
    toolsUsed: string;
    keyBenefit: string;
  } | null>(null);

  useEffect(() => {
    if (!selectedGalleryItem) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedGalleryItem(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedGalleryItem]);

  const defaultWhatsappNumber = '2348168027338';
  const defaultPhoneNumber = '+234 816 802 7338';
  const defaultEmail = 'ovichemconsultltd@yahoo.com';

  const generateWhatsappUrl = (service?: string, space?: string, loc?: string) => {
    const s = service || inquiryNeed;
    const sp = space || inquirySpace;
    const l = loc || inquiryLocation;
    const text = encodeURIComponent(
      `Hello Ovichem Consult Ltd. I would like to inquire about ${s} for my ${sp} in ${l}. Please let me know your availability and next steps.`
    );
    return `https://wa.me/${defaultWhatsappNumber}?text=${text}`;
  };

  const galleryItems = [
    {
      id: 'env-1',
      category: 'wip' as const,
      categoryLabel: 'Environmental Services',
      badge: 'Documented Project',
      title: 'Environmental Services and Disinfestation',
      subtitle: 'Fumigation, disinfection and decontamination for operational sites',
      locationOrTier: 'Delta State',
      image: fumigationImage.src,
      description: 'Environmental services and disinfestation delivered for operational facilities in Delta State.',
      specifications: [
        'Fumigation and disinfestation',
        'Decontamination and disinfection support',
        'Site-specific environmental service planning',
      ],
      toolsUsed: 'Professional field application equipment and safety procedures',
      keyBenefit: 'A cleaner, safer operating environment',
    },
    {
      id: 'chem-1',
      category: 'products' as const,
      categoryLabel: 'Chemicals & Laboratory Supply',
      badge: 'Documented Supply',
      title: 'Industrial and Laboratory Chemicals',
      subtitle: 'Chemical and reagent supply for industrial, laboratory and environmental applications',
      locationOrTier: 'Delta State and Regional Supply',
      image: chemicalImage.src,
      description: 'Ovichem supplies industrial chemicals, laboratory reagents and water-treatment chemicals for multiple applications.',
      specifications: [
        'Methanol, Rigwash and Xylene',
        'Chlorine, Aluminium Sulphate and Acetic Acid',
        'Laboratory reagents, equipment and consumables',
      ],
      toolsUsed: 'Sourcing and supply support based on the client specification',
      keyBenefit: 'The right materials for the work you need to complete',
    },
    {
      id: 'eng-1',
      category: 'expertise' as const,
      categoryLabel: 'Engineering & Water Treatment',
      badge: 'Documented Project',
      title: 'Water Treatment Plant Installation',
      subtitle: 'Water-treatment systems, plant installation and portable-water analysis',
      locationOrTier: 'Warri, Delta State',
      image: waterTreatmentImage.src,
      description: 'Ovichem installs and supports water-treatment systems, including documented plant installation and portable-water analysis projects.',
      specifications: [
        'Water analysis and treatment recommendations',
        'Water-treatment plant and equipment installation',
        'Operation, maintenance and technical support',
      ],
      toolsUsed: 'Treatment plant equipment, testing tools and technical support',
      keyBenefit: 'Water systems designed around the source and intended use',
    },
    {
      id: 'proc-1',
      category: 'wip' as const,
      categoryLabel: 'Procurement & Industrial Supply',
      badge: 'Documented Supply',
      title: 'Pipeline Materials, Tools and Consumables',
      subtitle: 'Materials and equipment supply for pipeline development and industrial operations',
      locationOrTier: 'Delta State and Regional Projects',
      image: marineImage.src,
      description: 'Ovichem supplies materials, consumables and tools for pipeline development and industrial project teams.',
      specifications: [
        'Cutting and grinding discs, brushes and gloves',
        'Welding hoses, electrodes and LPG heating torches',
        'Lifting belts, shackles and project consumables',
      ],
      toolsUsed: 'Specification-led procurement and project delivery support',
      keyBenefit: 'Reliable sourcing for critical project materials',
    },
  ];

  const aboutTabs = [
    {
      id: 0,
      title: 'Experienced & practical specialists',
      description:
        'With around a decade of active field experience in Warri and Delta State, our specialists are trained to identify infestation sources, physical layout challenges, and water treatment requirements. We focus on practical, root-cause treatment rather than superficial spraying.',
    },
    {
      id: 1,
      title: 'Safe treatments for families & businesses',
      description:
        'We select quality, approved treatment chemicals and methods suited for occupied homes, offices, and guest houses. Our protocols prioritize the safety of residents, staff, children, and pets with proper re-entry guidelines.',
    },
    {
      id: 2,
      title: 'Tailored solutions for every property',
      description:
        'A home is not the same as a boat. A guest house is not the same as an office. Ovichem assesses the specific environment first—taking note of airflow, dampness, and building materials—to determine the exact chemical formulation and method needed.',
    },
  ];

  const whyChooseCards = [
    {
      icon: <Award className="w-5 h-5 text-[#E4980B]" />,
      title: 'Quality work',
      description:
        'We provide valued, excellent and professional products and services.',
      serviceName: 'Quality service',
    },
    {
      icon: <Layers className="w-5 h-5 text-[#E4980B]" />,
      title: 'Safety first',
      description:
        'We protect people, equipment and the environment in every job we do.',
      serviceName: 'Safety support',
    },
    {
      icon: <Clock className="w-5 h-5 text-[#E4980B]" />,
      title: 'Professional service',
      description:
        'Our team brings practical knowledge and dependable support to each project.',
      serviceName: 'Professional support',
    },
    {
      icon: <Ship className="w-5 h-5 text-[#E4980B]" />,
      title: 'Integrity',
      description:
        'We work honestly and keep our service focused on the client’s needs.',
      serviceName: 'Integrity',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#E4980B]" />,
      title: 'Teamwork',
      description:
        'We work together to meet project targets and deliver better results.',
      serviceName: 'Teamwork',
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-[#E4980B]" />,
      title: 'Excellence',
      description:
        'We aim to be a trusted service provider wherever we work.',
      serviceName: 'Excellence',
    },
  ];

  const productItems = [
    { name: 'Industrial chemicals', description: 'Methanol, rigwash, xylene, chlorine, aluminium sulphate and acetic acid.', image: chemicalImage },
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
            name: 'Ovichem Consult Ltd',
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
              Who we are
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
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="header-consult-btn"
              href={generateWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#E4980B] hover:bg-[#990909] text-white text-sm font-normal px-6 py-2.5 rounded-full shadow-md shadow-black/25 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Request a quote</span>
            </a>
          </div>

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
                  Who we are
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
                <a
                  href={generateWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-[#E4980B] text-white font-medium py-3 rounded-full flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  Request a quote
                </a>
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
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${heroImage.src}')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#06042D]/85 via-[#0D0A47]/75 to-[#06042D]/80" />
          <div className="absolute inset-0 bg-primary-900/40 backdrop-blur-[0.5px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 w-full">
          <div className="max-w-3xl lg:max-w-4xl space-y-5 sm:space-y-6">
            
            {/* Rating Stars & Count */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              id="hero-rating-badge"
              className="flex items-center gap-2 text-white/95"
            >
              <div className="flex items-center gap-0.5 text-[#F0B84D]">
                <Star className="w-4 h-4 fill-[#F0B84D] stroke-none" />
                <Star className="w-4 h-4 fill-[#F0B84D] stroke-none" />
                <Star className="w-4 h-4 fill-[#F0B84D] stroke-none" />
                <Star className="w-4 h-4 fill-[#F0B84D] stroke-none" />
                <Star className="w-4 h-4 fill-[#F0B84D] stroke-none" />
              </div>
              <span className="text-xs sm:text-sm font-normal text-white/80 tracking-wide ml-1">
                Fumigation, water treatment &amp; chemical supply
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              id="hero-main-title"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-serif-display text-[#FFFFFF] leading-[1.03] tracking-tight drop-shadow-sm font-normal"
            >
              Welcome to Ovichem Consult Ltd
            </motion.h1>

            {/* Strategic Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              id="hero-subtitle"
              className="text-sm sm:text-base md:text-lg text-white/90 font-normal leading-relaxed max-w-2xl pt-1 drop-shadow-sm"
            >
              Chemical, Enivronmental Services and Engineering
            </motion.p>

            {/* Dual CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              id="hero-cta-group"
              className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                id="hero-primary-cta"
                href={generateWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#E4980B] hover:bg-[#990909] text-white text-sm sm:text-base font-normal px-7 py-3.5 sm:px-8 sm:py-3.5 rounded-full shadow-md shadow-black/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Get a fumigation quote</span>
              </a>

              <a
                id="hero-whatsapp-cta"
                href={generateWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white/15 hover:bg-white/25 text-white border border-white/40 hover:border-white/60 text-sm sm:text-base font-normal px-7 py-3.5 sm:px-8 sm:py-3.5 rounded-full backdrop-blur-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Talk to a treatment specialist</span>
              </a>
            </motion.div>

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

      {/* 3. SERVICES SECTION */}
      <section
        id="services"
        className="py-24 sm:py-32 bg-[#F8F7FC] hover:bg-white border-b border-[#E5E5E5]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-100 border border-accent-300 text-[#990909] text-xs font-semibold uppercase tracking-wider">
                What we do
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-display text-[#06042D] tracking-tight leading-[1.08]">
                What we do
              </h2>
            </div>

            <div className="lg:col-span-5 space-y-6 lg:pl-6">
              <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                From the materials that make a process possible, to environmental measurement and engineering delivery, our work connects chemical knowledge with practical field results.
              </p>
              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#E4980B] hover:bg-[#990909] text-white text-sm font-normal px-7 py-3 rounded-full shadow-md shadow-black/15 transition-all"
                >
                  <span>Discuss your requirement</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service 2: Environmental Services */}
            <div
              id="service-card-fumigation"
              className="order-2 p-2 rounded-[2rem] bg-white border border-[#E5E5E5] shadow-md flex flex-col group hover:border-[#F0B84D] hover:shadow-lg transition-all"
            >
              <div className="relative h-64 rounded-[calc(2rem-0.5rem)] overflow-hidden bg-primary-900">
                <Image
                  src={fumigationServiceImage}
                  alt="Fumigation and pest control specialist"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
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
                    “Deal with pest problems where they happen.”
                  </p>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    Fumigation, disinfection, disinfestation, environmental audits, air-quality monitoring and noise measurement.
                  </p>
                  <ul className="text-xs text-[#524B44] space-y-2 pt-2 border-t border-[#E5E5E5]/50">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> Fumigation, disinfestation &amp; disinfection
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> Environmental audits and reports
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> Well and tank cleaning support
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

            {/* Service 3: Water Treatment */}
            <div
              id="service-card-water"
              className="order-3 p-2 rounded-[2rem] bg-white border border-[#E5E5E5]/70 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col group hover:border-[#E4980B]/50 transition-all"
            >
              <div className="relative h-64 rounded-[calc(2rem-0.5rem)] overflow-hidden bg-[#1E293B]">
                <Image
                  src={waterTreatmentServiceImage}
                  alt="Drinking water treatment"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    Water Treatment
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-serif-display font-medium text-white">
                    Water Treatment
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-[#990909] italic">
                    “Make your water suitable for drinking.”
                  </p>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    Water analysis, treatment plant installation, boreholes, maintenance, upgrades and technical support.
                  </p>
                  <ul className="text-xs text-[#524B44] space-y-2 pt-2 border-t border-[#E5E5E5]/50">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> Water analysis and treatment systems
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> Plant installation, operation &amp; maintenance
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> Start-up, upgrades and support
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
                    <span>Ask about water treatment</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Service 1: Chemicals & Procurement */}
            <div
              id="service-card-chemicals"
              className="order-1 p-2 rounded-[2rem] bg-white border border-[#E5E5E5]/70 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col group hover:border-[#E4980B]/50 transition-all"
            >
              <div className="relative h-64 rounded-[calc(2rem-0.5rem)] overflow-hidden bg-[#1E2E28]">
                <Image
                  src={engineeringServiceImage}
                  alt="Chemical supplies for fumigation and water treatment"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    Chemicals &amp; Procurement
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-serif-display font-medium text-white">
                    Chemicals and Laboratory Supplies
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-[#990909] italic">
                    “Get the chemicals you need for the job.”
                  </p>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    Chemicals, laboratory reagents, water-treatment products, equipment and other project supplies.
                  </p>
                  <ul className="text-xs text-[#524B44] space-y-2 pt-2 border-t border-[#E5E5E5]/50">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> Industrial chemicals and laboratory reagents
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> Pipeline materials, tools &amp; consumables
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4980B]" /> Procurement and technical supply support
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
          <div className="mb-12 max-w-3xl space-y-4">
            <div className="inline-flex items-center rounded-full border border-[#E4980B]/30 bg-[#E4980B]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#990909]">
              Products we supply
            </div>
            <h2 className="text-3xl leading-[1.08] tracking-tight text-[#06042D] sm:text-5xl">
              Chemicals, equipment and supplies for the job
            </h2>
            <p className="text-sm leading-relaxed text-[#666666] sm:text-base">
              We supply industrial and laboratory products, water-treatment items and general project supplies. Contact us for the product you need.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {productItems.map((product) => (
              <article key={product.name} className="group overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white shadow-sm">
                <div className="relative h-48 overflow-hidden bg-[#1E2E28]">
                  <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="space-y-3 p-5">
                  <h3 className="text-xl font-medium leading-tight text-[#06042D]">{product.name}</h3>
                  <p className="text-xs leading-relaxed text-[#666666]">{product.description}</p>
                  <a href={generateWhatsappUrl(product.name)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-[#990909] transition-colors hover:text-[#E4980B]">
                    Ask about this product <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RECENT WORK GALLERY */}
      <section
        id="gallery"
        className="scroll-mt-24 bg-[#FFFFFF] py-24 sm:py-32 border-b border-[#E5E5E5]/70"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4980B]/10 border border-[#E4980B]/30 text-[#990909] text-xs font-semibold uppercase tracking-wider">
                <span>Selected work</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-display text-[#06042D] tracking-tight leading-[1.08]">
                Recent work
              </h2>
            </div>

            <div className="lg:col-span-5 space-y-5 lg:pl-6">
              <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                A small look at environmental work, chemical supply and water-treatment projects completed by the team.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={generateWhatsappUrl('Product Catalog & Supplies')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#E4980B] hover:bg-[#990909] text-white text-xs sm:text-sm font-normal px-6 py-2.5 rounded-full shadow-md shadow-black/15 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Package className="w-4 h-4" />
                  <span>Request Product Price List</span>
                </a>
              </div>
            </div>
          </div>

          {/* Category Filter Pills Bar */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {[
              { id: 'all', label: 'Selected Work', count: galleryItems.length },
              { id: 'wip', label: 'Environmental Work', count: galleryItems.filter((i) => i.category === 'wip').length },
              { id: 'products', label: 'Chemicals & Procurement', count: galleryItems.filter((i) => i.category === 'products').length },
              { id: 'expertise', label: 'Water Treatment', count: galleryItems.filter((i) => i.category === 'expertise').length },
            ].map((tab) => {
              const isActive = galleryFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`gallery-filter-${tab.id}`}
                  onClick={() => setGalleryFilter(tab.id as typeof galleryFilter)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 border ${
                    isActive
                      ? 'bg-[#06042D] text-white border-[#06042D] shadow-sm'
                      : 'bg-white text-[#574F47] border-[#E5E5E5] hover:border-[#E4980B]/50 hover:bg-[#F7F2EA]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-[#E4980B] text-white' : 'bg-[#FFFFFF] text-[#786E64]'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Gallery Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems
              .filter((item) => galleryFilter === 'all' || item.category === galleryFilter)
              .map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  key={item.id}
                  id={`gallery-card-${item.id}`}
                  className="p-2 rounded-2xl bg-white border border-[#E5E5E5]/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex flex-col justify-between group hover:border-[#E4980B]/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="relative h-56 rounded-[calc(1rem-0.25rem)] overflow-hidden bg-[#1E1915]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#06042D]/80 backdrop-blur-md text-white border border-white/15">
                        {item.badge}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedGalleryItem(item)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white gap-2 font-medium text-xs backdrop-blur-[2px]"
                      aria-label={`View details for ${item.title}`}
                    >
                      <div className="bg-[#FFFFFF] text-[#06042D] px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg transform group-hover:scale-100 scale-95 transition-transform font-semibold text-xs">
                        <ZoomIn className="w-3.5 h-3.5 text-[#E4980B]" />
                        <span>Inspect Details</span>
                      </div>
                    </button>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-white/90 text-xs font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#F0B84D] shrink-0" />
                      <span className="truncate">{item.locationOrTier}</span>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-[#990909]">
                          {item.categoryLabel}
                        </span>
                      </div>

                      <h3 className="text-lg font-serif-display font-medium text-[#06042D] leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs text-[#666666] line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-2 border-t border-[#E5E5E5]/50 space-y-1.5">
                        <div className="text-[11px] text-[#0D0A47] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-[#E4980B] shrink-0" />
                          <span className="truncate font-medium">{item.keyBenefit}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E5E5E5]/50 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedGalleryItem(item)}
                        className="text-xs font-semibold text-[#8C4F2D] hover:text-[#E4980B] transition-colors flex items-center gap-1"
                      >
                        <span>Specifications</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={generateWhatsappUrl(item.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full bg-[#FFFFFF] hover:bg-[#E4980B] text-[#0D0A47] hover:text-white border border-[#E5E5E5] transition-colors"
                        title="Inquire on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#F0EDFB] border border-[#E5E5E5] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-sm">
            <div className="space-y-1.5 max-w-2xl">
              <h4 className="text-xl sm:text-2xl font-serif-display font-medium text-[#06042D]">
                Need chemicals, equipment, water-treatment support, or a field service?
              </h4>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Share your specification, site requirement, or project scope and we will advise on the next practical step.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={generateWhatsappUrl('Chemical Supply & Equipment Procurement')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E4980B] hover:bg-[#990909] text-white text-xs sm:text-sm font-normal px-7 py-3 rounded-full shadow-md shadow-black/15 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Inquire on WhatsApp</span>
              </a>
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
              { image: fumigationImage, label: 'Environmental services' },
              { image: waterTreatmentImage, label: 'Water treatment' },
              { image: chemicalImage, label: 'Chemical supply' },
            ].map((item) => (
              <div key={item.label} className="relative h-56 overflow-hidden rounded-2xl bg-[#06042D] sm:h-64">
                <Image src={item.image} alt={item.label} fill className="object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-5 pb-4 pt-12">
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX / SPECIFICATIONS MODAL VIEWER */}
      <AnimatePresence>
        {selectedGalleryItem && (
          <div
            id="gallery-item-modal"
            role="presentation"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#06042D]/80 p-3 sm:p-6 backdrop-blur-sm"
            onClick={() => setSelectedGalleryItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="gallery-modal-title"
              className="relative flex max-h-[min(760px,calc(100dvh-1.5rem))] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <button
                onClick={() => setSelectedGalleryItem(null)}
                className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#06042D] shadow-lg ring-1 ring-black/10 transition-colors hover:bg-[#E4980B] hover:text-white"
                aria-label="Close application details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-44 w-full shrink-0 bg-[#1A1613] sm:h-56">
                <Image
                  src={selectedGalleryItem.image}
                  alt={selectedGalleryItem.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute bottom-5 left-5 right-16 space-y-2 text-white">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#E4980B] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                      {selectedGalleryItem.badge}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#E8DED6]">
                      <MapPin className="w-3.5 h-3.5 text-[#F0B84D]" />
                      {selectedGalleryItem.locationOrTier}
                    </span>
                  </div>
                  <h3 id="gallery-modal-title" className="text-2xl font-serif-display font-medium leading-tight text-white sm:text-3xl">
                    {selectedGalleryItem.title}
                  </h3>
                </div>
              </div>

              <div className="min-h-0 overflow-y-auto p-5 sm:p-7">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#990909]">What this covers</p>
                    <p className="text-sm leading-relaxed text-[#3E3833]">{selectedGalleryItem.description}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-[#E5E5E5] bg-[#FAF7F2] p-4">
                      <h5 className="flex items-center gap-1.5 text-xs font-bold text-[#06042D]"><Wrench className="w-3.5 h-3.5 text-[#E4980B]" /> Method</h5>
                      <p className="mt-2 text-xs leading-relaxed text-[#666666]">{selectedGalleryItem.toolsUsed}</p>
                    </div>

                    <div className="rounded-xl border border-[#E5E5E5] bg-[#FAF7F2] p-4">
                      <h5 className="flex items-center gap-1.5 text-xs font-bold text-[#06042D]"><ShieldCheck className="w-3.5 h-3.5 text-[#E4980B]" /> Intended outcome</h5>
                      <p className="mt-2 text-xs leading-relaxed text-[#666666]">{selectedGalleryItem.keyBenefit}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#990909]">Included in the scope</p>
                    <ul className="grid gap-2 text-xs text-[#3E3833] sm:grid-cols-2">
                      {selectedGalleryItem.specifications.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2 rounded-lg border border-[#E5E5E5] p-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E4980B]" /><span>{spec}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 border-t border-[#E5E5E5] bg-white pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-[#786E64]">Need this service or supply for your project?</p>
                  <a
                    id="modal-whatsapp-cta"
                    href={generateWhatsappUrl(selectedGalleryItem.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E4980B] px-6 py-3 text-xs font-semibold text-white shadow-md shadow-black/15 transition-all hover:bg-[#990909] sm:w-auto"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Discuss this requirement</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-[#E39D78] block">
                      Warri, Delta State Headquarters
                    </span>
                    <p className="text-xs text-[#E0D7CE] mt-0.5">
                      Around a decade of practical treatment and chemical work across the Niger Delta.
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
                  Ovichem Consult Limited is an indigenous Chemical, Environmental Science and Engineering Company. We provide quality, reliable, and cost-effective solutions to industries and individuals from our base in Effurun-Warri, Delta State.
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

      {/* 7. WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="scroll-mt-24 py-24 sm:py-32 bg-[#F6F1EA] border-b border-[#E5E5E5]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#E4980B]/10 border border-[#E4980B]/30 text-[#990909] text-xs font-semibold uppercase tracking-wider">
              Why choose Ovichem
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-display text-[#06042D] tracking-tight">
              Quality, safety and professional service
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl mx-auto">
              Our work is guided by quality, integrity, professionalism, teamwork and excellence.
            </p>

            <div className="pt-2">
              <a
                href={generateWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E4980B] hover:bg-[#990909] text-white text-sm font-normal px-8 py-3.5 rounded-full shadow-md shadow-black/15 transition-all"
              >
                <span>Request treatment advice</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left pt-6">
            {whyChooseCards.map((card, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-[#E5E5E5]/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-6 hover:border-[#E4980B]/50 transition-all group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FFFFFF] border border-[#E5E5E5] flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-serif-display font-medium text-[#06042D]">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={generateWhatsappUrl(card.serviceName)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C4F2D] group-hover:text-[#E4980B] transition-colors"
                  >
                    <span>Get in touch</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. DIRECT CONTACT SECTION */}
      <section
        id="contact"
        className="scroll-mt-24 relative min-h-[580px] lg:min-h-[640px] flex flex-col justify-center overflow-hidden text-white"
      >
        {/* Background Image of Technician in Action with Warm Atmospheric Overlay (Exact Match to Image 1) */}
        <div
          id="contact-bg-container"
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${fumigationImage.src}')`,
          }}
        >
          {/* Luminous warm taupe & sepia translucent veil matching Image 1 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#382618]/90 via-[#4A3222]/80 to-[#2E1F14]/75" />
          <div className="absolute inset-0 bg-[#352417]/40 backdrop-blur-[0.5px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Area Matching Image 1 */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Star Rating Badge */}
              <div className="flex items-center gap-2 text-white/95">
                <div className="flex items-center gap-0.5 text-[#F5A623]">
                  <Star className="w-4 h-4 fill-[#F5A623] stroke-none" />
                  <Star className="w-4 h-4 fill-[#F5A623] stroke-none" />
                  <Star className="w-4 h-4 fill-[#F5A623] stroke-none" />
                  <Star className="w-4 h-4 fill-[#F5A623] stroke-none" />
                  <Star className="w-4 h-4 fill-[#F5A623] stroke-none" />
                </div>
                <span className="text-xs sm:text-sm font-normal text-[#F2ECE4] tracking-wide ml-1">
                  Fumigation, water treatment &amp; chemical supply
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif-display text-[#FFFFFF] leading-[1.05] tracking-tight font-normal max-w-2xl drop-shadow-sm">
                Need help with pests, water, or treatment chemicals?
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg text-[#EAE3DB] font-normal leading-relaxed max-w-2xl drop-shadow-sm">
                Whether you need an environmental service, water-treatment solution, chemical supply, procurement support, or engineering help, tell us what the job requires and we will guide you to the next step.
              </p>

              {/* CTA Action Buttons (Call us now + WhatsApp Us now) */}
              <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={`tel:${defaultPhoneNumber.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center bg-[#E4980B] hover:bg-[#990909] text-[#FFFFFF] text-sm sm:text-base font-normal px-8 py-3.5 rounded-full shadow-md shadow-black/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <span>Call us now</span>
                </a>

                <a
                  href={generateWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#3D2D22]/40 hover:bg-[#3D2D22]/65 text-[#FFFFFF] border border-white/40 hover:border-white/60 text-sm sm:text-base font-normal px-8 py-3.5 rounded-full backdrop-blur-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <span>WhatsApp Us now</span>
                </a>
              </div>

              {/* Location & Operating Scope */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#DDD3C8]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F0B84D]" />
                  <span>Warri &amp; Delta State Headquarters</span>
                </div>
              </div>

              <div className="grid max-w-2xl grid-cols-1 gap-3 border-t border-white/20 pt-5 text-sm text-[#F2ECE4] sm:grid-cols-2">
                <a href={`tel:${defaultPhoneNumber.replace(/\s+/g, '')}`} className="flex items-start gap-3 transition-colors hover:text-[#F0B84D]">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#F0B84D]" />
                  <span><strong className="block text-xs font-medium uppercase tracking-wider text-white/60">Call or WhatsApp</strong>{defaultPhoneNumber}</span>
                </a>
                <a href={`mailto:${defaultEmail}`} className="flex items-start gap-3 transition-colors hover:text-[#F0B84D]">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#F0B84D]" />
                  <span><strong className="block text-xs font-medium uppercase tracking-wider text-white/60">Email</strong>{defaultEmail}</span>
                </a>
                <div className="flex items-start gap-3 sm:col-span-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F0B84D]" />
                  <span><strong className="block text-xs font-medium uppercase tracking-wider text-white/60">Visit us</strong>Suite 1-03 Alfa Plaza, Opposite Coca Cola Depot, Enerhen Road, Enerhen, Effurun, Warri, Delta State, Nigeria.</span>
                </div>
              </div>

            </div>

            {/* Right: Quick Direct WhatsApp Configurator */}
            <div className="lg:col-span-4">
              <div className="p-6 sm:p-7 rounded-3xl bg-[#1C1612]/80 backdrop-blur-md border border-white/20 shadow-2xl space-y-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#F0B84D] font-medium">
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Quick WhatsApp Dispatch</span>
                  </div>
                  <h3 className="text-xl font-serif-display font-medium text-white">
                    Direct Service Request
                  </h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="space-y-1">
                    <label className="text-[#D0C4BA] font-medium">Property Type:</label>
                    <select
                      value={inquirySpace}
                      onChange={(e) => setInquirySpace(e.target.value)}
                      className="w-full bg-[#2A201A] border border-white/20 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#E4980B]"
                    >
                      <option value="Domestic Home / Residence">Domestic Home / Residence</option>
                      <option value="Corporate Office">Corporate Office</option>
                      <option value="Guest House / Hospitality">Guest House / Hospitality</option>
                      <option value="Boat or Houseboat">Boat or Houseboat (Marine)</option>
                      <option value="Marine Facility / Jetty">Marine Facility / Jetty</option>
                      <option value="Commercial Facility">Commercial Facility</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#D0C4BA] font-medium">Service Needed:</label>
                    <select
                      value={inquiryNeed}
                      onChange={(e) => setInquiryNeed(e.target.value)}
                      className="w-full bg-[#2A201A] border border-white/20 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#E4980B]"
                    >
                      <option value="Environmental Services">Environmental Services</option>
                      <option value="Water Treatment">Water Treatment</option>
                      <option value="Chemicals & Laboratory Supply">Chemicals &amp; Laboratory Supply</option>
                      <option value="Procurement & Industrial Supply">Procurement &amp; Industrial Supply</option>
                      <option value="Technical Consultancy">Technical Consultancy</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#D0C4BA] font-medium">Location:</label>
                    <input
                      type="text"
                      value={inquiryLocation}
                      onChange={(e) => setInquiryLocation(e.target.value)}
                      placeholder="e.g. Warri, Delta State"
                      className="w-full bg-[#2A201A] border border-white/20 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#E4980B]"
                    />
                  </div>

                  <div className="pt-2">
                    <a
                      id="direct-dispatch-whatsapp-btn"
                      href={generateWhatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#E4980B] hover:bg-[#990909] text-white font-medium py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all transform active:scale-[0.99] text-xs"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Send Direct to WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. VANSUL WATER TEST ARTICLE */}
      <section id="water-test-guide" className="border-b border-[#E5E5E5]/70 bg-[#F6F1EA] py-24 sm:py-32">
        <article className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#990909]">
              <span className="rounded-full bg-[#E4980B]/15 px-3 py-1">Public health awareness</span>
              <span className="text-[#786E64]">Water safety journal</span>
            </div>
            <h2 className="text-4xl leading-[1.05] tracking-tight text-[#06042D] sm:text-6xl font-serif-display">What a colour change can tell you about your water</h2>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-[#D9CEC0] py-3 text-xs text-[#786E64]">
              <span>Water quality</span>
              <span>4 steps</span>
              <span>48-hour test window</span>
            </div>
              <div className="grid gap-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:items-end">
                <div className="grid grid-cols-2 gap-3">
                  <figure className="space-y-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#06042D]">
                      <Image src={waterAwarenessImage} alt="Water viewed as part of a water safety awareness article" fill className="object-cover" />
                    </div>
                    <figcaption className="text-[10px] font-semibold uppercase tracking-wider text-[#786E64]">The water we use</figcaption>
                  </figure>
                  <figure className="space-y-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#06042D]">
                      <Image src={waterTestImage} alt="Water sample prepared for a bacteria test" fill className="object-cover" />
                    </div>
                    <figcaption className="text-[10px] font-semibold uppercase tracking-wider text-[#786E64]">The water we test</figcaption>
                  </figure>
                </div>
                <p className="max-w-2xl text-base leading-relaxed text-[#524B44] sm:text-lg">A water source can look clear and still require attention. The Vansul bacteria test offers a simple first check for coliform bacteria, helping you know when to seek professional confirmation and treatment advice.</p>
              </div>
          </header>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#990909]">Know before you drink</p>
              <p className="text-sm leading-relaxed text-[#666666]">Follow the sequence carefully, allow the full waiting period, and compare the final colour with the vial colour code. A green or blue result may indicate coliform bacteria are present.</p>
              <a href={generateWhatsappUrl('Vansul bacteria test and water analysis')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#990909] transition-colors hover:text-[#E4980B]">
                <MessageCircle className="h-4 w-4" /> Ask about water analysis <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="divide-y divide-[#D9CEC0] border-y border-[#D9CEC0]">
              {[
                ['01', 'Add the powder', 'Open the foil bag and pour the test powder into the vial.'],
                ['02', 'Add the sample', 'Pour 50 ml of sample water into the vial and tighten the cap.'],
                ['03', 'Shake and wait', 'Shake to dissolve, then keep sealed at 68°F–90°F for 48 hours.'],
                ['04', 'Read the colour', 'Compare the sample with the vial colour code. Green or blue indicates coliform bacteria may be present.'],
              ].map(([number, title, description]) => (
                <div key={number} className="grid grid-cols-[2.5rem_1fr] gap-4 py-5 sm:grid-cols-[3rem_1fr]">
                  <span className="text-sm font-semibold text-[#E4980B]">{number}</span>
                  <div className="space-y-1.5">
                    <h3 className="text-xl text-[#06042D] font-serif-display">{title}</h3>
                    <p className="text-sm leading-relaxed text-[#666666]">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="mt-10 border-l-4 border-[#990909] bg-white p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#990909]">Positive result</p>
            <p className="mt-2 text-sm leading-relaxed text-[#524B44]">Add bleach and dispose of the sample safely, wash your hands, treat the water as unsafe, and contact your local health department for bacterial confirmation.</p>
          </aside>
        </article>
      </section>

      {/* 12. FREQUENTLY ASKED QUESTIONS SECTION (Matching Image 2) */}
      <section id="faq" className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#E5E5E5]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: FAQs pill + Large Serif Title (Exact Match to Image 2) */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#D0CDD8] text-[#7A726A] text-xs font-semibold uppercase tracking-wider shadow-sm">
                FAQs
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-display text-[#06042D] tracking-tight leading-[1.08]">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Right Column: Intro text + Accordion List (Exact Match to Image 2) */}
            <div className="lg:col-span-7 space-y-8">
              <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                Have questions about pest control, fumigation, treatment safety, or pricing? Here are answers to some of the questions we hear most often from homeowners and businesses.
              </p>

              {/* Accordion Group */}
              <div className="space-y-4">
                {faqItems.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className={`transition-all duration-200 rounded-2xl ${
                        isOpen
                          ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E5E5]/80 p-6'
                          : 'border-b border-[#E5E5E5] py-5 px-2 hover:bg-black/[0.01]'
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between gap-4 text-left focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span
                          className={`text-lg sm:text-xl font-serif-display font-medium transition-colors ${
                            isOpen ? 'text-[#06042D]' : 'text-[#2E2823] hover:text-[#E4980B]'
                          }`}
                        >
                          {faq.question}
                        </span>

                        <div
                          className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                            isOpen
                              ? 'bg-[#F0EDFB] text-[#554D46]'
                              : 'text-[#8C837A] hover:text-[#06042D]'
                          }`}
                        >
                          {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="pt-3 text-xs sm:text-sm text-[#666666] leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Bottom FAQ Help Note */}
              <div className="pt-4 flex items-center gap-2 text-xs text-[#7A726A]">
                <span>Have a question not listed here?</span>
                <a
                  href={generateWhatsappUrl('FAQ Question Inquiry')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#E4980B] hover:text-[#990909] underline transition-colors"
                >
                  Ask us directly on WhatsApp
                </a>
              </div>
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

              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-sm">
                Fumigation services, water treatment, and fumigative chemical supply for residential, commercial, and marine clients in Warri and across Delta State.
              </p>
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
                  <a href="#faq" className="hover:text-[#E4980B] transition-colors">
                    Common Questions
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#E4980B] transition-colors">
                    Request a quote
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
                <p className="text-xs text-[#8C837A] pt-1 leading-relaxed">
                  Suite 1-03 Alfa Plaza, Opposite Coca Cola Depot <br />
                  Enerhen Road, Enerhen, Effurun, Warri, Delta State, Nigeria.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Trademark */}
          <div className="pt-8 border-t border-[#E5E5E5]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C837A]">
            <p>© {new Date().getFullYear()} Ovichem Consult Ltd. All rights reserved.</p>
            <p className="italic font-serif-display text-sm text-[#7A726A]">
              “Every space is different. The treatment should be too.”
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}















