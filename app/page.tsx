'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
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
  Sparkles,
  Award,
  Layers,
  Check,
  ZoomIn,
  Package,
  Wrench,
  Building2,
  Home,
  Ship,
  Hotel,
  Anchor,
  FlaskConical,
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

  const defaultWhatsappNumber = '2348000000000';
  const defaultPhoneNumber = '+234 800 000 0000';
  const defaultEmail = 'consult@ovichem.com';

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
      id: 'wip-1',
      category: 'wip' as const,
      categoryLabel: 'Work in Progress',
      badge: 'Live Treatment Fieldwork',
      title: 'Residential Estate Sub-Slab Barrier & Misting',
      subtitle: 'Full perimeter subterranean termite barrier & ultra-low volume fogging',
      locationOrTier: 'Warri GRA Residential Estates',
      image: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?q=80&w=1200&auto=format&fit=crop',
      description: 'Active field operation executing dual-action sub-slab termiticide barrier injection alongside high-penetration ULV cold misting across luxury residential buildings. Eradicates subterranean termite colonies and wood-boring larvae at their roots.',
      specifications: [
        'Ultra-low volume droplet misting (15–30 microns)',
        'Odorless, non-staining surface emulsion formulation',
        'Sub-floor pressure-injection creating a continuous chemical shield',
      ],
      toolsUsed: 'Electric ULV Cold Fogger & Hydraulic Sub-Slab Injection Rods',
      keyBenefit: 'Guaranteed perimeter exclusion with safe 2-hour resident re-entry',
    },
    {
      id: 'prod-1',
      category: 'products' as const,
      categoryLabel: 'Products & Chemicals',
      badge: 'Certified Chemical Supply',
      title: 'Ovichem Pro-Guard 500EC Termiticide Concentrate',
      subtitle: 'High-potency synthetic pyrethroid formulation for long residual protection',
      locationOrTier: 'Chemical Supply Depot & Distribution',
      image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=1200&auto=format&fit=crop',
      description: 'Commercial-grade, certified pest control active concentrate formulated for immediate knock-down and multi-month residual barrier defense. Highly effective against termites, cockroaches, bedbugs, and burrowing insects across domestic and commercial premises.',
      specifications: [
        '500g/L concentrated active ingredient formula',
        'High UV and moisture stability for indoor and tropical perimeter use',
        'Supplied in 1L, 5L, and 20L high-density sealed containers',
      ],
      toolsUsed: 'Compatible with motorized backpack sprayers, ULV units, and hand sprayers',
      keyBenefit: 'Long-lasting surface bonding resistant to rapid tropical wash-off',
    },
    {
      id: 'exp-1',
      category: 'expertise' as const,
      categoryLabel: 'Expertise & Lab Diagnostics',
      badge: 'Field Diagnostic Testing',
      title: 'Multi-Parameter Potable Drinking Water Analysis',
      subtitle: 'Spectroscopic turbidity, heavy metal, pH & microbial coliform profiling',
      locationOrTier: 'Field Laboratory & Diagnostic Testing',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop',
      description: 'On-site technical evaluation of raw borehole and reservoir water. Using calibrated multi-parameter photometers and microbial incubation plates, our technicians diagnose mineral hardness, ferric iron concentrations, and bacterial presence to prescribe custom treatment media.',
      specifications: [
        'Real-time digital photometer readout for TDS, iron, and free chlorine',
        'Coliform and bacterial incubation testing for drinking suitability',
        'Compliance mapping against WHO and Nigerian Industrial Standards (NIS)',
      ],
      toolsUsed: 'Digital Multi-Parameter Photometer, pH/TDS Probe, & Chemical Reagents',
      keyBenefit: 'Precise dosing recommendations that eliminate corrosive over-treatment',
    },
    {
      id: 'wip-2',
      category: 'wip' as const,
      categoryLabel: 'Work in Progress',
      badge: 'Specialized Marine Operation',
      title: 'Maritime Vessel, Houseboat & Bilge Fumigation',
      subtitle: 'Hermetic fumigation protocols for houseboats, galleys & naval engine rooms',
      locationOrTier: 'Warri Port & Offshore Marine Terminals',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1200&auto=format&fit=crop',
      description: 'Comprehensive maritime pest eradication handling tight bulkhead compartments, galley voids, and bilge dampness. Our experienced technicians deploy gas distribution and targeted residual coatings to eradicate silverfish, moisture flies, and rodent vectors.',
      specifications: [
        'Hermetic chamber sealing and controlled vapor circulation',
        'Moisture-tolerant compounds designed for maritime salt-spray environments',
        'Official vessel pest clearance documentation upon completion',
      ],
      toolsUsed: 'Positive-Pressure Gas Delivery System & Marine Vapor Detectors',
      keyBenefit: 'Deep penetration through inaccessible naval pipe runs and deck bulkheads',
    },
    {
      id: 'prod-2',
      category: 'products' as const,
      categoryLabel: 'Products & Chemicals',
      badge: 'Water Conditioning Agent',
      title: 'Aquafine Rapid Potable Water Coagulant Crystals',
      subtitle: 'Food-grade coagulant & clarification agent for high-iron borehole water',
      locationOrTier: 'Warehouse Stock & Contractor Supply',
      image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=1200&auto=format&fit=crop',
      description: 'High-purity, food-grade water clarification and disinfection compounds designed to precipitate suspended clay, iron coloration, and organic matter from raw borehole supplies, rendering water clear, safe, and ready for fine filtration.',
      specifications: [
        'Potable certified food-grade chemical composition',
        'Rapid flocculation and sedimentation in under 15 minutes',
        'Available in 1kg domestic dosing packs and 25kg industrial bulk sacks',
      ],
      toolsUsed: 'Suitable for manual pre-treatment dosing or automated chemical metering pumps',
      keyBenefit: 'Transforms discolored, metallic borehole water into pristine drinking clarity',
    },
    {
      id: 'wip-3',
      category: 'wip' as const,
      categoryLabel: 'Work in Progress',
      badge: 'Commercial Air Quality',
      title: 'Corporate Plaza Central HVAC & Ceiling Void Sanitization',
      subtitle: 'Dry electrostatic misting across air ducts, server voids & executive offices',
      locationOrTier: 'Corporate Offices & Business Towers',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
      description: 'Off-hours commercial facility sanitization and pest barrier deployment. Electrostatic micro-droplet misting travels through central HVAC ducts and drop-ceiling grids to neutralize mold spores, dust mites, and nesting insects without wetting electronics or paper archives.',
      specifications: [
        'Dry electrostatic dispersion (zero moisture accumulation on IT servers)',
        'Non-corrosive, hospital-grade broad-spectrum antimicrobial action',
        'Executed after business hours for zero office downtime',
      ],
      toolsUsed: 'High-Velocity Electrostatic Sprayers & Flexible HVAC Lance Probes',
      keyBenefit: 'Improves workplace air purity and eliminates hidden duct nesting',
    },
    {
      id: 'prod-3',
      category: 'products' as const,
      categoryLabel: 'Products & Chemicals',
      badge: 'Equipment & Hardware',
      title: 'Heavy-Duty Pulse-Jet Thermal Fogging & Spray Units',
      subtitle: 'Commercial motorized spray rigs, ULV machines & brass applicator wands',
      locationOrTier: 'Equipment Sales & Operator Training',
      image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=1200&auto=format&fit=crop',
      description: 'Supply of rugged, industrial-grade pest control equipment for estate groundskeepers, facility managers, and pest control operators. Features high-pressure stainless steel thermal fogging engines and lithium-powered backpack ULV atomizers.',
      specifications: [
        'Stainless steel pulse-jet resonator with heat-resistant valve sets',
        'Rechargeable 24V lithium backpack pumps with adjustable pressure dials',
        'Supplied with spare nozzle kits, protective PPE sets, and maintenance manuals',
      ],
      toolsUsed: 'Includes full operator safety equipment & calibration tools',
      keyBenefit: 'High-volume outdoor canopy fogging and rapid square-footage coverage',
    },
    {
      id: 'exp-2',
      category: 'expertise' as const,
      categoryLabel: 'Expertise & Lab Diagnostics',
      badge: 'Diagnostic Audit',
      title: 'Acoustic & Moisture Structural Timber Diagnostic Audit',
      subtitle: 'Non-destructive acoustic probe and thermal mapping for hidden termites',
      locationOrTier: 'High-Value Property Diagnostic Audits',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
      description: 'Advanced diagnostic inspection utilizing acoustic transducers and deep electronic moisture sensors. Identifies active subterranean termite galleries inside reinforced concrete joints, hardwood decking, and roof rafters before outward cosmetic failure.',
      specifications: [
        'High-sensitivity acoustic sensor picking up subterranean worker vibrations',
        'Digital sub-surface moisture profiling to identify high-risk dampness pockets',
        'Comprehensive digital audit report with targeted localized injection coordinates',
      ],
      toolsUsed: 'Acoustic Termite Listening Sensor & Non-Invasive Digital Moisture Meter',
      keyBenefit: 'Locates hidden termite activity without cutting or damaging expensive walls',
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
      icon: <Award className="w-5 h-5 text-[#B8754F]" />,
      title: 'Around a Decade in Service',
      description:
        'Substantial hands-on experience handling treatment challenges across Delta State and beyond.',
      serviceName: 'Practical Experience & Longevity',
    },
    {
      icon: <Layers className="w-5 h-5 text-[#B8754F]" />,
      title: 'Diverse Environment Expertise',
      description:
        'Proven methods tailored specifically for homes, corporate offices, guest houses, and commercial facilities.',
      serviceName: 'Environment-Specific Assessment',
    },
    {
      icon: <Clock className="w-5 h-5 text-[#B8754F]" />,
      title: 'Responsive Communication',
      description:
        'Direct phone line and instant WhatsApp messaging for prompt consultations and service scheduling.',
      serviceName: 'Prompt Response Times',
    },
    {
      icon: <Ship className="w-5 h-5 text-[#B8754F]" />,
      title: 'Specialized Marine Capability',
      description:
        'Experienced in unique marine environments including boats, houseboats, barges, and waterfront facilities.',
      serviceName: 'Marine & Vessel Treatment',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#B8754F]" />,
      title: 'Safe & Practical Applications',
      description:
        'Carefully selected formulations applied with safety-conscious protocols for people and pets.',
      serviceName: 'Safety-First Formulations',
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-[#B8754F]" />,
      title: 'Honest, Clear Guidance',
      description:
        'Transparent advice on whether your space needs fumigation, water treatment, or chemical supply.',
      serviceName: 'Consultative Advice',
    },
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
    <div className="relative min-h-[100dvh] bg-[#FAF7F2] text-[#1C1917] flex flex-col font-sans selection:bg-[#B8754F] selection:text-white">
      
      {/* 1. ADAPTIVE FIXED NAVIGATION HEADER */}
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFC0]/80 shadow-[0_4px_20px_rgba(28,25,23,0.06)] text-[#1C1917]'
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
              <div className="w-10 h-10 rounded-full bg-[#B8754F] flex items-center justify-center shadow-lg shadow-[#B8754F]/20 border border-white/25 group-hover:scale-105 transition-transform duration-300">
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <div className="absolute inset-0 border-[1.5px] border-white/80 rounded-full" />
                  <div className="absolute inset-1 border-[1.5px] border-white/60 rounded-full rotate-45" />
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-2xl sm:text-3xl font-serif-display font-medium tracking-tight leading-none transition-colors duration-300 ${
                    isScrolled ? 'text-[#1C1917]' : 'text-white drop-shadow-sm'
                  }`}
                >
                  Ovichem{' '}
                  <span
                    className={`font-normal text-xl sm:text-2xl transition-colors duration-300 ${
                      isScrolled ? 'text-[#B8754F]' : 'text-[#F2B694]'
                    }`}
                  >
                    Consult
                  </span>
                </span>
              </div>
            </a>

            <div
              className={`hidden lg:block h-8 w-px transition-colors duration-300 ${
                isScrolled ? 'bg-[#1C1917]/15' : 'bg-white/20'
              }`}
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav-menu"
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium transition-colors duration-300"
          >
            <a
              href="#services"
              className={`transition-colors ${
                isScrolled
                  ? 'text-[#443E38] hover:text-[#B8754F]'
                  : 'text-white/90 hover:text-[#F2B694] drop-shadow-sm'
              }`}
            >
              Services
            </a>
            <a
              href="#gallery"
              className={`transition-colors ${
                isScrolled
                  ? 'text-[#443E38] hover:text-[#B8754F]'
                  : 'text-white/90 hover:text-[#F2B694] drop-shadow-sm'
              }`}
            >
              Fieldwork &amp; Products
            </a>
            <a
              href="#about"
              className={`transition-colors ${
                isScrolled
                  ? 'text-[#443E38] hover:text-[#B8754F]'
                  : 'text-white/90 hover:text-[#F2B694] drop-shadow-sm'
              }`}
            >
              About Us
            </a>
            <a
              href="#process"
              className={`transition-colors ${
                isScrolled
                  ? 'text-[#443E38] hover:text-[#B8754F]'
                  : 'text-white/90 hover:text-[#F2B694] drop-shadow-sm'
              }`}
            >
              Process
            </a>
            <a
              href="#faq"
              className={`transition-colors ${
                isScrolled
                  ? 'text-[#443E38] hover:text-[#B8754F]'
                  : 'text-white/90 hover:text-[#F2B694] drop-shadow-sm'
              }`}
            >
              FAQ
            </a>
            <a
              href="#contact"
              className={`transition-colors ${
                isScrolled
                  ? 'text-[#443E38] hover:text-[#B8754F]'
                  : 'text-white/90 hover:text-[#F2B694] drop-shadow-sm'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-consult-btn"
              href={generateWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#A65E32] hover:bg-[#8F4E26] text-white text-sm font-normal px-6 py-2.5 rounded-full shadow-md shadow-black/25 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Book same-day pest control</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-trigger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-[#1C1917] hover:bg-black/5'
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-b px-4 pt-3 pb-6 space-y-3 transition-colors ${
                isScrolled
                  ? 'bg-[#FAF7F2]/98 backdrop-blur-xl border-[#E8DFC0] text-[#1C1917]'
                  : 'bg-[#181411]/95 backdrop-blur-xl border-white/15 text-white'
              }`}
            >
              <div className="flex flex-col space-y-2 text-sm font-medium">
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isScrolled
                      ? 'hover:bg-black/5 text-[#1C1917]'
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  Services
                </a>
                <a
                  href="#gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isScrolled
                      ? 'hover:bg-black/5 text-[#1C1917]'
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  Fieldwork &amp; Products
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isScrolled
                      ? 'hover:bg-black/5 text-[#1C1917]'
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  About Us
                </a>
                <a
                  href="#process"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isScrolled
                      ? 'hover:bg-black/5 text-[#1C1917]'
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  Process
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isScrolled
                      ? 'hover:bg-black/5 text-[#1C1917]'
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  FAQ
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isScrolled
                      ? 'hover:bg-black/5 text-[#1C1917]'
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  Contact
                </a>
              </div>

              <div
                className={`pt-3 border-t flex flex-col gap-2.5 ${
                  isScrolled ? 'border-[#E8DFC0]' : 'border-white/10'
                }`}
              >
                <a
                  href={generateWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-[#A65E32] text-white font-medium py-3 rounded-full flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  Book same-day pest control
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
            backgroundImage: `url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2400&auto=format&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#422D1F]/80 via-[#543A27]/70 to-[#352317]/75" />
          <div className="absolute inset-0 bg-[#483120]/30 backdrop-blur-[0.5px]" />
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
              <div className="flex items-center gap-0.5 text-[#F5A623]">
                <Star className="w-4 h-4 fill-[#F5A623] stroke-none" />
                <Star className="w-4 h-4 fill-[#F5A623] stroke-none" />
                <Star className="w-4 h-4 fill-[#F5A623] stroke-none" />
                <Star className="w-4 h-4 fill-[#F5A623] stroke-none" />
                <Star className="w-4 h-4 fill-[#F5A623] stroke-none" />
              </div>
              <span className="text-xs sm:text-sm font-normal text-[#F2ECE4] tracking-wide ml-1">
                1769 satisfied clients
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              id="hero-main-title"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-serif-display text-[#FAF7F2] leading-[1.03] tracking-tight drop-shadow-sm font-normal"
            >
              Long-term pest control <br className="hidden sm:inline" />
              for high-value properties
            </motion.h1>

            {/* Strategic Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              id="hero-subtitle"
              className="text-sm sm:text-base md:text-lg text-[#EAE3DB] font-normal leading-relaxed max-w-2xl pt-1 drop-shadow-sm"
            >
              Get professional pest inspections, same-day fumigation, and guaranteed
              treatment plans tailored to high-end residential and commercial properties.
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
                className="inline-flex items-center justify-center bg-[#A65E32] hover:bg-[#8F4E26] text-[#FAF7F2] text-sm sm:text-base font-normal px-7 py-3.5 sm:px-8 sm:py-3.5 rounded-full shadow-md shadow-black/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Book same-day pest control</span>
              </a>

              <a
                id="hero-whatsapp-cta"
                href={generateWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#3D2D22]/40 hover:bg-[#3D2D22]/65 text-[#FAF7F2] border border-white/40 hover:border-white/60 text-sm sm:text-base font-normal px-7 py-3.5 sm:px-8 sm:py-3.5 rounded-full backdrop-blur-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>WhatsApp Us now</span>
              </a>
            </motion.div>

            {/* Warri & Delta State Footnote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#DDD3C8]"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F2B694]" />
                <span>
                  <strong className="text-white font-medium">Based in Warri, Delta State</strong> — Taking projects across the state and beyond
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. RECOGNIZED ACROSS RESIDENTIAL & COMMERCIAL INDUSTRIES */}
      <section
        id="industries-strip"
        className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DFC0]/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4 mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-display text-[#1C1917] tracking-tight leading-[1.08]">
              Recognized across residential &amp; <br className="hidden sm:inline" />
              commercial industries
            </h2>
            <p className="text-sm sm:text-base text-[#6B645C] leading-relaxed max-w-2xl">
              From residential estates to large-scale commercial operations, our services are trusted across multiple industries and featured in leading publications.
            </p>
          </div>

          <div
            id="industry-logos-row"
            className="w-full flex items-center justify-between gap-6 sm:gap-10 overflow-x-auto no-scrollbar py-4 opacity-75 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <div className="flex-shrink-0 flex items-center text-[#554D46] hover:text-[#1C1917] transition-colors">
              <span className="font-extrabold tracking-tighter text-2xl sm:text-3xl font-mono uppercase lowercase">
                oipsum<span className="text-xs align-top font-bold">®</span>
              </span>
            </div>

            <div className="flex-shrink-0 flex items-center text-[#554D46] hover:text-[#1C1917] transition-colors">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-none stroke-current stroke-[1.5]" viewBox="0 0 40 40">
                <circle cx="20" cy="14" r="8" opacity="0.8" />
                <circle cx="20" cy="26" r="8" opacity="0.8" />
                <circle cx="14" cy="20" r="8" opacity="0.8" />
                <circle cx="26" cy="20" r="8" opacity="0.8" />
                <circle cx="15.5" cy="15.5" r="8" opacity="0.6" />
                <circle cx="24.5" cy="24.5" r="8" opacity="0.6" />
              </svg>
            </div>

            <div className="flex-shrink-0 flex items-center gap-2 text-[#554D46] hover:text-[#1C1917] transition-colors">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-none stroke-current stroke-[1.7]" viewBox="0 0 36 36">
                <circle cx="18" cy="12" r="7" opacity="0.8" />
                <circle cx="18" cy="24" r="7" opacity="0.8" />
                <circle cx="12" cy="18" r="7" opacity="0.8" />
                <circle cx="24" cy="18" r="7" opacity="0.8" />
              </svg>
              <span className="font-bold text-lg sm:text-xl tracking-tight">Logoipsum<span className="text-[10px] align-super font-semibold">®</span></span>
            </div>

            <div className="flex-shrink-0 flex items-center text-[#554D46] hover:text-[#1C1917] transition-colors">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-current p-1.5 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#FAF7F2] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-current" />
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 flex items-center gap-2 text-[#554D46] hover:text-[#1C1917] transition-colors">
              <svg className="w-9 h-7 sm:w-11 sm:h-8 fill-none stroke-current stroke-[2.2]" viewBox="0 0 44 32">
                <rect x="2" y="2" width="22" height="28" rx="11" />
                <rect x="18" y="2" width="24" height="28" rx="11" />
                <path d="M13 16h18" />
              </svg>
              <span className="font-black text-lg sm:text-xl tracking-wider uppercase font-mono">LGPSIVI<span className="text-[10px] align-super font-semibold">®</span></span>
            </div>

            <div className="flex-shrink-0 flex items-center text-[#554D46] hover:text-[#1C1917] transition-colors">
              <svg className="w-8 h-8 sm:w-9 sm:h-9 fill-current" viewBox="0 0 36 36">
                <path d="M18 2C9.16 2 2 9.16 2 18s7.16 16 16 16 16-7.16 16-16S26.84 2 18 2zm0 4c5.52 0 10.15 3.75 11.59 8.82L15.35 14.82 9.5 8.97C11.83 6.94 14.77 6 18 6zm0 24c-5.52 0-10.15-3.75-11.59-8.82l14.24-.01 5.85 5.85C24.17 29.06 21.23 30 18 30z" />
              </svg>
            </div>

            <div className="flex-shrink-0 flex items-center gap-2 text-[#554D46] hover:text-[#1C1917] transition-colors">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="3.5" />
                <path d="M18 2c-1.5 4-4 6.5-8 8 4 1.5 6.5 4 8 8 1.5-4 4-6.5 8-8-4-1.5-6.5-4-8-8z" opacity="0.9" />
                <path d="M7 7c2 3.5 5 4.5 8 5-3 .5-6 1.5-8 5-2-3.5-2-6.5 0-10zm22 0c2 3.5 2 6.5 0 10-2-3.5-5-4.5-8-5 3-.5 6-1.5 8-5z" opacity="0.7" />
              </svg>
              <span className="font-bold text-lg sm:text-xl tracking-tight">Logoipsum</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES SECTION */}
      <section id="services" className="py-24 sm:py-32 bg-[#F6F1EA] border-b border-[#E8DFC0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#B8754F]/10 border border-[#B8754F]/30 text-[#9B5F3F] text-xs font-semibold uppercase tracking-wider">
                Our services
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-display text-[#1C1917] tracking-tight leading-[1.08]">
                Professional pest control &amp; treatment services for homes &amp; businesses
              </h2>
            </div>

            <div className="lg:col-span-5 space-y-6 lg:pl-6">
              <p className="text-sm sm:text-base text-[#6B645C] leading-relaxed">
                From comprehensive fumigation and drinking water treatment to specialized chemical supplies, we provide safe, effective solutions tailored to residential, commercial, and marine properties.
              </p>
              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#A65E32] hover:bg-[#8F4E26] text-white text-sm font-normal px-7 py-3 rounded-full shadow-md shadow-black/15 transition-all"
                >
                  <span>View all services</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service 1: Fumigation */}
            <div
              id="service-card-fumigation"
              className="p-2 rounded-[2rem] bg-white border border-[#E8DFC0]/70 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col group hover:border-[#B8754F]/50 transition-all"
            >
              <div className="relative h-64 rounded-[calc(2rem-0.5rem)] overflow-hidden bg-[#241F1A]">
                <Image
                  src="https://images.unsplash.com/photo-1584467735815-f778f274e296?q=80&w=1000&auto=format&fit=crop"
                  alt="Fumigation and pest control specialist"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    Primary Service
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-serif-display font-medium text-white">
                    Fumigation &amp; Pest Control
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-[#9B5F3F] italic">
                    “Deal with pest problems where they happen.”
                  </p>
                  <p className="text-xs sm:text-sm text-[#6B645C] leading-relaxed">
                    Professional fumigation across domestic homes, offices, guest houses, boats, houseboats, and marine facilities. Experienced in both routine and specialized treatment.
                  </p>
                  <ul className="text-xs text-[#524B44] space-y-2 pt-2 border-t border-[#E8DFC0]/50">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#B8754F]" /> Homes, offices &amp; hospitality properties
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#B8754F]" /> Marine vessels, boats &amp; houseboats
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#B8754F]" /> Targeted pest elimination &amp; prevention
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E8DFC0]/50">
                  <a
                    href={generateWhatsappUrl('Fumigation & Pest Control')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#A65E32] group-hover:text-[#8F4E26]"
                  >
                    <span>Request Fumigation on WhatsApp</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Service 2: Water Treatment */}
            <div
              id="service-card-water"
              className="p-2 rounded-[2rem] bg-white border border-[#E8DFC0]/70 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col group hover:border-[#B8754F]/50 transition-all"
            >
              <div className="relative h-64 rounded-[calc(2rem-0.5rem)] overflow-hidden bg-[#1E293B]">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb18f156d?q=80&w=1000&auto=format&fit=crop"
                  alt="Drinking water treatment"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    Potable Water
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-serif-display font-medium text-white">
                    Drinking Water Treatment
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-[#9B5F3F] italic">
                    “Make your water suitable for drinking.”
                  </p>
                  <p className="text-xs sm:text-sm text-[#6B645C] leading-relaxed">
                    Practical water treatment solutions intended to make water suitable for drinking across homes, businesses, guest houses, and marine properties.
                  </p>
                  <ul className="text-xs text-[#524B44] space-y-2 pt-2 border-t border-[#E8DFC0]/50">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#B8754F]" /> Domestic &amp; residential drinking systems
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#B8754F]" /> Commercial &amp; guest house water setups
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#B8754F]" /> Marine installation water treatment
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E8DFC0]/50">
                  <a
                    href={generateWhatsappUrl('Drinking Water Treatment')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#A65E32] group-hover:text-[#8F4E26]"
                  >
                    <span>Inquire About Water Treatment</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Service 3: Chemical Sales */}
            <div
              id="service-card-chemicals"
              className="p-2 rounded-[2rem] bg-white border border-[#E8DFC0]/70 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col group hover:border-[#B8754F]/50 transition-all"
            >
              <div className="relative h-64 rounded-[calc(2rem-0.5rem)] overflow-hidden bg-[#1E2E28]">
                <Image
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop"
                  alt="Chemical supplies for fumigation and water treatment"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    Supplies &amp; Sales
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-serif-display font-medium text-white">
                    Chemical Sales &amp; Supply
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-[#9B5F3F] italic">
                    “Get the chemicals you need for the job.”
                  </p>
                  <p className="text-xs sm:text-sm text-[#6B645C] leading-relaxed">
                    Supply and distribution of quality chemicals for fumigation, environmental treatment, water treatment, and related commercial applications.
                  </p>
                  <ul className="text-xs text-[#524B44] space-y-2 pt-2 border-t border-[#E8DFC0]/50">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#B8754F]" /> Fumigation &amp; pest control chemicals
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#B8754F]" /> Water treatment chemicals &amp; agents
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#B8754F]" /> Specialized space treatment supplies
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E8DFC0]/50">
                  <a
                    href={generateWhatsappUrl('Chemical Sales & Supplies')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#A65E32] group-hover:text-[#8F4E26]"
                  >
                    <span>Order Chemicals on WhatsApp</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FIELDWORK, PRODUCTS & EXPERTISE SHOWCASE SECTION */}
      <section
        id="gallery"
        className="py-24 sm:py-32 bg-[#FAF7F2] border-b border-[#E8DFC0]/70"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8754F]/10 border border-[#B8754F]/30 text-[#9B5F3F] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Fieldwork, Products &amp; Expertise</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-display text-[#1C1917] tracking-tight leading-[1.08]">
                Proven fieldwork in action, certified products &amp; technical diagnostics
              </h2>
            </div>

            <div className="lg:col-span-5 space-y-5 lg:pl-6">
              <p className="text-sm sm:text-base text-[#6B645C] leading-relaxed">
                Take a closer look at our live property treatments across the Niger Delta, our certified chemical concentrates, and precision water diagnostics laboratory testing.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={generateWhatsappUrl('Product Catalog & Supplies')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#A65E32] hover:bg-[#8F4E26] text-white text-xs sm:text-sm font-normal px-6 py-2.5 rounded-full shadow-md shadow-black/15 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
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
              { id: 'all', label: 'All Showcases', count: galleryItems.length },
              { id: 'wip', label: 'Work in Progress', count: galleryItems.filter((i) => i.category === 'wip').length },
              { id: 'products', label: 'Products & Chemicals', count: galleryItems.filter((i) => i.category === 'products').length },
              { id: 'expertise', label: 'Expertise & Diagnostics', count: galleryItems.filter((i) => i.category === 'expertise').length },
            ].map((tab) => {
              const isActive = galleryFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`gallery-filter-${tab.id}`}
                  onClick={() => setGalleryFilter(tab.id as typeof galleryFilter)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 border ${
                    isActive
                      ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-sm'
                      : 'bg-white text-[#574F47] border-[#E8DFC0] hover:border-[#B8754F]/50 hover:bg-[#F7F2EA]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-[#A65E32] text-white' : 'bg-[#FAF7F2] text-[#786E64]'
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
                  className="p-2 rounded-2xl bg-white border border-[#E8DFC0]/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex flex-col justify-between group hover:border-[#B8754F]/50 hover:shadow-md transition-all duration-300"
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
                      <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#1C1917]/80 backdrop-blur-md text-white border border-white/15">
                        {item.badge}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedGalleryItem(item)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white gap-2 font-medium text-xs backdrop-blur-[2px]"
                      aria-label={`View details for ${item.title}`}
                    >
                      <div className="bg-[#FAF7F2] text-[#1C1917] px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg transform group-hover:scale-100 scale-95 transition-transform font-semibold text-xs">
                        <ZoomIn className="w-3.5 h-3.5 text-[#B8754F]" />
                        <span>Inspect Details</span>
                      </div>
                    </button>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-white/90 text-xs font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#F2B694] shrink-0" />
                      <span className="truncate">{item.locationOrTier}</span>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-[#9B5F3F]">
                          {item.categoryLabel}
                        </span>
                      </div>

                      <h3 className="text-lg font-serif-display font-medium text-[#1C1917] leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs text-[#6B645C] line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-2 border-t border-[#E8DFC0]/50 space-y-1.5">
                        <div className="text-[11px] text-[#443E38] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-[#B8754F] shrink-0" />
                          <span className="truncate font-medium">{item.keyBenefit}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E8DFC0]/50 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedGalleryItem(item)}
                        className="text-xs font-semibold text-[#8C4F2D] hover:text-[#B8754F] transition-colors flex items-center gap-1"
                      >
                        <span>Specifications</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={generateWhatsappUrl(item.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full bg-[#FAF7F2] hover:bg-[#A65E32] text-[#443E38] hover:text-white border border-[#E8DFC0] transition-colors"
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
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#F4EDE2] border border-[#E8DFC0] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-sm">
            <div className="space-y-1.5 max-w-2xl">
              <h4 className="text-xl sm:text-2xl font-serif-display font-medium text-[#1C1917]">
                Need bulk chemical supplies, specialized spray rigs, or customized property treatment?
              </h4>
              <p className="text-xs sm:text-sm text-[#6B645C] leading-relaxed">
                We supply estate developers, hospitality chains, and vessel operators directly with certified chemicals and diagnostic support across Delta State and neighboring regions.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={generateWhatsappUrl('Chemical Supply & Equipment Procurement')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#A65E32] hover:bg-[#8F4E26] text-white text-xs sm:text-sm font-normal px-7 py-3 rounded-full shadow-md shadow-black/15 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* LIGHTBOX / SPECIFICATIONS MODAL VIEWER */}
      <AnimatePresence>
        {selectedGalleryItem && (
          <div
            id="gallery-item-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedGalleryItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFC0] my-8"
            >
              <button
                onClick={() => setSelectedGalleryItem(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 sm:h-80 w-full bg-[#1A1613]">
                <Image
                  src={selectedGalleryItem.image}
                  alt={selectedGalleryItem.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase px-3 py-1 rounded-full bg-[#A65E32] text-white">
                      {selectedGalleryItem.badge}
                    </span>
                    <span className="text-xs text-[#E8DED6] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#F2B694]" />
                      {selectedGalleryItem.locationOrTier}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif-display font-medium text-white">
                    {selectedGalleryItem.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6 bg-[#FAF7F2]">
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9B5F3F]">
                    Technical Scope &amp; Field Narrative
                  </h4>
                  <p className="text-sm text-[#443E38] leading-relaxed">
                    {selectedGalleryItem.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-[#E8DFC0] space-y-2">
                    <h5 className="text-xs font-bold text-[#1C1917] flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-[#B8754F]" />
                      <span>Equipment &amp; Method</span>
                    </h5>
                    <p className="text-xs text-[#6B645C] leading-relaxed">
                      {selectedGalleryItem.toolsUsed}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#E8DFC0] space-y-2">
                    <h5 className="text-xs font-bold text-[#1C1917] flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B8754F]" />
                      <span>Outcome &amp; Standard</span>
                    </h5>
                    <p className="text-xs text-[#6B645C] leading-relaxed">
                      {selectedGalleryItem.keyBenefit}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9B5F3F]">
                    Key Formulation &amp; Operational Features
                  </h4>
                  <ul className="space-y-2 text-xs text-[#443E38]">
                    {selectedGalleryItem.specifications.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-[#E8DFC0]/60">
                        <Check className="w-4 h-4 text-[#B8754F] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E8DFC0] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#786E64] text-center sm:text-left">
                    Ready to schedule this treatment or order this chemical supply?
                  </div>

                  <a
                    id="modal-whatsapp-cta"
                    href={generateWhatsappUrl(selectedGalleryItem.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#A65E32] hover:bg-[#8F4E26] text-white text-xs sm:text-sm font-normal px-7 py-3 rounded-full shadow-md shadow-black/15 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Inquire About This on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. ABOUT US SECTION */}
      <section id="about" className="py-24 sm:py-32 bg-[#FAF7F2] border-b border-[#E8DFC0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6">
              <div className="p-2 rounded-[2.5rem] bg-white border border-[#E8DFC0]/80 shadow-[0_15px_35px_rgba(0,0,0,0.04)]">
                <div className="relative h-[420px] sm:h-[500px] rounded-[calc(2.5rem-0.5rem)] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1584467735815-f778f274e296?q=80&w=1200&auto=format&fit=crop"
                    alt="Ovichem specialist applying practical mist treatment"
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#B8754F]/10 border border-[#B8754F]/30 text-[#9B5F3F] text-xs font-semibold uppercase tracking-wider">
                About Us
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif-display text-[#1C1917] tracking-tight leading-[1.1]">
                Trusted pest control built around safety, speed &amp; long-term protection
              </h2>

              <p className="text-sm sm:text-base text-[#6B645C] leading-relaxed">
                What started around a decade ago in Warri has grown into a trusted treatment and chemical services company known for responsive service, honest communication, and effective environmental solutions.
              </p>

              <div className="space-y-4 pt-2">
                {aboutTabs.map((tab, idx) => (
                  <div
                    key={tab.id}
                    onClick={() => setActiveAboutTab(idx)}
                    className={`cursor-pointer pl-5 py-2 border-l-[3px] transition-all ${
                      activeAboutTab === idx
                        ? 'border-[#B8754F] bg-[#F3ECE2]/50 rounded-r-xl'
                        : 'border-[#E8DFC0] hover:border-[#B8754F]/40'
                    }`}
                  >
                    <h4 className={`text-base sm:text-lg font-serif-display font-medium ${
                      activeAboutTab === idx ? 'text-[#1C1917]' : 'text-[#7A726A]'
                    }`}>
                      {tab.title}
                    </h4>
                    {activeAboutTab === idx && (
                      <p className="text-xs sm:text-sm text-[#6B645C] mt-1.5 leading-relaxed">
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
                  className="inline-flex items-center gap-2 bg-[#A65E32] hover:bg-[#8F4E26] text-white text-sm font-normal px-7 py-3.5 rounded-full shadow-md shadow-black/15 transition-all"
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
      <section id="why-choose-us" className="py-24 sm:py-32 bg-[#F6F1EA] border-b border-[#E8DFC0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#B8754F]/10 border border-[#B8754F]/30 text-[#9B5F3F] text-xs font-semibold uppercase tracking-wider">
              Why choose Us
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-display text-[#1C1917] tracking-tight">
              Why homeowners &amp; businesses trust our pest control Team
            </h2>
            <p className="text-sm sm:text-base text-[#6B645C] leading-relaxed max-w-2xl mx-auto">
              We focus on fast response times, professional service, safe treatment methods, and long-term pest prevention that gives customers peace of mind.
            </p>

            <div className="pt-2">
              <a
                href={generateWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#A65E32] hover:bg-[#8F4E26] text-white text-sm font-normal px-8 py-3.5 rounded-full shadow-md shadow-black/15 transition-all"
              >
                <span>Book same-day pest control</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left pt-6">
            {whyChooseCards.map((card, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-[#E8DFC0]/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-6 hover:border-[#B8754F]/50 transition-all group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E8DFC0] flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-serif-display font-medium text-[#1C1917]">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B645C] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={generateWhatsappUrl(card.serviceName)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C4F2D] group-hover:text-[#B8754F] transition-colors"
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

      {/* 8. OUR PROCESS SECTION */}
      <section id="process" className="py-24 sm:py-32 bg-[#FAF7F2] border-b border-[#E8DFC0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-2xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#B8754F]/10 border border-[#B8754F]/30 text-[#9B5F3F] text-xs font-semibold uppercase tracking-wider">
              Our process
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-display text-[#1C1917] tracking-tight">
              Our Simple Pest Control Process
            </h2>
            <div className="pt-2">
              <a
                href={generateWhatsappUrl('Space Inspection & Assessment')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#A65E32] hover:bg-[#8F4E26] text-white text-sm font-normal px-8 py-3.5 rounded-full shadow-md shadow-black/15 transition-all"
              >
                <span>Book same-day pest control</span>
              </a>
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto pt-8">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#E8DFC0] -translate-x-1/2 hidden md:block" />

            <div className="space-y-16 md:space-y-24">
              
              {/* Step 01 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-12 text-center md:text-right hidden md:block" />
                
                <div className="relative z-10 flex flex-col items-center justify-center mb-4 md:mb-0">
                  <span className="text-4xl sm:text-5xl font-serif-display text-[#7A726A] bg-[#FAF7F2] px-3">
                    01
                  </span>
                  <div className="w-0.5 h-12 bg-[#B8754F] my-2 hidden md:block" />
                </div>

                <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left space-y-2">
                  <h3 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#1C1917]">
                    Inspection
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B645C] max-w-sm mx-auto md:mx-0 leading-relaxed">
                    We stand behind our work with prompt property evaluations, identifying infestation severity, structural conditions, and preventative recommendations.
                  </p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-12 text-center md:text-right space-y-2 order-2 md:order-1">
                  <h3 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#1C1917]">
                    Identification
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B645C] max-w-sm mx-auto md:ml-auto md:mr-0 leading-relaxed">
                    Our technicians determine the pest type, moisture levels, water suitability, and the most effective treatment approach.
                  </p>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center mb-4 md:mb-0 order-1 md:order-2">
                  <span className="text-4xl sm:text-5xl font-serif-display text-[#7A726A] bg-[#FAF7F2] px-3">
                    02
                  </span>
                </div>

                <div className="w-full md:w-1/2 md:pl-12 hidden md:block order-3" />
              </div>

              {/* Step 03 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-12 text-center md:text-right hidden md:block" />
                
                <div className="relative z-10 flex flex-col items-center justify-center mb-4 md:mb-0">
                  <span className="text-4xl sm:text-5xl font-serif-display text-[#7A726A] bg-[#FAF7F2] px-3">
                    03
                  </span>
                </div>

                <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left space-y-2">
                  <h3 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#1C1917]">
                    Treatment
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B645C] max-w-sm mx-auto md:mx-0 leading-relaxed">
                    We apply targeted treatment solutions using safe and professionally approved methods, or supply the required chemical formulations.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 9. ENVIRONMENTS WE SERVE SECTION */}
      <section id="environments" className="py-24 sm:py-32 bg-[#F6F1EA] border-b border-[#E8DFC0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#B8754F]/10 border border-[#B8754F]/30 text-[#9B5F3F] text-xs font-semibold uppercase tracking-wider">
              Environmental Breadth
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-display text-[#1C1917] tracking-tight leading-tight">
              Different spaces. Different treatment needs. <br />
              <span className="text-[#9B5F3F] italic">One experienced team.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6B645C] leading-relaxed">
              Every space is different. The treatment should be too. Rather than a one-size-fits-all approach, we adapt our methods to your physical environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-8 rounded-2xl bg-white border border-[#E8DFC0]/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E8DFC0] flex items-center justify-center text-[#B8754F]">
                <Home className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-serif-display font-medium text-[#1C1917]">
                Domestic Homes &amp; Estates
              </h4>
              <p className="text-xs text-[#6B645C] leading-relaxed">
                Safe, targeted fumigation and drinking water treatment for family homes, apartments, and residential compounds.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E8DFC0]/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E8DFC0] flex items-center justify-center text-[#B8754F]">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-serif-display font-medium text-[#1C1917]">
                Offices &amp; Commercial Hubs
              </h4>
              <p className="text-xs text-[#6B645C] leading-relaxed">
                Scheduled treatments minimizing workplace disruption while maintaining hygiene and corporate health standards.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E8DFC0]/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E8DFC0] flex items-center justify-center text-[#B8754F]">
                <Hotel className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-serif-display font-medium text-[#1C1917]">
                Guest Houses &amp; Lodging
              </h4>
              <p className="text-xs text-[#6B645C] leading-relaxed">
                Thorough pest eradication and water treatment upholding guest comfort, safety, and hospitality ratings.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#B8754F]/40 shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-3 bg-[#FAF7F2]">
              <div className="w-10 h-10 rounded-lg bg-[#B8754F]/20 flex items-center justify-center text-[#B8754F]">
                <Ship className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-serif-display font-medium text-[#1C1917]">
                  Boats &amp; Houseboats
                </h4>
                <span className="text-[10px] bg-[#B8754F]/20 text-[#8C4F2D] px-2 py-0.5 rounded font-semibold uppercase tracking-wider">
                  Specialized
                </span>
              </div>
              <p className="text-xs text-[#6B645C] leading-relaxed">
                Specialized marine treatment handling tight quarters, humidity factors, and vessel pest control protocols.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E8DFC0]/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E8DFC0] flex items-center justify-center text-[#B8754F]">
                <Anchor className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-serif-display font-medium text-[#1C1917]">
                Marine Facilities &amp; Jetties
              </h4>
              <p className="text-xs text-[#6B645C] leading-relaxed">
                Comprehensive environmental treatments and chemical supplies for ports, maritime yards, and waterfront installations.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E8DFC0]/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E8DFC0] flex items-center justify-center text-[#B8754F]">
                <FlaskConical className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-serif-display font-medium text-[#1C1917]">
                Bulk Chemical Procurement
              </h4>
              <p className="text-xs text-[#6B645C] leading-relaxed">
                Direct distribution of treatment chemicals, disinfectants, and specialized formulations for contractors and facilities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 10. DIRECT CONTACT / EMERGENCY PEST CONTROL SECTION (Revamped & Adapted to Image 1) */}
      <section
        id="contact"
        className="relative min-h-[580px] lg:min-h-[640px] flex flex-col justify-center overflow-hidden text-white"
      >
        {/* Background Image of Technician in Action with Warm Atmospheric Overlay (Exact Match to Image 1) */}
        <div
          id="contact-bg-container"
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1584467735815-f778f274e296?q=80&w=2400&auto=format&fit=crop')`,
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
                  1769 satisfied clients
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif-display text-[#FAF7F2] leading-[1.05] tracking-tight font-normal max-w-2xl drop-shadow-sm">
                Emergency pest control when you need fast help
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg text-[#EAE3DB] font-normal leading-relaxed max-w-2xl drop-shadow-sm">
                Some pest problems can&apos;t wait. Whether you&apos;ve discovered termites damaging your property, rodents in your business, or a sudden bed bug outbreak, our team is ready to respond quickly.
              </p>

              {/* CTA Action Buttons (Call us now + WhatsApp Us now) */}
              <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={`tel:${defaultPhoneNumber.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center bg-[#A65E32] hover:bg-[#8F4E26] text-[#FAF7F2] text-sm sm:text-base font-normal px-8 py-3.5 rounded-full shadow-md shadow-black/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <span>Call us now</span>
                </a>

                <a
                  href={generateWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#3D2D22]/40 hover:bg-[#3D2D22]/65 text-[#FAF7F2] border border-white/40 hover:border-white/60 text-sm sm:text-base font-normal px-8 py-3.5 rounded-full backdrop-blur-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <span>WhatsApp Us now</span>
                </a>
              </div>

              {/* Location & Operating Scope */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#DDD3C8]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F2B694]" />
                  <span>Warri &amp; Delta State Headquarters — Rapid Project Dispatch Across Niger Delta</span>
                </div>
              </div>

            </div>

            {/* Right: Quick Direct WhatsApp Configurator */}
            <div className="lg:col-span-4">
              <div className="p-6 sm:p-7 rounded-3xl bg-[#1C1612]/80 backdrop-blur-md border border-white/20 shadow-2xl space-y-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#F2B694] font-medium">
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
                      className="w-full bg-[#2A201A] border border-white/20 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#B8754F]"
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
                      className="w-full bg-[#2A201A] border border-white/20 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#B8754F]"
                    >
                      <option value="Fumigation & Pest Control">Fumigation &amp; Pest Control</option>
                      <option value="Drinking Water Treatment">Drinking Water Treatment</option>
                      <option value="Chemical Sales & Supplies">Chemical Sales &amp; Supplies</option>
                      <option value="Comprehensive Space Assessment">Comprehensive Space Assessment</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#D0C4BA] font-medium">Location:</label>
                    <input
                      type="text"
                      value={inquiryLocation}
                      onChange={(e) => setInquiryLocation(e.target.value)}
                      placeholder="e.g. Warri, Delta State"
                      className="w-full bg-[#2A201A] border border-white/20 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#B8754F]"
                    />
                  </div>

                  <div className="pt-2">
                    <a
                      id="direct-dispatch-whatsapp-btn"
                      href={generateWhatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#A65E32] hover:bg-[#8F4E26] text-white font-medium py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all transform active:scale-[0.99] text-xs"
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

      {/* 11. FREQUENTLY ASKED QUESTIONS SECTION (Matching Image 2) */}
      <section id="faq" className="py-24 sm:py-32 bg-[#FAF7F2] border-b border-[#E8DFC0]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: FAQs pill + Large Serif Title (Exact Match to Image 2) */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D8CFC4] text-[#7A726A] text-xs font-semibold uppercase tracking-wider shadow-sm">
                FAQs
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-display text-[#1C1917] tracking-tight leading-[1.08]">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Right Column: Intro text + Accordion List (Exact Match to Image 2) */}
            <div className="lg:col-span-7 space-y-8">
              <p className="text-sm sm:text-base text-[#6B645C] leading-relaxed">
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
                          ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E8DFC0]/80 p-6'
                          : 'border-b border-[#E8DFC0] py-5 px-2 hover:bg-black/[0.01]'
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between gap-4 text-left focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span
                          className={`text-lg sm:text-xl font-serif-display font-medium transition-colors ${
                            isOpen ? 'text-[#1C1917]' : 'text-[#2E2823] hover:text-[#B8754F]'
                          }`}
                        >
                          {faq.question}
                        </span>

                        <div
                          className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                            isOpen
                              ? 'bg-[#F4EDE2] text-[#554D46]'
                              : 'text-[#8C837A] hover:text-[#1C1917]'
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
                            <p className="pt-3 text-xs sm:text-sm text-[#6B645C] leading-relaxed">
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
                  className="font-semibold text-[#A65E32] hover:text-[#8F4E26] underline transition-colors"
                >
                  Ask us directly on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 12. RESTYLED FOOTER (Exact Match to Image 3 Style: Light Minimalist Editorial) */}
      <footer className="bg-[#FAF7F2] text-[#6B645C] border-t border-[#E8DFC0]/70 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Col 1: Brand & Bio (Exact Match to Image 3) */}
            <div className="md:col-span-4 space-y-4">
              <a href="#" className="flex items-center gap-3 group focus:outline-none">
                <div className="w-8 h-8 rounded-full bg-[#B8754F] flex items-center justify-center text-white shadow-sm">
                  <div className="relative w-4 h-4 flex items-center justify-center">
                    <div className="absolute inset-0 border-[1.2px] border-white/80 rounded-full" />
                    <div className="absolute inset-0.5 border-[1.2px] border-white/60 rounded-full rotate-45" />
                    <div className="w-1 h-1 bg-white rounded-full" />
                  </div>
                </div>
                <span className="text-2xl font-serif-display font-medium text-[#1C1917] tracking-tight">
                  Ovichem
                </span>
              </a>

              <p className="text-xs sm:text-sm text-[#6B645C] leading-relaxed max-w-sm">
                Professional pest control and fumigation services for residential and commercial properties. Trusted for termite treatment, rodent removal, bed bug extermination, and emergency pest control.
              </p>
            </div>

            {/* Col 2: All pages (Exact Match to Image 3) */}
            <div className="md:col-span-3 space-y-4 md:pl-6">
              <h4 className="text-xl font-serif-display font-medium text-[#1C1917]">
                All pages
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#6B645C]">
                <li>
                  <a href="#" className="hover:text-[#B8754F] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#B8754F] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#B8754F] transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-[#B8754F] transition-colors">
                    Fieldwork &amp; Products
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#B8754F] transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#B8754F] transition-colors">
                    Contact page
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#B8754F] transition-colors">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#B8754F] transition-colors">
                    Terms of use
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Social media (Exact Match to Image 3) */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xl font-serif-display font-medium text-[#1C1917]">
                Social media
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#6B645C]">
                <li>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B8754F] transition-colors"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B8754F] transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B8754F] transition-colors"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B8754F] transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href={generateWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B8754F] transition-colors text-[#A65E32] font-medium"
                  >
                    WhatsApp Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact Us (Exact Match to Image 3) */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xl font-serif-display font-medium text-[#1C1917]">
                Contact Us
              </h4>
              <div className="space-y-2.5 text-xs sm:text-sm text-[#6B645C]">
                <p>
                  <a
                    href={`mailto:${defaultEmail}`}
                    className="hover:text-[#B8754F] transition-colors"
                  >
                    {defaultEmail}
                  </a>
                </p>
                <p>
                  <a
                    href={`tel:${defaultPhoneNumber.replace(/\s+/g, '')}`}
                    className="hover:text-[#B8754F] transition-colors"
                  >
                    {defaultPhoneNumber}
                  </a>
                </p>
                <p className="text-xs text-[#8C837A] pt-1 leading-relaxed">
                  Warri, Delta State, Nigeria <br />
                  Servicing Delta State, Edo State &amp; Niger Delta regions.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Trademark */}
          <div className="pt-8 border-t border-[#E8DFC0]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C837A]">
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
