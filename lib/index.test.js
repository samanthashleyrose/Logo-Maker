const inquirer = require('inquirer');

const { confirmTextLength, confirmColor } = require('../index.js');

describe('User Input Confirmation', () => {
  // Test for -- What would you like to display as the text?
  describe('Confirm text character amount', () => {
    it('Text input should be up to 3 characters', () => {
      const textConfirmationResult = confirmTextLength('123');
      expect(textConfirmationResult).toBe(true);
  
      const invalidTextConfirmationResult = confirmTextLength('1234');
      expect(invalidTextConfirmationResult).toBe(false);
    });
  });

  // Test for -- What color would you like the text/shape to be?
  describe('Confirm color input', () => {
    it('Text color input should be a correct color keyword or hexadecimal code', () => {
      const colorConfirmationResult = confirmColor('red');
      expect(colorConfirmationResult).toBe(true);
    });

    it('Error message should return when text color input is incorrect', () => {
      const colorConfirmationResult = confirmColor('na');
      expect(colorConfirmationResult).toBe(false);
    });
  });
});