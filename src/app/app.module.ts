import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LancamentosModule} from './lancamentos/lancamentos.module';
import {PessoasModule} from './pessoas/pessoas.module';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {LancamentoService} from './lancamentos/lancamento.service';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/message';


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
    ToastModule
  ],
  providers: [LancamentoService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
