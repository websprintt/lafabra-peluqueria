/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Calendar, Phone, Mail, Instagram, ShieldCheck, Heart } from 'lucide-react';
import { decodeB64, OBSCURED_PHONE_DISPLAY, handleWhatsAppOpen } from '../utils';

interface FooterProps {
  onNavigate: (id: string) => void;
  onOpenBooking: () => void;
}

export default function Footer({ onNavigate, onOpenBooking }: FooterProps) {
  const currentYear = 2026; // Set to current meta year for production accuracy

  return (
    <footer className="bg-stone-900 border-t border-stone-800 text-stone-400 font-sans text-xs">
      
      {/* Top Main Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
        
        {/* Brand Column (4 cols) */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('inicio')}>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-500 to-pink-700 flex items-center justify-center font-serif text-white font-bold">
              L
            </div>
            <div>
              <span className="font-serif text-lg tracking-[0.15em] text-white font-bold block">LAFABRA</span>
              <span className="text-[8px] uppercase tracking-widest text-[#ef4444] font-bold leading-none">Alta Estética Avanzada</span>
            </div>
          </div>
          <p className="text-stone-400 leading-relaxed text-[11px] max-w-sm">
            Estudio de estética avanzada dirigido exclusivamente por Sandra Maestre Cornejo en Ciudad Real. Comprometidos con el pulido impecable de uñas rusas, tratamientos biomiméticos faciales y una higiene de estándares sanitarios.
          </p>
        </div>

        {/* Explore Links Columns (2 cols) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-white">Navegación</h4>
          <ul className="space-y-2 text-[11px]">
            {['inicio', 'servicios', 'nosotros', 'reseñas', 'faqs', 'contacto'].map((sectionId) => (
              <li key={sectionId}>
                <button
                  onClick={() => onNavigate(sectionId)}
                  className="hover:text-pink-500 capitalize transition-colors text-left font-sans cursor-pointer"
                >
                  {sectionId === 'nosotros' ? 'Sobre Sandra' : sectionId === 'faqs' ? 'Preguntas Frecuentes' : sectionId}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services quick references Column (2 cols) */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-white">Tratamientos</h4>
          <ul className="space-y-2 text-[11px] text-stone-400">
            <li>Manicura Siberiana</li>
            <li>Uñas esculpidas de Gel</li>
            <li>Cosmética de Hidratación</li>
            <li>Firmeza por Radiofrecuencia</li>
            <li>Lifting Pestañas Orgánico</li>
          </ul>
        </div>

        {/* Immediate CTA Column (3 cols) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-white">Soporte Express</h4>
          <p className="text-[11px] text-stone-400 leading-relaxed">
            Escríbenos o pre-reserva tu cita en pocos clics utilizando nuestro programador digital.
          </p>
          
          <div className="space-y-2">
            <button
              onClick={onOpenBooking}
              className="w-full h-11 bg-pink-600 hover:bg-pink-700 text-white font-sans font-bold text-[10px] uppercase tracking-widest rounded-full flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform cursor-pointer"
              style={{ minHeight: '44px' }}
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span>Programar cita</span>
            </button>
            
            <button
              onClick={(e) => handleWhatsAppOpen(e)}
              className="w-full h-11 bg-transparent hover:bg-stone-800 text-stone-300 hover:text-white rounded-full font-sans text-[10px] uppercase tracking-widest flex items-center justify-center gap-1.5 border border-stone-800 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none"
              style={{ minHeight: '44px' }}
              aria-label="Abrir WhatsApp para contactar con Sandra"
            >
              <Phone className="w-3.5 h-3.5 text-pink-500 shrink-0" />
              <span>{decodeB64(OBSCURED_PHONE_DISPLAY)}</span>
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar legal copyright */}
      <div className="bg-[#171715] border-t border-stone-800 text-[10px] text-stone-500 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          
          <div className="flex items-center space-x-1.5 justify-center">
            <span>© {currentYear} LAFABRA. Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center space-x-1 justify-center text-[9px] text-stone-400">
            <Heart className="w-3 h-3 text-pink-600 fill-current" />
            <span>Creado con excelencia para Sandra Maestre Cornejo en Ciudad Real SPAIN</span>
          </div>

          <div className="flex items-center space-x-4 justify-center">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-pink-500" />
              Esterilización Biométrica Homologada
            </span>
          </div>

        </div>
      </div>

    </footer>
  );
}
