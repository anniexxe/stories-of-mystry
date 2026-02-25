const stage = document.getElementById("stage");
const fragments = document.querySelectorAll(".fragment");


fragments.forEach(fragment => {

  fragment.style.left = Math.random() * 80 + "vw";
  fragment.style.top = Math.random() * 80 + "vh";

  const dx = (Math.random() - 0.5) * 200 + "px";
  const dy = (Math.random() - 0.5) * 200 + "px";

  fragment.style.setProperty("--dx", dx);
  fragment.style.setProperty("--dy", dy);

  fragment.style.animationDuration = 20 + Math.random() * 30 + "s";
});



for (let i = 0; i < 120; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDuration = 3 + Math.random() * 5 + "s";
  stage.appendChild(star);
}

const randomIndex = Math.floor(Math.random() * fragments.length);
const clickableFragment = fragments[randomIndex];

clickableFragment.style.cursor = "pointer";

clickableFragment.addEventListener("click", () => {
  window.location.href = "index.html";
});
