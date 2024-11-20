// Function to close the popup and stop the video
function closePopup() {
    const videoPopup = document.getElementById('videoPopup');
    const videoPlayer = videoPopup.querySelector('.video-player');

    if (videoPopup) {
        videoPopup.style.display = 'none';
    } else {
        console.error('Popup element not found!');
    }

    if (videoPlayer) {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    } else {
        console.error('Video player element not found!');
    }
}

// Function to show the popup
function showPopup() {
    const videoPopup = document.getElementById('videoPopup');
    if (videoPopup) {
        videoPopup.style.display = 'flex';
    } else {
        console.error('Popup element not found!');
    }
}

// Ensure the popup is displayed on page load
document.addEventListener('DOMContentLoaded', () => {
    showPopup(); // Show the popup on page load
});