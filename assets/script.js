//Aperta botão criptografar - deleta foto e paragrafos abaixo dela e aparece texto criptografado
document.getElementById('btnCriptografar').addEventListener('click', function(){
    const inputText = document.getElementById('text-cripto').value.toLowerCase();
    const criptoText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    document.getElementById('text-descripto').textContent = criptoText


    let aparecer = document.getElementById('text-descripto');
    aparecer.style.display = 'block';

    let btncopiar = document.getElementById('btnCopiar')
    btncopiar.style.display = 'block';

    let sumiurFt = document.getElementById('ftm');
    sumiurFt = ftm.src = "";

    let sumirh2 = document.getElementById('h2');
    sumirh2.style.display = 'none';

    let sumirptxtdireito = document.getElementById('ptextditeito');
    sumirptxtdireito.style.display = 'none';
})

//Aperta botão descriptografar 
document.getElementById('btnDescriptografar').addEventListener('click', function(){
    const inputText = document.getElementById('text-cripto').value.toLowerCase();
    const originalText = inputText
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

    document.getElementById('text-descripto').textContent = originalText;

    let aparecer = document.getElementById('text-descripto');
    aparecer.style.display = 'block';

    let btncopiar = document.getElementById('btnCopiar')
    btncopiar.style.display = 'block';

    let sumiurFt = document.getElementById('ftm');
    sumiurFt = ftm.src = "";

    let sumirh2 = document.getElementById('h2');
    sumirh2.style.display = 'none';

    let sumirptxtdireito = document.getElementById('ptextditeito');
    sumirptxtdireito.style.display = 'none';
})

// Adicionando a funcionalidade de copiar texto ao clicar no botão de cópia
document.getElementById('btnCopiar').addEventListener('click', function() {
    var textoParaCopiar = document.getElementById('text-descripto').textContent;

    // Copia o texto para a área de transferência usando a API Clipboard
    navigator.clipboard.writeText(textoParaCopiar)
        .then(() => {
            // Se a cópia for bem-sucedida, exibe uma mensagem para o usuário
            alert('Texto copiado com sucesso!');

            // Limpa os campos text-descripto e text-cripto
            document.getElementById('text-descripto').textContent = '';
            document.getElementById('text-cripto').value = '';
            document.getElementById('text-cripto').focus();
        })        
        .catch(err => {
            // Se houver algum erro na cópia, exibe uma mensagem de erro
            console.error('Erro ao copiar texto: ', err);
        });
});

function validarEntrada() {

    const inputText = document.getElementById('text-cripto').value;
    const regex = /^[a-z\s\0-9]+$/;

    if (!regex.test(inputText)) {
        alert('Digite apenas letras minúsculas e sem acentos.');        
        // Recarrega a página
        location.reload();
    }
}