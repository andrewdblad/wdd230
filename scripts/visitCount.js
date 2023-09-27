function incrementVisitCount() {
    // Check if 'visitCount' key exists in localStorage
    if (localStorage.getItem('visitCount')) {
        // Get the current visit count from localStorage
        let visitCount = parseInt(localStorage.getItem('visitCount'));

        // Increment the visit count by 1
        visitCount++;

        // Update the visit count in the DOM
        document.getElementById('visit-counter').textContent = visitCount;

        // Update the visit count in localStorage
        localStorage.setItem('visitCount', visitCount);
    } else {
        // If 'visitCount' doesn't exist in localStorage, initialize it with 1
        localStorage.setItem('visitCount', 1);
    }
}

// Call the incrementVisitCount function to update the visit count
incrementVisitCount();