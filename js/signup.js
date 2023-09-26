// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiWllx10e1WGdN4t4GfnLCXKYsbPennp4",
  authDomain: "football-style.firebaseapp.com",
  projectId: "football-style",
  storageBucket: "football-style.appspot.com",
  messagingSenderId: "517497642481",
  appId: "1:517497642481:web:b3eb9c42eb49ec32a27850",
  measurementId: "G-C5BFWG8T5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//ALL HTML OBJECTS
submitData.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    // Create a new user with email and password using Firebase Authentication
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        // User signed up successfully
        var user = userCredential.user;
        console.log('User signed up:', user);

        // Now, add the user data to Firestore
        addDoc(collection(db, "Users"), {
          name: name,
          email: email,
          password: password
        })
        .then(() => {
          alert('USER ADDED successfully');
          console.log('User data added to Firestore successfully');
          window.location.replace('login.html')
        })
        .catch((error) => {
          console.error('Error adding user data to Firestore: ', error);
        });
      })
      .catch((error) => {
        // Handle sign-up errors
        console.error('Error creating user: ', error);
      });
});