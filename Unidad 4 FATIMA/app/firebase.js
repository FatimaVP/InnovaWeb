
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js" 

import {getFirestore, collection, addDoc, getDocs, onSnapshot} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js" //para CRUD





// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu59FAksrC5zYzIQLXAkvsgE40GBDJlHo",
  authDomain: "proyecto-innovasoft.firebaseapp.com",
  projectId: "proyecto-innovasoft",
  storageBucket: "proyecto-innovasoft.appspot.com",
  messagingSenderId: "357510342287",
  appId: "1:357510342287:web:17241ceaab5bfe9de8f2fa"
};
 // Initialize Firebase
export const app = initializeApp(firebaseConfig); //recordar export es para poder importar app en otros archivos
//console.log(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth();

//CRUD
export const db = getFirestore();
export const saveTask = (title, description, userMail) =>{
  addDoc(collection(db, "tasks"), { title, description, userMail})
}
export const getTasks = () => getDocs(collection(db, 'tasks')) //sirvio para recolectar todos los datos

//funciona ok
//const q = query(collection(db, "tasks"), where("userMail", "==", "test1@gmail.com"))
//export const getTasks = () => getDocs(q)

//no funciona:
/*
export const getTasks = () => {
  //const q = query(collection(db, "tasks"), where("userMail", "==", email))
  const q = query(collection(db, "tasks"), where("userMail", "==", "test1@gmail.com"))
  getDocs(q)
}
*/

//const usuario = auth.currentUser;
//console.log(usuario.email)

//como deseamos que al ingresar una anotacion, esta pueda aparecer inmediatamenta
//usaremos onSnapShot(se importa arriba previamente)
export const onGetTasks = (callback) => onSnapshot(collection(db, "tasks"), callback);



