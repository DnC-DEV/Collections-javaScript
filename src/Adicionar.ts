import PromptSync = require('prompt-sync');

const prompt = PromptSync();

function Adicionar(lista) {
    const posicao = lista.length;
    const item = prompt('Adicione um novo item na lista: ');
    lista[posicao] = item;
    console.log(`O item: ${item} foi adicionado a lista`);
}

export {Adicionar};