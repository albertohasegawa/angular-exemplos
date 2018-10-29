import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaCreateComponent } from './categoria-create/categoria-create.component';

import { LivroDetailComponent } from './livro-detail/livro-detail.component';
import { AutorCreateComponent } from './autor-create/autor-create.component';
import { AutorListComponent } from './autor-list/autor-list.component';
import { LivroCreateComponent } from './livro-create/livro-create.component';
import { LivroListComponent } from './livro-list/livro-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component:LivroListComponent},
  {path:'create', component:LivroCreateComponent},
  {path:'detail', component:LivroDetailComponent},
  {path:'autor', component:AutorListComponent},
  {path:'autor/create', component:AutorCreateComponent},
  {path:'categoria', component:CategoriaListComponent},
  {path:'categoria/create', component:CategoriaCreateComponent},

];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivroRoutingModule { }
