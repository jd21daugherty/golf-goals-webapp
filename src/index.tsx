import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA25Ldz-AV_doatvD8F36CaMqE9t-Fhgag",
    authDomain: "golf-goals.firebaseapp.com",
    databaseURL: "https://golf-goals.firebaseio.com",
    projectId: "golf-goals",
    storageBucket: "golf-goals.appspot.com",
    messagingSenderId: "645006539467"
  };

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
