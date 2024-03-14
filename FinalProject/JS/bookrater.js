const stars = document.querySelectorAll('.star');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const rating = parseInt(star.getAttribute('data-rating'));
    stars.forEach((s, index) => {
      if (index < rating) {
        s.style.color = '#f0ad4e'; // Change color to highlighted
      } else {
        s.style.color = '#ccc'; // Change color to gray
      }
    });
  });
});