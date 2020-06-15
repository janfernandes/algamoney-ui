import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastModule} from 'primeng/toast';

import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import {LancamentoService} from '../lancamentos/lancamento.service';
import {PessoaService} from '../pessoas/pessoa.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ErrorHandlerService} from './error-handler.service';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import {NavbarComponent} from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule
  ],
  imports: [
    CommonModule,
    ToastModule
  ],
  providers: [
    ErrorHandlerService,
    ConfirmationService,
    LancamentoService,
    PessoaService,
    MessageService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ]
})
export class CoreModule { }
