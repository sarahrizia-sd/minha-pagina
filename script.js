// =====================================================
// 1. DADOS DO JOGO (arrays de objetos)
// =====================================================

// Moradores e quantos corações eu tenho com cada um
const amigos = [
    { nome: "Sebastian", coracoes: 14 },
    { nome: "Robin", coracoes: 10 },
    { nome: "Pam", coracoes: 10 },
    { nome: "Caroline", coracoes: 10 },
    { nome: "Emily", coracoes: 8 },
    { nome: "Demetrius", coracoes: 8 },
    { nome: "Clint", coracoes: 8 },
    { nome: "Lewis", coracoes: 7 },
    { nome: "Marnie", coracoes: 7 },
    { nome: "Gus", coracoes: 6 },
    { nome: "Pierre", coracoes: 5 },
    { nome: "Willy", coracoes: 5 },
    { nome: "Kent", coracoes: 4 },
    { nome: "Jodi", coracoes: 3 },
    { nome: "Leah", coracoes: 3 },
    { nome: "Linus", coracoes: 3 },
    { nome: "Wizard", coracoes: 3 },
    { nome: "Penny", coracoes: 3 },
    { nome: "Abigail", coracoes: 3 },
    { nome: "Evelyn", coracoes: 2 },
    { nome: "Jas", coracoes: 2 },
    { nome: "Harvey", coracoes: 2 },
    { nome: "Sam", coracoes: 1 },
    { nome: "Elliott", coracoes: 1 },
    { nome: "Vincent", coracoes: 1 },
    { nome: "Krobus", coracoes: 1 },
    { nome: "Maru", coracoes: 0 },
    { nome: "Shane", coracoes: 0 },
    { nome: "Alex", coracoes: 0 },
    { nome: "Haley", coracoes: 0 }
];

// Animais da fazenda (o máximo de corações de um animal é 5)
const animais = [
    { nome: "kitty", tipo: "🐱 Gata", coracoes: 5 },
    { nome: "Catcho", tipo: "🐄 Vaca", coracoes: 5 },
    { nome: "Minano", tipo: "🐄 Vaca", coracoes: 5 },
    { nome: "Pumbus", tipo: "🐄 Vaca", coracoes: 5 },
    { nome: "Rozzy", tipo: "🐐 Cabra", coracoes: 5 },
    { nome: "Retsina", tipo: "🐐 Cabra", coracoes: 5 },
    { nome: "Rotsa", tipo: "🐐 Cabra", coracoes: 5 },
    { nome: "Suni", tipo: "🐐 Cabra", coracoes: 0 },
    { nome: "Latso", tipo: "🐐 Cabra", coracoes: 0 },
    { nome: "Zutso", tipo: "🐖 Porco", coracoes: 5 },
    { nome: "Trarto", tipo: "🐖 Porco", coracoes: 5 },
    { nome: "Prameo", tipo: "🐖 Porco", coracoes: 5 },
    { nome: "Gatu", tipo: "🐖 Porco", coracoes: 5 },
    { nome: "Prack", tipo: "🐖 Porco", coracoes: 5 },
    { nome: "Satchi", tipo: "🐖 Porco", coracoes: 5 },
    { nome: "Wese", tipo: "🐖 Porco", coracoes: 0 },
    { nome: "Teno", tipo: "🐖 Porco", coracoes: 0 },
    { nome: "Grotsu", tipo: "🐖 Porco", coracoes: 0 },
    { nome: "Kepa", tipo: "🐖 Porco", coracoes: 0 },
    { nome: "Kokio", tipo: "🐖 Porco", coracoes: 0 },
    { nome: "Frecka", tipo: "🐖 Porco", coracoes: 0 },
    { nome: "Fiku", tipo: "🐖 Porco", coracoes: 0 },
    { nome: "Rosley", tipo: "🐖 Porco", coracoes: 0 },
    { nome: "Tokurt", tipo: "🐖 Porco", coracoes: 0 },
    { nome: "Cernard", tipo: "🐔 Galinha", coracoes: 4 },
    { nome: "mona", tipo: "🐔 Galinha", coracoes: 3 },
    { nome: "Rusa", tipo: "🐔 Galinha", coracoes: 3 },
    { nome: "Sodo", tipo: "🐔 Galinha", coracoes: 3 },
    { nome: "Shickard", tipo: "🐔 Galinha", coracoes: 2 },
    { nome: "Kasko", tipo: "🐔 Galinha", coracoes: 1 },
    { nome: "Shiners", tipo: "🦆 Pato", coracoes: 2 },
    { nome: "Shuni", tipo: "🦆 Pato", coracoes: 2 },
    { nome: "Shinello", tipo: "🦆 Pato", coracoes: 1 },
    { nome: "Billy", tipo: "🦆 Pato", coracoes: 1 },
    { nome: "Tus", tipo: "🐇 Coelho", coracoes: 4 },
    { nome: "Tonie", tipo: "🐇 Coelho", coracoes: 3 }
];


// =====================================================
// 2. FUNÇÃO DE APOIO: desenha os corações
// =====================================================

// Recebe quantos corações cheios e o máximo, e devolve um texto tipo "♥♥♥♡♡"
function desenharCoracoes(cheios, maximo) {
    let texto = "";
    for (let i = 1; i <= maximo; i++) {
        if (i <= cheios) {
            texto = texto + "♥";
        } else {
            texto = texto + "♡";
        }
    }
    return texto;
}


// =====================================================
// 3. BOTÃO DIA / NOITE (if/else + localStorage)
// =====================================================

const botaoTema = document.getElementById("botaoTema");
const mensagemTema = document.getElementById("mensagemTema");

function aplicarTema(tema) {
    if (tema === "noite") {
        document.body.classList.add("noite");
        botaoTema.textContent = "☀️ Virar dia";
        mensagemTema.textContent = "Boa noite! Os animais já estão dormindo no celeiro.";
    } else {
        document.body.classList.remove("noite");
        botaoTema.textContent = "🌙 Virar noite";
        mensagemTema.textContent = "Bom dia, fazenda! O galo já cantou.";
    }
}

botaoTema.addEventListener("click", function () {
    let novoTema;
    if (document.body.classList.contains("noite")) {
        novoTema = "dia";
    } else {
        novoTema = "noite";
    }
    aplicarTema(novoTema);
    localStorage.setItem("tema", novoTema); // guarda a escolha para a próxima visita
});

// Quando a página abre, usa o último tema salvo
const temaSalvo = localStorage.getItem("tema");
aplicarTema(temaSalvo);


// =====================================================
// 4. LISTA DE AMIZADES (array + laço for)
// =====================================================

const listaAmigos = document.getElementById("listaAmigos");
const escolhaAmigo = document.getElementById("escolhaAmigo");

for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];

    // O marido pode ter até 14 corações; os outros, até 10
    let maximo = 10;
    if (amigo.nome === "Sebastian") {
        maximo = 14;
    }

    // Cria a linha da lista
    const item = document.createElement("li");
    item.innerHTML = amigo.nome + ' <span class="coracoes">' + desenharCoracoes(amigo.coracoes, maximo) + "</span>";
    listaAmigos.appendChild(item);

    // Cria também a opção no select do jogo
    const opcao = document.createElement("option");
    opcao.value = i;
    opcao.textContent = amigo.nome;
    escolhaAmigo.appendChild(opcao);
}


// =====================================================
// 5. JOGO DOS CORAÇÕES (lê o campo e valida)
// =====================================================

const campoChute = document.getElementById("campoChute");
const botaoChutar = document.getElementById("botaoChutar");
const resultado = document.getElementById("resultado");
const placar = document.getElementById("placar");

// Recupera os acertos guardados (ou começa do zero)
let acertos = Number(localStorage.getItem("acertos")) || 0;
placar.textContent = "Acertos guardados neste navegador: " + acertos;

botaoChutar.addEventListener("click", function () {
    const textoDigitado = campoChute.value.trim();
    const chute = Number(textoDigitado);
    const amigo = amigos[escolhaAmigo.value];

    // Validações
    if (textoDigitado === "") {
        resultado.textContent = "Digite um número antes de chutar!";
        resultado.className = "resultado erro";
    } else if (isNaN(chute)) {
        resultado.textContent = "Isso não é um número. Use só algarismos, tipo 5.";
        resultado.className = "resultado erro";
    } else if (chute < 0 || chute > 14) {
        resultado.textContent = "O número de corações vai de 0 a 14.";
        resultado.className = "resultado erro";
    } else if (chute === amigo.coracoes) {
        acertos = acertos + 1;
        localStorage.setItem("acertos", acertos);
        resultado.textContent = "Acertou! Tenho " + amigo.coracoes + " corações com " + amigo.nome + ".";
        resultado.className = "resultado";
    } else if (chute < amigo.coracoes) {
        resultado.textContent = "Mais! Tenho mais corações com " + amigo.nome + ".";
        resultado.className = "resultado";
    } else {
        resultado.textContent = "Menos! Tenho menos corações com " + amigo.nome + ".";
        resultado.className = "resultado";
    }

    placar.textContent = "Acertos guardados neste navegador: " + acertos;
});


// =====================================================
// 6. LISTA DE ANIMAIS (array + laço for + filtro)
// =====================================================

const listaAnimais = document.getElementById("listaAnimais");
const resumoAnimais = document.getElementById("resumoAnimais");

function mostrarAnimais(soFelizes) {
    listaAnimais.innerHTML = ""; // limpa a lista antes de montar de novo

    for (let i = 0; i < animais.length; i++) {
        const animal = animais[i];

        // Se o filtro estiver ligado, pula quem não tem 5 corações
        if (soFelizes && animal.coracoes < 5) {
            continue;
        }

        const item = document.createElement("li");
        item.innerHTML =
            '<span class="nome-animal">' + animal.nome + "</span>" +
            animal.tipo + "<br>" +
            '<span class="coracoes">' + desenharCoracoes(animal.coracoes, 5) + "</span>";
        listaAnimais.appendChild(item);
    }
}

// Conta quantos animais estão com o coração cheio
let felizes = 0;
for (let i = 0; i < animais.length; i++) {
    if (animais[i].coracoes === 5) {
        felizes = felizes + 1;
    }
}
resumoAnimais.textContent = "São " + animais.length + " animais na fazenda, e " + felizes + " deles estão com os 5 corações cheios.";

document.getElementById("botaoTodos").addEventListener("click", function () {
    mostrarAnimais(false);
});

document.getElementById("botaoFelizes").addEventListener("click", function () {
    mostrarAnimais(true);
});

// Mostra todos ao abrir a página
mostrarAnimais(false);
