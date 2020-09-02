import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RelatoriosLancamentosComponent } from './relatorios-lancamentos/relatorios-lancamentos.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RelatoriosLancamentosComponent],
  imports: [
    CommonModule,
    SharedModule,
    RelatoriosRoutingModule,
    CalendarModule,
    FormsModule
  ]
})
export class RelatoriosModule { }
