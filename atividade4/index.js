function calcularProduto(){

if(document.getElementById('numero1').value %1 !=0 || document.getElementById('numero2').value %1 != 0){
alert("só são aceitos numero INTEIROS, por favor recarregue a pagina");
}else{
var multiply = document.getElementById('numero1').value*document.getElementById('numero2').value;
return multiply;

}
}