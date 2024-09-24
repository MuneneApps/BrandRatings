const feedbackData = {};

function rateBrand(rating, brand) {
  alert(`You rated ${brand} with ${rating} stars!`);
  feedbackData[brand] = feedbackData[brand] || { rating: 0, feedback: [] };
  feedbackData[brand].rating = rating;
}

function submitFeedback(brand) {
  const feedbackText = document.getElementById(`feedback-${brand}`).value;
  if (feedbackText.trim()) {
    feedbackData[brand].feedback.push(feedbackText);
    document.getElementById(`feedback-${brand}`).value = '';
    displayFeedback(brand);
  }
}

function displayFeedback(brand) {
  const feedbackList = document.getElementById(`feedback-list-${brand}`);
  feedbackList.innerHTML = '';
  feedbackData[brand].feedback.forEach((feedback, index) => {
    const feedbackItem = document.createElement('div');
    feedbackItem.textContent = `${index + 1}. ${feedback}`;
    feedbackList.appendChild(feedbackItem);
  });
}
