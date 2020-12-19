import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, {initialState} from './components/reducer';
import {StateProvider} from './components/StateProvider';
import app from 'firebase/app';
import 'firebase/analytics';

app.initializeApp({
  //other config
  apiKey: "AIzaSyDjdSYZwQmnl-19l1f0B44d8_OZGxz87_Y",
  authDomain: "zomato-clone-7af81.firebaseapp.com",
  databaseURL: "https://zomato-clone-7af81.firebaseio.com",
  projectId: "zomato-clone-7af81",
  storageBucket: "zomato-clone-7af81.appspot.com",
  messagingSenderId: "511122896361",
  appId: "1:511122896361:web:fee437c210bbf7b45ac778",
  measurementId: "G-HE5ZH610YN"
})
app.analytics();

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
