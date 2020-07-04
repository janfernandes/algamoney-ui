import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Pessoa} from '../core/model';
import {environment} from '../../environments/environment';

export class PessoaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  pessoasUrl: string;

  constructor(private http: HttpClient) {
    this.pessoasUrl = `${environment.apiUrl}/pessoas`;
  }

  pesquisar(filtro: PessoaFiltro): Promise<any>{
    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.pessoasUrl}?`, {params})
      .toPromise()
      .then(response => {
        const pessoas = response['content'];
        const resultado = {
          pessoas,
          total: response['totalElements']
        };
        return resultado;
      });
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.pessoasUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  editar(codigo: number, ativo: boolean): Promise<void> {
    return this.http.put(`${this.pessoasUrl}/${codigo}/ativo`, ativo, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })})
      .toPromise()
      .then(() => null);
  }

  listarTodos() {
    return this.http.get(`${this.pessoasUrl}`)
      .toPromise()
      .then(response => {
        return response['content'];
      });
  }

  adicionar(pessoa: Pessoa) {
    return this.http.post<Pessoa>(
      this.pessoasUrl, pessoa, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })})
      .toPromise();
  }

  atualizar(pessoa: Pessoa) {
    return this.http.put(`${this.pessoasUrl}/${pessoa.codigo}`, pessoa, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })})
      .toPromise()
      .then(response => {
        return response as Pessoa;
      });
  }

  buscarPorCodigo(codigo: number) {
    return this.http.get(`${this.pessoasUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        return response as Pessoa;
      });
  }
}
