import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LancamentosPesquisaComponent} from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import {LancamentoCadastroComponent} from './lancamento-cadastro/lancamento-cadastro.component';

const routes: Routes = [
  { path: '', component: LancamentosPesquisaComponent},
  { path: 'novo', component: LancamentoCadastroComponent},
  { path: ':codigo', component: LancamentoCadastroComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class LancamentosRoutingModule { }
