// Function to move the meme image around the page
function moveMeme() {
    const memeImage = document.getElementById("meme_img");
    const x = Math.random() * (window.innerWidth - memeImage.clientWidth);
    const y = Math.random() * (window.innerHeight - memeImage.clientHeight);
    memeImage.style.left = x + "px";
    memeImage.style.top = y + "px";
}

// Function to start moving the meme image
function startMoving() {
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");

    if (!startButton.disabled) {
        intervalId = setInterval(moveMeme, 1000); // Move every 1 second
        startButton.disabled = true;
        stopButton.disabled = false;
    }
}

// Function to stop moving the meme image
function stopMoving() {
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");

    if (!stopButton.disabled) {
        clearInterval(intervalId);
        startButton.disabled = false;
        stopButton.disabled = true;
    }
}

// Initialize variables
let intervalId;

// Add event listeners to buttons
document.getElementById("startButton").addEventListener("click", startMoving);
document.getElementById("stopButton").addEventListener("click", stopMoving);
