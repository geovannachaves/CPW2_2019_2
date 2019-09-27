/**
 * nosso bd fake!
 * (in memory bd)
 */
var contatos = [];

//cria um apelido para a função query selector
var sel = document.querySelector;

function salvarContato(event){
// inibe a recarga da pagina
    event.preventDefault();
    // recupera dados do formulario
    let nome = sel('#nome').value;
    let telefone = sel('#telefone').value;
    let email = sel('#email').value;
    let dataNascimento = sel('#dataNascimento').value;
    
    // criar um objeto de conato
    let conato = {nome, telefone, email, dataNascimento};

    //adiciona o contato no bd (no final do vetor)
    contatos.push(contato);

    console.log(contato);

}