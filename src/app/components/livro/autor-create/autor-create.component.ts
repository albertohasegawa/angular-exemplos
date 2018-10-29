import { AutorService } from './../../service/autor.service';
import { Autor } from './../../models/autor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor-create',
  templateUrl: './autor-create.component.html',
  styleUrls: ['./autor-create.component.css']
})
export class AutorCreateComponent implements OnInit {

  autor: Autor = new Autor;

  constructor(private as: AutorService) { }

  ngOnInit() {
  }

  inserir() {
    this.as.postAutor(this.autor).subscribe(req => alert(this.autor.nome + ' adicionado como autor!'));
  }


}
