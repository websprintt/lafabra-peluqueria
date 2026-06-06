/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';
import { Calendar, Clock, User, Phone, Check, ChevronRight, ChevronLeft, Send, Sparkles, MessageSquare, Flower } from 'lucide-react';
import { decodeB64, OBSCURED_WA_URL } from '../utils';

interface BookingFormProps {
  onClose?: () => void;
  preselectedServiceId?: string;
}

export default function BookingForm({ onClose, preselectedServiceId }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'nails' | 'facial' | 'body' | 'lashes'>('all');
  
  // Form State
  const [selectedService, setSelectedService] = useState<Service | null>(
    SERVICES_DATA.find(s => s.id === preselectedServiceId) || SERVICES_DATA[0]
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  // Business constraints based on Google profile: Mon-Fri 9AM - 4PM
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'
  ];

  const handleNextStep = () => {
    if (step === 1 && !selectedService) return;
    if (step === 2 && (!date || !time)) return;
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  const isFormValid = name.trim() !== '' && phone.trim() !== '';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedService || !date || !time || !name || !phone) return;

    // Compile a beautiful WhatsApp message
    const formattedDate = new Date(date).toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const msg = `¡Hola Sandra! Me gustaría agendar una cita en Lafabra:\n\n` +
      `✨ *Servicio:* ${selectedService.name}\n` +
      `📅 *Fecha:* ${formattedDate}\n` +
      `⏰ *Hora:* ${time}\n` +
      `👤 *Cliente:* ${name}\n` +
      `📞 *Teléfono:* ${phone}\n` +
      (notes ? `📝 *Notas:* ${notes}\n` : '') +
      `\n¿Tienes disponibilidad para esta fecha y hora? ¡Muchas gracias!`;

    const encoded = encodeURIComponent(msg);
    const waBase = decodeB64(OBSCURED_WA_URL);
    const waUrl = `${waBase}?text=${encoded}`;
    
    // Track booking locally
    const localBooking = {
      service: selectedService.name,
      price: selectedService.price,
      date,
      time,
      name
    };
    localStorage.setItem('lafabra_active_booking', JSON.stringify(localBooking));

    // Redirect to WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setStep(4);
  };

  const filteredServices = SERVICES_DATA.filter(
    s => selectedCategory === 'all' || s.category === selectedCategory
  );

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-2xl relative w-full overflow-hidden text-left" id="booking-wizard-container">
      
      {/* Luxury rose top aesthetic accent */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700" />

      {/* Progress Multi-step Tracker */}
      <div className="flex items-center justify-between pb-6 border-b border-stone-100 mb-6">
        {[1, 2, 3].map((num) => (
          <div key={num} className="flex items-center space-x-2">
            <div 
              className={`w-7 h-7 rounded-full flex items-center justify-center font-sans text-xs font-bold transition-all ${
                step === num 
                  ? 'bg-pink-600 text-white font-semibold ring-4 ring-pink-100' 
                  : step > num 
                    ? 'bg-pink-100 text-pink-600' 
                    : 'bg-stone-50 border border-stone-200 text-stone-400'
              }`}
            >
              {step > num ? <Check className="w-3.5 h-3.5" /> : num}
            </div>
            <span className={`text-[10px] uppercase tracking-wider font-sans hidden sm:inline ${
              step === num ? 'text-pink-600 font-bold' : 'text-stone-400'
            }`}>
              {num === 1 && 'Servicio'}
              {num === 2 && 'Fecha/Hora'}
              {num === 3 && 'Tus Datos'}
            </span>
          </div>
        ))}
      </div>

      {/* STEP 1: SERVICE CHOICE */}
      {step === 1 && (
        <div className="space-y-5" id="booking-step-1">
          <div className="space-y-1">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-1">
              <Flower className="w-4 h-4 text-pink-500 fill-pink-500/20" />
              Selecciona un tratamiento
            </h3>
            <p className="text-xs text-stone-500 font-sans">Elige del menú la opción que deseas realizarte con Sandra.</p>
          </div>

          {/* Quick Categories Bar */}
          <div className="flex flex-wrap gap-1.5 py-1">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`h-9 px-3.5 rounded-full text-[10px] font-bold uppercase tracking-wider font-sans transition-all duration-200 cursor-pointer ${
                selectedCategory === 'all' ? 'bg-pink-50 border border-pink-200 text-pink-600' : 'bg-stone-50 border border-stone-100 text-stone-500 hover:text-pink-600'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setSelectedCategory('nails')}
              className={`h-9 px-3.5 rounded-full text-[10px] font-bold uppercase tracking-wider font-sans transition-all duration-200 cursor-pointer ${
                selectedCategory === 'nails' ? 'bg-pink-50 border border-pink-200 text-pink-600' : 'bg-stone-50 border border-stone-100 text-stone-500 hover:text-pink-600'
              }`}
            >
              Uñas
            </button>
            <button
              onClick={() => setSelectedCategory('facial')}
              className={`h-9 px-3.5 rounded-full text-[10px] font-bold uppercase tracking-wider font-sans transition-all duration-200 cursor-pointer ${
                selectedCategory === 'facial' ? 'bg-pink-50 border border-pink-200 text-pink-600' : 'bg-stone-50 border border-stone-100 text-stone-500 hover:text-pink-600'
              }`}
            >
              Facial
            </button>
            <button
              onClick={() => setSelectedCategory('lashes')}
              className={`h-9 px-3.5 rounded-full text-[10px] font-bold uppercase tracking-wider font-sans transition-all duration-200 cursor-pointer ${
                selectedCategory === 'lashes' ? 'bg-pink-50 border border-pink-200 text-pink-600' : 'bg-stone-50 border border-stone-100 text-stone-500 hover:text-pink-600'
              }`}
            >
              Mirada
            </button>
          </div>

          {/* Scrolling Radio List */}
          <div className="space-y-2.5 max-h-[260px] overflow-y-auto pr-1">
            {filteredServices.map(service => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  selectedService?.id === service.id
                    ? 'bg-pink-50/40 border-pink-500 shadow-md shadow-pink-100/40'
                    : 'bg-stone-50 border-stone-200 hover:border-pink-300 hover:bg-stone-100/30'
                }`}
              >
                <div className="space-y-1 text-left pr-4">
                  <h4 className="font-sans text-xs font-bold text-stone-900">{service.name}</h4>
                  <span className="block text-[10.5px] text-stone-500 line-clamp-1 leading-normal">{service.description}</span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-right">
                    <span className="block text-xs font-extrabold font-serif text-stone-900">{service.price}€</span>
                    <span className="block text-[9px] text-stone-400 font-sans font-light">{service.duration}</span>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selectedService?.id === service.id ? 'border-pink-600 bg-pink-600 text-white' : 'border-stone-300'
                  }`}>
                    {selectedService?.id === service.id && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-3">
            <button
              onClick={handleNextStep}
              disabled={!selectedService}
              className="h-11 px-6 bg-pink-600 hover:bg-pink-700 disabled:opacity-50 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-full flex items-center gap-1.5 cursor-pointer ml-auto shadow-md shadow-pink-100"
              id="booking-step1-next"
            >
              <span>Continuar</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: DATE & TIME */}
      {step === 2 && (
        <div className="space-y-5" id="booking-step-2">
          <div className="space-y-1">
            <h3 className="font-serif text-lg font-bold text-stone-900">Fecha y Hora de Cita</h3>
            <p className="text-xs text-stone-500 font-sans">Selecciona el día y la hora de lunes a viernes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
            
            {/* Calendar input */}
            <div className="space-y-1.5">
              <label htmlFor="booking-date" className="block text-[10px] font-bold font-sans text-stone-400 uppercase tracking-widest">Seleccionar Día</label>
              <div className="relative">
                <input
                  id="booking-date"
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-100 focus:outline-none font-sans text-xs text-stone-800 transition-colors"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            {/* Hour Block slots selector */}
            <div className="space-y-2">
              <label className="block text-[10px] font-bold font-sans text-stone-400 uppercase tracking-widest text-left">Hora Recomendada</label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map(slot => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    className={`h-10 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      time === slot 
                        ? 'bg-pink-600 text-white font-bold shadow-md shadow-pink-100'
                        : 'bg-stone-50 border border-stone-200 text-stone-700 hover:border-pink-300'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

          </div>

          <div className="flex items-center justify-between pt-3">
            <button
              onClick={handlePrevStep}
              className="h-11 px-5 border border-stone-200 text-stone-600 hover:text-pink-600 rounded-full font-sans text-xs tracking-wider flex items-center gap-1.5 cursor-pointer hover:bg-stone-50"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Atrás</span>
            </button>

            <button
              onClick={handleNextStep}
              disabled={!date || !time}
              className="h-11 px-6 bg-pink-600 disabled:opacity-50 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-full flex items-center gap-1.5 cursor-pointer shadow-lg shadow-pink-100"
              id="booking-step2-next"
            >
              <span>Continuar</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: CONTACT FORM */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-5" id="booking-step-3">
          <div className="space-y-1">
            <h3 className="font-serif text-lg font-bold text-stone-900">Tus datos de contacto</h3>
            <p className="text-xs text-stone-500 font-sans">Sandra te escribirá o llamará de vuelta para confirmar oficialmente.</p>
          </div>

          <div className="space-y-4">
            
            {/* Full name input */}
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="block text-[10px] font-bold font-sans text-stone-400 uppercase tracking-widest">Nombre y Apellidos</label>
              <div className="relative">
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Lola H. García"
                  className="w-full h-11 px-3.5 pl-10 rounded-xl bg-stone-50 border border-stone-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-100 focus:outline-none font-sans text-xs text-stone-800 placeholder-stone-400 transition-colors"
                />
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              </div>
            </div>

            {/* Phone input */}
            <div className="space-y-1.5">
              <label htmlFor="contact-phone" className="block text-[10px] font-bold font-sans text-stone-400 uppercase tracking-widest">Teléfono Móvil (WhatsApp)</label>
              <div className="relative">
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej. 600 00 00 00"
                  className="w-full h-11 px-3.5 pl-10 rounded-xl bg-stone-50 border border-stone-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-100 focus:outline-none font-sans text-xs text-stone-800 placeholder-stone-400 transition-colors"
                />
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              </div>
            </div>

            {/* Personal Notes */}
            <div className="space-y-1.5">
              <label htmlFor="contact-notes" className="block text-[10px] font-bold font-sans text-stone-400 uppercase tracking-widest">Notas o Consultas Especiales (Opcional)</label>
              <textarea
                id="contact-notes"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Indica si tienes esmalte a retirar, alergias o solicitudes específicas..."
                className="w-full p-3 bg-stone-50 border border-stone-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-100 focus:outline-none rounded-xl font-sans text-xs text-stone-800 placeholder-stone-400 resize-none"
              />
            </div>

          </div>

          {/* Quick Recap Ticket */}
          <div className="p-4 rounded-xl bg-pink-50/50 border border-pink-100 text-xs font-sans text-left space-y-1 text-pink-700">
            <p className="font-bold text-pink-600 flex items-center gap-1.5 mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-pink-500 shrink-0 animate-pulse" />
              Resumen de la pre-reserva:
            </p>
            <p>• <strong className="font-semibold text-stone-800">Tratamiento:</strong> {selectedService?.name} ({selectedService?.price}€)</p>
            <p>• <strong className="font-semibold text-stone-800">Fecha/Hora:</strong> {date} a las {time} h</p>
          </div>

          <div className="flex items-center justify-between pt-3">
            <button
              onClick={handlePrevStep}
              className="h-11 px-5 border border-stone-200 text-stone-600 rounded-full font-sans text-xs tracking-wider flex items-center gap-1.5 cursor-pointer hover:bg-stone-50"
              type="button"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Atrás</span>
            </button>

            <button
              type="submit"
              disabled={!isFormValid}
              className="h-11 px-6 bg-pink-600 hover:bg-pink-700 disabled:opacity-50 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-full flex items-center gap-2.5 cursor-pointer shadow-lg shadow-pink-100"
              id="booking-submit-btn"
            >
              <Send className="w-3.5 h-3.5 shrink-0" />
              <span>Enviar en WhatsApp</span>
            </button>
          </div>
        </form>
      )}

      {/* STEP 4: SUCCESS CONFIRMATION PANEL */}
      {step === 4 && (
        <div className="py-8 text-center space-y-5" id="booking-step-4_success">
          <div className="w-16 h-16 rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600 mx-auto shadow-lg shadow-pink-100/50">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold text-stone-900">¡Petición enviada!</h3>
            <p className="text-xs text-stone-500 font-sans max-w-sm mx-auto leading-relaxed">
              Hemos generado el mensaje para procesar tu reserva por WhatsApp de forma segura. Sandra revisará tu propuesta en breves momentos para concertar la cita formal.
            </p>
          </div>

          {/* Quick ticket locally logged */}
          <div className="max-w-xs mx-auto p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-left text-stone-600 space-y-1.5">
            <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest">Detalle Registrado Localmente</span>
            <p>• <strong>Tratamiento:</strong> {selectedService?.name}</p>
            <p>• <strong>Hora propuesta:</strong> {time} h ({date})</p>
            <p>• <strong>Cliente:</strong> {name}</p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setStep(1);
                setName('');
                setPhone('');
                setDate('');
                setTime('');
                setNotes('');
                if (onClose) onClose();
              }}
              className="px-6 py-2.5 bg-stone-100 border border-stone-200 text-stone-700 hover:text-stone-900 rounded-full font-sans text-xs tracking-wider transition-all cursor-pointer inline-flex items-center gap-1.5 hover:bg-stone-200"
            >
              <MessageSquare className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
              <span>Agendar otra cita</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
