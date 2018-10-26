import { Pessoa } from './../models/pessoa';
import { Component, OnInit } from '@angular/core';
import { TipoPessoaService } from '../tipo-pessoa.service';

@Component({
  selector: 'app-tipo-pessoa-form',
  templateUrl: './tipo-pessoa-form.component.html',
  styleUrls: ['./tipo-pessoa-form.component.css']
})
export class TipoPessoaFormComponent implements OnInit {

  pessoa: Pessoa;

  constructor(private ps: TipoPessoaService) { }

  ngOnInit() {
    this.pessoa = new Pessoa;
  }
  inserir(pessoa: Pessoa) {
    pessoa = this.pessoa;
    this.ps.postInserir(pessoa).subscribe();
  }
}
