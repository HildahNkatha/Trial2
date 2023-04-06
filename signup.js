
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";




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


//login fields

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

//create account

const signpEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignupPasswordIn = document.getElementById("confirm Password");
const createaccbtn = document.getElementById("create-acc-btn");

const Main = document.getElementById("Main");
const createacc = document.getElementById("create-acc");


const signupButton  = document.getElementById("Sign Up");
const returnBtn = document.getElementById("return-btn ");

signupButton.addEventListener("click", function (){
    Main.style.display = "none";
    createacc.style.display = "block";
})
returnBtn.addEventListener("click", function (){
    Main.style.display = "block";
    createacc.style.display = "none";
})

