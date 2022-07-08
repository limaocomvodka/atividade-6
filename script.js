
// Crie um objeto que receba ao menos três propriedades sobre você.
let about={
    nome:"Limão",
    idade: 31,
    profissão: "ilustrador"
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
about.time = "Flamengo";

console.log (about)

// Remova uma propriedade desse objeto.

delete about.time
console.log(about)

//Mostre no console todas as propriedades desse objeto.
console.log(about)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
    {
        nome: "Frodo",
        Arma: "Ferroada - Espada",
        Raça: "Hobbit",
        amigos: ["Samwise", "Gandalf", "Aragorn", "Legolas"]

    },
    {
        nome: "Aragorn",
        Arma: "Andúril -Espada",
        Raça: "Numenoriano - Homens",
        amigos: ["Arwen", "Gandalf", "Elrond", "Galadriel"],

    },
    {
        nome: "Legolas",
        Arma: "Arco",
        Raça: "Silvestre/Sindar - Elfo",
        amigos: ["Thranduil", "Elrond", "Gimli", "Frodo"] ,

    },
    {
        nome: "Sauron",
        Arma: "O Um Anel",
        Raça: "Maiar",
        amigos: ["Saruman", "Melkor", "Orcs", "Haradhrim"],

    },
    {
        nome: "Gimli",
        Arma: "Machado" ,
        Raça: "Anão",
        amigos: ["Legolas", "Aragorn", "Gandalf", "Frodo"],

    }
]

console.log(cadastro);

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[4]);
console.log(cadastro[1].amigos[3]);
console.log(cadastro[2].amigos[2]);
console.log(cadastro[3].amigos[1]);
console.log(cadastro[4].amigos[0]);