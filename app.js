"use strict";
exports.__esModule = true;
var metralhadora_1 = require("./metralhadora");
var smg = new metralhadora_1["default"](10, 10, 5);
smg.atirar();
console.log(smg.informarBalas());
//criar classe extends de um pai
//export default class Carro from Veiculo
//se filho tiver constructor, é necessário ter o método super
//A palavra-chave super é usada para acessar o objeto pai de um objeto, em outros casos, é usada para acessar a classe pai de uma classe.
