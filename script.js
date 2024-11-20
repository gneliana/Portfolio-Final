// Function to close the popup and stop the video
function closePopup() {
    const videoPopup = document.getElementById('videoPopup');
    const videoPlayer = videoPopup.querySelector('.video-player');

    if (videoPopup) {
        // Hide the popup
        videoPopup.style.display = 'none';
    } else {
        console.error('Popup element not found!');
    }

    if (videoPlayer) {
        // Pause the video and reset playback
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    } else {
        console.error('Video player element not found!');
    }
}

// Ensure the popup is hidden on page load
document.addEventListener('DOMContentLoaded', () => {
    const videoPopup = document.getElementById('videoPopup');
    if (videoPopup) {
        videoPopup.style.display = 'none';
    }
});

// Optional: Function to show the popup
function showPopup() {
    const videoPopup = document.getElementById('videoPopup');
    if (videoPopup) {
        videoPopup.style.display = 'flex';
    }
}