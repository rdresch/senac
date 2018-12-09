import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  providers: [ProdutosService]
})
export class ProdutoComponent implements OnInit {
  //private route: 
  private produto: Produto

  constructor(/*remover private*/private route: ActivatedRoute,
    private produtosService: ProdutosService) {
    //this.route = route
    //snapshot serve como um "copiar" de um atributo que for referenciado
    //this.route.snapshot.params['id']
    
   }

  ngOnInit() {
    console.log(this.produtosService.getProdutoPorId(this.route.snapshot.params['id']))
    this.produto = this.produtosService.getProdutoPorId(this.route.snapshot.params['id'])
  }

}
