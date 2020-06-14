import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LancamentosModule} from './lancamentos/lancamentos.module';
import {PessoasModule} from './pessoas/pessoas.module';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {LancamentoService} from './lancamentos/lancamento.service';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {PessoaService} from './pessoas/pessoa.service';
import {ConfirmationService} from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LancamentosModule,
    PessoasModule,
    CoreModule,
    HttpClientModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [LancamentoService, PessoaService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
