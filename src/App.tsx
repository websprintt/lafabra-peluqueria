/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import AboutSandra from './components/AboutSandra';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';
import LocationBento from './components/LocationBento';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import { X, Calendar, Phone, Sparkles, AlertCircle } from 'lucide-react';
import { handlePhoneCall } from './utils';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  // Smooth local DOM scroll routing
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenBooking = (serviceId?: string) => {
    setPreselectedService(serviceId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 relative antialiased selection:bg-pink-100 selection:text-pink-700">
      
      {/* Dynamic Upper Announcement banner - perfect conversion banner */}
      <div 
        className="bg-gradient-to-r from-pink-600 via-pink-700 to-pink-600 text-white text-[10.5px] py-2 px-4 text-center font-bold uppercase tracking-[0.2em] relative z-40 flex items-center justify-center gap-1.5"
        id="announcement-banner"
      >
        <Sparkles className="w-3.5 h-3.5 text-white animate-spin" style={{ animationDuration: '8s' }} />
        <span>Atención Personalizada 1-a-1 por Sandra • Plazas muy limitadas para esta semana</span>
        <Sparkles className="w-3.5 h-3.5 text-white animate-spin" style={{ animationDuration: '8s' }} />
      </div>

      {/* Main Glassmorphic Navigation Component */}
      <Header 
        onNavigate={handleScrollToSection} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Core Landing Page layout structure modules */}
      <main className="relative z-10" id="main-content-layout">
        
        {/* Dynamic Editorial Hero module */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
          onNavigateToServices={() => handleScrollToSection('servicios')} 
        />

        {/* Bento Grid Services list + Interactive Budget CRO Calculator */}
        <ServicesGrid 
          onOpenBooking={(serviceId) => handleOpenBooking(serviceId)} 
        />

        {/* Brand Essence & Sandra's technical mastery */}
        <AboutSandra />

        {/* Trust proofs, Star ratings, and stateful live reviews draft emulator */}
        <ReviewsSection />

        {/* SEO query response Accordion */}
        <FaqSection />

        {/* Route, Schedule bento boxes */}
        <LocationBento />

      </main>

      {/* Luxury Footer component */}
      <Footer 
        onNavigate={handleScrollToSection} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Interactive Sticky Floating Footer CTA for mobile screens (Excellent for CRO) */}
      <div 
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 w-11/12 max-w-sm md:hidden"
        id="mobile-sticky-dock"
      >
        <div className="bg-white/95 backdrop-blur-md border border-stone-200 rounded-full py-2.5 px-3.5 flex items-center justify-between shadow-2xl">
          <div className="flex flex-col text-left pl-2">
            <span className="text-[8px] uppercase tracking-wider font-sans font-bold text-pink-600">Lafabra</span>
            <span className="text-[10px] font-sans font-semibold text-stone-700">Ciudad Real</span>
          </div>

          <div className="flex items-center space-x-2">
            <button 
              onClick={handlePhoneCall}
              className="w-10 h-10 rounded-full border border-pink-100 bg-pink-50 text-pink-600 flex items-center justify-center transition-transform active:scale-90 cursor-pointer focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none"
              title="Llamada express"
              aria-label="Llamar directamente por teléfono"
            >
              <Phone className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => handleOpenBooking()}
              className="px-5 h-10 bg-pink-600 hover:bg-pink-700 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-full shadow-lg flex items-center gap-1.5 active:scale-95 transition-transform cursor-pointer"
              style={{ minHeight: '40px' }}
              id="sticky-mobile-booking-cta"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span>Cita</span>
            </button>
          </div>
        </div>
      </div>

      {/* RENDER COMPREHENSIVE BOOKING DIALOG MODAL ON CTA TRIGGER */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto" id="booking-modal-portal">
            
            {/* Modal backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs"
            />

            {/* Modal dialog wrapper */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative z-10 w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              {/* Close button */}
              <button
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 border border-stone-200/50 text-stone-800 flex items-center justify-center transition-colors cursor-pointer active:scale-90"
                aria-label="Cerrar formulario de reserva"
                id="close-booking-modal"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              {/* Wizard booking component */}
              <BookingForm 
                preselectedServiceId={preselectedService} 
                onClose={() => setIsBookingOpen(false)} 
              />

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
