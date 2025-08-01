const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const audio = document.getElementById('musik');

const musicList = [
  'music/happy1.mp3',
  'music/happy2.mp3',
  'music/happy2.mp3',
  'music/happy3.mp3'
];

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });

  // Ganti musik
  audio.src = musicList[index];
  audio.play().catch(() => {});

  // Efek ketikan
  triggerTypingEffect(index);
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

// Efek ketikan
function typeWriter(el, text, i = 0) {
  if (i < text.length) {
    el.textContent += text.charAt(i);
    setTimeout(() => typeWriter(el, text, i + 1), 40);
  }
}

function triggerTypingEffect(slideIndex) {
  const currentSlide = slides[slideIndex];
  const typeElements = currentSlide.querySelectorAll('.type');
  typeElements.forEach(el => {
    el.textContent = '';
    const text = el.getAttribute('data-text');
    if (text) typeWriter(el, text);
  });
}

// Inisialisasi
showSlide(currentSlide);