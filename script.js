// Function to close the popup and stop the video
function closePopup() {
    const videoPopup = document.getElementById('videoPopup');
    if (!videoPopup) {
        console.error('Popup element not found!');
        return;
    }

    const videoPlayer = videoPopup.querySelector('.video-player');
    if (!videoPlayer) {
        console.error('Video player element not found!');
        return;
    }

    // Hide the popup
    videoPopup.style.display = 'none';

    // Pause the video and reset playback
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
}

// Ensure the popup is hidden on page load
document.addEventListener('DOMContentLoaded', () => {
    const videoPopup = document.getElementById('videoPopup');
    if (videoPopup) {
        videoPopup.style.display = 'none';
    } else {
        console.error('Popup element not found on page load!');
    }
});

// Optional: Function to show the popup
function showPopup() {
    const videoPopup = document.getElementById('videoPopup');
    if (!videoPopup) {
        console.error('Popup element not found!');
        return;
    }

    videoPopup.style.display = 'flex';
}