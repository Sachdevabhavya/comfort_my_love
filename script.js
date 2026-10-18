
const notes = [
  "You are so special, Avishka. Not only because of your beautiful heart, but because of the warmth and kindness you bring into my world. Even on the days you feel tired or low, you are still my favourite person, my softest thought, and the one I will choose again and again. Always.",

  "Hi baby, here is your little reminder to keep close: you never have to earn my love by being happy, cheerful, or perfectly okay. I love every version of you — sleepy, quiet, emotional, silly, and bright. You can simply be yourself with me, and I will keep choosing you with my whole heart. ♡",

  "If I could be there right now, I would tuck you into the cosiest blanket, bring you your favourite snacks, and hold you in the gentlest hug. I would stay close until your breathing slowed, your heart felt lighter, and you remembered how deeply loved you are.",

  "My Shona, you make ordinary days feel special just by being you. There is something so lovely about the way you laugh, care, and make my world brighter without even trying. Please be extra gentle with yourself today — you deserve every bit of the tenderness you give to everyone else.",

  "You are beautiful when you laugh, beautiful when you are sleepy, beautiful when you are grumpy, and beautiful when you do not feel your best. Nothing about a difficult day could make you less precious to me. Every version of you is loved, adored, and safe in my heart.",

  "One little moment at a time, sweetheart. Drink a little water, get cosy, and let yourself rest without feeling guilty. You do not have to do everything today; let the world wait while you take care of your lovely heart. I am cheering for you, always.",

  "If today feels heavy, you can put some of it down. You can tell me everything, be quiet beside me, cry into my shoulder, or ask me for a silly distraction. There is no version of you I would ever leave alone in the dark. I am on your team, baby — always."
];

let noteIndex = 0;

const noteText = document.getElementById("noteText");
const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function newNote() {
  noteIndex = (noteIndex + 1) % notes.length;
  noteText.textContent = notes[noteIndex];
  floatHearts(7);
}

document.getElementById("openNote").addEventListener("click", () => {
  noteText.textContent = notes[noteIndex];
  showToast("A little love letter, just for my favourite girl ♡");
  floatHearts(5);
});

document.getElementById("anotherNote").addEventListener("click", newNote);

// Floating hearts animation
function floatHearts(count = 10) {
  const layer = document.querySelector(".floating-hearts");
  const symbols = ["♡", "♥", "✧"];

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");

    heart.className = "float-heart";
    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = `${Math.random() * 96}%`;
    heart.style.animationDelay = `${Math.random() * 0.8}s`;
    heart.style.fontSize = `${14 + Math.random() * 18}px`;

    layer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }
}

// Main virtual hug button
function hug() {
  document.body.classList.add("hugging");
  floatHearts(18);

  showToast("Sending my Shona the biggest, gentlest hug ♡");

  setTimeout(() => {
    document.body.classList.remove("hugging");
  }, 1800);
}

document.getElementById("heroHug").addEventListener("click", hug);

// Comfort messages
const comfortMessages = {
  hug: "Come here, baby. Imagine me wrapping my arms around you, holding you close, and reminding you that you don't have to handle every hard moment alone. Breathe, rest, and let yourself be cared for. ♡",

  message: "You can be cranky, sleepy, quiet, or sad with me. You don't have to do anything or pretend to be okay. I'll love you through all of it. — Bhavya ♡",

  breathe: "Let's take a tiny pause together. Relax your shoulders, breathe in slowly for 4 counts, then breathe out gently for 6. Repeat only if it feels comfortable. No pressure, sweetheart. ♡",

  care: "Come closer, my love. Let me tuck you into something soft, bring you warm water and your favourite little treat, and keep you wrapped in my care until the world feels gentler again. You deserve to be spoiled, held, and loved through every moment. ♡"
};

document.querySelectorAll("[data-comfort]").forEach(button => {
  button.addEventListener("click", () => {
    const message = comfortMessages[button.dataset.comfort];

    document.getElementById("comfortResponse").innerHTML =
      `${message} <span>— Bhavya ♡</span>`;

    showToast("A little comfort, just for you ♡");

    if (button.dataset.comfort === "hug") {
      floatHearts(9);
    }
  });
});

// Pampering choices
let selectedPamper = "Just being close to you";

document.querySelectorAll("[data-pamper]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-pamper]").forEach(item => {
      item.classList.remove("selected");
    });

    button.classList.add("selected");
    selectedPamper = button.dataset.pamper;

    document.getElementById("pamperFeedback").textContent =
      `You picked: ${selectedPamper} ♡`;
  });
});

document.getElementById("pamperSend").addEventListener("click", () => {
  showToast(`Awww, noted in this little page: ${selectedPamper} ♡`);

  document.getElementById("pamperFeedback").textContent =
    `Your little wish is safe here: ${selectedPamper}. You deserve to be held close, spoiled softly, and loved a little extra today ♡`;

  floatHearts(8);
});

// Reasons, countdowns and the secret surprise
const reasons = [
  "I love the way you smile.",
  "I love the way you talk.",
  "I love the way you express yourself.",
  "I love the way you laugh.",
  "I love the way you cuddle.",
  "I love your beauty.",
  "I love your cuteness.",
  "I love your hair.",
  "I love your eyes.",
  "I love to live a life with you.",
  "I love doing anything I can to make you feel special.",
  "I love the way you blush.",
  "I love the way you play with your hair and your face.",
  "I love the way you flaunt.",
  "I love your sweet voice.",
  "I love your heart.",
  "I love the way you touch me.",
  "I love the way you are.",
  "I love the sweetness in you.",
  "I love the way you react when I pamper you.",
  "I love the way you play with me and become my baby girl.",
  "I love you sooo much, Avishka."
];

let reasonIndex = 0;
const reasonCard = document.getElementById("reasonCard");

function showReason() {
  document.getElementById("reasonNumber").textContent =
    String(reasonIndex + 1).padStart(2, "0");
  document.getElementById("reasonText").textContent = reasons[reasonIndex];
  reasonCard.classList.remove("reason-reveal");
  void reasonCard.offsetWidth;
  reasonCard.classList.add("reason-reveal");
}

document.getElementById("anotherReason").addEventListener("click", () => {
  reasonIndex = (reasonIndex + 1) % reasons.length;
  showReason();
  floatHearts(6);
  showToast("One more reason, because you are impossible not to love ♡");
});

function updateCountdowns() {
  const today = new Date();
  const currentYear = today.getFullYear();

  document.querySelectorAll("[data-countdown]").forEach(item => {
    const [month, day] = item.dataset.countdown.split("-").map(Number);
    let target = new Date(currentYear, month - 1, day);

    if (target < today) {
      target = new Date(currentYear + 1, month - 1, day);
    }

    const days = Math.ceil((target - today) / 86400000);
    item.textContent = days === 0
      ? "Today, my love ♡"
      : `${days} ${days === 1 ? "day" : "days"} to go ♡`;
  });
}

updateCountdowns();
setInterval(updateCountdowns, 86400000);

document.getElementById("secretSurprise").addEventListener("click", () => {
  showToast("You found my secret little corner. I love you more than I know how to say. ♡");
  floatHearts(22);
  document.body.classList.add("secret-found");

  setTimeout(() => {
    document.body.classList.remove("secret-found");
  }, 2200);
});

// Teddy bear actions
const teddyMessages = {
  hug: "Squeeeeeze! A giant teddy hug for my baby ♡",

  kiss: "Mwah! One soft little kiss on your forehead 😘",

  pretty: "You're so, so pretty, Avishka — even on days you don't feel like it. ♡",

  love: "I love you more than all the stars and all the tiny hearts in this corner. ♥",

  dance: "Teddy is doing a very silly happy dance just to make you smile! ✧"
};

document.querySelectorAll("[data-teddy]").forEach(button => {
  button.addEventListener("click", () => {
    const action = button.dataset.teddy;

    document.getElementById("teddySpeech").textContent =
      teddyMessages[action];

    if (action === "dance") {
      document.body.classList.add("dancing");

      setTimeout(() => {
        document.body.classList.remove("dancing");
      }, 3000);

    } else if (action === "hug" || action === "kiss") {
      floatHearts(action === "hug" ? 12 : 7);
    }
  });
});
