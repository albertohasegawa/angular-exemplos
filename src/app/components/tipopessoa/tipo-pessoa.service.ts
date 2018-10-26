import { Pessoa } from './models/pessoa';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const GETBUSCARTODOS: string = 'http://10.11.21.162:8080/pessoa/';
const GETBUSCARPORCPF: string = 'http://10.11.21.162:8080/pessoa/';
const POSTINSERIR: string = 'http://10.11.21.162:8080/pessoa/';
const PUTALTERAR: string = 'http://10.11.21.162:8080/pessoa/';

@Injectable({
  providedIn: 'root'
})

export class TipoPessoaService {

  constructor(private http: HttpClient) { }

  getBuscarTodos(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(GETBUSCARTODOS);
  }
  getBuscarPorCpf(cpf: string): Observable<Pessoa> {
    return this.http.get<Pessoa>(GETBUSCARPORCPF + cpf);
  }
  postInserir(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(POSTINSERIR,pessoa);
  }
  putAlterar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(PUTALTERAR + pessoa.cpf, pessoa);
  }

}
