# webcomponents 101 Part 1: The nature of web-components

An introduction to the web components standards for custom elements, the shadow DOM, templates and slots.

This workshop gives an introduction to the concepts behind web components. It introduces HTML `<template>` elements, custom elements and the shadow DOM. We'll implement a few web components to demonstrate further concepts of shadowed and exposed elements, slots and lazy loading. We'll learn how ES6 modules can be used to package and publish web components, and exercise it using Google's lit-element library.

## Contents

* `<template>` elements to reuse portions of DOM
* Custom elements to encapsulate functionality on an HTML page
* Shadow DOM to hide your shame from the rest of the page
* ES6 Modules to package and publish components
* Building components with Polymer Lit

## Getting Started

Before we start, we need to install `yarn >= 1.22.0 < 2` and `node >= 16`. Make sure your can execute the following commands from the command-line:

```bash
yarn -v         # e.g. 1.22.18
node --version  # e.g. v16.14.2
```

## Build script files with TypeScript

All script files in `./src`. To get started all you need to do is run `yarn` and `yarn build`.
You can use the following additional `yarn` commands:

* `clean` - Clean all build folders in the project.
* `lint` - Lint all script files in the project.
* `build` - Run the TypeScript compiler to build script file to `./dist`.
* `test` - Run Jest to test all script files in the project.
* `test:watch` - Run Jest in watch mode to test modified script files in the project.
* `dist` - Build all script files in the project for production.

You can run every command in the project directory using `yarn`, .e.g. `yarn lint` to lint all files. You can also run
commands individually for each exercise or solution.

Run the code for an individual exercise or solution using `yarn run:exercise-name` or `yarn run:solution-name`. For example:

* `run:example-step-0`:  Run script files for example step 0.
* `run:example-step-1`:  Run script files for example step 1.
* `run:example-step-2`:  Run script files for example step 2.
* `run:example-step-3`:  Run script files for example step 3.
* `run:example-step-4`:  Run script files for example step 4.
* `run:exercise1`:  Run script files for exercise 1.
* `run:exercise2`:  Run script files for exercise 2.
* `run:solution1`:  Run script files for solution 1.
* `run:solution2`:  Run script files for solution 2.

Run Jest to test the code for an individual exercise or solution using `yarn test:exercise-name` or `yarn test:solution-name`. For example:

* `test:example-step-0`: Run Jest to test all script files for example step 0.
* `test:example-step-1`: Run Jest to test all script files for example step 1.
* `test:example-step-2`: Run Jest to test all script files for example step 2.
* `test:example-step-3`: Run Jest to test all script files for example step 3.
* `test:example-step-4`: Run Jest to test all script files for example step 4.
* `test:exercise1`: Run Jest to test all script files for exercise 1.
* `test:exercise2`: Run Jest to test all script files for exercise 2.
* `test:solution1`: Run Jest to test all script files for solution 1.
* `test:solution2`: Run Jest to test all script files for solution 2.
