import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ''},
  {path: 'pessoa',loadChildren: './components/tipopessoa/tipo-pessoa.module#TipoPessoaModule'},
  {path: 'livro', loadChildren: './components/livro/livro.module#LivroModule'} 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ], 
  declarations: []
})
export class AppRoutingModule { }
