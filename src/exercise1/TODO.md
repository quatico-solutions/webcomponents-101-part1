# Exercise 1: Using native custom elements

Let’s use browser APIs to implement custom elements with templates and slots.

## Goals

* Replace the `<div>` elements created by `create-hello()` and `create-testimonial()` with custom elements.
* Create a custom element class and register it wit the CustomElementRegistry.
* Create a `<template>` element to define the markup for each custom element.
* Read the attributes from the custom element and use them to adjust the template's markup.
* The result should look exactly like the original, i.e., `yarn run:exercise1`

## Stretch goals

* Make the custom elements encapsulated with a shadowRoot
* Use the `<slot>` element to insert the content into the custom element's template
* Move corresponding styles into separate files to be imported by the custom elements
  * E.g., `import styleText from "./my-hello.css"`
  * Add a `<style>` tag to insert the styles into the shadow DOM
