

// ------ enabling and disabling form action ------

function prevent(event){
  event.preventDefault();
}

function submit(event){
  return true;
}

// ------ show register form ------

function showRegisterForm(){
  document.getElementById("reg-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
  document.getElementById("name-error").innerHTML = "";
  document.getElementById("email-error").innerHTML = "";
  document.getElementById("pass-error").innerHTML = "";
  document.getElementById("confirm-error").innerHTML = "";
  document.getElementById("reg-name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("Password").value = "";
  document.getElementById("confirm").value = "";
}


// ------ show login form ------


function showLoginForm(){
  document.getElementById("login-form").style.display = "block";
  document.getElementById("reg-form").style.display = "none";
  document.getElementById("log-email-error").innerHTML = "";
  document.getElementById("log-pass-error").innerHTML = "";
  document.getElementById("log-email").value = "";
  document.getElementById("login-password").value = "";
}


// ------ login account ------


function loginAccount(event){

  let loginEmail = document.getElementById("log-email"),
      loginPassword = document.getElementById("login-password"),
      loginEmailError = document.getElementById("log-email-error"),
      loginPasswordError = document.getElementById("log-pass-error"),
      loginEmailFlag = true,
      loginPasswordFlag = true;

  if(loginEmail.value.length >= 20 && loginEmail.value.length <= 30){
    if((!loginEmail.value.includes("@gmail.com")&&
       !loginEmail.value.includes("@yahoo.com")&&
         !loginEmail.value.includes("@hotmail.com")) || loginEmail.value.includes(" ")){
        loginEmailError.className = "error-span";
        loginEmailError.innerHTML = "invalid e-mail !";
        loginEmail.value = "";
        loginEmailFlag = false;
    }
    else{
      loginEmailError.className = "valid-span";
      loginEmailError.innerHTML = "valid e-mail !";
      loginEmailFlag = true;
    }
  }
  else{
      loginEmailError.className = "error-span";
      loginEmailError.innerHTML = "invalid e-mail !";
      loginEmail.value = "";
      loginEmailFlag = false;
  }
  if(loginPassword.value.length >= 8 && loginEmailFlag){
      loginPasswordError.className = "valid-span";
      loginPasswordError.innerHTML = "valid Password !";
      loginPasswordFlag = true;
  }
  else{
      loginPasswordError.className = "error-span";
      loginPasswordError.innerHTML = "invalid password !";
      loginPassword.value = "";
      loginPasswordFlag = false;
  }

  if(loginEmailFlag && loginPasswordFlag){
    submit(event);
  }
  else{
    prevent(event);
  }
}


// ------ register new account ------


function registerAccount(event){
  let name = document.getElementById("reg-name"),
      nameError = document.getElementById("name-error"),
      email = document.getElementById("email"),
      emailError = document.getElementById("email-error"),
      pass = document.getElementById("Password"),
      passError = document.getElementById("pass-error"),
      passConfirm = document.getElementById("confirm"),
      passConfirmError = document.getElementById("confirm-error"),
      nameFlag = true,
      emailFlag = true,
      passFlag = true;

  if(name.value === "" || !isNaN(name.value[0])){
    nameError.className = "error-span";
    nameError.innerHTML = "invalid name !";
    name.value = "";
    nameFlag = false;
  }
  else{
    nameError.className = "valid-span";
    nameError.innerHTML = "valid name !";
    nameFlag = true;
  }
  if(email.value.length >= 20 && email.value.length <= 30){
    if((!email.value.includes("@gmail.com")&&
       !email.value.includes("@yahoo.com")&&
         !email.value.includes("@hotmail.com")) || email.value.includes(" ")){
        emailError.className = "error-span";
        emailError.innerHTML = "invalid e-mail !";
        email.value = "";
        emailFlag = false;
    }
    else{
      emailError.className = "valid-span";
      emailError.innerHTML = "valid e-mail !";
      emailFlag = true;
    }
  }
  else{
    emailError.className = "error-span";
    emailError.innerHTML = "invalid e-mail !";
    email.value = "";
    emailFlag = false;
  }
  if(pass.value.length >= 8 && passConfirm.value.length >= 8){
    if(pass.value !== passConfirm.value){
      passError.className = "error-span";
      passError.innerHTML = "passwords don't match !";
      pass.value = "";
      passConfirmError.className = "error-span";
      passConfirmError.innerHTML = "passwords don't match !";
      passConfirm.value = "";
      passFlag = false;
    }
    else{
      passError.className = "valid-span";
      passError.innerHTML = "passwords match !";
      passConfirmError.className = "valid-span";
      passConfirmError.innerHTML = "passwords match !";
      passFlag = true;
    }
  }
  else{
    passError.className = "error-span";
    passError.innerHTML = "invalid passwords !";
    pass.value = "";
    passConfirmError.className = "error-span";
    passConfirmError.innerHTML = "invalid passwords !";
    passConfirm.value = "";
    passFlag = false;
  }
  if(nameFlag && emailFlag && passFlag){
    submit(event);
  }
  else{
    prevent(event);
  }
}
