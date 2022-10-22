const fs = require('fs');
let name = localStorage.getItem('name');
let email = localStorage.getItem('email');
let phone = localStorage.getItem('phone');
let msg = localStorage.getItem('msg');

fs.appendFile('contact.txt', { name, email, phone, msg }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(
      'file contents of file after append:',
      fs.readFileSync('contact.txt', 'utf8')
    );
  }
});
