
import {Routes} from '@angular/router'
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoComponent } from './components/produtos/produto/produto.component';

//exportando uma CONSTANTE(conjunto neste caso) de rotas, onde path é o "alias" que referenciará o componente
//que é em seguida declarado
export const RotaDinamica: Routes =
[
    { path: 'produtos', component: ProdutosComponent},
    { path: 'produto/:id', component: ProdutoComponent},
    { path: '**', redirectTo: 'produtos'}
]