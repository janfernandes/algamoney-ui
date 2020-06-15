import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  categoriasUrl = 'http://localhost:24240/categorias';

  constructor(private http: HttpClient) { }

  listarTodos(): Promise<any> {
    return this.http.get(`${this.categoriasUrl}?`)
      .toPromise()
      .then(response => {
        return response;
      });
  }
}
