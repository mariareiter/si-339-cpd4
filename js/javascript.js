// Check for prefers-reduced-motion setting for reduced motion users!!!
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
    // Disable lightbox functionality for reduced motion users
    const lightboxLinks = document.querySelectorAll('[data-lightbox="gallery"]');
    lightboxLinks.forEach(link => {
        link.removeAttribute('data-lightbox'); // Remove data-lightbox attribute to disable lightbox
        link.removeAttribute('href'); // Remove href attribute to disable link
    });
    
}


function showMorePhotos() {
    const gallery = document.querySelector('#gallery');
    const button = document.querySelector('.ShowMoreButton');
    
    // Toggle visibility of additional photos
    const hiddenPhotos = gallery.querySelectorAll('a:nth-child(n+9)');
    
    if (hiddenPhotos[0].style.display === 'none' || !hiddenPhotos[0].style.display) {
        hiddenPhotos.forEach(photo => {
            photo.style.display = 'block';
        });
        button.textContent = 'Show Less Photos'; // Update button text
    } else {
        hiddenPhotos.forEach(photo => {
            photo.style.display = 'none';
        });
        button.textContent = 'See More Photos'; // Revert button text
    }
}

document.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
    this.onerror = null; 
    this.src = './images/default_image.jpg';
    this.alt = "Image not available";

        // Check if the parent link has lightbox attributes and remove them if this is a default image
        const parentLink = this.closest('a[data-lightbox]');
        if (parentLink) {
            parentLink.removeAttribute('data-lightbox');
            parentLink.removeAttribute('data-title');
            parentLink.style.cursor = "default"; // Optional: Change cursor to indicate no action
            parentLink.onclick = function(event) { event.preventDefault(); }; // Prevent default click action
        }
    };
});