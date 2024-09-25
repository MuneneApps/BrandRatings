function showLogin() {
  document.getElementById('auth-section').style.display = 'block';
  document.getElementById('login-section').style.display = 'block';
  document.getElementById('create-account-section').style.display = 'none';
}

function showCreateAccount() {
  document.getElementById('auth-section').style.display = 'block';
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('create-account-section').style.display = 'block';
}

function rateBrand(rating) {
  alert(`You rated this brand ${rating} stars!`);
}

function submitFeedback(brand) {
  const feedback = document.getElementById(`feedback-${brand}`).value;
  const feedbackList = document.getElementById(`feedback-list-${brand}`);
  const feedbackItem = document.createElement('div');
  feedbackItem.textContent = feedback;
  feedbackList.appendChild(feedbackItem);
}

function showFeedback(brand) {
  const feedbackList = document.getElementById(`feedback-list-${brand}`);
  feedbackList.style.display = feedbackList.style.display === 'none' ? 'block' : 'none';
}

function loginUser() {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  console.log(`Logging in with Email: ${email}, Password: ${password}`);
}

function createAccount() {
  event.preventDefault();
  const name = document.getElementById('create-name').value;
  const email = document.getElementById('create-email').value;
  const password = document.getElementById('create-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  console.log(`Creating account for Name: ${name}, Email: ${email}`);
}
