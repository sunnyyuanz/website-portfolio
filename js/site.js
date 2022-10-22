let menuClick = document.querySelector('.menubar-mobile');
let menubar = document.querySelector('.menubar');

menuClick.addEventListener('click', function () {
  menubar.classList.toggle('clicked');
});

const form = document.getElementById('contact');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let msg = document.getElementById('message').value;
  alert('Submitted! Will be in touch with you soon!');
  console.log('form is submitted!');
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('phone', phone);
  localStorage.setItem('msg', msg);
});
