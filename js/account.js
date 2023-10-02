
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyBiWllx10e1WGdN4t4GfnLCXKYsbPennp4",
    authDomain: "football-style.firebaseapp.com",
    projectId: "football-style",
    storageBucket: "football-style.appspot.com",
    messagingSenderId: "517497642481",
    appId: "1:517497642481:web:b3eb9c42eb49ec32a27850",
    measurementId: "G-C5BFWG8T5C"
};

// Function to retrieve user data from Firestore
async function getUserData() {
    const db = getFirestore();
    const userId = firebase.auth().currentUser.uid;

    const userDocRef = doc(db, "users", userId);

    try {
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
            const userData = userDocSnap.data();

            // Populate form fields with user data
            document.getElementById("first-name").value = userData.firstName;
            document.getElementById("last-name").value = userData.lastName;
            document.getElementById("display-name").value = userData.displayName;
            document.getElementById("email").value = userData.email;
        }
    } catch (error) {
        console.error("Error retrieving user data:", error);
    }
}

// Call getUserData() when the page loads
window.addEventListener("load", getUserData);

async function updateUserInFirestore(firstName, lastName, displayName, email) {
    const db = getFirestore();
    const userId = firebase.auth().currentUser.uid;

    const userDocRef = doc(db, "users", userId);

    try {
        await userDocRef.set({
            firstName: firstName,
            lastName: lastName,
            displayName: displayName,
            email: email
        }, { merge: true }); // Use merge: true to update only the specified fields

        console.log("User data updated in Firestore");
    } catch (error) {
        console.error("Error updating user data in Firestore:", error);
    }
}

// Add event listener to the "Save Changes" button
document.getElementById("save-changes-btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get updated user data from form fields
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const displayName = document.getElementById("display-name").value;
    const email = document.getElementById("email").value;

    // Call the function to update user data in Firestore
    updateUserInFirestore(firstName, lastName, displayName, email);
});

// Call getUserData() when the page loads
window.addEventListener("load", getUserData);