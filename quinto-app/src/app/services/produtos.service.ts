import { Produto } from '../models/produto.model'



export class ProdutosService {

    public produtos: Produto[] =
[
 {
   id: 1,
   nome: 'Revólver 38',
   descricao: 'Revólver de calibre permitido, ideal para defesa pessoal',
   valor: '4589,99'  
 },   
 {
    id: 2,
    nome: 'Glock G25',
    descricao: 'Pistola automática de calibre permitido, ideal para defesa pessoal',
    valor: '2999,99'  
  },
  {
    id: 3,
    nome: 'Espingarda',
    descricao: 'Espingarda de calibre 12 permitido, ideal para defesa do patrimônio rural',
    valor: '3499,99'  
  },
  {
    id: 4,
    nome: 'AR 15',
    descricao: 'Fuzil de calibre restrito ao uso militar',
    valor: '8799,99'  
  }
]

    public getProdutos(): Array<Produto> {
        console.log(this.produtos)
        return this.produtos
    }
    public getProdutoPorId(id: number): Produto{
        let produtosInternos: Produto[]
        produtosInternos = this.getProdutos()
        return produtosInternos[id -1]
    }

}