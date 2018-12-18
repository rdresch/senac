import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  //Metadatas...
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  //palavra reservada do componente, informando quem irá prover 
  //os serviços para meu componente, chamado "injeção de serviços"
  providers: [ ProdutosService ]
})
export class ProdutosComponent implements OnInit {

  public produtos: Produto[]

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    //this.produtos = this.produtosService.getProdutos()

    //O promise retornará 2 parâmetros para nós, um em caso positivo que conhecemos
    //A promise que entregara um conjunto de Produtos, logo devemos esperar o que a
    //promise nos prometeu que entregaria: um conjunto de produtos
    this.produtosService.getProdutosPromiseAPI()
    .then(
      ( prod: Produto[]) =>{
      this.produtos = prod
    },
    //e o outro parâmetro é do tipo reject, que eu desconheço.
    //Como não sei o que virá do segundo retorno(reject)
    //Defini como uma variável chamada erro de qualquer tipo
    (erro: any) => {console.log(erro)})
  }

}
