const perguntas = [
	"Grande sábio, me ajude a descobrir",
	"Lord da sabedoria, me diga",
	"Seria possivel me ajudar a descobrir"
]

const respostas = [
	"Hoje é meu dia de folga",
	"Não recebo para responder esse tipo de pergunta",
	"Passa amanhã",
	"Volta segunda"
]

let elementInput 	= document.getElementById('inputField')
let elementOutput 	= document.getElementById('outputField')

let resposta = ""
let ocultar	 = false
let contador = 0

let peguntaPadrao  = perguntas[Math.floor(Math.random() * perguntas.length)]
let respostaPadrao = respostas[Math.floor(Math.random() * resposta.length)]

elementInput.addEventListener("input", (e) => {
	let element = e.target
	if(e.data == ";") {
	 	ocultar = !ocultar
	 	element.value = element.value.substring(0, element.value.length - 1)
	 	return
	}

	if(ocultar){
		if(e.inputType == "deleteContentBackward"){
			resposta = resposta.substring(0, resposta.value.length - 1)
			contador = ((contador - 1) < 0) ? 0 : contador--
			return
		}

		element.value = element.value.substring(0, element.value.length - 1) +
			perguntaPadrao.charAt(contador++)
		resposta += e.data
	}
})

function mostrarResposta(){
	let elementResposta = document.getElementById("outputField")

	if(contador <= 0){
		elementResposta.innerText = respostaPadrao
	} else {
		elementResposta.innerText = resposta
	}
}