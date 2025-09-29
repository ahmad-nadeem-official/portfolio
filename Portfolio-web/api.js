// for newsletter subscription
const form = document.querySelector('.form');
const emailInput = document.querySelector('#emailInput');

form.addEventListener('submit', event => {
  event.preventDefault(); // stop page refresh

  const email = emailInput.value.trim();

  fetch('https://ahmadnadeem.vercel.app/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    emailInput.value = ''; // clear only after success
    alert("subscribed sent successfully!");
  })
  .catch(error => console.error('Error:', error));
});




// For meeting request
// meeting request form  
document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#mail');
  const timeInput = document.querySelector('#meeting-time');
  const messageInput = document.querySelector('#message');

  // Use one consistent name for the button variable!
  const submitButton = document.querySelector('.form-group button[type="submit"]');

  if (!submitButton) {
    console.error('Submit button not found inside .meeti');
    return;
  }

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const date = timeInput.value.trim();
    const message = messageInput.value.trim();

    const data = { name, email, date, message };

    fetch('https://ahmadnadeem.vercel.app/meeting', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        date: data.date,
        message: data.message
      })
    })
    .then(res => res.json())
    .then(response => {
      console.log('Meeting scheduled:', response);
      nameInput.value = '';
      emailInput.value = '';
      timeInput.value = '';
      messageInput.value = '';
      alert('Meeting successfully scheduled!');
      let met1 = document.querySelector(".meet01");
      met1.style.visibility = 'hidden';

    })
    .catch(error => {
      console.error('Error:', error);
      alert('Something went wrong while booking the meeting.');
    });
  });
});





