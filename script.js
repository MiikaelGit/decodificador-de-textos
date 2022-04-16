var input = document.querySelector('textarea#campo');
var input2 = document.querySelector('textarea#campo2')

// FUNÇÃO PARA CONVERTER A MENSAGEM (DECODIFICAR)
function codificar() {
    // LIMPA O CAMPO TODA A VEZ QUE A FUNÇÃO É CHAMADA
    document.getElementById('none').innerHTML = ''
    document.querySelector('img.icone').style.display = 'none'

    var texto = input.value
    var txt =  texto.replace(/e/igm, 'enter')
    var txt = txt.replace(/i/igm, 'imes')
    var txt = txt.replace(/a/igm, 'ai')
    var txt = txt.replace(/o/igm, 'ober')
    var txt = txt.replace(/u/igm, 'ufat')

   document.getElementById('campo2').innerHTML = `${txt}`

   // CRIA O BOTÃO DE COPIAR TEXTO QUANDO A FUNÇÃO "CODIFICAR()" É CHAMADA
   document.getElementById('copy').innerHTML = '<button class="botao botao3" onclick="copy()">Copiar</button>'
}
// FUNÇÃO PARA DECODIFICAR O TEXTO
function decodificar() {
    // LIMPA O CAMPO TODA A VEZ QUE O BOTÃO É CLICADO
    document.getElementById('none').innerHTML = ''
    document.querySelector('img.icone').style.display = 'none'
    document.getElementById('campo').innerHTML = ''

    var texto = input2.value
    var txt =  texto.replace(/enter/igm, 'e')
    var txt = txt.replace(/imes/igm, 'i')
    var txt = txt.replace(/ai/igm, 'a')
    var txt = txt.replace(/ober/igm, 'o')
    var txt = txt.replace(/ufat/igm, 'u')
 
    document.getElementById('campo').innerHTML = `${txt}`
}
// FUNÇÃO PARA COPIAR O TEXTO CONVERTIDO
function copy() {
    navigator.clipboard.writeText(input2.value)
    alert('Copiado!')
}


var botao1 = document.querySelector('button.botao1');
botao1.onclick = codificar;

var botao2 = document.querySelector('button.botao2')
botao2.onclick = decodificar

/*
var botao3 = document.querySelector('button.botao3')
botao3.onclick = copy
*/