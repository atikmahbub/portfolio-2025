"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";

export interface StaggeredMenuItem {
  label: string;
  ariaLabel: string;
  link: string;
}
export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}
export interface StaggeredMenuProps {
  position?: 'left' | 'right';
  colors?: string[];
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  isFixed?: boolean;
  changeMenuColorOnOpen?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = 'right',
  colors = ['#B19EEF', '#5227FF'],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  logoUrl,
  accentColor = '#5227FF',
  isFixed = false,
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose
}: StaggeredMenuProps) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const preLayersRef = useRef<HTMLDivElement | null>(null);

  const plusHRef = useRef<HTMLSpanElement | null>(null);
  const plusVRef = useRef<HTMLSpanElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);
  const textInnerRef = useRef<HTMLSpanElement | null>(null);
  
  const [textLines, setTextLines] = useState<string[]>(['Menu', 'Close']);
  const [showNavBg, setShowNavBg] = useState(false); // Start transparent
  const busyRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    
    // Scroll listener to toggle background visibility
    const handleScroll = () => {
      // If we are at the top, hide the background (make it part of the body)
      // On scroll down, show it to mask content
      if (window.scrollY > 20) {
        setShowNavBg(true);
      } else {
        setShowNavBg(false);
      }
    };

    checkMobile();
    handleScroll(); // Initial check

    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Initialize GSAP state on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const layers = preLayersRef.current?.querySelectorAll('.sm-prelayer');
      if (!panel) return;

      const offscreen = position === 'left' ? -100 : 100;
      gsap.set(panel, { xPercent: offscreen, opacity: 0, visibility: 'hidden' });
      if (layers) gsap.set(layers, { xPercent: offscreen, opacity: 0, visibility: 'hidden' });

      gsap.set(plusHRef.current, { rotate: 0 });
      gsap.set(plusVRef.current, { rotate: 90 });
      gsap.set(iconRef.current, { rotate: 0 });
    });
    return () => ctx.revert();
  }, [position]);

  // Body scroll lock
  useEffect(() => {
    if (open && isFixed) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = original; };
    }
  }, [open, isFixed]);

  const toggleMenu = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;

    const nextOpen = !openRef.current;
    openRef.current = nextOpen;
    setOpen(nextOpen);

    const panel = panelRef.current;
    const layers = Array.from(preLayersRef.current?.querySelectorAll('.sm-prelayer') || []) as HTMLElement[];
    const itemLabels = Array.from(panel?.querySelectorAll('.sm-panel-itemLabel') || []) as HTMLElement[];
    const numberEls = Array.from(panel?.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item') || []) as HTMLElement[];
    const socials = Array.from(panel?.querySelectorAll('.sm-socials-title, .sm-socials-link') || []) as HTMLElement[];

    const tl = gsap.timeline({
      onComplete: () => { busyRef.current = false; }
    });

    const offscreen = position === 'left' ? -100 : 100;

    if (nextOpen) {
      onMenuOpen?.();
      setShowNavBg(false);
      
      // Reset items
      gsap.set(itemLabels, { yPercent: 140, rotate: 10, opacity: 0 });
      gsap.set(numberEls, { ['--sm-num-opacity']: 0 });
      gsap.set(socials, { y: 20, opacity: 0 });

      // Panel & Layers animation
      tl.to([panel, ...layers], { 
        visibility: 'visible',
        opacity: 1, 
        xPercent: 0, 
        duration: 0.35, 
        ease: 'power4.out', 
        stagger: 0.03 
      });
      
      // Items animation
      tl.to(itemLabels, { yPercent: 0, rotate: 0, opacity: 1, duration: 0.4, ease: 'power4.out', stagger: 0.05 }, "-=0.25");
      tl.to(numberEls, { ['--sm-num-opacity']: 1, duration: 0.3, stagger: 0.04 }, "-=0.35");
      tl.to(socials, { y: 0, opacity: 1, duration: 0.3, stagger: 0.03 }, "-=0.2");

      // Icon animation
      gsap.to(plusHRef.current, { rotate: 45, duration: 0.4, ease: 'power4.out' });
      gsap.to(plusVRef.current, { rotate: -45, duration: 0.4, ease: 'power4.out' });

      // Text animation
      setTextLines(['Menu', 'Close', 'Menu', 'Close']);
      gsap.fromTo(textInnerRef.current, { yPercent: 0 }, { yPercent: -75, duration: 0.5, ease: 'power4.out' });
    } else {
      onMenuClose?.();
      
      // Panel & Layers animation
      tl.to([...layers.reverse(), panel], { 
        xPercent: offscreen, 
        opacity: 0,
        visibility: 'hidden',
        duration: 0.25, 
        ease: 'power3.in', 
        stagger: 0.03 
      });

      // Icon animation
      gsap.to(plusHRef.current, { rotate: 0, duration: 0.3, ease: 'power3.inOut' });
      gsap.to(plusVRef.current, { rotate: 90, duration: 0.3, ease: 'power3.inOut' });

      // Text animation
      setTextLines(['Close', 'Menu', 'Close', 'Menu']);
      gsap.fromTo(textInnerRef.current, { yPercent: 0 }, { yPercent: -75, duration: 0.5, ease: 'power4.out' });

      // Return background only after animation finishes
      setTimeout(() => {
        if (!openRef.current) setShowNavBg(true);
      }, 500);
    }
  }, [position, onMenuOpen, onMenuClose]);

  const closeMenu = useCallback(() => {
    if (openRef.current && !busyRef.current) { toggleMenu(); }
  }, [toggleMenu]);

  useEffect(() => {
    if (!closeOnClickAway || !open) return;
    const handleEvent = (e: MouseEvent | TouchEvent) => {
      if (panelRef.current?.contains(e.target as Node) || toggleBtnRef.current?.contains(e.target as Node)) return;
      closeMenu();
    };
    document.addEventListener('mousedown', handleEvent);
    document.addEventListener('touchstart', handleEvent, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleEvent);
      document.removeEventListener('touchstart', handleEvent);
    };
  }, [closeOnClickAway, open, closeMenu]);

  const { theme } = useTheme();
  const isScrolled = showNavBg;
  const navBgColor = theme === 'dark' ? '#19104F' : '#f4f6fa';

  return (
    <div ref={wrapperRef} className={`sm-scope z-[999999] pointer-events-none fixed top-0 left-0 w-full h-screen`}>
      <div className="staggered-menu-wrapper relative w-full h-full" data-position={position}>
        <div ref={preLayersRef} className="sm-prelayers absolute top-0 right-0 bottom-0 pointer-events-none z-[10000]">
          {(colors || ['#1e1e22', '#35353c']).slice(0, 3).map((c, i) => (
            <div 
              key={i} 
              className="sm-prelayer absolute top-0 right-0 h-full w-full" 
              style={{ background: c, visibility: 'hidden', opacity: 0 }} 
            />
          ))}
        </div>

        <header 
          className={`sm-header fixed top-0 left-0 w-full flex items-center justify-between p-[1.5em] sm:p-[2em] z-[100] pointer-events-auto transition-all duration-500 ease-in-out ${isScrolled && !open ? 'shadow-[0_8px_30px_rgb(0,0,0,0.12)]' : ''}`}
          style={{
            backgroundColor: (isScrolled && !open) ? navBgColor : 'transparent',
          }}
        >
          <div className="sm-logo pointer-events-auto">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">
              <span className="h-2 w-2 rounded-full bg-[#7C3AED]" />
              Atik Mahbub
            </div>
          </div>

          <button
            ref={toggleBtnRef}
            className={`sm-toggle relative flex items-center gap-2 bg-transparent border-0 cursor-pointer pointer-events-auto transition-colors duration-300 ${open ? 'text-black dark:text-white' : 'text-slate-900 dark:text-[#e9e9ef]'}`}
            onClick={toggleMenu}
            aria-expanded={open}
            type="button"
          >
            <span className="sm-toggle-textWrap relative h-[1em] overflow-hidden">
              <span ref={textInnerRef} className="sm-toggle-textInner flex flex-col leading-none">
                {textLines.map((l, i) => <span key={i} className="sm-toggle-line block h-[1em]">{l}</span>)}
              </span>
            </span>
            <span ref={iconRef} className="sm-icon relative w-4 h-4 flex items-center justify-center">
              <span ref={plusHRef} className="absolute w-full h-[2px] bg-current rounded-full" />
              <span ref={plusVRef} className="absolute w-full h-[2px] bg-current rounded-full" />
            </span>
          </button>
        </header>

        <aside
          ref={panelRef}
          className="sm-panel absolute top-0 right-0 h-full bg-white/98 dark:bg-[#070815]/98 flex flex-col p-[6rem_2rem_2rem] overflow-y-auto z-[200] backdrop-blur-none sm:backdrop-blur-xl pointer-events-auto shadow-2xl"
          style={{ width: 'clamp(280px, 40vw, 450px)', visibility: 'hidden', opacity: 0 }}
        >
          <div className="sm-panel-inner flex-1 flex flex-col gap-8">
            <ul className="sm-panel-list list-none m-0 p-0 flex flex-col gap-4" data-numbering={displayItemNumbering || undefined}>
              {(items || []).map((it, idx) => (
                <li key={idx} className="sm-panel-itemWrap overflow-hidden">
                  <a href={it.link} onClick={closeMenu} className="sm-panel-item relative block text-[3rem] font-bold uppercase tracking-tighter text-black dark:text-white no-underline hover:text-indigo-600 transition-colors">
                    <span className="sm-panel-itemLabel inline-block">{it.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {displaySocials && (
              <div className="sm-socials mt-auto pt-8 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="sm-socials-title text-xs font-bold uppercase tracking-widest text-indigo-500">Appearance</h3>
                  <ThemeToggle variant="pill" />
                </div>
                {(socialItems || []).length > 0 && (
                  <div className="flex flex-col gap-2">
                    <h3 className="sm-socials-title text-xs font-bold uppercase tracking-widest text-indigo-500">Socials</h3>
                    <div className="flex gap-4 flex-wrap">
                      {socialItems?.map((s, i) => (
                        <a key={i} href={s.link} target="_blank" rel="noopener" className="sm-socials-link text-sm font-medium text-slate-600 dark:text-white/60 hover:text-indigo-500 dark:hover:text-white transition-colors">{s.label}</a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </aside>
      </div>

      <style jsx global>{`
        .sm-panel-list[data-numbering] { counter-reset: sm; }
        .sm-panel-item::after {
          counter-increment: sm;
          content: counter(sm, decimal-leading-zero);
          position: absolute;
          top: 0.2em;
          right: 0;
          font-size: 0.8rem;
          font-weight: 400;
          color: #6366f1;
          opacity: var(--sm-num-opacity, 0);
        }
        @media (max-width: 768px) {
          .sm-panel { width: 100% !important; }
          .sm-panel-item { font-size: 2rem !important; }
        }
      `}</style>
    </div>
  );
};

export default StaggeredMenu;
