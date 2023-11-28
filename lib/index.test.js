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
});