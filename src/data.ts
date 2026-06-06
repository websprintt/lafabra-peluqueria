/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Review, FAQItem } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'nails-siberian',
    name: 'Manicura Rusa / Siberiana Permanente',
    description: 'Técnica de alta precisión con torno para limpiar la cutícula al máximo, permitiendo un esmaltado impecable y duradero bajo la cutícula.',
    category: 'nails',
    price: 32,
    duration: '75 min',
    features: ['Limpieza profunda de cutículas', 'Nivelación de uña natural', 'Esmaltado de alta duración', 'Aceite nutritivo orgánico'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'nails-gel',
    name: 'Reconstrucción de Uñas de Gel / Acrigel',
    description: 'Diseño y modelado de uñas premium con molde. Aspecto ultra-natural, resistente, perfecto para corregir imperfecciones o morderse las uñas.',
    category: 'nails',
    price: 48,
    duration: '105 min',
    features: ['Estructura adaptada al dedo', 'Materiales hipoalergénicos', 'Diseño de limado personalizado', 'Esmalte permanente incluido'],
    image: 'https://unsplash.com/photos/EXVM7w4b_lo/download'
  },
  {
    id: 'nails-spa-pedi',
    name: 'Pedicura Spa Reconstructiva Completa',
    description: 'Cuidado profundo para tus pies. Eliminación de durezas, hidratación máxima, masaje relajante y esmaltado permanente premium con flores de loto aromáticas.',
    category: 'nails',
    price: 38,
    duration: '60 min',
    features: ['Baño relajante de sales', 'Tratamiento de talones agrietados', 'Exfoliación con microgránulos', 'Esmaltado gel de larga duración'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'facial-dermopeeling',
    name: 'Higiene Facial Premium + Dermopeeling',
    description: 'Limpieza profunda de poros con microdermoabrasión ultrasónica y peeling químico suave adaptado a tu tipo de piel para máxima luminosidad.',
    category: 'facial',
    price: 45,
    duration: '75 min',
    features: ['Extracción sin marcas', 'Peeling de ácidos frutales suave', 'Mascarilla calmante descongestiva', 'Masaje facial drenante con rodillo de jade'],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'facial-hialuronico',
    name: 'Tratamiento de Hidratación Profunda Ácido Hialurónico',
    description: 'Terapia de choque hidratante and rellenadora. Nutre las capas profundas de la piel, restaurando el volumen, la vitalidad y un glow natural con extractos de rosa silvestre.',
    category: 'facial',
    price: 55,
    duration: '60 min',
    features: ['Doble limpieza spa', 'Ampolla concentrada de Hialurónico al 2%', 'Mascarilla hidoplástica premium', 'Crema selladora protectora UV'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'facial-lifting',
    name: 'Lifting Facial Sin Cirugía (Radiofrecuencia)',
    description: 'Estimulación del colágeno natural mediante ondas de radiofrecuencia estéticas. Tensa el óvalo facial, suaviza líneas y rejuvenece la mirada.',
    category: 'facial',
    price: 65,
    duration: '70 min',
    features: ['Radiofrecuencia bipolar/tripolar', 'Coctel de vitaminas micronizadas', 'Masaje lifting reafirmante', 'Serum regenerador activo'],
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'body-presotherapy',
    name: 'Presoterapia Avanzada Drenante Corporal',
    description: 'Sistema neumático de compresión controlada que activa la circulación de retorno, combate la retención de líquidos y alivia piernas cansadas.',
    category: 'body',
    price: 22,
    duration: '40 min',
    features: ['Ideal post-entreno o trabajo de pie', 'Estimulación del sistema linfático', 'Reduce volumen y celulitis grasa', 'Fácil y totalmente indoloro'],
    image: 'https://plus.unsplash.com/premium_photo-1661488246062-cb1ab73519d0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'body-relax-massage',
    name: 'Masaje Relajante Sensorial con Aceites Orgánicos',
    description: 'Desconexión total en camilla calefactable. Hilo musical suave y aceites calientes premium de lavanda y mandarina para descontracturar y calmar la mente.',
    category: 'body',
    price: 45,
    duration: '50 min',
    features: ['Cabina aromatizada y luz tenue', 'Presiones aromaterapéuticas', 'Mejora del sueño y ansiedad', 'Estiramientos suaves integrados'],
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'body-maderoterapia',
    name: 'Maderoterapia Reafirmante Corporal',
    description: 'Técnica de masaje intenso con utensilios de madera de diseño orgánico para modelar el cuerpo, activar la circulación, reducir celulitis y reafirmar el contorno cutáneo de forma natural.',
    category: 'body',
    price: 35,
    duration: '45 min',
    features: ['Activación de microcirculación', 'Modelado de silueta y drenaje', 'Utensilios de madera orgánica', 'Aceite reductor de hiedra'],
    image: 'https://plus.unsplash.com/premium_photo-1661393389125-a9d061dfd257?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'lashes-lifting',
    name: 'Lifting de Pestañas con Tinte y Queratina',
    description: 'Curvatura natural de tus propias pestañas desde la raíz. El tinte aporta un efecto rímel inmediato que dura entre 6 y 8 semanas sin dañarlas.',
    category: 'lashes',
    price: 35,
    duration: '55 min',
    features: ['Ideal para cejas cortas o rectas', 'Baño nutritivo de queratina pura', 'Tinte negro intenso', 'Cuidado 100% respetuoso con el vello'],
    popular: true,
    image: 'https://unsplash.com/photos/sRSRuxkOuzI/download'
  },
  {
    id: 'lashes-brows',
    name: 'Diseño de Cejas con Depilación y Henna',
    description: 'Estudio de visajismo para enmarcar tu mirada adecuadamente. Depilación precisa con pinza/cera de alta tolerancia y sombreado con henna natural.',
    category: 'lashes',
    price: 18,
    duration: '35 min',
    features: ['Estudio de simetría facial', 'Henna orgánica duradera en piel', 'Exfoliación previa de la zona', 'Maquillaje de cejas final opcional'],
    image: 'https://unsplash.com/photos/cowLgyb63c4/download'
  },
  {
    id: 'lashes-lamination',
    name: 'Laminado de Cejas Orgánico (Brow Lamination)',
    description: 'Diseño semipermanente para cejas rebeldes o finas. Peina, fija y direcciona el vello natural consiguiendo un efecto de ceja más tupida y definida.',
    category: 'lashes',
    price: 25,
    duration: '40 min',
    features: ['Fijación de larga duración (6 semanas)', 'Nutrición con aceite de argán', 'Diseño personalizado previo', 'Cepillo y kit de cuidado para el hogar'],
    image: 'https://unsplash.com/photos/4p6XsMzkTsE/download'
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-lola',
    author: 'Lola H.',
    role: 'Local Guide Google • 26 opiniones',
    text: '¡Excelente sitio! Muy profesional, servicio perfecto. Estoy encantada con Sandra. Lo recomiendo al 100% para manicuras y tratamientos faciales.',
    rating: 5,
    date: 'Hace 2 años',
    avatarBlur: 'bg-pink-600 text-white'
  },
  {
    id: 'rev-aline',
    author: 'Aline Amaral',
    role: 'Local Guide Google • 37 opiniones',
    text: 'Me parece que Sandra es súper trabajadora y una gran profesional en cada detalle. Te mima como nadie. Lo recomiendo siempre en Ciudad Real.',
    rating: 5,
    date: 'Hace 5 años',
    avatarBlur: 'bg-stone-500 text-white'
  },
  {
    id: 'rev-olga',
    author: 'Olga García',
    role: 'Cliente verificada',
    text: 'Muy buena experiencia, excelente acabado y muy buen trato. Sandra es súper simpática y la atención es increíble de principio a fin.',
    rating: 5,
    date: 'Hace 5 años',
    avatarBlur: 'bg-pink-400 text-stone-900'
  },
  {
    id: 'rev-maria',
    author: 'María José R.',
    role: 'Cliente asidua',
    text: 'Llevo viniendo más de un año y no cambio a Sandra por nada del mundo. Mis uñas siberianas duran 4 semanas impecables, sin levantamientos. ¡Un amor de persona!',
    rating: 5,
    date: 'Hace unos meses',
    avatarBlur: 'bg-stone-700 text-pink-100'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'citas',
    question: '¿Cómo puedo agendar una cita en Lafabra?',
    answer: 'La forma más rápida y directa es pulsando nuestro botón de WhatsApp o llamando a nuestro teléfono de contacto directo. Te atenderá directamente Sandra para buscar la hora que mejor se adapte a tu agenda.'
  },
  {
    id: 'faq-2',
    category: 'servicios',
    question: '¿Qué es exactamente la manicura rusa o siberiana?',
    answer: 'Es una técnica avanzada de manicura seca que se realiza con torno y fresas especiales de alta precisión. Consigue retirar por completo la cutícula sobrante y pulir el contorno del dedo, permitiendo esmaltar pegado a la piel para que el crecimiento de la uña tarde más en verse (dura impecable más de 3-4 semanas).'
  },
  {
    id: 'faq-3',
    category: 'ubicacion',
    question: '¿Dónde estáis ubicados en Ciudad Real y dónde aparcar?',
    answer: 'Nos encontramos en Calle Huertos, 4, 1º, en pleno corazón de Ciudad Real (13004). Al estar en una zona céntrica, dispones de zonas de aparcamiento o parkings públicos a muy pocos minutos a pie.'
  },
  {
    id: 'faq-4',
    category: 'general',
    question: '¿Cuáles son vuestras medidas de higiene y seguridad?',
    answer: 'En Lafabra la seguridad e higiene son innegociables. Todo el instrumental metálico se desinfecta y esteriliza rigurosamente en caliente para cada cliente, y empleamos limas y materiales desechables de un solo uso para garantizar una higiene del 100%.'
  },
  {
    id: 'faq-5',
    category: 'citas',
    question: '¿Con cuánta antelación debo reservar mi cita?',
    answer: 'Al ser un centro de atención personalizada premium atendido individualmente por Sandra, la agenda suele completarse rápido. Te recomendamos reservar con al menos 3 a 5 días de antelación para asegurar tu hueco favorito.'
  }
];
