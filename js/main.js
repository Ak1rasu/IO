// Scroll animatie (Opdracht 1)
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3
});
sections.forEach(section => observer.observe(section));

// Infinite scroll (Opdracht 2)
const gallery = document.getElementById('gallery');
const sentinel = document.getElementById('sentinel');

const imageSources = [
  "https://picsum.photos/400/300?random=1",
  "https://picsum.photos/400/300?random=2",
  "https://picsum.photos/400/300?random=3",
  "https://picsum.photos/400/300?random=4",
  "https://picsum.photos/400/300?random=5",
  "https://picsum.photos/400/300?random=6",
  "https://picsum.photos/400/300?random=7",
  "https://picsum.photos/400/300?random=8"
];

let imageIndex = 0;

function loadImages() {
  for (let i = 0; i < 4; i++) {
    const img = document.createElement('img');
    img.src = imageSources[imageIndex % imageSources.length] + `&t=${Date.now()}`; // Cache buster
    gallery.appendChild(img);
    imageIndex++;
  }
}

const infiniteObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    loadImages();
  }
}, {
  rootMargin: '200px'
});

infiniteObserver.observe(sentinel);

loadImages();  // Initial load
