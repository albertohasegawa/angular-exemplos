import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivroRoutingModule } from './livro-routing.module';
import { LivroListComponent } from './livro-list/livro-list.component';
import { LivroCreateComponent } from './livro-create/livro-create.component';
import { LivroDetailComponent } from './livro-detail/livro-detail.component';
import { AutorListComponent } from './autor-list/autor-list.component';
import { AutorCreateComponent } from './autor-create/autor-create.component';
import { CategoriaCreateComponent } from './categoria-create/categoria-create.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    LivroRoutingModule,
    FormsModule
  ],
  declarations: [LivroListComponent, LivroCreateComponent, LivroDetailComponent, AutorListComponent, AutorCreateComponent, CategoriaCreateComponent, CategoriaListComponent]
})
export class LivroModule { }
