function simular(){
    var superiorE = document.getElementById("superiorEsquerdo").value;
    var superiorD = document.getElementById("superiorDireito").value;
    var inferiorD = document.getElementById("inferiorDireito").value;
    var inferiorE = document.getElementById("inferiorEsquerdo").value;

    document.getElementById("iborder").style.borderRadius = superiorE + "px " + superiorD+"px "+inferiorD+"px "+inferiorE+"px";

    document.getElementById("codigo").value = "border-radius: "+superiorE + "px " + superiorD+"px "+inferiorD+"px "+inferiorE+"px;";
}

let copiarTexto = () =>{
    //captura o elemento input
    const inputTest = document.querySelector("#codigo");
    
    //seleciona todo o texto do elemento
    inputTest.select();
    //executa o comando copy
    //aqui é feito o ato de copiar para a area de trabalho com base na seleção
    document.execCommand('copy');
};