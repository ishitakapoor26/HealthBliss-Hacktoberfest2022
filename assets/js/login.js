let singup = document.querySelector('.singUp');
let singin = document.querySelector('.singIn');
let singInPage = document.querySelector('.singInForm');
let singUpPage = document.querySelector('.singUpForm');

singup.addEventListener('click',()=>{
    singin.style.boxShadow = "inset 5px -3px 5px rgba(0, 0, 0, 0.377)";
    singup.style.boxShadow = "none";
    singInPage.style.display = "none";
    singUpPage.style.display = "block";
});
singin.addEventListener('click',()=>{
    singup.style.boxShadow = "inset -5px -3px 5px rgba(0, 0, 0, 0.377)";
    singin.style.boxShadow = "none";
    console.log(singin.style.boxShadow)
    singUpPage.style.display = "none";
    singInPage.style.display = "block";
});