import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  //Variável interna da classe main
  public Interno: number = 10
  public TextoNoMain: string = ''

  public textoNoMain(tipo: string): void{
    this.TextoNoMain=tipo
  }

  constructor() { }

  ngOnInit() {
  }

}
