const inquirer = require('inquirer');

const { confirmTextLength } = require('../index.js');

describe('User Input Confirmation', () => {
  test('Text input should be up to 3 characters', () => {
    const textConfirmationResult = confirmTextLength('123');
    expect(textConfirmationResult).toBe(true);

    const invalidTextConfirmationResult = confirmTextLength('1234');
    expect(invalidTextConfirmationResult).toBe(false);
  });

});