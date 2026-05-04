function adicionar() {
    let titulo = document.getElementById("titulo").textContent;
    let corpo = document.getElementById("corpo").textContent;
    let tarefa = createElement("tarefa");
}

const dados = [
    { titulo: "Card 1", texto: "Descrição do card um." },
    { titulo: "Card 2", texto: "Descrição do card dois." },
    { titulo: "Card 3", texto: "Descrição do card três." }
];

const container = document.getElementById('card-container');

function criarCards() {
    dados.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const titulo = document.createElement('h3');
        titulo.innerText = item.titulo;

        const texto = document.createElement('p');
        texto.innerText = item.texto;

        card.appendChild(titulo);
        card.appendChild(texto);

        container.appendChild(card);
    });
}

criarCards();



