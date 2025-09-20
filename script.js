// Adiciona brasas (opcional, mantém o ambiente)
function createEmber() {
  const ember = document.createElement('div');
  ember.className = 'ember';
  ember.style.left = Math.random() * 100 + '%';
  ember.style.animationDelay = Math.random() * 8 + 's';
  ember.style.animationDuration = (Math.random() * 4 + 6) + 's';
  document.body.appendChild(ember);

  setTimeout(() => { ember.remove(); }, 10000);
}
setInterval(createEmber, 3000);

// Adiciona runas ocasionais
function createRune() {
  const rune = document.createElement('div');
  rune.className = 'rune';

  const runes = ["ᚠ","ᚢ","ᚦ","ᚨ","ᛃ","ᛇ","✧","✠"];
  rune.textContent = runes[Math.floor(Math.random() * runes.length)];

  rune.style.top = Math.random() * 100 + '%';
  rune.style.left = Math.random() * 100 + '%';
  rune.style.animationDelay = Math.random() * 3 + 's';

  document.body.appendChild(rune);

  setTimeout(() => { rune.remove(); }, 6000);
}
setInterval(createRune, 4000);

// Efeito de hover nos blocos de estatística
document.querySelectorAll('.stat-block').forEach(block => {
  block.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
  });
  block.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Runas de fundo brilhando e sumindo
function createBgRune() {
  const rune = document.createElement('div');
  rune.className = 'bg-rune';

  const runes = ["ᚠ","ᚢ","ᚦ","ᚨ","ᛃ","ᛇ","✧","✠"];
  rune.textContent = runes[Math.floor(Math.random() * runes.length)];

  rune.style.top = Math.random() * 100 + 'vh';
  rune.style.left = Math.random() * 100 + 'vw';

  document.body.appendChild(rune);

  setTimeout(() => { rune.remove(); }, 6000);
}
setInterval(createBgRune, 3500);

// === FRASES ===
// Frases normais
const normalWords = [
  "Who am I?",
  "Why do I fight?",
  "Lost soul",
  "My blade remembers",
  "Between shadows",
  "Echoes of war"
];

// Frases psicopatas (modo Blood)
const bloodWords = [
  "RUN",
  "I'M GONNA KILL YOU",
  "YOUR BLOOD IS MINE",
  "NO ESCAPE",
  "DIE, DIE, DIE",
  "THE CARRASCO IS HERE"
];

// Variável que controla qual lista usar
let activeWords = normalWords;

// Palavras flutuantes
function createWord() {
  const word = document.createElement('div');
  word.className = 'word';

  // pega da lista ativa
  word.textContent = activeWords[Math.floor(Math.random() * activeWords.length)];

  word.style.left = Math.random() * 80 + 'vw';
  word.style.top = Math.random() * 80 + 'vh';

  document.body.appendChild(word);

  setTimeout(() => { word.remove(); }, 8000);
}
setInterval(createWord, 9000);

// Runas sobre a imagem do personagem
function createCharRune() {
  const charContainer = document.querySelector('.Imagemchar');
  if (!charContainer) return;

  const rune = document.createElement('div');
  rune.className = 'bg-rune';
  const runes = ["ᚠ","ᚢ","ᚦ","ᚨ","ᛃ","✠"];
  rune.textContent = runes[Math.floor(Math.random() * runes.length)];

  rune.style.position = 'absolute';
  rune.style.top = Math.random() * 80 + '%';
  rune.style.left = Math.random() * 80 + '%';
  rune.style.fontSize = '1.5rem';
  rune.style.opacity = '0.4';

  charContainer.appendChild(rune);

  setTimeout(() => { rune.remove(); }, 4000);
}
setInterval(createCharRune, 5000);

// Lista de imagens
const images = [
  "MMA.jpg",
  "Bope.jpg",
];
let currentImage = 0;

const charImg = document.querySelector('.img-char');
document.querySelector('.arrow.left').addEventListener('click', () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  charImg.src = images[currentImage];
});
document.querySelector('.arrow.right').addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  charImg.src = images[currentImage];
});

// === Easter Egg: Blood Mode + Nome + Frases ===
document.addEventListener("DOMContentLoaded", () => {
  const charName = document.querySelector(".character-name");

  if (charName) {
    const originalName = charName.textContent;

    charName.addEventListener("click", () => {
      document.body.classList.toggle("blood-theme");

      if (document.body.classList.contains("blood-theme")) {
        charName.textContent = "Generalíssima do vazio Inefavel";
        activeWords = bloodWords; // muda frases
      } else {
        charName.textContent = originalName;
        activeWords = normalWords; // volta frases
      }
    });
  }
});
