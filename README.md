# SOAP-API-Automation

## About

SOAP-API-Automation is a project showcasing the automation of SOAP APIs using TypeScript and Mocha, emphasizing asynchronous testing and reporting. This repository serves as a practical reference for automating SOAP API testing in a professional software development context.

## Prerequisites

Before getting started with this project, ensure you have the following prerequisites installed:

- **Node.js**: You must have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

## Setup

Follow these steps to set up the project:

1. **Clone the Repository**: Begin by cloning this repository to your local machine using Git. You can do this with the following command:

   ```bash
   git clone https://github.com/sofisanabria/SOAP-API-Automation.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the required Node.js dependencies by running the following command:

   ```bash
   npm install
   ```

3. **Generate wsdl types**: Generate the types for the wsdl file by running the following command:

   ```bash
   npm run generate
   ```

4. **Execute Tests**: Run the test suite by executing the following command:

   ```bash
   npm run test
   ```

This will initiate the SOAP API tests using Mocha and TypeScript, providing insightful results.

## Reporting

The test results are comprehensively reported and presented in an easy-to-understand format within the `mochawesome-report` folder. To view the detailed report, follow these steps:

1. Locate the `mochawesome.html` file within the `mochawesome-report` directory.

2. Open the `mochawesome.html` file in a web browser of your choice.

   This HTML report provides an overview of test execution, including pass/fail status, detailed test case results, and any associated error messages. It serves as a valuable resource for identifying issues and tracking test progress.

## References

For further information on the tools and technologies used in this project, consult the following references:

- [Mocha](https://mochajs.org/): Mocha is a widely-used JavaScript testing framework that provides a versatile and developer-friendly environment for writing and executing tests.

- [Mochawesome](https://www.npmjs.com/package/mochawesome): Mochawesome is a custom reporter for Mocha that generates visually appealing and informative HTML reports for test results.

- [Chai](https://www.chaijs.com/): Chai is an assertion library for Node.js and browsers that complements Mocha, making it easier to write expressive and readable test cases.

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a statically-typed superset of JavaScript that enhances code quality and maintainability, making it a suitable choice for building robust test automation frameworks.

By referring to these resources, you can further customize and expand this project to meet your specific SOAP API automation needs while adhering to industry best practices.