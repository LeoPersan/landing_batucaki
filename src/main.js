import './style.css';
import Alpine from 'alpinejs';
import { generateGoogleCalendarUrl, downloadIcsFile } from './utils/calendar.js';
import { buildWhatsAppUrl } from './utils/whatsapp.js';
import { timelineEvents, timelineCategories } from './data/timelineData.js';

const eventDetails = {
  title: 'Tupi em Consciência: Samba, Memória e Vozes Negras',
  description: 'Espetáculo musical gratuito promovido pelo Bloco Batucaki no Dia da Consciência Negra. Combina banda profissional de samba/pagode, batucada carnavalesca e intervenções de oradores negros regionais.',
  location: 'Praça Prefeito Dr. Ilton da Costa Oliveira, Tupi Paulista - SP',
  startDate: '2026-11-20T20:00:00-03:00',
  durationHours: 2
};

// Alpine.js components & data
window.Alpine = Alpine;

Alpine.data('countdown', () => ({
  targetDate: new Date('2026-11-20T20:00:00-03:00').getTime(),
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
  isExpired: false,
  timer: null,

  init() {
    this.update();
    this.timer = setInterval(() => this.update(), 1000);
  },

  update() {
    const now = new Date().getTime();
    const distance = this.targetDate - now;

    if (distance <= 0) {
      this.isExpired = true;
      this.days = '00';
      this.hours = '00';
      this.minutes = '00';
      this.seconds = '00';
      if (this.timer) clearInterval(this.timer);
      return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    this.days = String(d).padStart(2, '0');
    this.hours = String(h).padStart(2, '0');
    this.minutes = String(m).padStart(2, '0');
    this.seconds = String(s).padStart(2, '0');
  }
}));

Alpine.data('calendarManager', () => ({
  get googleCalendarUrl() {
    return generateGoogleCalendarUrl(eventDetails);
  },
  downloadIcs() {
    downloadIcsFile(eventDetails);
  }
}));

Alpine.data('timelineManager', () => ({
  activeCategory: 'todos',
  categories: timelineCategories,
  events: timelineEvents,

  get filteredEvents() {
    if (this.activeCategory === 'todos') {
      return this.events;
    }
    return this.events.filter(e => e.category === this.activeCategory);
  }
}));

Alpine.data('whatsappHelper', () => ({
  phone: '(18) 99799-8362',
  getWorkshopUrl(instrument = 'Percussão Geral') {
    const msg = `Olá Leonardo e Bloco Batucaki! Gostaria de me inscrever / saber mais sobre as aulas gratuitas de percussão (${instrument}) na AABB!`;
    return buildWhatsAppUrl(this.phone, msg);
  }
}));

Alpine.start();
