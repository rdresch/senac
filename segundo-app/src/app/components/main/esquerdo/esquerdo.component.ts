import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-esquerdo',
  templateUrl: './esquerdo.component.html',
  styleUrls: ['./esquerdo.component.css']
})
export class EsquerdoComponent implements OnInit {

  //Input fica encarregado de preparar o componente para receber
  //um valor na sua criação
  //"de pai para filho"
  @Input() public Numero: number

  

  

  constructor() { }

  ngOnInit() {
  }

}
