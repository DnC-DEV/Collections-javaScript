"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var Adicionar_1 = require("./Adicionar");
var retirar_1 = require("./retirar");
var Menu_1 = require("./Menu");
var MostrarLista_1 = require("./MostrarLista");
var prompt = PromptSync();
var lista = [];
var opcao = 0;
do {
    (0, Menu_1.Menu)();
    opcao = Number(prompt('Selecione uma das opções a seguir: '));
    switch (opcao) {
        case 1:
            (0, Adicionar_1.Adicionar)(lista);
            break;
        case 2:
            (0, retirar_1.Retirar)(lista);
            break;
        case 3:
            (0, MostrarLista_1.Mostrar)(lista);
            (0, retirar_1.Retirar)(lista);
            (0, Adicionar_1.Adicionar)(lista);
            break;
        case 4:
            (0, MostrarLista_1.Mostrar)(lista);
            break;
        case 5:
            console.log('Programa finalizado');
            break;
    }
} while (opcao != 5);
