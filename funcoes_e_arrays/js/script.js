// Exerccício 01
// function minhaFuncao(){
//     console.log("Testando")
// }

// minhaFuncao()

// const minhaFuncaoEmVariavel = function(txt){
//     console.log(`Imprimindo: ${txt}`)
// }

// minhaFuncaoEmVariavel("sapato")
// minhaFuncaoEmVariavel("colher")
// minhaFuncaoEmVariavel(5+5)

// -Exercício 02
// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;

// function soma(n1, n2){
//     console.log(`A soma entre ${n1} + ${n2} é = ${n1+n2}`)
//     console.log(`A sub entre ${n1} - ${n2} é = ${n1-n2}`)
//     console.log(`A div entre ${n1} / ${n2} é = ${n1/n2}`)
//     console.log(`A mulr entre ${n1} * ${n2} é = ${n1*n2}`)
// }

// soma(a,b)
// console.log(a)
// console.log(catraca)

// -Exercício 03
// function raizQuadrada (numero){
//     return numero * numero
    
// }

// console.log(raizQuadrada(4))


// -Exercício 04
// const raizQuadrada =  (numero) => {
//     return numero * numero

// }

// console.log(raizQuadrada(4))

// const testeArrow = () =>{
//     console.log("Essa é uma arrow function")

// }

// testeArrow()

// -Exercícío 05

// const parOuImpar = (n) =>{
//     if(n % 2 === 0){
//     console.log(`${n} é par`)
//     return
// }
// console.log(`${n} é impar`)
// }

// parOuImpar(421)

// const lista = [1, 2, 3, 4, 5]

// console.log(lista)
// console.log(typeof lista)

// console.log(lista[1])
// console.log(lista[0])
// console.log(lista[6])
// console.log(lista.length)

// for(let i = 0; i < lista.length; i++){
//     console.log(`Elemento da lista: ${lista[i]}`)
// }

// escreva um Array chamado Cores, dentro dele armazene: azul amarelo, verde, vermelho, branca
// escreva uma estrutura de repetição laço for para retornar todos os elementos do array 


// const cores = ["Azul", "Amarela", "Verde", "Vermelha", "Branca"]

// console.log(cores)

// for(let i = 0; i < cores.length; i++){
//     console.log(`Elemento da lista de cores:  ${cores[i]}`)

// }

// const nums = [1, 2, 3, 4, 5]

// nums.forEach((n) => {
//     console.log(`O número atual é: ${n}`)
// })

// constNumbers = [5, 12, 4, 22];
// const otherNumbers = [1, 2, 3];

// const allNumbers = numbers.concat(otherNumbers);

// console.log(allNumbers);

// const text = "algum texto";
// const text2 = "EITA JOVEM";
// console.log(text.toUpperCase());
// console.log(text2.toLocaleLowerCase());

// const array = ["a", "b", "c"];

// array.push("d");

// console.log(array);
// console.log(arraylength);

// array.pop();
// const itemRemovido = array.pop();

// console.log(itemRemovido);
// console.log(array);
// console.log(arraylength);

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);
console.log(letters);

letters.unshift("z", "x", "y");

letters.unshift("p");

console.log(letters);