import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaginaNaoEncontradaComponent} from './core/pagina-nao-encontrada.component';
import {PessoasModule} from './pessoas/pessoas.module';
import {LancamentosModule} from './lancamentos/lancamentos.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {RelatoriosModule} from './relatorios/relatorios.module';

const routes: Routes = [
  { path: 'lancamentos', loadChildren: () => LancamentosModule },
  { path: 'pessoas', loadChildren: () => PessoasModule },
  { path: 'dashboard', loadChildren: () => DashboardModule },
  { path: 'relatorios', loadChildren: () => RelatoriosModule },
  // { path: 'relatorios', loadChildren: 'app/relatorios/relatorios.module#RelatoriosModule'},

  { path: '', redirectTo: 'dashboard', pathMatch: 'full'  },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



