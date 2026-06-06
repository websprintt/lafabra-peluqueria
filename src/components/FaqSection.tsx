/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS_DATA } from '../data';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, Flower } from 'lucide-react';
import { decodeB64, OBSCURED_EMAIL, handleWhatsAppOpen, handleEmailClick } from '../utils';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<'all' | 'citas' | 'servicios' | 'ubicacion' | 'general'>('all');

  const categories = [
    { id: 'all', label: 'Ver Todo' },
    { id: 'citas', label: 'Gestión de Citas' },
    { id: 'servicios', label: 'Nuestra Técnica' },
    { id: 'ubicacion', label: 'Ubicación' },
    { id: 'general', label: 'Seguridad' }
  ] as const;

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS_DATA.filter(
    faq => activeCategory === 'all' || faq.category === activeCategory
  );

  return (
    <section 
      id="faqs" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-pink-100/40 blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-stone-100/60 blur-[100px] -z-10" />

      {/* Aesthetic petal shape decorations */}
      <div className="absolute top-12 left-10 text-pink-200 opacity-20">
        <Flower className="w-8 h-8 rotate-45" />
      </div>

      <div className="max-w-4xl mx-auto w-full space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-pink-600 font-sans flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-pink-500 animate-pulse" />
            Preguntas Frecuentes (SEO Local)
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-bold text-stone-900 leading-tight">
            Resolvemos todas tus dudas
          </h2>
          <p className="text-stone-500 font-sans text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Consúltanos cualquier inquietud técnica o de logística. Sandra responderá de manera transparente a continuación.
          </p>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap justify-center gap-1.5" id="faq-categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenId(null); // Reset open accordion on swap
              }}
              className={`h-10 px-4 rounded-xl text-xs font-sans font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-pink-50 border border-pink-200 text-pink-600 shadow-xs'
                  : 'bg-stone-50 border border-stone-200/60 text-stone-500 hover:text-pink-600 hover:border-pink-200'
              }`}
              style={{ minHeight: '44px' }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion list */}
        <div className="space-y-4 max-w-3xl mx-auto" id="faqs-accordion-list">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-stone-50 border border-stone-200 hover:border-pink-200 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full h-15 px-6 flex items-center justify-between text-left focus:outline-none transition-colors duration-200 cursor-pointer"
                  style={{ minHeight: '48px' }}
                  aria-expanded={isOpen}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="font-serif text-[13.5px] sm:text-base font-bold text-stone-900 pr-4 group-hover:text-pink-600 transition-colors">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-pink-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-pink-600" /> : <ChevronDown className="w-4 h-4 text-stone-400" />}
                  </div>
                </button>

                {/* Animated collapse content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-stone-100 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans text-left">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Help box CTA */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 max-w-xl mx-auto text-left flex items-start gap-3.5">
          <Sparkles className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-serif text-sm font-bold text-stone-900">¿Tienes alguna pregunta adicional?</h4>
            <p className="text-xs text-stone-500 font-sans leading-relaxed">
              Escríbele directamente a Sandra a través de <button onClick={(e) => handleWhatsAppOpen(e)} className="text-pink-600 font-bold underline cursor-pointer hover:text-pink-700 bg-transparent p-0 m-0 border-none inline align-baseline font-semibold focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none" aria-label="Abrir chat de WhatsApp">WhatsApp</button> o envíanos un correo a <button onClick={(e) => handleEmailClick(e)} className="text-pink-600 font-bold underline cursor-pointer hover:text-pink-700 bg-transparent p-0 m-0 border-none inline align-baseline font-semibold focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none" aria-label="Enviar correo electrónico">{decodeB64(OBSCURED_EMAIL)}</button>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
