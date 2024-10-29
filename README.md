# Take-home Assignment (Maroon Studios)
This is a take-home assignment from Maroon Studios as a part of applying process.
## Installation
Use NPM package manager [npm](https://docs.npmjs.com) for installing necessary packages.

```console
npm install
```
## Usage
For the server, run the following command:
```console
npm start
```

For the index, you can simply open another terminal and run this command:
```console
node index.js
```

To test different values for the parameter, you can change the value of data in index.js
```js
const data = {
  bill: [your value],
  owed: [your value]
}
```

## Documentation
A Swagger UI is also [available](http://localhost:3000/api-docs/#/default/post_calculate_change) for the API documentation.

# About
This repository is for creating an API endpoint "/calculate-change" that takes 2 parameters, bill and owed, and return an object that contains the denomination of the given currency. It utilizes ExpressJS as the middleware and Javascript(NodeJS) as the back-end language.
