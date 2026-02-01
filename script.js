document.addEventListener("DOMContentLoaded", () => {

  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const msg = document.getElementById("message");
  const sound = document.getElementById("yesSound");
  const gif = document.getElementById("loveGif");

  // SAFETY CHECK
  if (!yesBtn || !noBtn) {
    console.error("Buttons not found");
    return;
  }

  /* NO button escape */
  function moveNo() {
    const x = Math.random() * 200;
    const y = Math.random() * 80;
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  }

  noBtn.addEventListener("mouseenter", moveNo);

  /* YES click */
  yesBtn.addEventListener("click", () => {
    msg.innerText = "Best decision ever 💖 😍";

    // Play sound safely
    sound.currentTime = 0;
    sound.play().catch(() => {});

    // Bounce
    yesBtn.classList.add("bounce");
    setTimeout(() => yesBtn.classList.remove("bounce"), 600);

    // Glow
    document.body.classList.add("glow");

    // Effects
    createHearts();
    confettiExplosion();

    // Show GIF
    setTimeout(() => {
      gif.style.display = "block";
    }, 800);
  });

  function createHearts() {
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerText = "💖";
      heart.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    }
  }

  function confettiExplosion() {
    for (let i = 0; i < 30; i++) {
      const c = document.createElement("div");
      c.className = "confetti";
      c.innerText = ["🎉", "✨", "😍", "💖"][Math.floor(Math.random() * 4)];
      c.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 3000);
    }
  }

});
