const btn = document.querySelector("#my-button")

btn.addEventListener("click", function () {
    console.log("Clicou!")
})

const secondBtn = document.querySelector("#btn");

function imprimiMensagem() {
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimiMensagem);

const thirdBtn = document.querySelector("#other-btn");
thirdBtn.addEventListener("click", () => {
    console.log{"Evento removido"};
    secondBtn.removeEventListener{"click", imprimiMensagem};
})

const title = document.querySelector("#my-title")

title.addEventListener("click", (event) =>{
    // console.log(event)
    console.log(e.offsetX);
})

const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = documento.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
    console.log("Evento 2");
    e.stopPropagation();
});

// const a = document.querySelector("a");

// a.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("Não alteroua página");
// })

// // Eventos de tecla
// // document.addEventListener("keyup", (e) => {
// //     console.log(`Soltou a tecla ${e.key}` );
// // })
// // document.addEventListener("keydown", (e) => {
// //     console.log(`Pressionou a tecla ${e.key}`);
// })

// Eventos de mouse
// const mouseEvents = document.querySelector("#mouse");
// mouseEvents.addEventListener("#mousedouwn", () => {
//     console.log("Pressionou o botão");
// });
// mouseEvents.addEventListener("mouseup", () => {
//     console.log("Soltou o botão");
// });
// mouseEvents.addEventListener("dbclick", () => {
//     console.log("Clique duplo");
//     });
//     window.addEventListener("scroll", (e) => {
//         if (window.scrollY > 200) {
//             console.log("Passamos 200px");
//         }
//     });

const dataAtual = new Date();
console.log(dataAtual)

// Obter o dia do mês
const dia = dataAtual.getDate();
console.log(`Dia: ${dia}`);

// Obter o mês (0-11, janeiro = 0)
const mes = dataAtual.getMouth() + 1;
console.log(`Mês: ${mes}`);

// Obter ano
const ano = dataAtual.getFullYear();
console.log(`Mês: ${mes}`);

// Obter data completa formatada
const dataFormatada = `${dia}/${mes}/${ano}`;
console.log(`Data formatada: ${dataFormatada}`);

const frutas = ["Maçã", "Banana", "Laranja", "Pêra", "Uva"];

// Encontrar a primeira fruta que começa com L usando `find()`
const frutaComL = frutas.find(fruta => fruta.startsWith("L"));
console.log(`Fruta com L ${frutaComL}`);

// Percorrer todas as frutas e imprimir seus nomes usando forEach
frutas.forEach(fruta => console.log(`Nome da fruta: ${fruta}`));

// Mapear as frutas para seus tamanhos (em cm) usando map()
const tamanhosFrutas = frutas.map(fruta => fruta.length);
console.log(`Tamanhos das frutas: ${tamanhosFrutas}`);

// Juntar os nomes das frutas em uma string usando join()
const listaFrutas = frutas.join(", ");
console.log(`Lista de frutas: ${listaFrutas}`);