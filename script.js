function showView(id) {
  document.querySelectorAll('.view').forEach(v => {
    v.classList.remove('active');
  });

  document.getElementById('view-' + id).classList.add('active');
}

document.getElementById('shopBtn').addEventListener('click', () => {
  showView('categories');
});

document.getElementById('navHome').addEventListener('click', (e) => {
  e.preventDefault();
  showView('home');
});

document.getElementById('navShop').addEventListener('click', (e) => {
  e.preventDefault();
  showView('categories');
});

document.getElementById('navContact').addEventListener('click', (e) => {
  e.preventDefault();
  showView('contact');
});

document.querySelectorAll('.cat-card').forEach(card => {
  card.addEventListener('click', () => {
    showView(card.getAttribute('data-target'));
  });
});

document.querySelectorAll('.back-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    showView(btn.getAttribute('data-back'));
  });
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();

  alert('Thanks! This form is just a UI demo right now, so nothing was actually sent.');
});