
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";




const firebaseConfig = {
    
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

