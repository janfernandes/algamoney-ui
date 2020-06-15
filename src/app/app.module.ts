import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {CoreModule} from './core/core.module';
import {NgModule} from '@angular/core';
import {LancamentosModule} from './lancamentos/lancamentos.module';
import {PessoasModule} from './pessoas/pessoas.module';
import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LancamentosModule,
    PessoasModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
