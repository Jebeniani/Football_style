import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBiWllx10e1WGdN4t4GfnLCXKYsbPennp4",
  authDomain: "football-style.firebaseapp.com",
  projectId: "football-style",
  storageBucket: "football-style.appspot.com",
  messagingSenderId: "517497642481",
  appId: "1:517497642481:web:b3eb9c42eb49ec32a27850",
  measurementId: "G-C5BFWG8T5C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const formData = {
      name: name,
      email: email,
      subject: subject,
      phone: phone,
      message: message,
    };

    db.collection("contactFormSubmissions")
      .add(formData)
      .then(function (docRef) {
        alert("Your message has been sent successfully!");
        contactForm.reset();

        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  });
});