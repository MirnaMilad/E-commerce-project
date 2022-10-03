  // function is used for getting the cookies by its name
  function getCookie(cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
 // for displaying the counter of the cart
 var span=document.querySelector('.wrapper span')
 if(getCookie('x')==0){
   span.style.display = 'none';
 }
 else{
   span.style.display = 'block';
   span.innerText = getCookie('x')
 }


// Decleration Elements to make validation
var userName = document.getElementById("userName");
var email = document.getElementById("email");
var password = document.getElementById("password");




// User Name validation
userName.addEventListener("focus", function (e) {
    e.target.style.backgroundColor = "#f2f2f2";
  });
  userName.addEventListener("blur", function (e) {
    if (userName.value.match("[a-zA-Z]+")) {
      e.target.style.borderColor = "gray";
      document.getElementById("userNameValidation").style.display = "none";
    } else {
      e.target.style.borderColor = "red";
      document.getElementById("userNameValidation").style.display = "block";
    }
  
  });
  // Email validation
  email.addEventListener("focus", function (e) {
    e.target.style.backgroundColor = "#f2f2f2";
  });
  email.addEventListener("blur", function (e) {
    if (email.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
      e.target.style.borderColor = "gray";
      document.getElementById("emailValidation").style.display = "none";
    } else {
      e.target.style.borderColor = "red";
      document.getElementById("emailValidation").style.display = "block";
    }
  });
  // Password validation
  password.addEventListener("focus", function (e) {
    e.target.style.backgroundColor = "#f2f2f2";
  });
  password.addEventListener("blur", function (e) {
    if (e.target.value.length < 8) {
      e.target.style.borderColor = "red";
      document.getElementById("passwordValidation").style.display = "block";
    } else {
      e.target.style.borderColor = "gray";
      document.getElementById("passwordValidation").style.display = "none";
    }
  });