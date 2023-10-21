// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';
import JustValidate from 'just-validate';
import Toastify from 'toastify-js';
import sal from 'sal.js';

sal({
  threshold: 0.3,
});

const validator = new JustValidate('#form', {});
validator
  .addField('#name', [{ rule: 'required' }])
  .addField('#email', [{ rule: 'required' }, { rule: 'email' }])
  .addField('#phone', [{ rule: 'required' }, { rule: 'number' }]);

const forms = document.querySelectorAll('form');
forms.forEach((form) => {
  const formInputs = form.querySelectorAll('form .required-input');
  const formButton = form.querySelector('.button');
  console.log(formButton);
  formInputs.forEach((input) => {
    input.addEventListener('input', () => {
      const isFormFilled = Array.from(formInputs).every((input) => {
        if (input.type === 'checkbox') {
          return input.checked;
        } else {
          return input.value !== '';
        }
      });
      if (isFormFilled) {
        formButton.classList.add('_active');
      } else {
        formButton.classList.remove('_active');
      }
    });
  });
});

document.querySelectorAll('form input[type="submit"]').forEach((formInput) => {
  formInput.addEventListener('click', () => {
    formInput.value = 'Please wait...';
    formInput.classList.add('_sending');
  });
});

document.addEventListener('wpcf7invalid', function (event) {
  let submitButton = event.target.querySelector('input[type="submit"]');
  if (submitButton) {
    submitButton.value = 'APPLY NOW';
    submitButton.classList.remove('_sending');
  }
  Toastify({
    text: 'One or more fields contain erroneous data',
    duration: 6000,
    fontSize: 30,
    gravity: 'top',
    position: 'right',
    style: {
      background: '#F27C4F',
    },
    onClick: function () {},
  }).showToast();
});

document.addEventListener(
  'wpcf7mailsent',
  function (event) {
    flsModules.popup.close('#popup');
    let submitButton = event.target.querySelector('input[type="submit"]');
    if (submitButton) {
      submitButton.value = 'GET FREE REPORT NOW';
      submitButton.classList.remove('_sending');
    }
    Toastify({
      text: "Got it! We'll get in touch soon.",
      duration: 6000,
      fontSize: 30,
      gravity: 'bottom',
      position: 'center',
      style: {
        background: '#5C6BD7',
      },
      onClick: function () {},
    }).showToast();
  },
  false,
);

document.querySelectorAll('.footer__copyright span').forEach((item) => {
  item.textContent = new Date().getFullYear();
});
