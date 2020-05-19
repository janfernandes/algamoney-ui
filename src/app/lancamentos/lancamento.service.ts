import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {
  lancamentosUrl = 'http://localhost:24240/lancamentos';

  constructor(private http: HttpClient) {
  }

  pesquisar(): Promise<any> {
    // const headers = new Headers();
    // headers.append('Authorization', 'Basic ...');
    // se tivesse o auth
    // return this.http.get(`${this.lancamentosUrl}?resumo`, { headers })
    return this.http.get(`${this.lancamentosUrl}?resumo`)
      .toPromise()
      .then(response => response['content']);
  }

}
