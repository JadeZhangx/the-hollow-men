function createHole(event) {
    const link = document.querySelector('a[href="section2.html"]'); // Select the link
    const linkRect = link.getBoundingClientRect(); // Get dimensions and position of the link
    const proximityThreshold = 50; // Distance threshold in pixels to trigger the link

    // Calculate proximity area around the link
    const linkProximityArea = {
        top: linkRect.top - proximityThreshold,
        bottom: linkRect.bottom + proximityThreshold,
        left: linkRect.left - proximityThreshold,
        right: linkRect.right + proximityThreshold
    };

    // Check if the click is within the proximity area of the link
    if (event.clientX >= linkProximityArea.left && event.clientX <= linkProximityArea.right && 
        event.clientY >= linkProximityArea.top && event.clientY <= linkProximityArea.bottom) {
        link.click(); // Programmatically trigger the link
    } else {
        const background = document.getElementById('background-container');
        const hole = document.createElement('div');
        hole.className = 'hole';
        hole.style.position = 'absolute';
        hole.style.left = `${event.clientX - 50}px`;  // Center the hole at the cursor
        hole.style.top = `${event.clientY - 50}px`;  // Center the hole at the cursor

        background.appendChild(hole);
        setTimeout(() => { // Delay to ensure the transition is visible
            hole.style.width = '100px';  // Final width of the hole
            hole.style.height = '100px';  // Final height of the hole
        }, 10);
    }
}
