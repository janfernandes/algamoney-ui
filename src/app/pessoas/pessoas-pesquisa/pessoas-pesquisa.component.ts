import { Component, OnInit } from '@angular/core';
import {PessoaFiltro, PessoaService} from '../pessoa.service';
import {LazyLoadEvent} from 'primeng/api';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent  implements OnInit{
  totalRegistros = 0;
  pessoas = [];
  filtro = new PessoaFiltro();

  constructor(private pessoaService: PessoaService) {}

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
      });
  }

}
