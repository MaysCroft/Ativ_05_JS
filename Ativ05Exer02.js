// Atividade 05 Exercício 02

const ler = require("readline-sync");

let chamada = [], prioridade = [], normal = [];
let cham, resp;
let check = true;

console.log("------------------- EMERGÊNCIA -------------------");

while (check) {

    cham = ler.questionInt("- Informe a Emergencia: \n- 1. Incendio. \n- 2. Roubo. \n- 3. Acidente. \n=> ");
    resp = ler.question("- Resuma o ocorrido: ");

    chamada.push({cham: cham, resp: resp});

    console.log("----------------------------------------------------------------");
    let x = ler.question("- Ocorrencia Armazenada, aguarde contato! \n- 'ENTER' - para novo Chamado - 'SAIR' - para Finalizar => ").toUpperCase();
    console.log("----------------------------------------------------------------");

    if (x === 'SAIR') {
        check = false;
        console.log("----- Sistema Finalizado! -----");
    }
}

for (let i = 0; i < chamada.length; i++) {
    if (chamada[i].cham == 1) {
        prioridade[i] = chamada[i];
    } else {
        normal[i] = chamada[i];
    }
}

console.log("- CHAMADAS PRIORITARIAS:");
console.table(prioridade);

console.log(" ");

console.log("- OUTRAS CHAMADAS:");
console.table(normal);