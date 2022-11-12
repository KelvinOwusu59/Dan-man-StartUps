<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6808b6d (added signup and signin page)
=======
>>>>>>> 020c3b9 (pulling)
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./fonts/FuturaPTCondBook.otf";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/FuturaPTCondBook.otf'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react';
import store from './Redux/store';
import { Provider } from "react-redux"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ChakraProvider>
 <BrowserRouter>
 <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
    </ChakraProvider>
>>>>>>> 7960daf (productpage adde)

import { Provider } from "react-redux";
import store from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
=======
import store from "./Redux/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
>>>>>>> 020c3b9 (pulling)
  <ChakraProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
<<<<<<< HEAD
    </BrowserRouter>
=======
=======
import { Provider } from "react-redux";
import { store } from "./Redux/store";
>>>>>>> c67e613 (add authreducr function)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
>>>>>>> 6808b6d (added signup and signin page)
=======
    </BrowserRouter>{" "}
>>>>>>> 020c3b9 (pulling)
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
