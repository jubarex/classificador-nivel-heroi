// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói,
// depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

// console.log("rodando");

var heroi = {
  nome: "Juba",
  xp: 10000000,
};

var nivel = {
  // Se XP for menor do que 1.000 = Ferro
  0: {
    min: 0,
    max: 1000,
    nome: "Ferro",
  },
  // Se XP for entre 1.001 e 2.000 = Bronze
  1: {
    min: 1001,
    max: 2000,
    nome: "Bronze",
  },
  // Se XP for entre 2.001 e 5.000 = Prata

  2: {
    min: 2001,
    max: 5000,
    nome: "Prata",
  },
  // Se XP for entre 5.001 e 7.000 = Ouro
  3: {
    min: 5001,
    max: 7000,
    nome: "Ouro",
  },
  // Se XP for entre 7.001 e 8.000 = Platina

  4: {
    min: 7001,
    max: 8000,
    nome: "Platina",
  },
  // Se XP for entre 8.001 e 9.000 = Ascendente
  5: {
    min: 8001,
    max: 9000,
    nome: "Ascendente",
  },
  // Se XP for entre 9.001 e 10.000= Imortal
  6: {
    min: 9001,
    max: 10000,
    nome: "Imortal",
  },
  // Se XP for maior ou igual a 10.001 = Radiante
  7: {
    min: 10001,
    max: 0,
    nome: "Radiante",
  },
};

const verClasse = (heroi) => {
  let experiencia = heroi.xp;
  console.log(experiencia);
  //   console.log(nivel);
  if (experiencia >= 0) {
    let nomeNivel;

    for (var e in nivel) {
      //   console.log("entrando no for");
      //   console.log(e);
      //   console.log(nivel[e]);
      if (nivel[e].min == 0) {
        if (experiencia <= nivel[e].max) {
          //   console.log(nivel[e].nome);
          nomeNivel = nivel[e].nome;
          //   return;
        }
      } else if (nivel[e].max == 0) {
        if (experiencia >= nivel[e].min) {
          //   console.log(nivel[e].nome);
          nomeNivel = nivel[e].nome;
          //   return;
        }
      } else {
        if (nivel[e].min <= experiencia && nivel[e].max >= experiencia) {
          //   console.log(nivel[e].nome);
          nomeNivel = nivel[e].nome;
          //   return;
        }
      }
    }

    // console.log(nomeNivel);
    return nomeNivel;
  } else {
    console.log("Não existe");
  }
};

let textoNivel = verClasse(heroi);

// console.log(textoNivel);
console.log(
  `O Herói de nome **${heroi.nome}** está no nível de **${textoNivel}**`
);
