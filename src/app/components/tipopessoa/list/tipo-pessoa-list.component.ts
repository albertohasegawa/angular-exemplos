import { TipoPessoaService } from './../tipo-pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa';

@Component({
  selector: 'app-tipo-pessoa-list',
  templateUrl: './tipo-pessoa-list.component.html',
  styleUrls: ['./tipo-pessoa-list.component.css']
})
export class TipoPessoaListComponent implements OnInit {

pessoa: Pessoa;
pessoas: Array<Pessoa>;


  constructor(private ps: TipoPessoaService) { }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.ps.getBuscarTodos().subscribe(req => this.pessoas = req);
  }

}
