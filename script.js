//your JS code here. If required.
function updateTimer() {
  const timerElement = document.getElementById("timer");
  const now = new Date();

  // Format: Day Month Year HH:MM:SS
  const dateString = now.toLocaleDateString();
  const timeString = now.toLocaleTimeString();

  timerElement.textContent = `${dateString} ${timeString}`;
}

// Update immediately
updateTimer();

// Update every second
setInterval(updateTimer, 1000);
