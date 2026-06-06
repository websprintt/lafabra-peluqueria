/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Mail, Clock, Compass, Instagram, Map, ExternalLink, Flower } from 'lucide-react';
import { motion } from 'motion/react';
import { decodeB64, OBSCURED_PHONE_DISPLAY, OBSCURED_EMAIL, handleWhatsAppOpen, handleEmailClick } from '../utils';

export default function LocationBento() {
  const handleDirectionsClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Calle+Huertos+4+1+13004+Ciudad+Real+Spain', '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="contacto" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fcfafa] relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-pink-100/40 blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-stone-200/40 blur-[100px] -z-10" />

      {/* Elegant rose flower badge floating */}
      <div className="absolute bottom-8 left-12 text-pink-200 opacity-25">
        <Flower className="w-12 h-12 -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto w-full space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-pink-600 font-sans flex items-center justify-center gap-1.5">
            <MapPin className="w-4 h-4 text-pink-500" />
            Localización y Canales
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-bold text-stone-900 leading-tight">
            Visítanos en Ciudad Real
          </h2>
          <p className="text-stone-500 font-sans text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Nuestro exclusivo salón privado de estética está diseñado para brindarte privacidad, confort y máxima relajación.
          </p>
        </div>

        {/* Bento Grid layout (1 col on mobile, 3 cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto" id="location-bento-grid">
          
          {/* Card 1: Hours/Schedule */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-pink-200 transition-all flex flex-col justify-between text-left shadow-lg shadow-stone-100/40">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600">
                <Clock className="w-5 h-5 animate-pulse" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-base font-bold text-stone-900">Horarios Especialistas</h3>
                <p className="text-xs text-stone-500 font-sans">Atención concertada de lunes a viernes.</p>
              </div>
            </div>

            <div className="space-y-3 pt-8 pb-3 font-sans text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                <span className="text-stone-500">Lunes a Viernes</span>
                <span className="text-stone-900 font-bold">09:00 - 16:00</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                <span className="text-stone-500">Sábado</span>
                <span className="text-pink-600 font-bold">Cerrado</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500">Domingo</span>
                <span className="text-pink-600 font-bold">Cerrado</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="block text-[10px] text-stone-500 leading-normal font-sans text-left">
                *¿Necesitas un ajuste horario específico? Pregúntale a Sandra por WhatsApp para adaptarnos si la agenda lo permite.
              </span>
            </div>
          </div>

          {/* Card 2: Physical Location Details & Map direction */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-pink-200 transition-all flex flex-col justify-between text-left shadow-lg shadow-stone-100/40 md:col-span-1">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600">
                <Compass className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-base font-bold text-stone-900">Estudio Privado</h3>
                <p className="text-xs text-stone-500 font-sans">Calle Huertos, 4, 1º • Ciudad Real CP 13004.</p>
              </div>
            </div>

            <div className="py-6 space-y-4 text-xs font-sans text-stone-600 leading-relaxed text-left">
              <p>
                Nos encontramos en una calle tranquila y céntrica de Ciudad Real, en el primer piso del edificio. Un espacio discreto y privado alejado del ruido de la acera principal.
              </p>
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl space-y-1 text-[11px] text-stone-600">
                <span className="block font-bold uppercase tracking-widest text-[9px] text-pink-600">Ayuda de Acceso</span>
                <p>El portal está junto a las oficinas estatales. Si tienes problemas de paso por movilidad, dínoslo antes de llegar para asistirte.</p>
              </div>
            </div>

            <button
              onClick={handleDirectionsClick}
              className="w-full h-11 bg-stone-900 hover:bg-black text-[#FAFAF9] rounded-xl font-sans text-xs font-semibold tracking-wide flex items-center justify-center gap-2 border border-stone-200 active:scale-95 transition-transform cursor-pointer shadow-xs"
              style={{ minHeight: '44px' }}
              id="directions-btn-bento"
            >
              <Map className="w-4 h-4 text-pink-500 shrink-0" />
              <span>Cómo llegar (Google Maps)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60 shrink-0" />
            </button>
          </div>

          {/* Card 3: Contact Channels */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-pink-200 transition-all flex flex-col justify-between text-left shadow-lg shadow-stone-100/40">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-base font-bold text-stone-900">Contacto Directo</h3>
                <p className="text-xs text-stone-500 font-sans">Respondemos rápidamente llamadas o chat.</p>
              </div>
            </div>

            <div className="space-y-3 py-6">
              <button 
                onClick={(e) => handleWhatsAppOpen(e)}
                className="w-full flex items-center gap-3 p-3.5 rounded-xl border border-stone-100 bg-stone-50/50 hover:border-pink-200 hover:bg-pink-50/10 transition-all text-xs cursor-pointer text-left focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none focus:outline-hidden"
                aria-label="Abrir chat de WhatsApp con el centro de estética"
              >
                <div className="w-7 h-7 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="text-left font-sans">
                  <span className="block text-[8px] font-bold text-pink-600 uppercase tracking-widest leading-none mb-0.5">Llamar / WhatsApp</span>
                  <span className="text-stone-900 font-bold">{decodeB64(OBSCURED_PHONE_DISPLAY)}</span>
                </div>
              </button>

              <button 
                onClick={(e) => handleEmailClick(e)}
                className="w-full flex items-center gap-3 p-3.5 rounded-xl border border-stone-100 bg-stone-50/50 hover:border-pink-200 hover:bg-pink-50/10 transition-all text-xs cursor-pointer text-left focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none focus:outline-hidden"
                aria-label="Enviar un correo electrónico"
              >
                <div className="w-7 h-7 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="text-left font-sans">
                  <span className="block text-[8px] font-bold text-pink-600 uppercase tracking-widest leading-none mb-0.5">Correo</span>
                  <span className="text-stone-900 font-bold select-all">{decodeB64(OBSCURED_EMAIL)}</span>
                </div>
              </button>

              <a 
                href="https://www.instagram.com/lafabra_peluqueriaestetica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl border border-stone-100 bg-stone-50/50 hover:border-pink-200 hover:bg-pink-50/10 transition-all text-xs focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none focus:outline-hidden"
                aria-label="Visitar el perfil de Instagram de Lafabra"
              >
                <div className="w-7 h-7 rounded-lg bg-pink-100/80 flex items-center justify-center text-pink-500 shrink-0">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
                <div className="text-left font-sans">
                  <span className="block text-[8px] font-bold text-pink-600 uppercase tracking-widest leading-none mb-0.5">Comunidad</span>
                  <span className="text-stone-900 font-bold">@lafabra_peluqueriaestetica</span>
                </div>
              </a>
            </div>

            <div className="text-center">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#242424]/30">
                Atención por Sandra Fabra
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
