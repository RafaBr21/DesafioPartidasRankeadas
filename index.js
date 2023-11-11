let resultadoVitorias = calcularPartidas(45,15);
let nivel = "";


function calcularPartidas(qtdVitorias, qtdDerrotas){
    return qtdVitorias - qtdDerrotas;
}

if(resultadoVitorias < 10){
    nivel = "Ferro";
} else if(resultadoVitorias >= 11 && resultadoVitorias <= 20){
    nivel = "Bronze";
} else if(resultadoVitorias >= 21 && resultadoVitorias <= 50){
    nivel = "Prata";
} else if(resultadoVitorias >= 51 && resultadoVitorias <= 80){
    nivel = "Ouro";
} else if(resultadoVitorias >= 81 && resultadoVitorias <= 90){
    nivel = "Diamante";
} else if(resultadoVitorias >= 91 && resultadoVitorias <= 100){
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}

console.log(`O Herói tem de saldo de ${resultadoVitorias} está no nível de ${nivel}`);