const stage = document.getElementById('stage');


const stars = [];
const STAR_COUNT = 220;

for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement('div');
  star.className = 'star';

  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const depth = Math.random() * 0.6 + 0.2;

  star.dataset.x = x;
  star.dataset.y = y;
  star.dataset.depth = depth;

  star.style.left = x + 'px';
  star.style.top = y + 'px';
  star.style.animationDuration = 2 + Math.random() * 4 + 's';

  stage.appendChild(star);
  stars.push(star);
}


document.addEventListener('mousemove', e => {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const dx = e.clientX - cx;
  const dy = e.clientY - cy;

  stars.forEach(star => {
    const depth = star.dataset.depth;
    const x = star.dataset.x * 1 + dx * depth * 0.02;
    const y = star.dataset.y * 1 + dy * depth * 0.02;
    star.style.transform = `translate(${x - star.dataset.x}px, ${y - star.dataset.y}px)`;
  });
});


const fragments = Array.from(document.querySelectorAll('.fragment'));
const placed = [];

function isOverlapping(rect, others) {
  return others.some(o => !(
    rect.right < o.left ||
    rect.left > o.right ||
    rect.bottom < o.top ||
    rect.top > o.bottom
  ));
}

fragments.forEach(frag => {
  let attempts = 0;
  let rect;

  do {
    frag.style.left = Math.random() * (window.innerWidth - 480) + 'px';
    frag.style.top = Math.random() * (window.innerHeight - 200) + 'px';
    rect = frag.getBoundingClientRect();
    attempts++;
  } while (isOverlapping(rect, placed) && attempts < 100);

  placed.push(rect);

  frag.style.setProperty('--dx', Math.random() * 120 - 60 + 'px');
  frag.style.setProperty('--dy', Math.random() * 120 - 60 + 'px');
  frag.style.animationDuration = 12 + Math.random() * 12 + 's';

});

const randomIndex = Math.floor(Math.random() * fragments.length);
const clickableFragment = fragments[randomIndex];

clickableFragment.style.cursor = "pointer";

clickableFragment.addEventListener("click", () => {
  window.location.href = "index.html";
});
