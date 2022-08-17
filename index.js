function verificar(){

var inicio1 = document.getElementById("inicio");
var res = document.getElementById("tab");

if (inicio1.value.length == 0 ){
    alert("[ERROR] Por favor preencher os campos abaixo.");

}else{
var i = Number(inicio1.value)
res.innerHTML = '' // para limpar linhas anteriores antes de adicionar uma nova

for (var a = 1; a < 11; a++){
    var item = document.createElement("option") // criando dentro de javascript
    item.text = `${i} x ${a} = ${i*a}` //atribuindo valor a variável item
    item.value =`tab${a}`// item indicado para php dando valor as linha a1, a2 etc...
    res.appendChild(item) //saiu resultado item, imprimindo nada tela
        }
    }
}