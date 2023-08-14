# 10 ModuleChallenge SVGLogoMaker sambailey
Northwestern Bootcamp challenge week 10

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)

![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

# Table of Contents
- [10 ModuleChallenge SVGLogoMaker sambailey](#10-modulechallenge-svglogomaker-sambailey)
- [Table of Contents](#table-of-contents)
  - [Project description](#project-description)
  - [Application functionality](#application-functionality)
  - [Technology used](#technology-used)
  - [Usage instructions](#usage-instructions)
  - [Testing](#testing)
  - [Video walkthrough](#video-walkthrough)
  - [Screen captures](#screen-captures)
  - [Sample images](#sample-images)
  - [Credits](#credits)

## Project description

The intent of the project is to programmatically create a logo in the form of a [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) based on user input.

## Application functionality

Using the command line interface (`CLI`), the user of the application can:
1. select up to three characters for the logo text and from three shapes: a circle, square or triangle

2. use [svg color keywords]( https://upload.wikimedia.org/wikipedia/commons/2/2b/SVG_Recognized_color_keyword_names.svg) or hexadecimal values for the text and shape colors

## Technology used

The application was built using [node.js, v18.17.0](https://nodejs.org/en), an asynchronous, event-driven JavaScript runtime designed to build scalable network applications, [npm inquirer, v8.2.6](https://www.npmjs.com/package/inquirer), a collection of common interactive command line user interfaces, and [jest, 9.6.2](https://jestjs.io/), a *delightful* JavaScript test framework.

Additionally, the generated `svg` logo includes an inline, embedded font (`roboto condensed sans serif`) from [google fonts](https://fonts.google.com/). The `inquirer` module has been extended and uses the [maxlength-input-prompt, v1.0.2](https://github.com/jwarby/inquirer-maxlength-input-prompt) which simplifies the implementation, usability and testing of the application.

## Usage instructions

<details>
<summary> Expand for installation, usage and generated logo details.</summary>

1. **Installation**

    *prerequisites:*
    
    [VS Code](https://code.visualstudio.com/download)

    [required packages, link to package.json in github repository](https://github.com/thoughtsinbuttermilk/10-ModuleChallenge-SVGLogoMaker-sambailey/blob/a6165d792efc7fb656f1b2b635ee339fb8d9e64d/package.json)


   • Clone the repository: `git clone git@github.com:thoughtsinbuttermilk/10-ModuleChallenge-SVGLogoMaker-sambailey.git`

   •  Install and launch VS Code

   • In the `terminal`, use `npm` to install required packages

2. **Usage, CLI**

    Run the application by entering `node index.js` in the `terminal` and follow the prompts

3. **Generated logo**
   
    After running the application, a file named `logo.svg` will be generated in the root of the repository
</details>

## Testing

The application is lightly guarded with `jest` unit tests. After cloning the repository and installing the dependencies, the tests can be run by typing `jest` in the root of the local repository. All tests are in a passing state when run against `main`.

## Video walkthrough

Please see [this video](https://drive.google.com/file/d/1QFb5mc9S42LY-xphfu1fAy6aX29D4g-k/view?usp=sharing) which will  show you how the application is run in the terminal.

Please see [this video](https://drive.google.com/file/d/1J5AXEQ3iRWJfFXKKlO6MYijpoWjyNK8_/view?usp=sharing) which will show you how to run the unit test suite for the application (passing against `main` branch).

## Screen captures

A [screen capture]() of the terminal after the application has generated a `logo.svg` file

A [screen capture]() of VS Code after the application has generated a `logo.svg` file in the root of the repository

## Sample images

Sample images for each of the shapes supported by the application:

[PGH circle: yellow on black, this was created in the walk through demo of the app running in the CLI](https://github.com/thoughtsinbuttermilk/10-ModuleChallenge-SVGLogoMaker-sambailey/blob/47678a4dcbe810b3c87eb16f3306e1f6b8af071c/examples/sample%20logos/logo-PGH.svg)

["warning" logo: note the text is not centered in the triangle, this will be fixed in an update to the app](https://github.com/thoughtsinbuttermilk/10-ModuleChallenge-SVGLogoMaker-sambailey/blob/89564bbd47ea63b9fc4ba8a72292721d1f038b66/examples/sample%20logos/logo-warning.svg)

["smb" initials square](https://github.com/thoughtsinbuttermilk/10-ModuleChallenge-SVGLogoMaker-sambailey/blob/89564bbd47ea63b9fc4ba8a72292721d1f038b66/examples/sample%20logos/logo-smb.svg)

## Credits

I would like to thank my Northwestern Bootcamp instructor, [NikkiTheBugSlayer](https://github.com/NikkiTheBugSlayer) for her exceptional investments to ensure our cohort is able to understand and learn the concepts taught during this coursework. Out teaching assistants, especially Jason Thekkekara (a.k.a JSON), Dustin, our student success manager, and the fine and thoughtful crew of graders for your support and patient approach as I learn. *Thank-you.*