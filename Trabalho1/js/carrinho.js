var pilsen = 0;
var puromalte = 0;
var weiss = 0;
var stout = 0;
var total = 0;
var output = document.getElementById("itenscarrinho");

function adicionapilsen(){
    pilsen+=1;
    total+=1;
    mostraCarrinho(total);
}

function adicionapuromalte(){
    puromalte+=1;
    total+=1;
    mostraCarrinho(total);
}

function adicionaweiss(){
    weiss+=1;
    total+=1;
    mostraCarrinho(total);
}

function adicionastout(){
    stout+=1;
    total+=1;
    mostraCarrinho(total);
}

function mostraCarrinho(value){
    document.getElementById("mostracarrinho").innerHTML = total;
}
mostraCarrinho(total);