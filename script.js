const menuButton = document.querySelector('.menu-btn');
const navigation = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navigation.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
});

document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', () => {
    const current = document.querySelector('.filters .active');
    current.classList.remove('active');
    current.setAttribute('aria-pressed', 'false');
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');
    document.querySelectorAll('.project-card').forEach(card => {
      const categories = card.dataset.category.split(' ');
      card.hidden = button.dataset.filter !== 'all' && !categories.includes(button.dataset.filter);
    });
  });
});

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('.success').hidden = false;
});
