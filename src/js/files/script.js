// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';
import JustValidate from 'just-validate';

const validator = new JustValidate('#form', {});
validator
  .addField('#name', [{ rule: 'required' }])
  .addField('#email', [{ rule: 'required' }, { rule: 'email' }])
  .addField('#phone', [{ rule: 'required' }, { rule: 'number' }]);
