// Open/close dropdown menus
document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const menu = btn.nextElementSibling;
    const open = menu.style.display === 'block';

    // Close all menus
    document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = 'none');

    // Toggle this one
    menu.style.display = open ? 'none' : 'block';
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = 'none');
  }
});
