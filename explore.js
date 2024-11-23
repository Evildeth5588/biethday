// Reveal Trivia Answer
function revealAnswer() {
    document.getElementById('answer').classList.remove('hidden');
  }
  
  // Countdown Timer
  const timerElement = document.getElementById('timer');
  function updateCountdown() {
    const now = new Date();
    const birthday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1); // Assume birthday is tomorrow
    const diff = birthday - now;
  
    if (diff <= 0) {
      timerElement.textContent = "🎉 It's your birthday! 🎉";
      clearInterval(countdownInterval);
      return;
    }
  
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
    timerElement.textContent = `${hours} hours, ${minutes} minutes, ${seconds} seconds left!`;
  }
  
  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
  