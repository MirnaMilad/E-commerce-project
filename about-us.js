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
