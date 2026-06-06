/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  name: string;
  description: string;
  category: 'nails' | 'facial' | 'body' | 'lashes';
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
  image?: string; // High-resolution aesthetic URL or illustration asset
}

export interface Review {
  id: string;
  author: string;
  role: string;
  text: string;
  rating: number;
  date: string;
  avatarBlur?: string; // Tailwind color classes for custom aesthetic avatars
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'citas' | 'servicios' | 'ubicacion' | 'general';
}

export interface BookingState {
  serviceId: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  notes: string;
}
