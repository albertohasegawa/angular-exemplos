import { LivroService } from './../../service/livro.service';
import { CategoriaService } from './../../service/categoria.service';
import { AutorService } from './../../service/autor.service';
import { Categoria } from './../../models/categoria';
import { Autor } from './../../models/autor';
import { Component, OnInit } from '@angular/core';
import { Livro } from '../../models/livro';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  livro: Livro;
  autores: Array<Autor>;
  categorias: Array<Categoria>;

  alterarMode: boolean;


  constructor(private as: AutorService, private cs: CategoriaService, private ls: LivroService) { }

  ngOnInit() {
    if(this.ls.getLivro() != null) {
      this.alterarMode = true;
      this.livro = this.ls.getLivro();
    }
    else {
      this.alterarMode = false;
      this.livro = new Livro();
    }

    this.as.getAutores().subscribe(req => this.autores = req);
    this.cs.getCategorias().subscribe(req => this.categorias = req);


  }

  salvarLivro() {
    this.livro.dataPublicacao = new Date();
    this.ls.postLivro(this.livro).subscribe();
    
  }

  alterarLivro() {
    this.livro.dataPublicacao = new Date();
    this.ls.putLivro(this.livro).subscribe();
  }

}
