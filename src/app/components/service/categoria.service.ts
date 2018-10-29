import { Categoria } from './../models/categoria';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const URL = "http://localhost:8080/categoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoria: Categoria;
  constructor(private http: HttpClient) { }


  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(URL);
  }
  getCategoriaId(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(URL + '/' + id);
  }
  postCategoria(cat: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(URL, cat);
  }
  deleteCategoria(id: number): Observable<Categoria> {
    return this.http.delete<Categoria>(URL + '/' + id);
  }
  putCategoria(cat: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(URL + '/' + cat.id, cat);
  }

  getCategoria(){
    return this.categoria;
  }
  setCategoria(cat: Categoria) {
    this.categoria = cat;
  }

}
