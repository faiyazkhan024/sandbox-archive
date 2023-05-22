# Multi-Level Dropdowns

"Multi-Level Dropdowns" is an assignment project - a web application built using ViteJS, React, and Typescript. This project specifically focuses on creating multi-level dropdown menus that can be used in various web applications. The dropdown menus are styled using CSS Modules, enabling modular and maintainable styling.

**One unique aspect of this project is that the dropdown functionality is implemented through CSS only.**

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [About Stack](#about-stack)
- [Configuration](#configuration)
- [License](#license)

## Prerequisites

To use the Multi-Level Dropdowns project, you'll need to have the following installed on your machine:

- Node.js (version 14 or later)
- npm (version 7 or later)

## Installation

To install the Multi-Level Dropdowns project, clone the sandbox repository to your local machine:

1. Clone the sandbox repository to your local machine

   ```bash
   git clone https://github.com/faiyazkhan024/sandbox.git
   ```

2. Navigate to the "Multi-Level Dropdowns" project directory

   ```bash
   cd sandbox/multi-level-dropdowns
   ```

3. Install the project dependencies

   ```bash
    npm install
   ```

## Usage

- **To start the development server for the "Multi-Level Dropdowns" project, run the following command in the project directory:**

  ```bash
  npm start
  ```

  This will start the development server at <http://localhost:3000>. You can view the project in your web browser by navigating to this URL.

- **To build the project for production, run the following command:**

  ```bash
  npm run build
  ```

  This will create a production-ready build of the project in the `dist` directory.

- **To preview the production build, run the following command:**

  ```bash
  npm run preview
  ```

  This will start a local server at <http://localhost:5000> where you can preview the production build of the project.

- **To run the linting process, run the following command:**

  ```bash
  npm run lint
  ```

  This command will execute the code linting process to check for errors, style inconsistencies, and code quality issues in your project.

## Project Structure

The project structure consists of the following directories:

- `public/`: Contains public files and static assets.
- `src/`: Contains the project's source code.
  - `assets/`: Contains images, fonts, and other project assets.
  - `components/`: Contains React components.
  - `contexts/`: Contains context and provider components.
  - `data/`: Contains default state and data for the project.
  - `hooks/`: Contains custom hooks.
  - `interfaces/`: Contains custom interfaces.
  - `pages/`: Contains top-level React components representing each app page.

## Deployment

To deploy the project, you can use any hosting service that supports static site hosting. Some popular options include Netlify, Vercel, and GitHub Pages.

## Testing

To run the tests for the Multi-Level Dropdowns project, run the following command in the project directory:

```bash
npm test
```

This will run the test suite and output the results to the console.

> Note: currently no testing library is implemented.

## Troubleshooting

If you encounter any issues while using the Multi-Level Dropdowns project, try the following:

- Make sure you have the latest version of Node.js and npm installed.
- Make sure you have installed all the project dependencies using the npm install command.
- Check the console output for any error messages.

## About Stack

- **[ViteJS](https://vitejs.dev/)**: is a build tool that focuses on fast development and building. It provides features like hot module replacement and fast server-side rendering.
- **[ReactJS](https://react.dev/)**: is a popular JavaScript library for building user interfaces. It provides a declarative syntax for describing the UI and a component-based architecture for organizing code.
- **[Typescript](https://www.typescriptlang.org/)**: is a superset of JavaScript that adds type annotations to the language. It provides better type checking and code analysis than plain JavaScript, and can help catch errors before they occur at runtime.
- **[CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)**: is a system for modularizing CSS code, which makes it easier to manage and reuse. It allows you to write CSS code that is scoped to a particular component, so that it doesn't conflict with other CSS styles.
- **[Context API](https://react.dev/reference/react/createContext)**: is a react's built-in feature for managing global state and sharing data between components. You can create context and provider components in the contexts/ directory to facilitate global state management in your project.

## Configuration

The "Multi-Level Dropdowns" project uses the following configuration files:

- `viet.config.js`: The ViteJS configuration file that specifies the build and development options for the project.
- `tsconfig.json`: This is the configuration file for Typescript, a superset of JavaScript that adds type annotations to the language. It defines how Typescript should compile the project, including which files to include and exclude, and which version of JavaScript to target.
- `tsconfig.node.json`: This is the configuration file for Typescript, specific to node.js. It specifies the target version of node.js, so that the Typescript compiler can generate code that is compatible with node.js.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
