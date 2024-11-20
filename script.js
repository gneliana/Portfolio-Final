function openPopup() {
    const popup = document.getElementById('videoPopup');
    popup.style.display = 'flex';
  }
  
  function closePopup() {
    const popup = document.getElementById('videoPopup');
    const video = popup.querySelector('.video-player');
    if (video) {
      video.pause(); // Stops video playback
      video.currentTime = 0; // Resets video to the beginning
    }
    popup.style.display = 'none';
  }
  
  window.onload = function () {
    openPopup();
  };