import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Header: React.FC = () => {
  const { locale, setLocale, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('home');
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // References for nav list and individual items to calculate exact positions
  const navListRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});

  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
    opacity: number;
  }>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });

  const navItems = [
    { id: 'home', label: t.nav.home, href: '#home' },
    { id: 'experience', label: t.nav.experience, href: '#experience' },
    { id: 'projects', label: t.nav.projects, href: '#projects' },
    { id: 'skills', label: t.nav.skills, href: '#skills' },
    { id: 'contact', label: t.nav.contact, href: '#contact' },
  ];

  // Target item for indicator: hovered item if any, otherwise active section
  const targetItemId = hoveredNav || activeSection;

  // Update sliding indicator position whenever active/hovered item or locale changes
  useEffect(() => {
    const navList = navListRef.current;
    const targetLi = itemRefs.current[targetItemId];

    if (navList && targetLi) {
      const navRect = navList.getBoundingClientRect();
      const itemRect = targetLi.getBoundingClientRect();

      setIndicatorStyle({
        left: itemRect.left - navRect.left,
        top: itemRect.top - navRect.top,
        width: itemRect.width,
        height: itemRect.height,
        opacity: 1,
      });
    }
  }, [targetItemId, locale, t]);

  // Scroll spy to detect active section smoothly
  useEffect(() => {
    let isThrottled = false;

    const handleScroll = () => {
      if (isThrottled) return;
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;
      }, 100);

      const sections = ['home', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Header Navigation */}
      <div className="fixed top-5 left-1/2 z-50 -translate-x-1/2 hidden md:flex items-center justify-center rounded-[40px] border-2 border-gray-700 bg-secondary/50 px-5 py-2.5 backdrop-blur-md transition-all duration-300 w-auto">
        <nav aria-label="Desktop Navigation" className="flex items-center gap-1">
          <ul
            ref={navListRef}
            onMouseLeave={() => setHoveredNav(null)}
            className="relative flex flex-row items-center gap-1"
          >
            {/* Single Persistent Animated Sliding Indicator */}
            <div
              className="pointer-events-none absolute z-10 rounded-2xl bg-white shadow-sm transition-all"
              style={{
                left: `${indicatorStyle.left}px`,
                top: `${indicatorStyle.top}px`,
                width: `${indicatorStyle.width}px`,
                height: `${indicatorStyle.height}px`,
                opacity: indicatorStyle.opacity,
                transitionDuration: '400ms',
                transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            />

            {navItems.map((item) => {
              const isCurrent = targetItemId === item.id;

              return (
                <li
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[item.id] = el;
                  }}
                  className="relative"
                >
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href, item.id)}
                    onMouseEnter={() => setHoveredNav(item.id)}
                    className="group relative block px-4 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    <span
                      className={`relative z-20 block transition-colors duration-300 ${
                        isCurrent
                          ? 'text-black font-semibold'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Vertical Divider */}
          <div className="mx-2 h-4 w-[1px] bg-gray-700" />

          {/* Integrated PT / EN Selector (Inspired by EzeFaz) */}
          <div className="flex items-center gap-1 rounded-full border border-gray-700/80 bg-black/40 p-1">
            <button
              type="button"
              onClick={() => setLocale('pt-BR')}
              aria-pressed={locale === 'pt-BR'}
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-mono tracking-wider transition-all duration-300 ${
                locale === 'pt-BR'
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'text-gray-400 hover:text-white font-medium'
              }`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-mono tracking-wider transition-all duration-300 ${
                locale === 'en'
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'text-gray-400 hover:text-white font-medium'
              }`}
            >
              EN
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Header Navigation Container */}
      <div className="fixed top-5 left-1/2 z-50 flex w-[90%] max-w-[400px] -translate-x-1/2 flex-col rounded-3xl border-2 border-gray-700 bg-secondary/80 backdrop-blur-xl md:hidden overflow-hidden transition-all duration-300">
        <div className="flex h-14 w-full items-center justify-between px-5">
          <span className="text-sm font-semibold tracking-tight text-white/90">
            Pedro Salles
          </span>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Alternar navegação"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white focus:outline-none"
          >
            {/* Animated 2-Line Hamburger to X */}
            <div className="relative h-4 w-6">
              <span
                className={`absolute left-0 h-[2px] w-6 bg-white transition-all duration-300 ease-[cubic-bezier(0,0,0,1)] ${
                  isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0.5'
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-6 bg-white transition-all duration-300 ease-[cubic-bezier(0,0,0,1)] ${
                  isMobileMenuOpen ? 'top-2 -rotate-45' : 'bottom-0.5'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Expandable Mobile Drawer */}
        <div
          className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0 pb-0'
          }`}
        >
          <ul className="flex flex-col items-center gap-2 px-4 pt-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="w-full text-center">
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href, item.id)}
                    className={`block w-full rounded-xl py-2.5 text-base font-medium transition-all ${
                      isActive
                        ? 'bg-white/10 text-white font-semibold'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Language Switcher */}
          <div className="mt-4 flex items-center justify-center gap-2 border-t border-gray-700/50 pt-4">
            <button
              type="button"
              onClick={() => setLocale('pt-BR')}
              className={`rounded-full border px-4 py-1 text-xs font-mono tracking-wider transition-all ${
                locale === 'pt-BR'
                  ? 'border-white/60 bg-white text-black font-bold'
                  : 'border-white/20 text-white/70 hover:text-white'
              }`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`rounded-full border px-4 py-1 text-xs font-mono tracking-wider transition-all ${
                locale === 'en'
                  ? 'border-white/60 bg-white text-black font-bold'
                  : 'border-white/20 text-white/70 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
