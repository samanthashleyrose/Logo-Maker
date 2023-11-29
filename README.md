# SVG Logo Generator
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

The SVG Logo Generator is a versatile Node.js command-line application designed to simplify the creation of logos through user input, producing high-quality SVG files. Checkout the [Usage](#usage) section for a demonstration of the following tools:

**Text Customization:**
Specify the desired text for your logo, with support for up to three characters.

**Color Selection:**
Choose the color of the text to suit your branding preferences.

**Shape Customization:**
Tailor your logo further by selecting both the color and shape of the background. Options include circle, square, and triangle.

This user-friendly generator employs an interactive questionnaire, powered by the Inquirer library, to seamlessly guide you through the customization process. With its straightforward approach, the SVG Logo Generator empowers users to effortlessly create simple logos that align with their unique vision and brand identity.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [How To Contribute](#how-to-contribute)
- [Credits](#credits)
- [License](#license)

## Installation

In order to use the SVG Logo Generator, it is necessary to have a code editor, such as Visual Studio Code (VSCode), and Node.js installed on your system.

1. Begin by installing Node.js on your computer's terminal/commmand-line. For detailed installation instructions, vist <a href='https://nodejs.org/en'>Node.js.org</a>.

2. Verify the installation of npm, which usually comes bundled with Node.js. Execute the command `npm -v` in your terminal/commmand-line to confirm that you have the latest version downloaded. If npm is not installed, run the command `npm i` before continuing.

3. In addition run the command `npm install inquirer@8`. For the SVG Logo Generator to function properly, you must have inquirer version 8.2.6 installed.

## Usage

To effectively use the SVG Logo Generator, ensure that all installation requirements are fulfilled before proceeding with the following usage guidelines.

1. **Clone the Repository:** <br>Begin by cloning the GitHub repository by selecting "Code." Copy the SSH link then execute the `git clone <paste SSH link>` command in your terminal/commmand-line. Next, open the cloned project in your preferred code editor.

2. **Run the Generator:** <br>Right click on the `index.js` file and select "Open in Integrated Terminal". Run the command `node index.js` then answer the prompted questions as they appear.

3. **Confirmation and Retrieval:** <br>Once the questionnaire has been completed, the terminal will confirm the successful generation of the SVG with the message "A new logo.svg has been created and saved to examples". You can now locate the generated `logo.svg` file in the examples folder.

4. **Adjusting Text Placement:** <br>If the text in the generated `logo.svg` does not ideally align within the chosen shape, utilize the 'x,' 'y,' and 'font-size' tags to adjust its position. See [Features](#features) for a demonstration on how to use each tag.

5. **Rename the SVG File:** <br>After generating `logo.svg`, consider renaming the file to your preferred name to prevent overwriting when generating a new one.
Failure to rename may result in a newly generated `logo.svg` overwriting the existing file.

6. **Local Copy and Repository Management:** <br>You may keep a local copy of this cloned repository on your computer for convenient future use. Alternatively, you can remove the cloned repository from your computer and re-clone it as needed.

Follow these steps to ensure a seamless and controlled process for generating, adjusting, and managing your SVG logos.

https://github.com/samanthashleyrose/SVG-Logo-Maker/assets/142939966/a07f5b17-ddf0-4503-b2ca-ec45fb8fc460

## Features

https://github.com/samanthashleyrose/SVG-Logo-Maker/assets/142939966/bec23585-f555-400a-ad0c-f67385631b10

## Tests

This project uses Jest for testing. To run the tests, ensure that you have Jest installed as a development dependency by running: `npm install --save-dev jest`.

After installing Jest, you can run the tests with the following command: `npm test`. This command will execute the Jest test suite. Each tests collectively guarantees the accuracy of the SVG logo generator, providing confidence in its functionality. The tests are categorized into two main sections: **Shape Rendering** and **User Input Confirmation**.

### Shape Rendering Tests

Each shape class (`Circle`, `Square`, `Triangle`) is tested to ensure the correctness of their rendering functionality. The primary focus is on the `render()` method, which is expected to return the precise SVG string corresponding to the user's choice of shape. Additionally, the user's selected color is approiately integrated into the SVG string within the fill attribute.

### User Input Confirmation Test
This test focuses on confirming the validity of user inputs. It verifies that the length of user-inputted text adheres to the specified limit.

## How to Contribute

If you encounter any issues while using the SVG Logo Generator, I encourage you to open a new issue or submit a pull request through this repository. Your feedback is valuable, and your contributions are appreciated.

Additionally, you are welcome to report any concerns, propose improvements, or share your suggestions. Please don't hesitate to reach out regarding any of these topics. I look forward to collaborating with you to enhance the SVG Logo Generator.

GitHub Profile: <a href="https://github.com/samanthashleyrose">samanthashleyrose</a><br>
Email: samantha.rose327@gmail.com

### Thank you for your interest and support!

## Credits

#### Knowledge Assitance From:
<li>Lee Warrrick <a href="https://leewarrick.com/">Personal Portfolio</a></li>
<li>Mia Ciasullo <a href="https://github.com/miacias">GitHub Portfolio</a></li>

#### Technologies Used:
<li><a href="https://nodejs.org/en/">Node.js</a></li>
<li><a href="https://www.npmjs.com/package/inquirer/v/8.2.4?activeTab=readme#prompt">NPM</a></li>
<li><a href="https://chat.openai.com/">ChatGPT</a></li>

#### Documentation Used:
<li><a href="https://en.wikipedia.org/wiki/SVG">SVG Wikipedia</a></li>
<li><a href="https://jestjs.io/docs/cli">Jest CLI Options</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial">MDN Web Docs - SVG Tutorial</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">MDN Web Docs - Regular Expressions</a></li>
<li><a href="https://git.bootcampcontent.com/University-of-Connecticut/CONN-VIRT-FSF-PT-09-2023-U-LOLC/-/tree/main/10-OOP/02-Challenge?ref_type=heads">Circle and Triangle Starter Code</a></li>
<li><a href="https://www.youtube.com/watch?v=GJYMcLus3v0">Thomas' Object Oriented Programming SVG LOGO MAKER - Youtube</a></li>

## License

This project is licensed under the <a href="https://opensource.org/licenses/MIT">MIT LICENSE</a> - see the [LICENSE](./LICENSE) file for details.
