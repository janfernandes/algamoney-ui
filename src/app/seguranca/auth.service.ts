import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:24240/oauth/token';

  constructor(private http: HttpClient) { }

  login(usuario: string, senha: string): Promise<void>{
    const body = `username=$(usuario)&password=$(senha)&grant_type=password`;
    return this.http.post(
      this.oauthTokenUrl, body, {headers : new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})})
      .toPromise()
      .then(response => {
        console.log(response);
      }).catch(response => {
        console.log(response);
    });
  }
}
