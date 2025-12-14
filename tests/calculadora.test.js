const calculadora = require('../models/calculadora.js');

test('soma 2 + 3 para ser igual a 5', () => {
  expect(calculadora.somar(3,2)).toBe(5);
});
