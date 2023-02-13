(function navbarAnimation() {
  const navbar = document.querySelectorAll('.navbar ul li');
  navbar.forEach((link) => {
    // ON mouse over navbar link
    link.addEventListener('mouseover', () => {
      if (link.textContent.includes('HOME')) {
        return;
      }
      link.classList.add('border');
    });
    // On mouse out of navbar link
    link.addEventListener('mouseout', () => {
      if (link.textContent.includes('HOME')) {
        return;
      }
      link.classList.remove('border');
    });
  });
})();
