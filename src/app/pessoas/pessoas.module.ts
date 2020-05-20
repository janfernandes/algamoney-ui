import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PessoaCadastroComponent} from './pessoa-cadastro/pessoa-cadastro.component';
import {PessoasPesquisaComponent} from './pessoas-pesquisa/pessoas-pesquisa.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {FormsModule} from '@angular/forms';
import {InputMaskModule} from 'primeng/inputmask';
import {SharedModule} from '../shared/shared.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputMaskModule,
    SharedModule
  ],
  declarations: [
    PessoaCadastroComponent,
    PessoasPesquisaComponent
  ],
  exports: [
    PessoaCadastroComponent,
    PessoasPesquisaComponent
  ]
})
export class PessoasModule { }
