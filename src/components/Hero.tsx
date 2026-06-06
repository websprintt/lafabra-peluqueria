/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Calendar, Star, ArrowRight, CheckCircle2, ChevronRight, Phone, Flower } from 'lucide-react';
import { handlePhoneCall } from '../utils';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigateToServices: () => void;
}

export default function Hero({ onOpenBooking, onNavigateToServices }: HeroProps) {
  // Path to the beautiful generated beauty hero image featuring nails and cherry blossoms
  const heroImageSrc = '/src/assets/images/lafabra_hero_1780675896853.png';

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-50 via-white to-stone-100 flex items-center justify-center overflow-hidden"
    >
      {/* Decorative pink petals/glows scattered inside the grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft pink marble circular glows */}
        <div className="absolute top-1/6 left-1/12 w-64 h-64 rounded-full bg-pink-100/40 blur-[80px] petal-glow-pink" />
        <div className="absolute bottom-1/4 right-1/12 w-80 h-80 rounded-full bg-pink-200/30 blur-[100px] petal-glow-pink" style={{ animationDelay: '2s' }} />
        
        {/* Abstract elegant luxury thin grid lines in warm gray */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f0ee_1px,transparent_1px),linear-gradient(to_bottom,#f1f0ee_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-60" />
      </div>

      {/* Floating pink flower icons across the margins for that botanical luxury look */}
      <div className="absolute top-24 left-10 text-pink-300 opacity-20 animate-bounce" style={{ animationDuration: '6s' }}>
        <Flower className="w-8 h-8 rotate-12" />
      </div>
      <div className="absolute bottom-16 right-12 text-pink-400 opacity-30 animate-pulse" style={{ animationDuration: '4s' }}>
        <Flower className="w-10 h-10 -rotate-12" />
      </div>
      <div className="absolute top-1/3 right-1/3 text-pink-300 opacity-25" style={{ transform: 'rotate(45deg)' }}>
        <Flower className="w-6 h-6" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Hero Left Content (7 columns) - Styled on crisp white and slate with Hot Pink */}
        <div className="lg:col-span-7 flex flex-col justify-start text-left space-y-6">
          
          {/* Trust Rating Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex self-start items-center space-x-2 bg-pink-50 border border-pink-200/60 px-4 py-1.5 rounded-full shadow-sm text-pink-600"
            id="rating-badge"
          >
            <div className="flex items-center gap-0.5">
              <Star className="w-4 h-4 fill-pink-600 text-pink-600" />
              <Star className="w-4 h-4 fill-pink-600 text-pink-600" />
              <Star className="w-4 h-4 fill-pink-600 text-pink-600" />
              <Star className="w-4 h-4 fill-pink-600 text-pink-600" />
              <Star className="w-4 h-4 fill-transparent text-pink-600" />
            </div>
            <span className="text-xs font-semibold font-sans">
              4.7 <span className="text-stone-500 font-normal">/ 5 en Google Maps (44 opiniones reales)</span>
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-pink-600 animate-ping" />
          </motion.div>

          {/* Main Typography Header Section */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif font-semibold text-4xl sm:text-5xl lg:text-6xl text-stone-900 leading-[1.12] tracking-tight"
            >
              Estética Avanzada y <br />
              <span className="text-pink-600 font-medium">
                Manicura de Autor
              </span> <br />
              en Ciudad Real.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-stone-600 font-sans text-base sm:text-lg max-w-xl leading-relaxed font-light"
            >
              Diseñamos experiencias de autocuidado premium. Conoce el método de atención exclusiva de <strong className="text-pink-600 font-medium font-serif">Sandra</strong>, donde la precisión técnica rusa se fusiona con la cosmética facial avanzada para revelar tu mejor versión.
            </motion.p>
          </div>

          {/* Quick Core Trust Bullet Points */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-y-3.5 gap-x-4 pt-1 max-w-md text-xs font-sans text-stone-700"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-pink-600 shrink-0" />
              <span>Manicura Siberiana Precisa</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-pink-500 shrink-0" />
              <span>Cosmética No Invasiva</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-stone-500 shrink-0" />
              <span>Trato 100% Personalizado</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-pink-600 shrink-0" />
              <span>Instrumental 100% Esterilizado</span>
            </div>
          </motion.div>

          {/* Call to Actions (UX Optimization) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4 pt-4"
          >
            <button
              onClick={onOpenBooking}
              className="h-14 px-8 bg-pink-600 hover:bg-pink-700 text-white font-sans font-semibold text-xs uppercase tracking-widest rounded-full shadow-lg shadow-pink-200 flex items-center justify-center gap-2.5 hover:scale-103 active:scale-97 transition-all duration-200 relative overflow-hidden group cursor-pointer"
              style={{ minHeight: '48px' }}
              id="hero-cta-booking"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar con Sandra</span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>

            <button
              onClick={onNavigateToServices}
              className="h-14 px-7 border-2 border-stone-300 hover:border-pink-600 text-stone-800 hover:text-pink-600 hover:bg-pink-50/50 font-sans font-medium text-xs uppercase tracking-widest rounded-full flex items-center justify-center gap-2 hover:scale-103 active:scale-97 transition-all duration-200 cursor-pointer"
              style={{ minHeight: '48px' }}
              id="hero-cta-services"
            >
              <span>Ver Servicios</span>
              <ArrowRight className="w-4 h-4 text-pink-600" />
            </button>
          </motion.div>

        </div>

        {/* Hero Right Bento Aspect (5 columns) - Displaying the majestic beauty image */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          
          {/* Decorative Back Glowing Circle in Pink and Gray */}
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/50 to-stone-200/30 rounded-3xl -rotate-1 scale-103 filter blur-md -z-10 border border-pink-100" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white border border-stone-200 rounded-3xl p-5 sm:p-6 space-y-6 shadow-xl relative"
            id="hero-bento-panel"
          >
            {/* Real Aesthetic Image Slot */}
            <div className="relative h-64 rounded-2xl bg-stone-100 overflow-hidden border border-stone-200/60 shadow-md group">
              {/* Actual Generated Image with fallback styling */}
              <img 
                src={heroImageSrc} 
                alt="Lafabra Cabina de Belleza y Manicura Rusa" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Overlay with subtle pink details and tag */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex flex-col justify-end p-5">
                <div className="absolute top-4 right-4 bg-pink-600/95 text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1 shadow">
                  <Sparkles className="w-3 h-3 text-white fill-white" />
                  <span>Salón Exclusivo</span>
                </div>
                
                <div className="relative z-10 space-y-1 text-left">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-pink-200 font-mono">Ubicación</span>
                  <h3 className="font-serif text-lg font-medium text-white">Calle Huertos, 4  • 1º A</h3>
                  <p className="text-xs text-stone-200 font-sans tracking-wide">Ciudad Real • Sandra Fernández</p>
                </div>
              </div>
            </div>

            {/* Quick interactive Selector */}
            <div className="space-y-3.5">
              <span className="block text-xs uppercase tracking-widest font-semibold text-pink-600 text-left font-sans flex items-center gap-1.5">
                <Flower className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
                <span>¿Qué te gustaría hoy?</span>
              </span>
              
              <div className="grid grid-cols-2 gap-3 text-left">
                <button 
                  onClick={onNavigateToServices}
                  className="p-3.5 rounded-xl bg-stone-50 hover:bg-pink-50 border border-stone-200 hover:border-pink-200 transition-all flex flex-col justify-between group cursor-pointer"
                >
                  <span className="font-sans text-xs font-semibold text-stone-800 group-hover:text-pink-600">Manicura Rusa</span>
                  <div className="flex items-center text-[10px] text-pink-600 font-semibold mt-2 gap-0.5 group-hover:translate-x-1 transition-transform">
                    <span>Ver precio</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </button>

                <button 
                  onClick={onNavigateToServices}
                  className="p-3.5 rounded-xl bg-stone-50 hover:bg-pink-50 border border-stone-200 hover:border-pink-200 transition-all flex flex-col justify-between group cursor-pointer"
                >
                  <span className="font-sans text-xs font-semibold text-stone-800 group-hover:text-pink-600">Trato Facial</span>
                  <div className="flex items-center text-[10px] text-pink-600 font-semibold mt-2 gap-0.5 group-hover:translate-x-1 transition-transform">
                    <span>Luminosidad</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </button>
              </div>
            </div>

            {/* Google maps voice highlight widget (High conversion hook) */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-left">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <span className="text-[10px] font-semibold text-pink-600 uppercase tracking-widest flex items-center gap-1">
                  Reseña destacada
                </span>
                <span className="text-[10px] text-stone-500 font-sans">Lola H.</span>
              </div>
              <p className="text-xs italic text-stone-600 font-sans leading-relaxed pt-2.5">
                &ldquo;Excelente sitio!. Muy profesional, servicio perfecto. Estoy encantada con Sandra. Lo recomiendo.&rdquo;
              </p>
              <div className="flex items-center justify-between pt-3 mt-1 text-[10px] font-sans">
                <span className="text-pink-600 font-bold flex items-center gap-1">
                  Valoración de 5★ estrellas
                </span>
                <button 
                  onClick={handlePhoneCall}
                  className="text-stone-800 hover:text-pink-600 font-semibold underline flex items-center gap-1 cursor-pointer focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none focus:outline-hidden"
                  aria-label="Llamar directamente por teléfono a Sandra"
                >
                  Llamar a Sandra
                  <Phone className="w-2.5 h-2.5 text-pink-600 animate-pulse" />
                </button>
              </div>
            </div>

          </motion.div>
          
        </div>

      </div>
    </section>
  );
}
