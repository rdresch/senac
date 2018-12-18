import { Produto } from '../models/produto.model'
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class ProdutosService {

  constructor(private http: Http){

  }

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

    //Agora quero retornar um objeto do tipo PROMISSE que por sua vez
    //ficará a cargo de nos entregar um conjunto de Produto
    public getProdutosPromise(): Promise<Produto[]> {
      return new Promise((resolve, reject) =>{
        let funfou = true
        //Ao concluir bloco de função
        //retorna resolve, para resultados negativos reject
        if (funfou) {
          resolve(this.produtos)
        }else
        reject({tipo_erro: 'produto falso', mensagem: 'sua pistola é de plástico'})

      })   
  }

  public getProdutosPromiseAPI(): Promise<Produto[]> {
      //por padrão o http get retorna um observable
      //como estamos trabalhando com promise, devemos converter para promise
      //utilizando toPromise
      //depois da conversão ele diz que devemos definir a reposta como any
      //mesmo sabendo que ela é do tipo array de produtos
      return this.http.get('http://localhost:3000/produtos')
      .toPromise()
      .then((prod: any)=>prod.json())
}

    public getProdutoPorId(id: number): Produto{
        let produtosInternos: Produto[]
        produtosInternos = this.getProdutos()
        return produtosInternos[id -1]
    }

    public getProdutoPorIdAPI(id: number): Promise<Produto>{
      return this.http.get(`http://localhost:3000/produtos?id=${id}`)
      .toPromise()
      .then((prod: any)=>prod.json())
  }


}