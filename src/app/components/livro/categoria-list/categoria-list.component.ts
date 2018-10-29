import { Categoria } from './../../models/categoria';
import { CategoriaService } from './../../service/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  categorias: Array<Categoria>;

  constructor(private cs: CategoriaService) { }

  ngOnInit() {
    this.buscarCategorias();
  }

  buscarCategorias() {
    this.cs.getCategorias().subscribe(req => this.categorias = req);
  }

  deletarCategoria(id: number) {
    this.cs.deleteCategoria(id).subscribe(req => this.buscarCategorias());
  }

  alterarCategoria(cat: Categoria) {
    this.cs.setCategoria(cat);
  }



}
