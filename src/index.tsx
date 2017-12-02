import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import * as firebase from 'firebase';

import { Provider } from 'react-redux';
import configureStore from './services/configure-store';
//import StateModel from './models/state';

var config = {
    apiKey: "AIzaSyA25Ldz-AV_doatvD8F36CaMqE9t-Fhgag",
    authDomain: "golf-goals.firebaseapp.com",
    databaseURL: "https://golf-goals.firebaseio.com",
    projectId: "golf-goals",
    storageBucket: "golf-goals.appspot.com",
    messagingSenderId: "645006539467"
  };

firebase.initializeApp(config);

// define an initial state for the application here
//let initialState: StateModel = {
//  currentHole: 1
//}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();


 
