import { CategoriaService } from './../../service/categoria.service';
import { Categoria } from './../../models/categoria';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

categoria: Categoria = new Categoria();

  constructor(private cs: CategoriaService) { }

  ngOnInit() {
  }


  inserir() {
    this.cs.postCategoria(this.categoria).subscribe
    (req => alert(this.categoria.descricao + ' adicionado como categoria!'));
  }

}
