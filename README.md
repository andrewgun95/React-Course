# Why do front-end framework exists ?

## Old Way

It's Server Side Rendering.

Web Server

View + Data -> Render Webpage (HTML, CSS, JS) -> Browser

## Nowdays

It's Client Side Rendering.

Web Server <--> Web Application <--> Web Client

Web Client

View + Data -> Render Webpage (HTML, CSS, JS) -> Browser

With Client Side Rendering - page is rendering without reload the page

## Web Application with Vanilla Javascript ?

Front End Website - handling data + displaying data in nice user interface

User interface need to by stay sync with data :

UI <--> DATA

### Its Impossible !

1. Requires lots of direct DOM manipulationm "Spaghetti Code"
2. Data (state) is usually stored in the DOM, shared across in the page
   (not centralized) - can occur many bugs.

## ANSWER :

### KEEPING A USER INTERFACE SYNC WITH DATA IS VERY HARD AND A LOT OF WORK

# What is REACT ?

- Based on Components: Component 1 + Component 2 + etc = Webpage, Reused
- Declarative Syntax : JSX, Describe how component look likes (Never touch DOM)
  - JSX ? HTML, CSS, Javascript and other components
- State Driven: State -> Render -> UI (Components in JSX)
  Or UI Changed -> Update State -> Re-render

React is Library,
Complete Framework built on top of React: Next.js, Remix

Summary

1. Rending components on a webpage (UI) based on their current state
2. Keeping the UI in sync with state, by re-rendering (reacting) when state changes

# Setting Up a React Project

1. Using npx create-react-app

- Complete **starter kit** for React application, already configured, slow and outdated

2. Using vite

- Modern build tool, need manually set up ESLint, extremely fast (hot module replace ment) and bundling

Recommend to use React framework (Next.js and Remix)

# Intro React

Components as **Building Blocks** of UI (Webpage) : enterely made out of component (all about components)

Key Component : **Data**, **Logic**, and **Appearance**

Complex UI by combining multiple components

Component is **Reused**. Its Nested. Pass data using Props

Component Tree :
Parent and child component

## What is JSX?

Declarative syntax to describe what component look like and how they work

Components must return a block of JSX

Extension of Javascript to embed JS, CSS, and HTML

JXS element converted to React.createElement function call using Babel

```html
<header>
  <h1 style="color: red">Hello, React!</h1>
</header>
```

```js
React.createElement(
  "header",
  null,
  React.createElement("h1", { style: { color: "red" } }, "Hello React!")
);
```

## Imperative vs Declarative

1. Imperative : How to do things

   HTML - DOM Manipulation

2. Declarative : What we want to do on screen

   Generation HTML - base on current state

   React never touch the DOM

## Component based Architectured

### One Component per File

Old way

One Technology per File

## What is PROPS?

Props are used to pass data from **parent components** to **child components**

Configure and Customize components, parent components control how child components look and work

Data ->

Props (data coming from the outside, only can updated by parent component)

and

State (internal data can be updated by the component logic)

PROPS are read-only, they are IMMUTABLE,
STATES are MUTABLE

React is pure function (without side effect)

### DON'T DO THIS

```javascript
let x = 7;

function Component() {
  x = 23;
  return <h1>Number {x}</h1>;
}
```

React is one-way data flow

Data only can be passed from Parent to Child (not opposite way)
