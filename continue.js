// Function to start confetti and play music
function startCelebration() {
    // Start the background music
    const bgMusic = document.getElementById('bg-music');
    bgMusic.play(); // This will play the music when the button is clicked
  
    // Start confetti animation
    startConfetti();
  }
  
  // Confetti Animation Function
  function startConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
  
    // Adjust canvas size to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const confetti = [];
    const confettiColors = ['#ff6f61', '#ffafbd', '#ffc3a0', '#ff9a8b', '#ff87a0'];
  
    // Generate confetti pieces
    for (let i = 0; i < 100; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        size: Math.random() * 5 + 5,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 + 2,
      });
    }
  
    // Function to draw confetti
    function drawConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
      confetti.forEach((piece) => {
        ctx.fillStyle = piece.color;
        ctx.beginPath();
        ctx.arc(piece.x, piece.y, piece.size, 0, Math.PI * 2);
        ctx.fill();
  
        piece.x += piece.speedX;
        piece.y += piece.speedY;
  
        // Reset confetti if it goes out of bounds
        if (piece.y > canvas.height) piece.y = 0;
        if (piece.x > canvas.width) piece.x = 0;
      });
  
      requestAnimationFrame(drawConfetti); // Loop the animation
    }
  
    drawConfetti(); // Start drawing the confetti
  }
  