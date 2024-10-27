// Smooth Scroll to Section
document.querySelectorAll('.cta-button').forEach(button => {
    button.onclick = (event) => {
      event.preventDefault();
      const targetId = button.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    };
  });
  
  // Dark Mode Toggle with LocalStorage
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  
  // Check if dark mode was enabled previously
  if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
  }
  
  // Toggle dark mode on button click
  darkModeToggle.onclick = () => {
    body.classList.toggle('dark-mode');
    const mode = body.classList.contains('dark-mode') ? 'enabled' : 'disabled';
    localStorage.setItem('dark-mode', mode);
  };
  
  // Scroll-to-Top Button
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  window.onscroll = () => {
    if (document.documentElement.scrollTop > 300) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  };
  scrollTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  