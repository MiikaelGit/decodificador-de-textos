const input = document.querySelector('textarea#campo');
const output = document.querySelector('textarea#campo2');
input.focus();

// FUNÇÃO PARA CONVERTER A MENSAGEM (CODIFICAR)
function codificar() {
    if (input.value.length == 0) {
        alert('Digite algum texto no campo abaixo');
        input.focus();
    } else {
        // LIMPA O CAMPO TODA A VEZ QUE A FUNÇÃO É CHAMADA
        document.getElementById("decodificador").innerHTML = '';

        let texto = input.value
        let txt =  texto.replace(/e/igm, 'enter');
        txt = txt.replace(/i/igm, 'imes');
        txt = txt.replace(/a/igm, 'ai');
        txt = txt.replace(/o/igm, 'ober');
        txt = txt.replace(/u/igm, 'ufat');

        document.getElementById('decodificador').innerHTML = `<textarea readonly name="" id="campo2">${txt}</textarea>`;

        // CRIA O BOTÃO DE COPIAR TEXTO QUANDO A FUNÇÃO "CODIFICAR()" É CHAMADA
        document.getElementById('decodificador').innerHTML += '<button class="botao botao3" onclick="copy()">Copiar</button>';
    }
}
// FUNÇÃO PARA DECODIFICAR O TEXTO
function decodificar() {
    if (input.value.length == 0) {
        alert('Digite algum texto no campo abaixo');
        input.focus();
    } else {
        // LIMPA O CAMPO TODA A VEZ QUE O BOTÃO É CLICADO
        document.getElementById('decodificador').innerHTML = '';

        let texto = input.value
        let txt =  texto.replace(/enter/igm, 'e');
        txt = txt.replace(/imes/igm, 'i');
        txt = txt.replace(/ai/igm, 'a');
        txt = txt.replace(/ober/igm, 'o');
        txt = txt.replace(/ufat/igm, 'u');
        
        document.getElementById('decodificador').innerHTML = `<textarea readonly name="" id="campo2">${txt}</textarea>`;
        
        // CRIA O BOTÃO DE COPIAR TEXTO QUANDO A FUNÇÃO "DECODIFICAR()" É CHAMADA
        document.getElementById('decodificador').innerHTML += '<button class="botao botao3" onclick="copy()">Copiar</button>';
    }
}
// FUNÇÃO PARA COPIAR O TEXTO CONVERTIDO
function copy() {
    document.querySelector('#campo2').select();
    document.execCommand('copy');
    alert('Copiado!');
}



let botao1 = document.querySelector('button.botao1');
botao1.onclick = codificar;

let botao2 = document.querySelector('button.botao2');
botao2.onclick = decodificar;


