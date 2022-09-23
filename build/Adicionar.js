"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adicionar = void 0;
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function Adicionar(lista) {
    var posicao = lista.length;
    var item = prompt('Adicione um novo item na lista: ');
    lista[posicao] = item;
    console.log("O item: ".concat(item, " foi adicionado a lista"));
}
exports.Adicionar = Adicionar;
