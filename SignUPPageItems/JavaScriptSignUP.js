 function showPassword() {
    const email = document.getElementById("email").value;


    if (email.trim() === "") {
      alert("Please enter your email first.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }


    document.getElementById("password-section").style.display = "flex";
  }

  function Google(){

  }

  function Apple() {

  }

  function signInPage(){
    window.location.href = "signin.html";
}


  function createAccount() {
    const email = document.getElementById("email").value ;
    const password = document.getElementById("password").value;
    
    if (password.trim() == "") {
      alert("Please enter a password.");
      return;
    }

    if (email.trim() === "") {
      alert("Please enter your email first.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }


    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    window.location.href = "dashboard.html";
  }