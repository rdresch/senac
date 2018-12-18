import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoComponent } from './components/produtos/produto/produto.component';
import { RouterModule } from '@angular/router';
import { RotaDinamica } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ProdutoComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(RotaDinamica)    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
