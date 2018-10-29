import { Autor } from './../models/autor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = "http://localhost:8080/autor";

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  autor: Autor;
  constructor(private http: HttpClient) { }



  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(URL);
  }
  getAutorId(id: number): Observable<Autor> {
    return this.http.get<Autor>(URL + '/' + id);
  }
  postAutor(autor: Autor): Observable<Autor> {
    return this.http.post<Autor>(URL, autor);
  }
  deleteAutor(id: number): Observable<Autor> {
    return this.http.delete<Autor>(URL + '/' + id);
  }
  putAutor(autor: Autor): Observable<Autor> {
    return this.http.put<Autor>(URL + '/' + autor.id, autor);
  }

  getAutor() {
    return this.autor;
  }
  setAutor(autor: Autor) {
    this.autor = autor;
  }

}
