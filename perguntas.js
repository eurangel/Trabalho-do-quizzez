const perguntas = [
    {
        pergunta: "Qual a capital do Brasil?",
        opcoes: [
            "Umuarama",
            "Rio de Janeiro",
            "Brasília",
            "Salvador"
        ],
        resposta: 2 // índice da resposta correta
    },
    {
        pergunta: "Qual a capital da Nova Zelândia?",
        opcoes: [
            "Auckland",
            "Napier",
            "Londres",
            "Wellyngton"
        ],
        resposta: 3
    },
    {
        pergunta: "Qual o maior país subdesenvolvido do mundo?",
        opcoes: [
            "Níger",
            "Rússia",
            "Itália",
            "Alemanha"
        ],
        resposta: 0
    },
    {
        pergunta: "Qual o maior continente do mundo",
        opcoes: [
            "Oceania",
            "América",
            "Ásia",
            "Europa"
        ],
        resposta: 2
    },
    {
        pergunta: "Qual o menor país do mundo?",
        opcoes: [
            "Brasil",
            "Nova Zelândia",
            "Canadá",
            "Vaticano"
        ],
        resposta: 3
    },
    {
        pergunta: "Qual é o rio mais longo do mundo?",
        opcoes: [
            "Tigre",
            "Amazonas",
            "Nigro",
            "Aratimbó"
        ],
        resposta: 1
    }
];

// Função para gerar os flashcards
function criarFlashcards() {
    const container = document.getElementById("container");

    perguntas.forEach((pergunta, index) => {
        const cartao = document.createElement("article");
        cartao.classList.add("cartao");

        cartao.innerHTML = `
            <div class="cartao__conteudo">
                <h3>Questão ${index + 1}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta.pergunta}</p>
                </div>
                <div class="cartao__conteudo__opcoes">
                    ${pergunta.opcoes.map((opcao, i) => `
                        <label>
                            <input type="radio" name="pergunta${index}" value="${i}">
                            ${opcao}
                        </label>
                    `).join('')}
                </div>
                <button onclick="verificarResposta(${index})">Responder</button>
                <div class="resultado" id="resultado${index}" style="display:none;"></div>
            </div>
        `;
        
        container.appendChild(cartao);
    });
}

// Função para verificar a resposta
function verificarResposta(index) {
    const opcoes = document.getElementsByName(`pergunta${index}`);
    const resultadoDiv = document.getElementById(`resultado${index}`);
    let respostaSelecionada;

    opcoes.forEach((opcao, i) => {
        if (opcao.checked) {
            respostaSelecionada = i;
        }
    });

    if (respostaSelecionada === undefined) {
        resultadoDiv.innerHTML = "Por favor, selecione uma opção.";
    } else if (respostaSelecionada === perguntas[index].resposta) {
        resultadoDiv.innerHTML = "Resposta correta!";
    } else {
        resultadoDiv.innerHTML = "Resposta errada! A resposta correta é: " + perguntas[index].opcoes[perguntas[index].resposta];
    }

    resultadoDiv.style.display = "block";
}

// Chama a função para criar os flashcards ao carregar a página
window.onload = criarFlashcards;

