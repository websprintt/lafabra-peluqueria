/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart, Clock, Sparkles, Flower } from 'lucide-react';

export default function AboutSandra() {
  const principles = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-pink-500" />,
      title: 'Higiene de Nivel Quirúrgico',
      text: 'Todo el material metálico de manicura se somete a ciclos de esterilización térmica clínica en autoclave. La seguridad de tu piel es lo primero.'
    },
    {
      icon: <Award className="w-5 h-5 text-pink-500" />,
      title: 'Técnica Dental y Estética Rusa',
      text: 'Sandra domina la técnica de torno ruso siberiano avanzada, aportando acabados limpios que retardan el crecimiento de cutícula.'
    },
    {
      icon: <Clock className="w-5 h-5 text-pink-500" />,
      title: 'Tiempos Sin Prisa, Trato Spa',
      text: 'Aquí no competimos por velocidad. Reservamos el tiempo necesario para estudiar tu anatomía y brindar un trato personalizado y relajante.'
    }
  ];

  return (
    <section 
      id="nosotros" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fcfafa] relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-pink-100/50 blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-60 h-60 rounded-full bg-stone-200/40 blur-[80px] -z-10" />

      {/* Floating flower accents for styling */}
      <div className="absolute bottom-6 right-10 text-pink-300 opacity-20">
        <Flower className="w-10 h-10 rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Creative Editorial Frame (5 columns) */}
        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/5 to-transparent rounded-3xl -rotate-2 scale-103 -z-10" />
          
          <div 
            className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[400px]"
            id="about-portrait-card"
          >
            {/* Elegant visual representation representing aesthetic care space */}
            <div className="flex-1 flex flex-col justify-center items-center text-center py-4 space-y-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-pink-500 to-pink-700 flex items-center justify-center shadow-lg shadow-pink-100 relative z-10">
                <span className="font-serif text-3xl font-bold text-white">S</span>
                <div className="absolute inset-1.5 rounded-full border border-white/30" />
              </div>

              {/* Verified badge */}
              <div className="bg-pink-50 border border-pink-100 text-pink-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs select-none">
                <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                <span>Sandra • Directora Estética</span>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">Sandra Maestre Cornejo</h3>
                <p className="text-xs text-pink-600 font-semibold tracking-wider uppercase mt-1">Lafabra Ciudad Real</p>
              </div>
              
              {/* Citation quote in standard document flow to completely prevent overlap */}
              <blockquote className="text-stone-500 italic text-[11px] font-sans max-w-xs mx-auto pt-2 border-t border-stone-100/50">
                &ldquo;El autocuidado no es un lujo, es una inversión en tu bienestar cotidiano y autoestima.&rdquo;
              </blockquote>
            </div>

            {/* Micro stats banner for Sandra bento card */}
            <div className="grid grid-cols-3 gap-2.5 pt-6 border-t border-stone-100 text-center font-sans">
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-widest">Experiencia</span>
                <p className="text-xs font-bold text-stone-800">Alta Estética</p>
              </div>
              <div className="space-y-0.5 border-x border-stone-100">
                <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-widest">Trato</span>
                <p className="text-xs font-bold text-pink-600">Individual</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-widest">Ubicación</span>
                <p className="text-xs font-bold text-stone-800">Ciudad Real</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Narrative Copy & Core Values (7 columns) */}
        <div className="lg:col-span-7 space-y-8 flex flex-col justify-start text-left">
          
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-pink-600 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-pink-500 shrink-0" />
              La Esencia de Lafabra
            </span>
            <h2 className="font-serif text-3xl sm:text-4.5xl font-bold text-stone-950 leading-tight">
              ¿Por qué Sandra marca la diferencia en cada tratamiento?
            </h2>
            <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed font-light">
              Lafabra no es solo otro centro de estética; es el espacio personal de Sandra, diseñado bajo los más estrictos estándares de la estética de precisión. Olvídate de los salones masificados y las citas apresuradas. Aquí, cada sesión se asume como una obra de arte técnico-estético, brindando soluciones reales a las necesidades de tu uña, piel y mirada.
            </p>
          </div>

          {/* Pillars List */}
          <div className="space-y-5" id="nosotros-pilares">
            {principles.map((p, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i} 
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-stone-200/80 hover:border-pink-200 hover:shadow-lg hover:shadow-pink-50/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0 border border-pink-100">
                  {p.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-bold text-stone-900">{p.title}</h4>
                  <p className="text-xs text-stone-600 font-sans leading-relaxed">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
