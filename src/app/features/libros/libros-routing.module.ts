import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroListPageComponent } from './pages/libro-list-page/libro-list-page.component';
import { LibroCreatePageComponent } from './pages/libro-create-page/libro-create-page.component';


export const BOOKS_ROUTES: Routes = [
  {
    
    path: 'lista', 
    component: LibroListPageComponent
  },
  {
    
    path: 'crear', 
    component: LibroCreatePageComponent
  }
];