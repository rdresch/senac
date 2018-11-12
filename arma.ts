export class Arma{
    private calibre: number = 0
    private marca: string = ''
    private tipo: string = ''
    protected capacidade: number
    protected projeteisNoPente: number 

    constructor(projeteis: number, capacidade: number){
        this.projeteisNoPente = projeteis
        this.capacidade = capacidade
    }

    public atirar(shot: number = 0): void{
        if (this.projeteisNoPente == 0)
            console.log('sem balas, por favor recarregue')
        else
        this.projeteisNoPente = this.projeteisNoPente - shot
    }

    public recarregar(): void{
        this.projeteisNoPente = this.capacidade
    }

    public informarBalas(): number{
        return this.projeteisNoPente
    }



}