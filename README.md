# SVG-Logo-Maker
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

A Node.js command-line application that takes in user input to generate a logo and save it as an SVG file.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
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

4. **Adjusting Text Placement:** <br>If the text in the generated `logo.svg` does not ideally align within the chosen shape, utilize the 'x,' 'y,' and 'font-size' tags to adjust its position.

5. **Rename the SVG File:** <br>After generating `logo.svg`, consider renaming the file to your preferred name to prevent overwriting when generating a new one.
Failure to rename may result in a newly generated `logo.svg` overwriting the existing file.

6. **Local Copy and Repository Management:** <br>You may keep a local copy of this cloned repository on your computer for convenient future use. Alternatively, you can remove the cloned repository from your computer and re-clone it as needed.

Follow these steps to ensure a seamless and controlled process for generating, adjusting, and managing your SVG logos.

## How to Contribute


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
<li><a href="https://www.youtube.com/watch?v=GJYMcLus3v0">Thomas' Object Oriented Programming SVG LOGO MAKER - Youtube</a></li>

## License

This project is licensed under the <a href="https://opensource.org/licenses/MIT">MIT LICENSE</a> - see the [LICENSE](./LICENSE) file for details.