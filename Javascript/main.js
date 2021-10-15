// Manipulando Elementos JavaScript

function Clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar";
    document.getElementById("mensagem").innerHTML = "<b>Volte Logo</b>";
    //alert("Obrigado por clicar")
}
function Redirecionar(){
    window.open("https://globallabs.academy/");
   // window.location.href = "https://globallabs.academy/";
}

function trocar(){
    document.getElementById("mousemover").innerHTML = "Obrigado por passar mouse";
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemover").innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
// Funções
/*
function soma(n1,n2){
    return n1 + n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
var validar = 0; // Declaração global

function validaIdade(idade){
    //var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual a sua idade");
validaIdade(idade);
console.log(validar);

alert(soma(5,10));
alert(setReplace("Vai Japão","Japão", "Brasil"));
*/
// Tipo Date

/*var d = new Date();
alert(d.getDay());
alert(d.getMonth());
*/
// Estruturas de Condição e Repetição

/*
var count;
for(count = 0; count <= 5; count++){
    console.log(count);
}*/
/*
var count = 0;
while(count <= 5){
    console.log(count);
    //count = count + 1;
    count++;
}/*
/*
var idade = prompt("Qual sua idade"); // Browser mostra uma pergunta ao usuario, em forma de alert.
//var idade = 18;
if(idade >= 18){
    alert("Maior de Idade");
}else{
    alert("menor de idade");
}/*

//Array

/*var lista = ["maça","pera","laranja"];
//lista.push("uva");
//lista.pop();
alert(lista.length); //.reverse() mostra a lista de forma inversa
console.log(lista);*/

//Introdução

/*var nome = "Alexisandro Ribeiro";
var idade = 27;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(`${nome} tem ${idade} anos `);
//alert(idade + idade2)
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));
*/