import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'

 
const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Quicksand", sans-serif;
    list-style: none;
    text-decoration: none;
    /* border: 1px solid red; */
  }

  body{
    background: #434750;
    display: flex;
    flex-direction: column;
  }
`
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <GlobalStyle />
   <App />
 </React.StrictMode>
);
 
reportWebVitals();


