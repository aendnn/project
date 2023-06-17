customSelect('select');

// slider
const toggles = document.querySelectorAll('.slider-button');
const slides = document.querySelectorAll('.big-offers-slide');
const wrapper = document.querySelector('.wrapper');

toggles.forEach((item, index) => {
  item.addEventListener('click', () => {
  slides.forEach(item => item.classList.remove('current-slide'));
  toggles.forEach(toggle => toggle.parentElement.classList.remove('current-slider-item'));

  item.parentElement.classList.add('current-slider-item');
  slides[index].classList.add('current-slide');
  if (index === 0) {
    wrapper.style.backgroundColor = "pink";
  }
  else if (index === 1) {
    wrapper.style.backgroundColor = "blue";
  }
  else {
    wrapper.style.backgroundColor = "green";
  }
})
})
