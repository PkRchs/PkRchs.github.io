function pulaLinha() {

    document.write("<br>");
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

var registerForm = document.getElementById('register-form')

var email = document.getElementById('email')
var password = document.getElementById('psw')
var confirmPassword = document.getElementById('psw-repeat')
var registerBtn = document.getElementById('registerbtn')

registerForm.addEventListener("submit", function(event){
  event.preventDefault()
  
  cadastrarUsuário()
});

function cadastrarUsuário(){
  if(email.value.indexOf("@") == -1){
    alert("Email invalido")
    return
  };
  if(email.value.split("@")[1].indexOf(".") == -1){
    alert("Email invalido")
    return
  }
  if(confirmPassword.value !== password.value){
    alert("As senhas não coincidem")
    return
  }
  alert(`Usuário cadastrado! email:${email.value} senha:${password.value}`)
}