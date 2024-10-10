function isPalindrome(texto){

    let upControl = [];
    let downControl = [];
    let saida1 = "";
    let saida2 = "";
    let startReverse = texto.length -1;
    let texto2 = texto.toLowerCase();
    let saida3 = "";
    let saida4 = "";
   

    for (let i=0; i<= (texto2.length -1); i++){
        upControl.push(texto2[i]);
    }
        for (let j = startReverse; j>=0; j--){
            downControl.push(texto2[j]);
        }

    saida1 = upControl.join("");
    saida2 = downControl.join("");

    saida3= saida1.replace(/\s/g, "");
    saida4= saida2.replace(/\s/g, "");

    console.log(saida3);
    console.log(saida4);    

    if(saida3 == saida4){
        return true;
    }
    return false; 

}



function arrayMaxMin(numeros){
 
    let max= numeros[0];
    let min= numeros[0];
    for (let i=0; i<= (numeros.length -1); i++){
        if (numeros[i] > max){
            max = numeros[i];
        }
        if (numeros[i] < min){
            min = numeros[i];
        }
    }
    let resposta = [min,max];
    return resposta;
}
