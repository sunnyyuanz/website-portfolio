let menuClick = document.querySelector('.menubar-mobile');
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let nameErr = document.getElementById('nameErr');
let emailErr = document.getElementById('emailErr');

let menubar = document.querySelector('.menubar');

menuClick.addEventListener('click', function () {
  menubar.classList.toggle('clicked');
});

const form = document.getElementById('contact');

function validation() {
  let isReq = true;

  if (!name) {
    nameErr.innerHTML = 'Please give me a name';
    isReq = false;
  }
  if (!email) {
    emailErr.innerHTML = 'Please give me an email';
    isReq = false;
  } else if (!email.includes('.') || !email.includes('@')) {
    emailErr.innerHTML = 'Please give me a valid email';
    isReq = false;
  }

  return isReq;
}

// function submitForm(e) {
//   e.preventDefault();
//   const isReq = validation();
//   console.log(isReq);

//   if (isReq) {
//     alert('Submitted! Will be in touch with you soon!');
//     console.log('form is submitted!');
//   }
//   console.log('submit is clicked');
// }

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const isReq = validation();
  console.log(isReq);

  if (isReq) {
    alert('Submitted! Will be in touch with you soon!');
    console.log('form is submitted!');
  }
  console.log('submit is clicked');
});
