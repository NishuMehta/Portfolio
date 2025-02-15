
// toggle 
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('sidebarToggle');
const closeBtn = document.getElementById('closeSidebar');

toggleBtn.addEventListener('click', () => sidebar.classList.add('active'));
closeBtn.addEventListener('click', () => sidebar.classList.remove('active'));



//   projects

  const filterButtons = document.querySelectorAll('.filter-button');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });

      filterButtons.forEach(btn => btn.classList.remove('btn-dark'));
      filterButtons.forEach(btn => btn.classList.add('btn-outline-dark'));
      button.classList.remove('btn-outline-dark');
      button.classList.add('btn-dark');
    });
  });
