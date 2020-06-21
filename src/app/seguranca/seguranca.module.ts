import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {SegurancaRoutingModule} from './seguranca-routing.module';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    SegurancaRoutingModule,
    ButtonModule
  ],
  declarations: [LoginFormComponent]
})
export class SegurancaModule { }
