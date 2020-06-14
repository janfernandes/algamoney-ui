import {Component, OnInit, ViewChild} from '@angular/core';
import {LancamentoFiltro, LancamentoService} from '../lancamento.service';
import {ConfirmationService, LazyLoadEvent, MessageService} from 'primeng/api';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css'],
  providers: [MessageService]
})
export class LancamentosPesquisaComponent implements OnInit {
  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [];
  @ViewChild('tabela') grid;

  constructor(
    private lancamentoService: LancamentoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit(): void {
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisar(this.filtro)
      .then(result => {
        this.totalRegistros = result.total;
        this.lancamentos = result.lancamentos;
      });
  }

  verificarExclusao(lancamento: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }

  excluir(lancamento: any) {
    this.lancamentoService.excluir(lancamento.codigo)
      .then(() => {
        this.grid.reset();
        this.messageService.add({
          severity: 'success',
          summary: 'Success Message',
          detail: 'Lançamento excluído com sucesso.'
        });
      });
  }
}
