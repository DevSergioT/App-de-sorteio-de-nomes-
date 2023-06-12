const btnSortear = document.querySelector(".btn-prize-draw")
const textarea = document.querySelector("textarea")
const tagResult = document.querySelector(".results p")
const popUpResults = document.querySelector(".results")
const btnToclose = document.querySelector(".to-close")
//PEGANDO DADOS DO FORMULÁRIO
function formData() {
  //RECUPERANDO DADOS DO CAMPO (TEXTAREA)
  const valorCampo = textarea.value
  const listaNomes = valorCampo.split(",")
  const tamanhoArray = listaNomes.length
  const posicaoNome = gerarNumeroAleatorio(tamanhoArray)
  const nome = listaNomes[posicaoNome]

  if (valorCampo === "") {
    Swal.fire({
      icon: 'warning',
      title: 'Ops...!',
      text: 'É necessário colocar os nomes. Separados por virgula!',
      //footer: '<a href="">Why do I have this issue?</a>'
      color: "#f10606",
      background: '#f2eded'
    })
  } else {
    mostrarResultado(nome)
    textarea.value = ""
  }

}
//ADICIONANDO EVENTO DE CLICK NO BOTÃO E EXECUTANDO A FUNÇÃO
btnSortear.addEventListener("click", formData)
//GERANDO NÚMERO ALEATÓRIO
function gerarNumeroAleatorio(tamanhoArray) {
  //RETORNA O NÚMERO
  return Math.floor(Math.random() * (tamanhoArray - 0) + 0)

}

function mostrarResultado(nome) {

  tagResult.innerText = `Parabéns  ${nome}, você foi sorteado!`
  popUpResults.classList.add("showresult")

}


function fecharPopUp() {

  popUpResults.classList.remove("showresult")

}
btnToclose.addEventListener("click", fecharPopUp)
