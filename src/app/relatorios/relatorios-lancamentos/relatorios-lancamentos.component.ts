import { Component, OnInit } from '@angular/core';
import {RelatoriosService} from "../relatorios.service";

@Component({
  selector: 'app-relatorios-lancamentos',
  templateUrl: './relatorios-lancamentos.component.html',
  styleUrls: ['./relatorios-lancamentos.component.css']
})
export class RelatoriosLancamentosComponent implements OnInit {

  periodoInicio: Date;
  periodoFim: Date;

  constructor(
    private relatorioService: RelatoriosService
  ) { }

  ngOnInit(): void {
  }

  gerar() {
    this.relatorioService.relatorioLancamentoPorPessoa(this.periodoInicio, this.periodoFim)
      .then(relatorio => {
        const url = window.URL.createObjectURL(relatorio);
        window.open(url);
      });
  }

}
