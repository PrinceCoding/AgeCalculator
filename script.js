// Function to start the age timer when the user selects a date
function startAgeTimer() {
  const dobInput = document.getElementById('dob').value; // Fetch the selected date of birth
  if (!dobInput) return; // If no date is selected, exit the function

  const dob = new Date(dobInput); // Convert the input date string into a Date object

  // Function to calculate age components
  function calculateAge() {
    const now = new Date(); // Get the current date and time
    const diff = now - dob; // Calculate the difference in milliseconds

    // Calculate various components of the age
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); // Approximate years considering leap years
    const months = now.getMonth() - dob.getMonth() + (years * 12); // Total months
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)); // Total days
    const hours = Math.floor(diff / (1000 * 60 * 60)); // Total hours
    const minutes = Math.floor(diff / (1000 * 60)); // Total minutes
    const seconds = Math.floor(diff / 1000); // Total seconds

    return { years, months, days, hours, minutes, seconds }; // Return age as an object
  }

  // Function to update the age display dynamically
  function updateAgeDisplay() {
    const age = calculateAge(); // Get the current age
    document.getElementById('ageDisplay').innerHTML = `
      <p><strong>Years:</strong> ${age.years}</p>
      <p><strong>Months:</strong> ${age.months}</p>
      <p><strong>Days:</strong> ${age.days}</p>
      <p><strong>Hours:</strong> ${age.hours}</p>
      <p><strong>Minutes:</strong> ${age.minutes}</p>
      <p><strong>Seconds:</strong> ${age.seconds}</p>
    `; // Update the HTML content with calculated values
  }

  setInterval(updateAgeDisplay, 1000); // Recalculate and update every second
}
