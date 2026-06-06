/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar, Instagram, Award, Flower } from 'lucide-react';
import { decodeB64, OBSCURED_PHONE_DISPLAY, handlePhoneCall } from '../utils';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export default function Header({ onNavigate, onOpenBooking }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'nosotros', label: 'Sobre Sandra' },
    { id: 'reseñas', label: 'Opiniones' },
    { id: 'faqs', label: 'Preguntas' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/85 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            onClick={() => handleLinkClick('inicio')}
            className="flex items-center space-x-2.5 cursor-pointer group"
            id="logo-container"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-pink-700 flex items-center justify-center shadow-md relative overflow-hidden">
              <Flower className="w-5 h-5 text-white animate-spin" style={{ animationDuration: '24s' }} />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-30 transition-opacity" />
            </div>
            <div>
              <span className="font-serif text-xl tracking-[0.15em] font-extrabold text-stone-900 group-hover:text-pink-600 transition-colors">LAFABRA</span>
              <span className="block text-[9px] uppercase tracking-[0.25em] text-pink-600 font-sans font-bold -mt-0.5">Estética Premium</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="text-stone-700 hover:text-pink-600 font-sans text-xs uppercase font-bold tracking-wider transition-colors relative py-2 cursor-pointer group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Desktop Call to action */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handlePhoneCall}
              className="flex items-center space-x-1.5 text-xs font-semibold text-stone-700 hover:text-pink-600 transition-colors p-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none"
              title="Llamar a Lafabra"
              aria-label="Llamar al centro de estética"
            >
              <Phone className="w-3.5 h-3.5 text-pink-500 animate-bounce" />
              <span>{decodeB64(OBSCURED_PHONE_DISPLAY)}</span>
            </button>
            
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-pink-600 text-white font-sans font-bold text-xs tracking-wider uppercase rounded-full shadow-md shadow-pink-100 hover:scale-105 active:scale-95 transition-all duration-200 relative overflow-hidden group cursor-pointer"
              id="cta-nav-desktop"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                Reservar Cita
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-3">
            <button 
              onClick={handlePhoneCall}
              className="w-10 h-10 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center text-pink-600 active:scale-90 transition-transform shadow-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none"
              title="Llamar directo"
              aria-label="Llamar al centro de estética por teléfono"
            >
              <Phone className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-800 active:scale-90 transition-transform cursor-pointer shadow-xs"
              aria-label="Abrir menú"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs z-40 md:hidden"
            />

            {/* Slide Down/Fade menu drawer */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-20 left-0 right-0 bg-white border-b border-stone-200 z-40 md:hidden p-6 max-h-[calc(100vh-5rem)] overflow-y-auto shadow-xl"
              id="mobile-drawer"
            >
              <div className="grid grid-cols-2 gap-3 pb-6 border-b border-stone-100">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className="h-12 rounded-xl bg-stone-50 border border-stone-100 text-stone-800 hover:text-pink-600 active:bg-pink-50 hover:border-pink-200 font-sans text-xs font-semibold tracking-wider flex items-center justify-center transition-all cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="pt-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-sans text-stone-500 font-medium">
                  <div className="flex items-center gap-1.5 text-pink-600 font-bold">
                    <Award className="w-4 h-4" />
                    <span>Lafabra Ciudad Real</span>
                  </div>
                  <span>Sandra</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pb-2">
                  <button
                    onClick={handlePhoneCall}
                    className="flex h-12 rounded-full border border-stone-200 items-center justify-center space-x-2 text-stone-700 hover:text-pink-600 font-sans text-xs transition-transform active:scale-95 bg-stone-50 cursor-pointer focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none"
                    aria-label="Llamar directamente por teléfono"
                  >
                    <Phone className="w-3.5 h-3.5 text-pink-500" />
                    <span>Llamar</span>
                  </button>
                  <a
                    href="https://www.instagram.com/lafabra_peluqueriaestetica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 rounded-full border border-stone-200 items-center justify-center space-x-2 font-sans text-xs bg-stone-50 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none"
                    aria-label="Visitar perfil de Instagram"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-500" />
                    <span className="text-stone-700">Instagram</span>
                  </a>
                </div>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-4 bg-pink-600 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-full shadow-lg shadow-pink-100 flex items-center justify-center gap-2 active:scale-95 transition-transform cursor-pointer"
                  style={{ minHeight: '48px' }}
                  id="mobile-menu-cta"
                >
                  <Calendar className="w-4 h-4" />
                  Reservar Cita por WhatsApp
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
