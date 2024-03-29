import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LancamentoCadastroComponent} from './lancamento-cadastro/lancamento-cadastro.component';
import {LancamentosPesquisaComponent} from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {SharedModule} from '../shared/shared.module';
import {ToastModule} from 'primeng/toast';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {LancamentosRoutingModule} from './lancamentos-routing.module';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    SharedModule,
    ToastModule,
    CodeHighlighterModule,
    LancamentosRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
  ],
  exports: []
})
export class LancamentosModule { }
