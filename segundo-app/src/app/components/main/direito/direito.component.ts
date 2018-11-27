import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-direito',
  templateUrl: './direito.component.html',
  styleUrls: ['./direito.component.css']
})
export class DireitoComponent implements OnInit {

  //Output serve para lançar eventos para um nível superior OUTPUT 1
  @Output() public definirTextoNoMain: EventEmitter<string> = new EventEmitter()

  //Momento em que atribuo algo ao meu emissor de evento OUTPUT 2
  public enviarTexto(): void{
    this.definirTextoNoMain.emit('Texto Emitido!')
  }

  

  constructor() { }

  ngOnInit() {
    this.enviarTexto()
  }

}
