// Get the form element
const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');

// Add event listener to the form
form.addEventListener('submit', sendEmail);

async function sendEmail(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  // Get the email value
  const email = emailInput.value.trim();

  // Check if email is empty
  if (!email) {
    alert('Please enter your email!');
    return;
  }

  // Show a loading message
  alert('Subscribing... Please wait.');

  try {
    // Send POST request to your API
    const response = await fetch('https://ahmadnadeem.vercel.app/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }), // Send email as JSON
    });

    // Check if the response is successful
    if (response.ok) {
      alert('Subscribed successfully!');
      emailInput.value = ''; // Clear the input field
    } else {
      // Get error message from API if available
      const errorData = await response.json().catch(() => ({}));
      alert(`Subscription failed: ${errorData.message || 'Please try again.'}`);
    }
  } catch (error) {
    // Handle network or other errors
    console.error('Error:', error);
    alert('Something went wrong! Check your internet or try again later.');
  }
}