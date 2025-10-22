const form = document.getElementById('contact-form');
const nameInput = document.getElementById('contact-name');
const emailInput = document.getElementById('contact-email');
const subjectInput = document.getElementById('contact-subject');
const messageInput = document.getElementById('contact-message');

const nameError = document.getElementById('error-name');
const emailError = document.getElementById('error-email');
const subjectError = document.getElementById('error-subject');
const messageError = document.getElementById('error-message');
const successMessage = document.querySelector('[data-testid="test-contact-success"]');

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function clearErrors() {
  nameError.textContent = '';
  emailError.textContent = '';
  subjectError.textContent = '';
  messageError.textContent = '';
  successMessage.textContent = '';

  nameInput.classList.remove('input-error');
  emailInput.classList.remove('input-error');
  subjectInput.classList.remove('input-error');
  messageInput.classList.remove('input-error');
}

function validateForm() {
  clearErrors();
  let isValid = true;

  if (!nameInput.value.trim()) {
    nameError.textContent = 'Full name is required';
    nameInput.classList.add('input-error');
    isValid = false;
  }

  if (!emailInput.value.trim()) {
    emailError.textContent = 'Email is required';
    emailInput.classList.add('input-error');
    isValid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address (name@example.com)';
    emailInput.classList.add('input-error');
    isValid = false;
  }

  if (!subjectInput.value.trim()) {
    subjectError.textContent = 'Subject is required';
    subjectInput.classList.add('input-error');
    isValid = false;
  }

  if (!messageInput.value.trim()) {
    messageError.textContent = 'Message is required';
    messageInput.classList.add('input-error');
    isValid = false;
  } else if (messageInput.value.trim().length < 10) {
    messageError.textContent = 'Message must be at least 10 characters';
    messageInput.classList.add('input-error');
    isValid = false;
  }

  return isValid;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateForm()) {
    successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    successMessage.style.display = 'block';

    form.reset();

    setTimeout(() => {
      successMessage.style.display = 'none';
      successMessage.textContent = '';
    }, 5000);
  }
});

[nameInput, emailInput, subjectInput, messageInput].forEach(input => {
  input.addEventListener('blur', () => {
    if (input.value.trim()) {
      validateForm();
    }
  });
});
