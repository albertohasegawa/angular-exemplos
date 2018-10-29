import { Livro } from './../models/livro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from '../models/autor';

const URL = "http://localhost:8080/livro";

  @Injectable({
    providedIn: 'root'
  })

export class LivroService {

  livro: Livro;

  constructor(private http: HttpClient) { }

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(URL);
  }
  getLivroId(id: number): Observable<Livro> {
    return this.http.get<Livro>(URL + '/' + id);
  }
  postLivro(livro: Livro): Observable<Livro[]> {
    return this.http.post<Livro[]>(URL, livro);
  }
  deleteLivro(id: number): Observable<Livro[]> {
    return this.http.delete<Livro[]>(URL + '/' +  id);
  } 
  putLivro(livro: Livro): Observable<Livro[]> {
    return this.http.put<Livro[]>(URL + '/' + livro.id, livro);
  }

  getLivro() {
    return this.livro;
  }
  setLivro(livro: Livro) {
    this.livro = livro;
  }


}
