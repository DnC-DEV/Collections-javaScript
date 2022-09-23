"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retirar = void 0;
var mostrarLista_1 = require("./mostrarLista");
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function Retirar(lista) {
    mostrarLista_1.Mostrar;
    var posicaoRemover = prompt('O que você quer retirar da lista ? ');
    var posicao = Number(posicaoRemover) - 1;
    lista.splice(posicao, 1);
}
exports.Retirar = Retirar;
