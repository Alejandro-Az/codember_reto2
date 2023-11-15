let codigo = document.getElementById("codigo");
let resultado = document.getElementById('resultado');
let listaNumeros = document.getElementById("listaNumeros");

function imprimirResultado() {
    let codigoValor = codigo.value;
    let contador = 0;
    let cadenaTerminada = "";
    listaNumeros.innerHTML = "";

    for(let i = 0; i < codigoValor.length; i++) {
        let itemList = document.createElement("li");

        if(codigoValor[i] == '#') {
            contador++;        
        } else if(codigoValor[i] == '@') {
            contador--;
        } else if(codigoValor[i] == '*') {
            contador *= contador;
        } else if(codigoValor[i] == '&') {
            itemList.innerText = contador;
            listaNumeros.appendChild(itemList);
            cadenaTerminada += contador;
        }
    }
    
    resultado.textContent = cadenaTerminada;
}