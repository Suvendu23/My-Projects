// Matrix Rain Effect
const canvas = document.getElementById('matrix-background');
const ctx = canvas.getContext('2d');

// Resize canvas to fit the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters for the Matrix effect
const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()-_=+<>?/|{}[]';
const fontSize = 15; // Size of the characters
const columns = Math.floor(canvas.width / fontSize); // Number of columns
const drops = Array(columns).fill(1); // Initialize drop positions for each column

// Draw function for the Matrix effect
function drawMatrix() {
    // Slightly clear the canvas for a trailing effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the text color and font
    ctx.fillStyle = '#0f0';
    ctx.font = `${fontSize}px monospace`;

    // Loop through each drop
    drops.forEach((y, index) => {
        // Pick a random character from the matrixChars
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        // Draw the character
        ctx.fillText(text, index * fontSize, y * fontSize);

        // Randomly reset the drop to the top or move it downward
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;
        }
        drops[index]++;
    });
}

// Run the Matrix effect
setInterval(drawMatrix, 50);
