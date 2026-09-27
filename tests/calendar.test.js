import test from 'node:test';
import assert from 'node:assert/strict';
import { generateGoogleCalendarUrl, generateIcsContent } from '../src/utils/calendar.js';

const mockEvent = {
  title: 'Tupi em Consciência: Samba, Memória e Vozes Negras',
  description: 'Espetáculo musical gratuito com banda de samba/pagode, batucada carnavalesca do Batucaki e falas sobre cultura afro-brasileira.',
  location: 'Praça Prefeito Dr. Ilton da Costa Oliveira, Tupi Paulista - SP',
  startDate: '2026-11-20T20:00:00-03:00',
  durationHours: 2
};

test('Calendar Utility: generateGoogleCalendarUrl formats URL correctly', () => {
  const url = generateGoogleCalendarUrl(mockEvent);
  assert.ok(url.startsWith('https://calendar.google.com/calendar/render?action=TEMPLATE'), 'Should have Google Calendar base URL');
  
  const parsedUrl = new URL(url);
  assert.equal(parsedUrl.searchParams.get('text'), mockEvent.title, 'Should have matching event title');
  assert.equal(parsedUrl.searchParams.get('location'), mockEvent.location, 'Should have matching event location');
  assert.ok(parsedUrl.searchParams.get('dates').includes('2026112'), 'Should contain target year, month, date');
});

test('Calendar Utility: generateIcsContent generates valid iCalendar format', () => {
  const ics = generateIcsContent(mockEvent);
  assert.ok(ics.includes('BEGIN:VCALENDAR'), 'ICS must start with BEGIN:VCALENDAR');
  assert.ok(ics.includes('SUMMARY:Tupi em Consciência: Samba, Memória e Vozes Negras'), 'ICS must have SUMMARY');
  assert.ok(ics.includes('LOCATION:Praça Prefeito Dr. Ilton da Costa Oliveira, Tupi Paulista - SP'), 'ICS must have LOCATION');
  assert.ok(ics.includes('END:VCALENDAR'), 'ICS must end with END:VCALENDAR');
});
