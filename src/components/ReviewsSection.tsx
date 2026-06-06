import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS_DATA } from '../data';
import { Review } from '../types';
import { Star, MessageSquareCode, Send, Sparkles, CheckCircle, Info, Flower } from 'lucide-react';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_DATA);
  const [draftName, setDraftName] = useState('');
  const [draftRating, setDraftRating] = useState(5);
  const [draftText, setDraftText] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Load any locally appended reviews from local storage
  useEffect(() => {
    const saved = localStorage.getItem('lafabra_local_reviews');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Review[];
        setReviews([...REVIEWS_DATA, ...parsed]);
      } catch (e) {
        console.error('Error parsing local reviews', e);
      }
    }
  }, []);

  const handleReviewSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!draftName || !draftText) return;

    const newReview: Review = {
      id: `local-rev-${Date.now()}`,
      author: draftName,
      role: 'Cliente verificada (Opinión Local)',
      text: draftText,
      rating: draftRating,
      date: 'Hace un momento',
      avatarBlur: 'bg-pink-600 text-white'
    };

    const updatedLocalStorage = [...reviews.filter(r => r.id.startsWith('local-rev')), newReview];
    localStorage.setItem('lafabra_local_reviews', JSON.stringify(updatedLocalStorage));

    setReviews([...reviews, newReview]);
    setShowSuccess(true);
    
    // Clear inputs
    setDraftName('');
    setDraftText('');
    setDraftRating(5);

    setTimeout(() => {
      setShowSuccess(false);
    }, 4500);
  };

  // We duplicate the reviews array to construct a seamless continuous infinite marquee scroll effect.
  const marqueeReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section 
      id="reseñas" 
      className="py-24 px-0 bg-gradient-to-b from-white via-stone-50 to-stone-100 relative overflow-hidden"
    >
      {/* Premium pink and gray floral back glows */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-pink-100/50 blur-[130px] -z-10 animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-stone-200/50 blur-[100px] -z-10" />

      {/* Elegant floating flower decorative accents */}
      <div className="absolute top-6 left-12 text-pink-300 opacity-20">
        <Flower className="w-10 h-10 rotate-45" />
      </div>
      <div className="absolute bottom-6 right-20 text-pink-400 opacity-20">
        <Flower className="w-12 h-12 -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-pink-600 flex items-center justify-center gap-1.5 font-sans">
            <MessageSquareCode className="w-4 h-4 text-pink-500 animate-pulse" />
            Experiencia del Cliente
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-stone-950">
            La opinión de quienes confían en Sandra
          </h2>
          <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed font-light">
            Nuestros clientes avalan la pasión técnica y precisión de Lafabra. Pasa el cursor sobre las opiniones para detener el desplazamiento continuo y leerlas con comodidad.
          </p>
        </div>

        {/* Continuous right-to-left marquee display (Horizontal Scroll) */}
        <div className="relative w-full overflow-hidden py-4 border-y border-stone-200/40 bg-white/50 backdrop-blur-xs select-none">
          {/* Fading side gradients for a smooth, high-end optical transition */}
          <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-stone-50 via-stone-50/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-stone-50 via-stone-50/70 to-transparent z-10 pointer-events-none" />

          {/* Marquee Row Container */}
          <div className="animate-marquee flex gap-6">
            {marqueeReviews.map((rev, index) => (
              <div 
                key={`${rev.id}-${index}`}
                className="w-80 sm:w-96 shrink-0 bg-white border border-stone-200/80 rounded-2xl p-6 text-left flex flex-col justify-between shadow-md hover:border-pink-300 hover:shadow-lg hover:shadow-pink-50/30 transition-all duration-300 relative"
              >
                <div className="space-y-4">
                  {/* Header: Author + Star Info */}
                  <div className="flex items-center space-x-3.5">
                    <div className={`w-9 h-9 rounded-full ${rev.avatarBlur || 'bg-pink-600 text-white'} flex items-center justify-center font-serif text-sm font-bold`}>
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-sans text-xs font-bold text-stone-900">{rev.author}</h4>
                      <span className="block text-[10px] text-stone-500 font-sans">{rev.role}</span>
                    </div>
                  </div>

                  {/* Star Row in Vibrant Hot Pink with Flower emblem */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, indexStar) => (
                      <Star 
                        key={indexStar} 
                        className={`w-3.5 h-3.5 ${indexStar < rev.rating ? 'text-pink-500 fill-pink-500' : 'text-stone-300'}`} 
                      />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-xs text-stone-600 font-sans leading-relaxed italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6 pt-3 border-t border-stone-100 text-[9px] font-sans text-stone-400">
                  <span>{rev.date}</span>
                  <span className="text-pink-500 font-semibold flex items-center gap-0.5">
                    <Flower className="w-2.5 h-2.5 fill-pink-500/20" />
                    Lafabra Cliente
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input Form Section below the marquee */}
        <div className="max-w-xl mx-auto pt-6 px-4" id="review-draft-widget">
          <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-xl relative text-left overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Flower className="w-28 h-28 text-pink-600" />
            </div>

            <div className="pb-4 border-b border-stone-100">
              <h4 className="font-serif text-sm font-bold text-stone-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
                ¿Has visitado Lafabra? Deja tu opinión
              </h4>
              <span className="block text-[10px] text-pink-600 font-semibold uppercase tracking-widest font-sans">Cuéntanos tu experiencia con Sandra</span>
            </div>

            {/* Success Notification Alert */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-pink-50 border border-pink-200 rounded-xl p-3.5 my-3 flex items-start gap-2.5 text-pink-700"
                >
                  <CheckCircle className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                  <div className="text-[11px] font-sans leading-relaxed">
                    <p className="font-bold">¡Mil gracias por tu aporte!</p>
                    <p className="opacity-95">Se ha guardado localmente y ya se está deslizando felizmente por el carrusel superior.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Review Input Form */}
            <form onSubmit={handleReviewSubmit} className="space-y-4 pt-4">
              
              {/* Star Choice Interactive Selector */}
              <div className="space-y-1.5" id="rating-selector-container">
                <label className="block text-[10px] font-bold font-sans text-stone-400 uppercase tracking-widest">Tu Valoración</label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setDraftRating(star)}
                      className="p-1 focus:outline-none transition-transform hover:scale-125 cursor-pointer"
                      title={`Valorar con ${star} estrellas`}
                    >
                      <Star 
                        className={`w-6 h-6 transition-colors ${
                          star <= draftRating ? 'text-pink-500 fill-pink-500' : 'text-stone-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="draft-name" className="block text-[10px] font-bold font-sans text-stone-400 uppercase tracking-widest">Nombre completo</label>
                <input
                  id="draft-name"
                  type="text"
                  required
                  value={draftName}
                  onChange={(e) => setDraftName(e.target.value)}
                  placeholder="Ej. Lola García"
                  className="w-full h-11 px-3.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-200 focus:outline-none font-sans text-xs text-stone-800 placeholder-stone-400 transition-colors"
                />
              </div>

              {/* Text opinion */}
              <div className="space-y-1.5">
                <label htmlFor="draft-text" className="block text-[10px] font-bold font-sans text-stone-400 uppercase tracking-widest">Tu experiencia</label>
                <textarea
                  id="draft-text"
                  required
                  rows={3}
                  value={draftText}
                  onChange={(e) => setDraftText(e.target.value)}
                  placeholder="Cuéntanos qué tratamiento te realizaste y cómo te atendió Sandra..."
                  className="w-full p-3.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-200 focus:outline-none font-sans text-xs text-stone-800 placeholder-stone-400 transition-colors resize-none"
                  maxLength={300}
                />
              </div>

              {/* CTA Form submission button */}
              <button
                type="submit"
                className="w-full h-11 bg-pink-600 hover:bg-pink-700 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-full shadow-lg shadow-pink-100 flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer"
                style={{ minHeight: '44px' }}
                id="btn-submit-review"
              >
                <Send className="w-3.5 h-3.5 shrink-0" />
                Publicar Opinión Real
              </button>

              <p className="text-[9px] text-stone-400 text-center leading-normal font-sans pt-1">
                *Las opiniones enviadas a través de este formulario se guardan localmente para simulación inmediata.
              </p>

            </form>

            {/* Informative helper box */}
            {reviews.length > REVIEWS_DATA.length && (
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 flex items-start gap-2.5 mt-4">
                <Info className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <p className="text-[10px] text-stone-500 font-sans leading-relaxed text-left">
                  Has creado opiniones personalizadas. Puedes eliminarlas limpiando el almacenamiento de tu navegador en cualquier momento.
                </p>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
