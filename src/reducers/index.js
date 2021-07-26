import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
// import { snackbarReducer } from "react-redux-snackbar";

// import loader from "./loader";
export default combineReducers({
  firebaseReducer,
  firestoreReducer,
//   loader
});
