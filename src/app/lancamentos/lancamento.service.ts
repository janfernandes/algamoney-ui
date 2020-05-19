import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

export interface LancamentoFiltro {
  descricao: string;
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

    if (filtro.descricao) {
      params = params.set('descricao', filtro.descricao);
    }

    // se tivesse o auth
    // return this.http.get(`${this.lancamentosUrl}?resumo`, { headers, params })
    return this.http.get(`${this.lancamentosUrl}?resumo`, {params})
      .toPromise()
      .then(response => response['content']);
  }

}
