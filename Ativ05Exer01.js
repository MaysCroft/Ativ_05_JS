// Atividade 05 Exercício 01

const ler = require('readline-sync');

let cadastro = [];
let check = true;

console.log("------------------- CONTROLE DE ESTOQUE -------------------");

while (check) {

    let prod = ler.question("- Digite Produto: ");
    let quant = ler.questionInt("- Informe Quantidade: ");

    cadastro.push({prod: prod, quant: quant});

    console.log("----------------------------------------------------------------");
    let x = ler.question("- Dados Armazenados! \n- 'ENTER' - para Cadastrar - 'SAIR' - para Finalizar => ").toUpperCase();
    console.log("----------------------------------------------------------------");

    if (x === 'SAIR') {
        check = false;
        console.log("----- Sistema Finalizado! -----");
    }
}

let cadalfa = cadastro.sort((a,b) => a.prod.localeCompare(b.prod));
let removercad = cadalfa.filter(rem => rem.quant > 0);
console.table(removercad);