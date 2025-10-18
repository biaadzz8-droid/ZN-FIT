function showScreen(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.add('hidden'));
  document.getElementById(screenId).classList.remove('hidden');
}

function saveWeight() {
  const input = document.getElementById('weightInput');
  const value = input.value;
  if(!value) return alert('Digite seu peso!');
  
  let weights = JSON.parse(localStorage.getItem('weights')) || [];
  weights.push({date: new Date().toLocaleDateString(), weight: value});
  localStorage.setItem('weights', JSON.stringify(weights));
  input.value = '';
  displayWeights();
}

function displayWeights() {
  const weights = JSON.parse(localStorage.getItem('weights')) || [];
  const list = document.getElementById('weightList');
  list.innerHTML = '';
  weights.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.date}: ${item.weight} kg`;
    list.appendChild(li);
  });
}

displayWeights();