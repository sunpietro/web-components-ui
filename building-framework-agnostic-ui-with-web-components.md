# Building framework agnostic UI with Web Components

## Introduction

Building website/web app UI is an essential part of work for every web project. In the rise of micro frontends concept building user interface that consists of reusable components that work the same way, no matter the JS framework or CSS framework is used is even more important.

UI elements reusability saves a lot of work and helps the developers to build consistent UI, that brings no confuse to the end users.

### The meaning of agnostic

In general, when someone says something is agnostic, then it means it doesn't believe in any god. You might be wondering, what not believing in God and IT has in common, while describing IT concepts as agnostic ones?

In the IT, by saying something is agnostic we describe concepts that are independent in some way. In terms of UI it might mean, that it doesn't care about a JS framework used to built UI, because UI elements are agnostic. That's a kind of similar approach as native HTML elements. They are framework agnostic as well.

## Framework agnostic UI concept

The framework agnostic UI means the application/website interface built without using any non-native set of tools. We're using only native browser APIs in order to deliver as much functionalities as possible. Making it framework agnostic, where by framework agnostic I mean: "Not using any JavaScript frameworks" allows us to re-use existing UI components in many different projects. Other frameworks will not break any functionality of UI component.

## What are Web Components?

Web Components, in short, are custom HTML tags, that can be reused in many different places of any website or web app. In fact, there are available native browser APIs that allow building custom HTML tags. These tags can be encapsulated, so they may act as `input` or `video` that contain extra UI, but it's impossible to manipulate the internal DOM strcutre of such an element.

### The concept of Web Components

In the past many web developers dreamed about a possibility to create custom HTML elements that will be easily embeddable on any website; that will act as a standard HTML while its real power is hidden behind some layer and makes it possible to bring a custom UI functionality just with one HTML tag. Moreover these tags should allow using them in server side languages like PHP, Java or C#.NET

#### Shadow DOM

#### Custom Elements

#### Scoping

### Limitations when not using WC libraries/frameworks 

### Sample Web Component element

#### Passing values
 
- values as strings in element attributes
- functions and more complex structures as element properties
- listening to events with Custom Events

## Micro frontends

### The concept of micro frontends

### Pros and cons of micro frontends

### When to apply it?

## How to create reusable WC

## WC usage with popular frameworks

Angular, VueJS, ReactJS

### Usage with Angular

### Usage with VueJS

### Usage with ReactJS

### Usage with plain JS

## Take-aways

## Sample UI repository

## Thank you screen