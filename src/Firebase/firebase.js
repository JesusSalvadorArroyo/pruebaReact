import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

//const config = {
//    apiKey: "AIzaSyAgs3FSBEnVTJkOEZknBl2uuiJ8PsUMYvY",
  //  authDomain: "tienda-angular2-b39e5.firebaseapp.com",
//    databaseURL: "https://tienda-angular2-b39e5.firebaseio.com",
//    projectId: "tienda-angular2-b39e5",
  //  storageBucket: "tienda-angular2-b39e5.appspot.com",
  //  messagingSenderId: "461882006658"
//};
const config = {
    apiKey: "AIzaSyBVwCiZm2dI25Ckd7CLuO8n9dkqxtO9q98",
    authDomain: "reactjesus.firebaseapp.com",
    databaseURL: "https://reactjesus.firebaseio.com",
    projectId: "reactjesus",
    storageBucket: "reactjesus.appspot.com",
    messagingSenderId: "921415820770"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();
