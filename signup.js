function inputt() {
  document.getElementById("inputbox2").style.color = "blue";
}

// ------------javascript code for password alert----------

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;

  // it will check whether user has put up something OR not

  //   if (username == null || username == "") {
  //     alert("Please enter the username....!!");
  //     return false;
  //   }

  if (username == null || (username == "" && email == null) || email == "") {
    alert("KIndly provide username and email");
  }

  //   ===it will check wheather email is ther or not========
  else if (email == null || email == "") {
    alert("Provide Email....!!");
    return false;
  }
  // it will check whether user has put up password something OR not
  if (password == null || password == "") {
    alert("Please enter the password....!!");
    return false;
  }

  //   alert("Login successful..welcome.!!");
}
