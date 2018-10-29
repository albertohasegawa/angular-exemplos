import { Livro } from './../../models/livro';
import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../service/livro.service';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.css']
})
export class LivroListComponent implements OnInit {

  livros: Array<Livro>;

  constructor(private ls: LivroService) { }

  ngOnInit() {
    this.buscarLivros();
  }

  buscarLivros() {
    this.ls.getLivros().subscribe(req => this.livros = req);
  }

  deletar(id: number) {
    this.ls.deleteLivro(id).subscribe(req => this.buscarLivros());
  }

  alterar(livro: Livro) {
    this.ls.setLivro(livro);
  }

}
