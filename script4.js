// console.log("script 4")
// //LISTA / ARRAY

// const numero = 4
// const numeros_vazio = [1]
// // console.log(numeros_vazio,'lista numeros vazia')
// const numeros_completos = [1,2,3,4,6,90,67,5,4,5,5,5,5,8]
// // console.log(numeros_completos,'lista numeros completa')

// // console.log(numeros_completos[0],'lista na posicao 0, ou index 0')
// const nomes = ["Anderson","João","Pedro","Maria","José"]
// // console.log(nomes,'lista nomes',nomes[2],'nomes no index 2')

// const objetos = [1,"Anderson","8",90]
// // console.log(objetos,'lista de objetos')
// // numeros_vazio = [9] // aqui está reatribuindo o valor da variavel
// numeros_vazio.push(9)


// console.log(numeros_vazio,'lista vazio com o 9?')
// numeros_vazio.push(674)
// console.log(numeros_vazio)
// // const numerodigitado = prompt("")
// // const numeroInt = parseInt(numerodigitado)
// // numeros_vazio.push(numeroInt)

// // console.log(numeros_vazio,'depois de digitar pelo prompt')
// for(let i = 0; i< nomes.length; i++){
//     console.log(nomes[i])
// }

const lista = [1,2,3,4,5]
console.log(lista,'lista inicial')
//SLICE - REMOVE UM OU MAIS ITENS DO ARRAY E RETORNA UM NOVO ARRAY COM OS ELEMENTOS REMOVIDOS
//SEM ALTERAR O ARRAY ORIGINAL
// const nova_lista = lista.slice(0,1)

//SPLICE - REMOVE UM OU MAIS ITENS DO ARRAY ALTERANDO O ARRAY ORIGINAL
// lista.splice(3,1)

// console.log(lista,'lista depois do splice',nova_lista)
const lista_aux = []
for(let i =0;i<lista.length;i++){
    const valor = lista[i]
    lista_aux.push(valor*2)
    // lista[i] = lista[i]*2
    // console.log(lista[i])
}

console.log(lista,'lista atualizada',lista_aux)




