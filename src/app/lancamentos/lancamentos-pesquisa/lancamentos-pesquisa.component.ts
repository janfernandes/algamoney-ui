import {Component, OnInit, ViewChild} from '@angular/core';
import {LancamentoFiltro, LancamentoService} from '../lancamento.service';
import {LazyLoadEvent} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css'],
  providers: [MessageService]
})
export class LancamentosPesquisaComponent implements OnInit{
  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [];

  @ViewChild('tabela', {static: true}) grid;


  constructor(
    private lancamentoService: LancamentoService,
    private messageService: MessageService
  ) {}


  ngOnInit(): void {
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  pesquisar(pagina = 0){
    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisar(this.filtro)
      .then(result => {
        this.totalRegistros = result.total;
        this.lancamentos = result.lancamentos;
      });
  }

  excluir(lancamento: any) {
    this.lancamentoService.excluir(lancamento.codigo)
      .then(() => {
        this.grid.reset();
        this.messageService.add({severity:'success', summary: 'Success Message', detail:'Lançamento excluído com sucesso.'});
      });
  }
}
