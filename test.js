import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA_a1kQDR0iILFCv9IxEkQXOfa7kGAVVJ0",
    authDomain: "new-410d4.firebaseapp.com",
    projectId: "new-410d4",
    storageBucket: "new-410d4.appspot.com",
    messagingSenderId: "442879126344",
    appId: "1:442879126344:web:4f5b607055c33f8be0e17d",
    measurementId: "G-3270TL5FC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

// Login fields
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

// Create account fields
const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignupPasswordIn = document.getElementById("confirm-password-signup");
const createAccBtn = document.getElementById("create-acc-btn");

// Main and create account containers
const mainContainer = document.getElementById("Main");
const createAccContainer = document.getElementById("create-acc");

// Signup and return buttons
const signupButton = document.getElementById("sign-up");
const returnBtn = document.getElementById("return-btn");

// Success and error messages
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("error-message");

// Logged in state
let loggedIn = false;

// Handle login form submit
submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Get user input values
    const email = emailInput.value;
    const password = passwordInput.value;

    // Clear input fields
    emailInput.value = "";
    passwordInput.value = "";

    // Sign in with Firebase
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User is logged in
            loggedIn = true;
            if (successMessage !== null) {
                successMessage.textContent = "You are logged in!";
            }
        })
        .catch((error) => {
            // Handle login error
            if (errorMessage !== null) {
                errorMessage.textContent = error.message;
            }
        });
});

// Handle create account form submit
createAccBtn.addEventListener("click", function (event) {
    event.preventDefault();

    // Get user input values
    const email = signupEmailIn.value;
    const confirmEmail = confirmSignupEmailIn.value;
    const password = signupPasswordIn.value;
    const confirmPassword = confirmSignupPasswordIn.value;

    // Clear input fields
    signupEmailIn.value = "";
    confirmSignupEmailIn.value = "";
    signupPasswordIn.value = "";
    confirmSignupPasswordIn.value = "";

    // Validate input values
    if (email !== confirmEmail) {
        errorMessage.textContent = "Emails do not match";
        return;
    }
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match";
        return;
    }

    // Create user account with Firebase
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User account created
            successMessage.textContent = "Account created!";
            // Add user to Firestore database
            const userRef = doc(db, "users", userCredential.user.uid);
            setDoc(userRef, {
                email: email
            })
                .then(() => {
                    console.log("User added to Firestore");
                })
                .catch((error) => {
                    console.log("Error adding user to Firestore: ", error);
                });
        })
        .catch((error) => {
            // Handle account creation error
            errorMessage.textContent = error.message;
        });
});

// Handle sign up button click
signupButton.addEventListener("click", function (event) {
    event.preventDefault();
    // Show create account container
    mainContainer.style.display = "none";
    createAccContainer.style.display = "block";
});

// Handle return button click
returnBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // Show main container
    mainContainer.style.display = "block";
    createAccContainer.style.display = "none";
});

// Listen for authentication state changes
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        loggedIn = true;
        successMessage.textContent = "You are logged in!";
    } else {
        // User is signed out
        loggedIn = false;
    }
});