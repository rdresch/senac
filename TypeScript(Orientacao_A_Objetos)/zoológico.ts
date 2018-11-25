import { Animal } from "./animal";

export class Zoo{
    private endereco: string
    private listaDeAnimais: Array<Animal>

    constructor(endereco: string, listaDeAnimais: Array<Animal>){
        this.endereco = endereco
        this.listaDeAnimais = listaDeAnimais
    }

    public mostrarListadeAnimais(): Array<Animal>{
        return this.listaDeAnimais
    }

    public exibirEndereco(): string {
        return this.endereco
    }
}