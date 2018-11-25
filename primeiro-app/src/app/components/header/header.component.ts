import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //posso escrever o componente HTML aqui, usando crase posso quebrar ele
  //então devo declarar um @Component template e não templateURL
  //template: '<p>Esse é o header</p>',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
//Exemplo de string interpolation - one way data binding
public titulo: string = 'Stringão do sucesso'
}