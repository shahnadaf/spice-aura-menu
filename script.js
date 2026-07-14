let activeCategory = 'all';

function filterMenu() {
  applyFilters();
}

function filterCategory(category, btnEl) {
  activeCategory = category;

  // Update active tab styling
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  btnEl.classList.add('active');

  applyFilters();
}

function applyFilters() {
  const searchValue = document.getElementById('searchInput').value.toLowerCase().trim();
  const cards = document.querySelectorAll('.menu-grid .card');
  const noResults = document.getElementById('noResults');
  let visibleCount = 0;

  cards.forEach(card => {
    const name = card.getAttribute('data-name');
    const category = card.getAttribute('data-category');

    const matchesSearch = name.includes(searchValue);
    const matchesCategory = (activeCategory === 'all') || (category === activeCategory);

    if (matchesSearch && matchesCategory) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  noResults.style.display = visibleCount === 0 ? 'block' : 'none';
}