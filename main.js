const message = document.getElementById('message')
const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const spinBtn = document.getElementById('spinBtn');

document.getElementById('spinBtn').addEventListener('click', spinReels);

// const symbols = ['🍒'];
const symbols = ['🍒', '🍋', '🔔', '🍉', '⭐', '7️⃣'];

function spinReel(){
  return symbols[Math.floor(Math.random() * symbols.length)];
}


function spinReels() {
  spinBtn.disabled = true;
  message.innerHTML = ""

  let result1, result2, result3;

  const spin1 = setInterval(() => { reel1.textContent = spinReel(); }, 50);
  const spin2 = setInterval(() => { reel2.textContent = spinReel(); }, 50);
  const spin3 = setInterval(() => { reel3.textContent = spinReel(); }, 50);

  setTimeout(() => {clearInterval(spin1);result1 = reel1.textContent;}, 1500);

  setTimeout(() => {clearInterval(spin2);result2 = reel2.textContent;}, 2700);

  setTimeout(() => {
    clearInterval(spin3);
    result3 = reel3.textContent;
    checkWin(result1, result2, result3);
    spinBtn.disabled = false;
  }, 4200);
}

function checkWin(result1, result2, result3) {
  if (result1 === result2 && result2 === result3) {
    message.innerHTML = "Ви виграли!"
  } else {
    message.innerHTML = "Ви програли"
  }
}