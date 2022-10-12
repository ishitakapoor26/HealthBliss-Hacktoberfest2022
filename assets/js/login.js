let signup = document.querySelector('.signUp');
let signin = document.querySelector('.signIn');
let signInPage = document.querySelector('.signInForm');
let signUpPage = document.querySelector('.signUpForm');

signup.addEventListener('click',()=>{
    signup.style.boxShadow = "inset 0px 0px 5px 2px rgba(0, 0, 0, 0.377)";
    signup.style.fontWeight  = "700";
    signin.style.fontWeight  = "400";
    signin.style.boxShadow = "none";
    signInPage.style.display = "none";
    signUpPage.style.display = "block";
});
signin.addEventListener('click',()=>{
    signin.style.boxShadow = "inset 0px 0px 5px 2px rgba(0, 0, 0, 0.377)";
    signin.style.fontWeight  = "700";
    signup.style.fontWeight  = "400";
    signup.style.boxShadow = "none";
    signUpPage.style.display = "none";
    signInPage.style.display = "block";
});

function checkSignUp() {
    var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var enteredEmail = document.getElementById("signUpEmail");
    var pwd = document.getElementById("signUpPassword");
    var conformPwd = document.getElementById("signUpConformPassword");
    var passFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;


    if(enteredEmail.value.match(mail_format) && pwd.value.match(passFormat) && pwd.value.match(conformPwd.value)) {
        // successfully validated the fields
        // rest of the code here..
        // alert("validated!");
        return true;
    }
    else {
        if (!enteredEmail.value.match(mail_format)) {
            alert("Invalid Email!");
        }
        else if (!pwd.value.match(conformPwd.value)) {
            alert("Passwords are not matching!");
        }
        else {
            alert("Enter a Strong password!");
        }
    }
}
