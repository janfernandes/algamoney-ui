import {Component, OnInit, ViewChild} from '@angular/core';
import {PessoaFiltro, PessoaService} from '../pessoa.service';
import {ConfirmationService, LazyLoadEvent, MessageService} from 'primeng/api';
import {ErrorHandlerService} from '../../core/error-handler.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent  implements OnInit{
  totalRegistros = 0;
  pessoas = [];
  filtro = new PessoaFiltro();
  @ViewChild('tabela') grid;

  constructor(private pessoaService: PessoaService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private errorHandler: ErrorHandlerService) {}

  ngOnInit(): void {
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  pesquisar(pagina = 0){
    this.filtro.pagina = pagina;

    this.pessoaService.pesquisar(this.filtro)
      .then(result => {
        this.totalRegistros = result.total;
        this.pessoas = result.pessoas;
      })
      .catch(erro => this.errorHandler.handle(erro));
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
    this.pessoaService.excluir(lancamento.codigo)
      .then(() => {
        this.grid.reset();
        this.messageService.add({
          severity: 'success',
          summary: 'Success Message',
          detail: 'Lançamento excluído com sucesso.'
        });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
