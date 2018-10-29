import { Autor } from './../../models/autor';
import { AutorService } from './../../service/autor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrls: ['./autor-list.component.css']
})
export class AutorListComponent implements OnInit {


  autores: Array<Autor>;

  constructor(private as: AutorService) { }

  ngOnInit() {
    this.buscarAutores();
  }

  buscarAutores() {
    this.as.getAutores().subscribe(req => this.autores = req);
  }

  deletarAutor(id: number) {
    this.as.deleteAutor(id).subscribe(req => this.buscarAutores());
  }

  alterarAutor(autor: Autor) {
    this.as.setAutor(autor);
  }

}
