// Function to close the popup and stop the video
function closePopup() {
    const videoPopup = document.getElementById('videoPopup');
    const videoPlayer = videoPopup.querySelector('.video-player');

    // Ensure the popup exists
    if (videoPopup) {
        videoPopup.style.display = 'none'; // Hide the popup
    } else {
        console.error('Popup element not found!');
    }

    // Pause the video and reset it
    if (videoPlayer) {
        videoPlayer.pause(); // Pause the video
        videoPlayer.currentTime = 0; // Reset the video time to the start
    } else {
        console.error('Video player element not found!');
    }
}

// Ensure the popup is hidden on page load
window.onload = () => {
    const videoPopup = document.getElementById('videoPopup');
    if (videoPopup) {
        videoPopup.style.display = 'none'; // Ensure popup is hidden
    }
};

// Optional: Function to show the popup
function showPopup() {
    const videoPopup = document.getElementById('videoPopup');
    if (videoPopup) {
        videoPopup.style.display = 'flex'; // Display the popup
    }
}