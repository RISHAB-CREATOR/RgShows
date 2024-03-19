function blockAds() {
    // Remove elements by class name
    document.querySelectorAll('.ad, .ads, .advert, .advertisement, .ad-container, .ad-wrapper').forEach(function(element) {
        element.remove();
    });

    // Remove elements by tag name
    document.querySelectorAll('iframe, script').forEach(function(element) {
        // Check if the src attribute contains 'ads' or 'ad'
        if (element.tagName === 'IFRAME' && (element.src.includes('ads') || element.src.includes('ad'))) {
            element.remove();
        }
    });

    // Remove elements by ID
    var adIds = ['ad', 'ads', 'advert', 'advertisement'];
    adIds.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.remove();
        }
    });

    // Remove elements by inline styles
    document.querySelectorAll('*[style*="display: none"], *[style*="visibility: hidden"]').forEach(function(element) {
        element.remove();
    });
}

// Call the function when the page is loaded
window.onload = blockAds;
