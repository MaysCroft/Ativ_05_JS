// Atividade 05 Exercício 05

const ler = require('readline-sync');

let funcionarios = [];
let nome, depart, cargo, anoserv;

while (true) {

    console.log("- Escolha uma Opção: ");
    console.log("- 1. Cadastrar Funcionário");
    console.log("- 2. Exibir Funcionários");
    console.log("- 3. Buscar Funcionário");
    console.log("- 4. Sair");
    let opt = ler.question("=> ");

    if (opt === 1) {

        nome = ler.question("- Digite Nome do Funcionario: ");
        depart = ler.question("- Digite Departamento: ");
        cargo = ler.question("- Digite Cargo: ");
        anoserv = ler.questionInt("- Digite Anos de Servico: ");
        
        funcionarios.push({nome: nome, depart: depart, cargo: cargo, anoserv: anoserv});
        console.log("Funcionário Adicionado com Sucesso!");

    } else if (opt === 2) {

        console.log("----- LISTA DE FUNCIONÁRIOS -----");

        for (let i = 0; i < funcionarios.length; i++) {
            console.log(`- ${i + 1}. Nome: ${funcionarios[i].nome}`);
            console.log(`- Departamento: ${funcionarios[i].depart}`);
            console.log(`- Cargo: ${funcionarios[i].cargo}`);
            console.log(`- Anos de Serviço: ${funcionarios[i].anoserv}`);
            console.log("---------------------------------");
        }

        console.log("---------------------------------");

    } else if (opt === 3) {

        console.log("--- BUSCA DE FUNCIONÁRIO ---");
        let busca = ler.question("- Digite o Nome do Funcionario: ");
        let found = funcionarios.find(funcionario => funcionario.nome.toUpperCase() === busca.toUpperCase());

        if (found) {
            console.log(`${i + 1}. Nome: ${funcionarios[i].nome}, Departamento: ${funcionarios[i].depart}`);
            console.log(`Cargo: ${funcionarios[i].cargo}, Anos de Serviço: ${funcionarios[i].anoserv}`);
        } else {
            console.log("--- Não Encontrado! ---");
        }
    } else if (opt === 4) {
        console.log("--- Saindo do Sistema! ---");
        break;
    } else {
        console.log("--- Escolha Inválida! ---");
    }
}