# Routes

## Introduction
This is a project that uses React, React Router DOM and Sass technologies to create a dynamic and stylized web page.

## React
React is a JavaScript library for creating user interfaces. It allows you to write reusable component code and manage the state of your application efficiently.

## React Router DOM
React Router DOM is a library that provides tools for routing pages in your React application. It allows you to create a navigation between pages, without reloading the entire page.

## Sass
Sass is a styling language that is compiled into CSS. It allows you to write CSS in a more organized and efficient way, with features such as variables, nesting, mixins, and inheritance.

## Installation
To start using React, React Router DOM and Sass in your project, you need to install the following dependencies:
```
npm install react react-dom react-router-dom
npm install node-sass
```
## Using
Here is a basic example of how to use React, React Router DOM and Sass in your application.

```
import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;

```
