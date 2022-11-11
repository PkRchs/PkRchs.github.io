function pulaLinha() {

    document.write("<br>");
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}
var valorMulta = 0
var registerForm = document.getElementById('formulario')
var cidadeRetirada = document.getElementById('cidadeRetirada')
var cidadeEntrega = document.getElementById('cidadeEntrega')
var tipoCarro = document.getElementById('tipoCarro')
var registerBtn = document.getElementById('registerbtn')

registerForm.addEventListener("submit", function(event){
  event.preventDefault()

  cadastrarUsuário()
});

function cadastrarUsuário(){ 
    valorMulta = 0
    console.log(cidadeRetirada.value)
    console.log(cidadeEntrega.value)
    if(cidadeRetirada.value != cidadeEntrega.value){
        valorMulta = valorMulta + 300
        console.log("Cidade")
      }
    if(tipoCarro.value == "basico") {valorMulta = valorMulta + 119}
    if(tipoCarro.value == "basicoar") {valorMulta =valorMulta + 199}
    if(tipoCarro.value == "executivo") {valorMulta =valorMulta + 299}
      
    alert(`Valor Aplicado TipoCarro ${tipoCarro.value} Multa:${valorMulta}`)
  }

  function funcao1()
  {
  alert("Eu sou um alert!");
  }