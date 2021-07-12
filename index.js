import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
// import 'firestore/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEmTAdUPIGVbd17ZKfspaC0noQKRWrh90",
    authDomain: "cart-7c974.firebaseapp.com",
    projectId: "cart-7c974",
    storageBucket: "cart-7c974.appspot.com",
    messagingSenderId: "552224894623",
    appId: "1:552224894623:web:72b9ccc2885db2c2befcaa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));
