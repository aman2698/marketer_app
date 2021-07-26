import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
} from "react-router-dom";

// SETTING UP REDUX STORE
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

// ENHANCING STORE WITH FIREBASE
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebase from "./firebase";
import { createFirestoreInstance } from 'redux-firestore'

const middleware = [thunk.withExtraArgument(getFirebase)];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);
const fbConfig={
  apiKey: "AIzaSyB-kgDI7Vg1SL-7jbCRuoW5QR9Ly-FhIoI",
  authDomain: "marketer-4b40d.firebaseapp.com",
  projectId: "marketer-4b40d",
  storageBucket: "marketer-4b40d.appspot.com",
  messagingSenderId: "721496399139",
  appId: "1:721496399139:web:5423d4904074de2df60096"
}

const rrfConfig = { userProfile: 'users' ,useFirestoreForProfile: true} 
firebase.initializeApp(fbConfig)
firebase.firestore() 
 firebase.storage();
const rrfProps = {
   firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  }



ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <Router>
    <App />
    </Router>
    </ReactReduxFirebaseProvider>
  </Provider >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
