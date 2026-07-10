import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//const routes: Routes = [];
 export const routes: Routes = [
  {
    path: 'libros', 
    loadChildren: () => import('./features/libros/libros-routing.module').then(m => m.BOOKS_ROUTES)
  },
  // Redirección inicial de la app
  { path: '', redirectTo: 'libros/lista', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }






