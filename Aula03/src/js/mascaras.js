/**
 * Utilizaremos a variável global do jQUery ($) para carregar a máscara de telefone
 * assim que a página for carregada.
 */
$(document).ready(function(){
    /*Implementa a máscara de telefone
    document.getElementById('telefone')*/
    $('#telefone').mask('(00) 00000-0000');
});