// Contact form submit handling
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Extract form data
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all fields.";
    return;
  }

  if (!emailRegex.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    return;
  }

  // Here you can integrate your backend or email API
  // For now, simulate success:
  formMessage.style.color = "#00ff00";
  formMessage.textContent = `Thanks, ${name}! Your message has been sent.`;

  form.reset();

  // Reset color after 5 seconds
  setTimeout(() => {
    formMessage.textContent = "";
    formMessage.style.color = "#ffd700";
  }, 5000);
});
