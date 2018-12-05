import {HomeComponent} from './components/home/home.component'
import {FirstComponent} from './components/first/first.component'
import {SecondComponent} from './components/second/second.component'
import {ThirdComponent} from './components/third/third.component'
import {Routes} from '@angular/router'

//exportando uma CONSTANTE(conjunto neste caso) de rotas, onde path é o "alias" que referenciará o componente
//que é em seguida declarado
export const RotaDinamica: Routes =
[
    { path: 'home', component: HomeComponent},
    { path: 'first', component: FirstComponent},
    { path: 'second', component: SecondComponent},
    { path: 'third', component: ThirdComponent},
    { path: '**', redirectTo: 'home'}
]