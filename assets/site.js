(function(){
  const cfg = window.PRECURIUM_CONFIG || {};
  document.querySelectorAll('[data-social]').forEach(a => {
    const key = a.dataset.social;
    if (cfg.social && cfg.social[key]) { a.href = cfg.social[key]; a.target = '_blank'; a.rel = 'noopener noreferrer external'; }
  });
  document.querySelectorAll('[data-doctolib]').forEach(a => {
    if (cfg.doctolib && cfg.doctolib.enabled && cfg.doctolib.url) { a.href = cfg.doctolib.url; a.target = '_blank'; a.rel = 'noopener noreferrer external'; if (a.classList.contains('booking-btn')) a.textContent = cfg.doctolib.label || 'Termin über Doctolib'; }
    else { a.removeAttribute('href'); a.setAttribute('aria-disabled','true'); a.classList.add('disabled'); }
  });
  document.querySelectorAll('[data-location]').forEach(a => {
    const key = a.dataset.location; const url = cfg.locations && cfg.locations[key];
    if (url) { a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer external'; }
    else { a.removeAttribute('href'); a.setAttribute('aria-disabled','true'); a.classList.add('disabled'); a.title = 'Externer Link vor Veröffentlichung noch zu bestätigen'; }
  });
})();