// Atividade 05 Exercício 03

const ler = require('readline-sync');

let biblioteca = [];
let title, cat, categ = 0;

console.log("----- BANCO DE DADOS BIBLIOTECA ARCÁDIA -----");

let qtd = ler.questionInt("- Quantos livros voce deseja catalogar? ");

for (let i = 0; i < qtd; i++) {

    console.log("----------------------------------------");
    title = ler.question(`${i + 1} - Informe o Titulo do Livro: `);
    console.log("- Informe Categoria: \n- 1. Ficcao Cientifica \n- 2. Fantasia \n- 3. Romance \n- 4. Historia \n- 5. Poesia");
    cat = ler.questionInt("=> ");
    console.log("----------------------------------------");

    switch (cat) {
        case 1:
            categ = "Ficção Científica";
            break;
        case 2:
            categ = "Fantasia";
            break;
        case 3:
            categ = "Romance";
            break;
        case 4:
            categ = "História";
            break;
        case 5:
            categ = "Poesia";
            break;
        default:
            categ = "Não Classificado!";
            break;
    }

    biblioteca.push({title: title, categ: categ});
}

console.log("--- LIVROS CATALOGADOS ---");
console.table(biblioteca);

qtd = ler.questionInt("- Quantos livros deseja analisar? ");
let qtd_livros = biblioteca.slice(0,qtd);

let contagem = [];

for (let livro of qtd_livros) {
    if (contagem[livro.categ]) {
        contagem[livro.categ]++;
    } else {
        contagem[livro.categ] = 1;
    }
}

console.log("--- LIVROS POR CATEGORIA ---");
for (categ in contagem) {
    console.log(`${categ}: ${contagem[categ]}`);
}