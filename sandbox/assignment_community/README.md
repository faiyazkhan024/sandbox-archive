# Community

Community is a ReactJS project scaffolded using ViteJS that was created as a UI/UX skills test for a recruiter. The project uses Tailwind CSS for styling and React Icons for icons. Community is a simple web application that allows users to interact with a community platform.

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

To use the Community project, you'll need to have the following installed on your machine:

- Node.js (version 14 or later)
- npm (version 7 or later)

## Installation

To install the Community project, follow these steps:

1. Clone the sandbox repository to your local machine:

   ```bash
   git clone https://github.com/faiyazkhan024/sandbox.git
   ```

2. Navigate to the community branch:

   ```bash
   cd sandbox
   git checkout assignment/community
   ```

3. Install the project dependencies:

   ```bash
    npm install
   ```

## Usage

- **To start the development server for the `Community` project, run the following command in the project directory:**

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

## Project Structure

The community project resides in its own branch, structured as follows:

- `public/`: Contains public files and static assets.
- `src/`: Contains the project's source code.
  - `assets/`: Contains images, fonts, and other assets used in the project.
  - `components/`: Contains reusable React components.
  - `pages/`: Contains top-level React components representing each page of the app.

## Deployment

To deploy the project, you can use any hosting service that supports static site hosting. Some popular options include Netlify, Vercel, and GitHub Pages.

## Testing

To run the tests for the Community project, run the following command in the project directory:

```bash
npm test
```

This will run the test suite and output the results to the console.

> Note: currently no testing library is implemented.

## Troubleshooting

If you encounter any issues while using the Community project, try the following:

- Ensure you have the latest version of Node.js and npm installed.
- Make sure you have installed all the project dependencies using the npm install command.
- Check the console output for any error messages.

## About Stack

- **[ViteJS](https://vitejs.dev/)**: A build tool focused on fast development and building. It provides features like hot module replacement and fast server-side rendering.
- **[ReactJS](https://react.dev/)**: A popular JavaScript library for building user interfaces. It provides a declarative syntax for describing the UI and a component-based architecture for organizing code.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework that provides a set of pre-defined classes for building responsive and customizable user interfaces.

## Configuration

The "Community" project uses the following configuration files:

- `viet.config.js`: The ViteJS configuration file that specifies the build and development options for the project.
- `postcss.config.js`: The configuration file for PostCSS, used to process and transform CSS. It configures Tailwind CSS in the project.
- `tailwind.config.js`: The Tailwind CSS configuration file, defining colors, fonts, and other styles used in the project.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.