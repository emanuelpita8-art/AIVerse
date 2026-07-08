const heroTitle = "INTELIGENCIA ARTIFICIAL GENERATIVA";
const el = document.getElementById("tokenStream");
let i = 0;
function typeHero() {
  if (i < heroTitle.length) {
    el.innerHTML = heroTitle.slice(0, i) + '<span class="cursor">&nbsp;</span>';
    i++;
    setTimeout(typeHero, 45);
  } else {
    el.innerHTML = heroTitle + '<span class="cursor">&nbsp;</span>';
  }
}
typeHero();

const promptText = "explica la IA generativa en una frase";
const outputText =
  "Es un sistema que aprende patrones de datos para crear texto, imágenes o código completamente nuevos.";
const pEl = document.getElementById("demoPrompt");
const oEl = document.getElementById("demoOutput");
function typeInto(target, text, speed, done) {
  let j = 0;
  (function step() {
    if (j <= text.length) {
      target.textContent = text.slice(0, j);
      j++;
      setTimeout(step, speed);
    } else if (done) {
      done();
    }
  })();
}
function runDemo() {
  pEl.textContent = "";
  oEl.textContent = "";
  typeInto(pEl, promptText, 38, () => {
    setTimeout(
      () =>
        typeInto(oEl, outputText, 22, () => {
          setTimeout(runDemo, 3500);
        }),
      500,
    );
  });
}

runDemo();
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

document.querySelectorAll("section").forEach((sec) => {
  sec.classList.add("reveal");

  observer.observe(sec);
});

window.addEventListener("scroll", () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;

  const progress = (window.scrollY / total) * 100;

  document.getElementById("progressBar").style.width = progress + "%";
});
