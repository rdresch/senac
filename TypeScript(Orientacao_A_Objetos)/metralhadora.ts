import {Arma} from './arma'

export default class metralhadora extends Arma{
    public tirosPorSegundo: number

    constructor(projeteis: number, capacidade: number, shotPerSecond: number){
       super(projeteis, capacidade)
       this.tirosPorSegundo = shotPerSecond
    }   

    public atirar(): void{
        if (this.projeteisNoPente == 0)
        console.log('sem balas, por favor recarregue')
    else
    this.projeteisNoPente = this.projeteisNoPente - this.tirosPorSegundo
    }
}