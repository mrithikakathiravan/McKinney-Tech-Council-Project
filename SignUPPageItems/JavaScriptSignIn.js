function loginR() {
   const emailE = document.getElementById("email").value;
   const passwordE = document.getElementById("password").value;

   const emailS = localStorage.getItem("email");
   const passwordS = localStorage.getItem("password");

   if (emailE == emailS && passwordE == passwordS) {

    window.location.href = "dashboard.html";
   } else {
    alert("Unsuccessful!");
    return
   }
}

function signUpPage(){
    window.location.href = "signup.html";
}