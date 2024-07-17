// Define a function to modify the spin wheel settings
function modifySpinWheelSettings() {
  // Wait for the window to load
  window.onload = function() {
    // Wait for the spin button to be clickable
    const interval = setInterval(() => {
      const spinButton = document.querySelector('.spinner-wheel-spin-button');
      if (spinButton && spinButton.disabled === false) {
        // Wait for the l object to be defined
        const interval2 = setInterval(() => {
          if (window.parent.l) {
            // Modify the duration and spins properties
            window.parent.l.duration = 20; // Set the new duration (in seconds)
            window.parent.l.spins = 10; // Set the new number of spins

            // Print a message to the console to confirm the modification
            console.log("Spin wheel settings modified: duration =", window.parent.l.duration, ", spins =", window.parent.l.spins);

            // Clear the intervals
            clearInterval(interval);
            clearInterval(interval2);
          }
        }, 100);
      }
    }, 100);
  }
}

// Call the function
modifySpinWheelSettings();
