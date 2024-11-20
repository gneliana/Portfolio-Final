// Function to open the popup
function openPopup() {
    const popup = document.getElementById('videoPopup');
    popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('videoPopup');
    popup.style.display = 'none';
}

// Automatically open the popup when the page loads
window.onload = function() {
    openPopup();
};