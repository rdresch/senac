import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  //Esta propriedade ficou com a responsabilidade de salvar
  //o diretório local da imagem de VOCÊS, analisem o nome do arquivo
  public imageLoad: string = '/assets/img/load.gif'
  public texto: string ='mais um stringão de sucesso'
  public texto2: string = ''

  constructor() { }

  ngOnInit() {
  }

  //Aqui estou tirando o caminho da imamgem
  //ou seja, deixando-a em branco
  esconderLoader(): void {
    this.imageLoad = ''
    console.log('esconder botao')
  }

  //Antes tinhamos um método para exibir a imagem
  //e outro para esconder
  //Melhoramos nosso código trazendo tudo para dentro de uma função apenas
  //Verificando se o caminho esta vazio, e o preenchendo(e vice versa)
  mostrarLoader(): void {
    if (this.imageLoad=='')
      this.imageLoad = '/assets/img/load.gif'
    else
    this.imageLoad = ''
    console.log('mostrar/ocultar botao')
  }

  //No meu template estou enviando uma propriedade do tipo Event
  //Por isso preciso recebe-la aqui
  copiarTexto(texto: Event):void{
    console.log(texto)
    //Este é o tratamento para o tipo event, capturando apenas o seu valor
    //Como se trata de um Evento do HTML
    //o angular possui um tratamento diferenciado para estes casos.
    this.texto = ((<HTMLInputElement>texto.target).value)
  }
  //a função é disparada com base em listeners
  //quando a função for executada ele estará fora de contexto do listener
  //que é quando ele é disparado
  salvarTextoErrado(texto: string): void{
    console.log(texto)
  }

  //função para copiar o conteudo da priemira caixa de texto
  //dentro da segunda, uma vez que cada caixa possui
  //um variável atribuida á ela.
  colarTexto(){
    this.texto2 = this.texto
  }


}
