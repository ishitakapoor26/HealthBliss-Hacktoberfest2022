let signup = document.querySelector('.signUp');
let signin = document.querySelector('.signIn');
let signInPage = document.querySelector('.signInForm');
let signUpPage = document.querySelector('.signUpForm');

signin.addEventListener('click',()=>{
    signin.style.boxShadow = "inset 0px 0px 5px 2px rgba(0, 0, 0, 0.377)";
    signin.style.fontWeight  = "700";
    signup.style.fontWeight  = "400";
    signup.style.boxShadow = "none";
    signInPage.style.display = "none";
    signUpPage.style.display = "block";
});
signup.addEventListener('click',()=>{
    signup.style.boxShadow = "inset 0px 0px 5px 2px rgba(0, 0, 0, 0.377)";
    signup.style.fontWeight  = "700";
    signin.style.fontWeight  = "400";
    signin.style.boxShadow = "none";
    signUpPage.style.display = "none";
    signInPage.style.display = "block";
});