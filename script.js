// Menu mobile
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '64px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = 'var(--color-bg)';
      links.style.padding = '20px 32px';
      links.style.gap = '18px';
      links.style.borderBottom = '1px solid rgba(237,233,222,0.08)';
    });
  }

  // Formulaire de contact (placeholder - à connecter à un vrai service d'envoi)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Merci, votre demande a bien été envoyée. Nous vous répondons sous 48h.');
      form.reset();
    });
  }
});
