import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data';
import { Sparkles, Clock, Calendar, Flower } from 'lucide-react';

interface ServicesGridProps {
  onOpenBooking: (serviceId?: string) => void;
}

export default function ServicesGrid({ onOpenBooking }: ServicesGridProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'nails' | 'facial' | 'body' | 'lashes'>('all');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const tabs = [
    { id: 'all', label: 'Todos' },
    { id: 'nails', label: 'Especialista Uñas' },
    { id: 'facial', label: 'Facial Avanzado' },
    { id: 'body', label: 'Estética Corporal' },
    { id: 'lashes', label: 'Mirada Perfecta' },
  ] as const;

  const filteredServices = SERVICES_DATA.filter(
    (service) => activeTab === 'all' || service.category === activeTab
  );

  return (
    <section 
      id="servicios" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-100 to-white relative overflow-hidden"
    >
      {/* Background aesthetics with pink floral themes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-pink-100/50 blur-[120px] -z-10" />
      <div className="absolute top-2/3 right-10 w-60 h-60 rounded-full bg-stone-200/40 blur-[100px] -z-10" />

      {/* Floating floral accents for beautiful background vibe */}
      <div className="absolute top-12 right-12 text-pink-300 opacity-20">
        <Flower className="w-12 h-12 rotate-45" />
      </div>
      <div className="absolute bottom-20 left-6 text-pink-300 opacity-25">
        <Flower className="w-14 h-14 -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto w-full space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-pink-600 flex items-center justify-center gap-1.5 font-sans">
            <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
            Carta de Tratamientos Premium
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-stone-950">
            Resultados Reales, Cuidado de Autor
          </h2>
          <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed font-light">
            Explora las terapias de belleza desarrolladas con precisión y cosmética de alta gama. Haz clic en "Reservar" en cualquiera de ellos para agendar directamente con Sandra.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto" id="services-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              aria-label={`Filtrar listado de tratamientos por la categoría ${tab.label}`}
              className={`h-11 px-5 rounded-full font-sans text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none focus:outline-hidden ${
                activeTab === tab.id
                  ? 'bg-pink-600 text-white font-semibold shadow-lg shadow-pink-100'
                  : 'bg-stone-50 border border-stone-200 text-stone-700 hover:text-pink-600 hover:border-pink-300'
              }`}
              style={{ minHeight: '44px' }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3x3 Perfect Grid Layout Alignment - Square containers on mobile, standard grid on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="services-list-container">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={service.id}
                className={`group bg-white border border-stone-200 hover:border-pink-300 rounded-none sm:rounded-2xl text-left flex flex-col justify-between shadow-md hover:shadow-xl hover:shadow-pink-50/40 relative overflow-hidden transition-all duration-300 ${
                  expandedCards[service.id] ? 'aspect-auto' : 'aspect-square sm:aspect-auto'
                }`}
              >
                <div className="flex flex-col h-full justify-between sm:justify-start">
                  <div>
                    {/* Beautiful category photography with referrer policy for safety */}
                    {service.image && (
                      <div className="relative h-28 sm:h-56 w-full overflow-hidden bg-stone-100 rounded-t-none sm:rounded-t-2xl border-b border-stone-100">
                        <img 
                          src={service.image} 
                          alt={service.name} 
                          referrerPolicy="no-referrer"
                          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 ${
                            service.id === 'lashes-lamination' ? 'object-top' : ''
                          }`}
                        />
                        {service.popular && (
                          <div className="absolute top-0 right-0 bg-pink-600 text-white text-[9px] sm:text-[10px] uppercase font-bold tracking-widest px-2 sm:px-3 py-1 sm:py-1.5 rounded-bl-xl shadow-md">
                            Recomendado
                          </div>
                        )}
                        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-semibold text-pink-600 uppercase tracking-wider shadow-sm flex items-center gap-1">
                          <Flower className="w-2.5 sm:w-3 sm:h-3 text-pink-500 fill-pink-500/30" />
                          <span>
                            {service.category === 'nails' && 'Manicura'}
                            {service.category === 'facial' && 'Facial'}
                            {service.category === 'body' && 'Corporal'}
                            {service.category === 'lashes' && 'Mirada'}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Service Info - highly optimized for aspect-square containment when folded */}
                    <div className="p-3.5 sm:p-6 space-y-2 sm:space-y-4">
                      <div>
                        <h3 className="font-serif text-sm sm:text-lg font-bold text-stone-900 leading-snug group-hover:text-pink-600 transition-colors pr-6">
                          {service.name}
                        </h3>
                      </div>

                      <p className="text-[10px] sm:text-xs text-stone-600 font-sans leading-relaxed line-clamp-2 sm:line-clamp-none">
                        {service.description}
                      </p>

                      {/* Collapsible bullet list for mobile ONLY, standard list for larger screens */}
                      <div className="block sm:hidden">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(service.id);
                          }}
                          aria-label={expandedCards[service.id] ? `Ocultar características de ${service.name}` : `Ver características y detalles de ${service.name}`}
                          className="text-pink-600 font-sans text-[10px] font-semibold flex items-center gap-1 py-1.5 px-0.5 rounded cursor-pointer active:scale-95 transition-all text-left focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none focus:outline-hidden"
                        >
                          <span>{expandedCards[service.id] ? 'Ocultar detalles ▲' : 'Ver más detalles ▼'}</span>
                        </button>

                        <AnimatePresence initial={false}>
                          {expandedCards[service.id] && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                              className="space-y-1 pt-1.5 border-t border-stone-100 mt-1 overflow-hidden"
                            >
                              {service.features.map((feature, i) => (
                                <motion.li 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  key={i} 
                                  className="flex items-start text-[10px] text-stone-700 font-sans leading-tight"
                                >
                                  <span className="text-pink-500 font-bold mr-1.5 shrink-0">✓</span>
                                  <span>{feature}</span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="hidden sm:block">
                        <ul className="space-y-1.5 pt-1">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-[11px] text-stone-700 font-sans">
                              <span className="text-pink-500 font-bold mr-2 shrink-0">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Bottom action and pricing */}
                  <div className="px-3.5 pb-3.5 pt-2 border-t border-stone-100 sm:px-6 sm:pb-6 sm:pt-4 flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[9px] sm:text-[10px] font-semibold font-sans text-stone-400 uppercase tracking-widest leading-none mb-1">Precio</span>
                      <div className="flex items-baseline gap-0.5 sm:gap-1">
                        <span className="font-serif text-sm sm:text-xl font-extrabold text-stone-950">{service.price}€</span>
                        <span className="text-[8px] sm:text-[10px] text-stone-400 font-sans font-light">desde</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1.5 sm:space-x-3">
                      <div className="flex items-center text-stone-600 text-[10px] sm:text-xs font-medium font-sans">
                        <Clock className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-pink-500 mr-1 shrink-0" />
                        <span>{service.duration}</span>
                      </div>

                      {/* Highly Converting Direct Booking Hook */}
                      <button
                        onClick={() => onOpenBooking(service.id)}
                        aria-label={`Reservar cita para el servicio de ${service.name}`}
                        className="h-7 sm:h-9 px-2.5 sm:px-4 bg-pink-600 hover:bg-pink-700 text-white font-sans font-bold text-[9px] sm:text-[10px] uppercase tracking-widest rounded-full shadow-md shadow-pink-100/40 flex items-center gap-1 cursor-pointer active:scale-95 transition-all text-center focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none focus:outline-hidden"
                        id={`btn-book-service-${service.id}`}
                      >
                        <Calendar className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
                        <span>Reservar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
