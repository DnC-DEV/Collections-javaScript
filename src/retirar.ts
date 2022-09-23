import { Mostrar } from './mostrarLista';
import PromptSync = require('prompt-sync');

const prompt = PromptSync();

function Retirar(lista) {
    Mostrar
    const posicaoRemover = prompt('O que você quer retirar da lista ? ');
    const posicao = Number(posicaoRemover) -1
    lista.splice(posicao, 1);
}

export {Retirar};