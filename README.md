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
   npm run test:parallel
   ```

This will initiate the SOAP API tests using Mocha and TypeScript, providing insightful results.

## Features

SOAP-API-Automation framework offers the following key features to enhance your SOAP API testing and automation experience:

### 1. TypeScript Integration

The framework is built using TypeScript, a statically-typed superset of JavaScript. This ensures type safety and improved code quality, making it easier to maintain and extend your automation scripts.

### 2. Asynchronous Testing

SOAP-API-Automation emphasizes asynchronous testing, allowing you to handle SOAP API calls and responses in an efficient and non-blocking manner. This is crucial for testing scenarios involving multiple API requests or concurrent operations.

### 3. Comprehensive Reporting

The framework generates comprehensive and visually appealing HTML reports using Mochawesome. These reports provide an overview of test execution, including pass/fail status, detailed test case results, error messages and request/response payloads.

### 4. Node.js Environment

The framework is designed to work in a Node.js environment, ensuring compatibility and easy integration with your existing Node.js projects. You can seamlessly incorporate SOAP API testing into your development workflow.

### 5. WSDL Types Generation

SOAP-API-Automation includes a command to generate TypeScript types from your WSDL (Web Services Description Language) files. This feature simplifies working with SOAP APIs by providing type definitions for the API requests and responses, reducing the chances of runtime errors.

### 6. Soap Client Generation

The framework includes a command to generate a SOAP client from your WSDL (Web Services Description Language) files. This client can use a local or remote WSDL file to make SOAP API calls, providing a convenient way to interact with SOAP APIs.

### 7. Soap Mock Server Generation & Manager

The framework includes a feature to generate a SOAP mock server from your WSDL files. This mock server can use a local or remote WSDL file to mock SOAP API calls, providing a convenient way to mock SOAP APIs.
In addition, the mock sever is customizable, allowing you to perform custom actions on the request and response payloads.

### 8. Test Customization

The framework is highly customizable, allowing you to tailor your SOAP API tests to specific use cases and requirements. You can add, modify, or extend test scenarios to suit your project's needs.

### 8. Integration with Chai

SOAP-API-Automation is integrated with Chai, an assertion library for Node.js and browsers. This integration enhances the readability of your test cases and simplifies the assertion process, making it easier to express your testing expectations.

By leveraging these features, SOAP-API-Automation enables you to create robust and efficient SOAP API test automation suites that meet industry best practices while providing flexibility and maintainability for your testing projects.

## Reporting

The test results are comprehensively reported and presented in an easy-to-understand format within the `reports` folder. To view the detailed report, follow these steps:

1. Locate the `Country-Service-report_[date].html` file within the `reports` directory.

2. Open the `Country-Service-report_[date].html` file in a web browser of your choice.

   This HTML report provides an overview of test execution, including pass/fail status, detailed test case results, and any associated error messages. It serves as a valuable resource for identifying issues and tracking test progress.

## Mock client example

A soap client can be generated from a wsdl file using the following code:

```js
let client: ExtendedClient<CountryClient>
client = await ApiClient.getClient<CountryClient>(
   {
      url: './resources/country.wsdl',
   },
   { contextToReport: this },
)
```

This will generate a soap client that will be using the wsdl file located in the resources folder or url and will be using the CountryInfoService to handle the requests. The contextToReport is optional and is used to report the test results.
If a contextToReport is used, it is important to update the context in a new nested context. This can be done by using the following code:

```js
before(async function () {
   client.updateContext(this)
})
```

## Mock server example

A soap server can be generated from a wsdl file using the following code:

```js
   await ApiClient.createService(
            './resources/country.wsdl',
            '/Mock',
            customCountryNameService,
        )
```

This will generate a soap server that will be listening on the first available port. The soap server will be using the wsdl file located in the resources folder or url and will be using the customCountryNameService to handle the requests.

The customCountryNameService is a class that implements the methods that will be used to handle the requests. The following is an example of a customCountryNameService:

```js
const customCountryNameService = {
    CountryInfoService: {
        CountryInfoServiceSoap: {
            CountryName: (args: any, _cb: any, headers: any, req: any) => {
                console.log('CountryName', args, headers)
                return {
                    CountryNameResult: 'English',
                }
            },
        },
    },
}
```

The service can be consumed by using the following code:

```js
const client = await ApiClient.getClient<CountryClient>(
            {
                url: '/Mock',
                mock: true,
            },
            { contextToReport: this },
        )
const result = await client.CountryName({ sCountryISOCode: 'ESP' })
```

It is important to remember to close the server after the tests are finished. This can be done by using the following code:

```js
await ApiClient.closeServer()
```

## Tags support

The framework supports tags. This allows you to run specific tests or groups of tests. The tags are defined in the test cases using the following code:

```js
describe("describeName -@ Smoke", function () {
   it("testName", function () {})
   it("testName -@ Mock,Tag2", function () {})
})
```

And running the tests using the following command:

```bash
npm run test -- --tags Smoke --excludeTags Mock
```

This will run all the tests that have the @Smoke tag and exclude all the tests that have the @Mock tag.

## References

For further information on the tools and technologies used in this project, consult the following references:

- [Mocha](https://mochajs.org/): Mocha is a widely-used JavaScript testing framework that provides a versatile and developer-friendly environment for writing and executing tests.

- [Mochawesome](https://www.npmjs.com/package/mochawesome): Mochawesome is a custom reporter for Mocha that generates visually appealing and informative HTML reports for test results.

- [Chai](https://www.chaijs.com/): Chai is an assertion library for Node.js and browsers that complements Mocha, making it easier to write expressive and readable test cases.

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a statically-typed superset of JavaScript that enhances code quality and maintainability, making it a suitable choice for building robust test automation frameworks.  
