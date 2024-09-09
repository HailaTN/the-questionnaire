const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const secondName = document.getElementById('secondName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const agree = document.getElementById('agree').checked;

  fetch('https://polinashneider.space/user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer: HailaTN' 
    },
    body: JSON.stringify({
      name: name,
      secondName: secondName,
      phone: phone,
      email: email,
      agree: agree
    }),
  })
  .then(response => {
    if (!response.ok) throw new Error('Ошибка отправки данных');
    return response.json(); 
  })
  .then(data => {
    showNotification('Данные успешно отправлены!', 'success');
    form.reset();  
    console.log(data); 
  })
  .catch(error => {
    showNotification(error.message, 'error');
  });
});

function showNotification(message, type) {
  const notification = document.getElementById('notification');
  notification.className = type; 
  notification.textContent = message;
  notification.classList.remove('hidden');

  setTimeout(() => {
    notification.classList.add('hidden');
  }, 3000);
}