import { MouseEvent } from 'react';

/**
 * Decodes a base64 string safely at runtime.
 */
export function decodeB64(str: string): string {
  try {
    return atob(str);
  } catch (e) {
    return '';
  }
}

// Obfuscated data in Base64
export const OBSCURED_PHONE = 'MzQ2MjUyNzAyMjc='; // '34625270227'
export const OBSCURED_PHONE_URL = 'dGVsOiszNDYyNTI3MDIyNw=='; // 'tel:+34625270227'
export const OBSCURED_PHONE_DISPLAY = 'KzM0IDYyNSAyNyAwMiAyNw=='; // '+34 625 27 02 27'
export const OBSCURED_EMAIL = 'bGFfZmFicmFAaG90bWFpbC5jb20='; // 'la_fabra@hotmail.com'
export const OBSCURED_EMAIL_URL = 'bWFpbHRvOmxhX2ZhYnJhQGhvdG1haWwuY29t'; // 'mailto:la_fabra@hotmail.com'
export const OBSCURED_WA_URL = 'aHR0cHM6Ly93YS5tZS8zNDYyNTI3MDIyNw=='; // 'https://wa.me/34625270227'

/**
 * Trigger phone call dynamically on click/interaction to prevent web scraping.
 */
export function handlePhoneCall(e: MouseEvent) {
  e.preventDefault();
  window.location.href = decodeB64(OBSCURED_PHONE_URL);
}

/**
 * Trigger email dynamically on click/interaction to prevent web scraping.
 */
export function handleEmailClick(e: MouseEvent) {
  e.preventDefault();
  window.location.href = decodeB64(OBSCURED_EMAIL_URL);
}

/**
 * Open WhatsApp dynamically on click/interaction.
 */
export function handleWhatsAppOpen(e: MouseEvent, text?: string) {
  e.preventDefault();
  const baseUrl = decodeB64(OBSCURED_WA_URL);
  const url = text ? `${baseUrl}?text=${encodeURIComponent(text)}` : baseUrl;
  window.open(url, '_blank', 'noopener,noreferrer');
}
