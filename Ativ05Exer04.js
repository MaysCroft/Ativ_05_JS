// Atividade 05 Exercício 04

const ler = require('readline-sync');

let participantes = [];
let check = true;

while (check) {

    let nome = ler.question("- Informe o Nome do Participante ou 'SAIR' para finalizar: ").toUpperCase();

    if (nome === 'SAIR') {
        check = false;
    } else {
        participantes.push(nome);
    }
}

while (true) {

    let part_alfa = participantes.sort((a,b) => a.nome.localeCompare(b.nome));

    console.log("--------------- MENU ---------------");
    console.log("- 1. Fazer Registro \n- 2. Exibir Lista de não registrados \n- 3. Sair ");
    let opcao = ler.questionInt("=> ");
    console.log("------------------------------------");

    if (opcao === 1) {

        let nome = ler.question("- Nome do Participante: ");
        let n = participantes.indexOf(nome);

        if (n !== -1) {
            participantes.splice(n);
            console.log(`- ${nome} - Registrado com Sucesso!`);
        } else {
            console.log(`- ${nome} - Não está na lista de participantes`);
        }
    } else if (opcao === 2) {
        console.log("----- PARTICIPANTES NÃO REGISTRADOS -----");
        console.table(part_alfa);
    } else if (opcao === 3) {
        console.log("--- Finalizando Cadastro! ---");
        break;
    } else {
        console.log("--- Opção Inválida! ---");
        break;
    }
}