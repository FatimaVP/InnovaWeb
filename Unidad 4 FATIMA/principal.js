//import "./app/firebase.js";
//console.log("hello world")

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth, onGetTasks } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
//import { setupPosts } from "./app/postList.js";

import './app/signupForm.js'
import './app/signinForm.js'
import './app/logout.js'
import './app/postList.js'

import {getFirestore, collection} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js" //para CRUD
import { saveTask, getTasks} from "./app/firebase.js";

// list for auth state changes
//let correo;
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user);
   const correo = user.email;
   //console.log(correo)
  
    try {
          
      //const mensaje = "Iniciaste sesion";            
      //setupPosts(mensaje, user);       
      
      //Ingresa titulo, descripcion y usuario a firesetore:
      const taskForm = document.getElementById("task-form");
      taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = taskForm["task-title"];
        const description = taskForm["task-description"];
        //console.log(title.value, description.value);
        saveTask(title.value, description.value, user.email);
        taskForm.reset()
      });

      //
     
      /* aqui no funciona traer el doc: borrar
      window.addEventListener("DOMContentLoaded", async () => {
        const querySnapshot = await getTasks();
        querySnapshot.forEach((doc) => {
        console.log("textos:")
        console.log(doc.data());
         });
      }) */
      
        


    } catch (error){
      console.log(error)
    }

    //
    console.log(correo)//comprobar que pueda acceder al dato del usuario
    //console.log(tasksContainer) //obtener el contenedor donde apareceran mis publicaciones
    const querySnapshot = await getTasks(); 
    const tasksContainer = document.getElementById("tasks-container");

    //
    onGetTasks((querySnapshot)=>{
    let html = '';   
    querySnapshot.forEach(doc => {
    //console.log(doc.data()); 
    const task = doc.data();   
    //console.log(tasksContainer)
    if (task.userMail == correo){
    html += `
          <li class="list-group-item list-group-item-action mt-2">
          <h5>${task.title}</h5>
          <p>${task.description}</p>
          <div>
           <button class="btn btn-primary btn-delete" data-id="">
           Delete
          </button>
          <button class="btn btn-secondary btn-edit" data-id="">
            Edit
          </button>
    </div>

          </li>
          `;
    console.log(task)
    }  
    });
    tasksContainer.innerHTML = html
  //
});



  }else{
    const vacio = "";
    //setupPosts(vacio);
    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = '<h3 class="text-white">Inicia sesion para ver tus publicaciones</h1>'
    loginCheck(user);
  }

//console.log(correo)


});


//CRUD
/*
window.addEventListener("DOMContentLoaded", () => {
  
})
*/

//Para probar de que html envie a js el titulo y texto (en consola del navegador):
/*
const taskForm = document.getElementById("task-form");
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = taskForm["task-title"];
  const description = taskForm["task-description"];
  console.log(title.value, description.value);
  
});
*/

//Actualizamos el codigo anterior para usarlo con firebase
//sin embargo necesitamos agregarlo dentro de nuestra funcion que reconoce
//cuando un usuario hizo login


/*borrar:
const taskForm = document.getElementById("task-form");
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = taskForm["task-title"];
  const description = taskForm["task-description"];
  //console.log(title.value, description.value);
  saveTask(title.value, description.value, user.email);
  
});
*/

////

/*
window.addEventListener("DOMContentLoaded",async () => {

  const querySnapshot = await getTasks();
 // console.log(correo)
  querySnapshot.forEach((doc) => {
  console.log(doc.data());    
   });

console.log(correo)

}) 
*/

//console.log(correo)



/*
const querySnapshot = await getTasks();
querySnapshot.forEach((doc) => {
console.log(doc.data());    
 });
//console.log(cuenta); 
*/

