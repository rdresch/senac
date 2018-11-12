"use strict";
exports.__esModule = true;
var Arma = /** @class */ (function () {
    function Arma(projeteis, capacidade) {
        this.calibre = 0;
        this.marca = '';
        this.tipo = '';
        this.projeteisNoPente = projeteis;
        this.capacidade = capacidade;
    }
    Arma.prototype.atirar = function () {
        if (this.projeteisNoPente == 0)
            console.log('sem balas, por favor recarregue');
        else
            this.projeteisNoPente = this.projeteisNoPente - 1;
    };
    Arma.prototype.recarregar = function () {
        this.projeteisNoPente = this.capacidade;
    };
    Arma.prototype.informarBalas = function () {
        return this.projeteisNoPente;
    };
    return Arma;
}());
exports.Arma = Arma;
