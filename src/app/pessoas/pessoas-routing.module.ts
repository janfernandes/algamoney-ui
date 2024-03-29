import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PessoasPesquisaComponent} from './pessoas-pesquisa/pessoas-pesquisa.component';
import {PessoaCadastroComponent} from './pessoa-cadastro/pessoa-cadastro.component';

const routes: Routes = [
  { path: '', component: PessoasPesquisaComponent},
  { path: 'novo', component: PessoaCadastroComponent},
  { path: ':codigo', component: PessoaCadastroComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class PessoasRoutingModule { }
