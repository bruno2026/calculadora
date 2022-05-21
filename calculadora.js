// import somar from "./somar.js";
// import subtrair from "./subtrair.js";
// import multiplicar from "./multiplicar.js";
// import dividir from "./dividir.js";


// export default function calcular(a, b, operacao) {
//     switch (operacao) {
//         case "somar":
//             return somar(a, b);
//         case "subtrair":
//             return subtrair(a, b);
//         case "multiplicar":
//             return multiplicar(a, b);
//         case "dividir":
//             return dividir(a, b);
//         default:
//             return "Operação inválida";
//     }
// }

let valorDisplay = 0;
let valorDisplayAnterior = 0;
let operacao = "";

let textoDoDisplay = document.querySelector('.valor-display').value = valorDisplay;

document.querySelector('.valor-display').value = valorDisplay;



// chama a funcao buttonClick para cada botao clicado
document.querySelector('.calculadora__botoes').addEventListener("click", function (event) {
    buttonClick(event.target.innerHTML);
});

//executa a funcao buttonClick para cada botao clicado
//Separa o valor do botao clicado entre numeros e operadores
// isNaN(value) retorna true se o valor for um numero, se nao for retorna false.
function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        tratarSimbolo(value);
    } else {
        tratarNumero(value);
    }
}

// funcao para tratar os simbolos / operações selecionados
function tratarSimbolo(value) {
    switch (value) {
        case "C":
            limpar();
            break;
        case "DEL":
            backspace();
            break;
        case "=":
            calcular();
            break;
        case "+":
            adicionarOperacao("+");
            break;
        case "-":
            adicionarOperacao("-");
            break;
        case "*":
            adicionarOperacao("*");
            break;
        case "/":
            adicionarOperacao("/");
            break;
        default:
            break;
    }
}

//funcao para tratar os numeros selecionados
function tratarNumero(value) {
    if (valorDisplay === 0) {
        valorDisplay = value;
    } else {
        valorDisplay = valorDisplay + value;
    }

    //Mostra a operação no display da calculadora ex: 2 + 2
    let renderDisplay = document.querySelector('.valor-display').value;
    if (renderDisplay.toString().includes("+") || renderDisplay.toString().includes("-") || renderDisplay.toString().includes("*") || renderDisplay.toString().includes("/")) {
        document.querySelector('.valor-display').value = `${valorDisplayAnterior} ${operacao} ${valorDisplay}`
        // valorDisplayAnterior + " " + operacao + valorDisplay;
    } else {                                                
        document.querySelector('.valor-display').value = valorDisplay;
    }

}
// funcao para adicionar o operador ao valorDisplay
function adicionarOperacao(value) {
    if (valorDisplayAnterior === 0) {
        valorDisplayAnterior = valorDisplay;
        valorDisplay = 0;
    }
    if (operacao === "") {
        operacao = value;
    }

    document.querySelector('.valor-display').value = `${valorDisplayAnterior} ${operacao}`;
    // valorDisplayAnterior + operacao;

}

// funcão para deletar o ultimo caracter do valorDisplay
function backspace(value) {
    if (valorDisplay.toString().length > 1) {
        valorDisplay = valorDisplay.toString().slice(0, -1);
        document.querySelector('.valor-display').value = valorDisplay;
    } else {
        valorDisplay = 0;
        document.querySelector('.valor-display').value = valorDisplay;
    }
    // console.log("cheguei aqui");
}

//funcao de limpar o display para um novo calculo
function limpar() {
    valorDisplay = 0;
    valorDisplayAnterior = 0;
    operacao = "";
    document.querySelector('.valor-display').value = valorDisplay;
}

//funcao para calcular o resultado
function calcular() {
    if (operacao === "") {
        valorDisplay = valorDisplayAnterior;
    } else {
        valorDisplay = eval(valorDisplayAnterior + operacao + valorDisplay);
    }
    operacao = "";
    document.querySelector('.valor-display').value = valorDisplay;
}   
