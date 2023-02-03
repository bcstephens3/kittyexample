import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './Contact'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contact 
      img ="./cat.webp"
      name="Mr. Whiskerson"
      phone="(212) 555-1234"
      email="mr.whiskaz@catnap.meow"/>
    <Contact 
    img ="./cat.webp"
    name="Fluffykins"
    phone="(212) 555-2345"
    email="fluff@me.com"/>
    <Contact 
    img ="./cat.webp"
    name="Pumpkin"
    phone="(0800) CAT KING"
    email="pumpkin@scrimba.com"/>
    <Contact 
    img ="./cat.webp"
    name="Felix"
    phone="(212) 555-4567"
    email="thecat@hotmail.com"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
