import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import * as moment from 'moment';
import {Lancamento} from '../core/model';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {
  lancamentosUrl = 'http://localhost:24240/lancamentos';

  constructor(private http: HttpClient) {
  }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    let params = new HttpParams();
    // const headers = new Headers();
    // headers.append('Authorization', 'Basic ...');

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if (filtro.descricao) {
      params = params.set('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoInicio) {
      params = params.set('dataVencimentoDe', moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }

    if (filtro.dataVencimentoFim) {
      params = params.set('dataVencimentoAte', moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    // se tivesse o auth
    // return this.http.get(`${this.lancamentosUrl}?resumo`, { headers, params })
    return this.http.get(`${this.lancamentosUrl}?resumo`, {params})
      .toPromise()
      .then(response => {
        const lancamentos = response['content'];
        const resultado = {
          lancamentos,
          total: response['totalElements']
        };
        return resultado;
      });
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.lancamentosUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  adicionar(lancamento: Lancamento): Promise<Lancamento> {
    return this.http.post<Lancamento>(
      this.lancamentosUrl, lancamento, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })})
      .toPromise();
  }
}
