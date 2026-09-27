/**
 * Utilitário de Calendário para exportar o evento "Tupi em Consciência"
 */

function formatDateToIsoBasicUtc(date) {
  const d = new Date(date);
  return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

export function generateGoogleCalendarUrl(event) {
  const start = new Date(event.startDate);
  const end = new Date(start.getTime() + (event.durationHours || 2) * 60 * 60 * 1000);

  const startFormatted = formatDateToIsoBasicUtc(start);
  const endFormatted = formatDateToIsoBasicUtc(end);

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    details: event.description,
    location: event.location,
    dates: `${startFormatted}/${endFormatted}`
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function generateIcsContent(event) {
  const start = new Date(event.startDate);
  const end = new Date(start.getTime() + (event.durationHours || 2) * 60 * 60 * 1000);

  const startFormatted = formatDateToIsoBasicUtc(start);
  const endFormatted = formatDateToIsoBasicUtc(end);
  const nowFormatted = formatDateToIsoBasicUtc(new Date());

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Bloco Batucaki//Tupi em Consciencia//PT',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:tupi-em-consciencia-20261120@batucaki`,
    `DTSTAMP:${nowFormatted}`,
    `DTSTART:${startFormatted}`,
    `DTEND:${endFormatted}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
}

export function downloadIcsFile(event) {
  const content = generateIcsContent(event);
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', 'tupi-em-consciencia-2026.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
