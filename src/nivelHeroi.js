let nome = prompt("Qual o nome do Herói?");
let experiencia = Number(prompt("Quanto de experiência carrega consigo?"));

let nivel;

function calcularNivel(exp) {
    if (exp <= 1000) return "Ferro";
    if (exp <= 2000) return "Bronze";
    if (exp <= 5000) return "Prata";
    if (exp <= 7000) return "Ouro";
    if (exp <= 8000) return "Platina";
    if (exp <= 9000) return "Ascendente";
    if (exp <= 10000) return "Imortal";
    return "Radiante";
}

console.log(`O Herói ${nome} está no nível ${nivel}`);