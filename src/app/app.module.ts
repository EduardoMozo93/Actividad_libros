import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroFormComponent } from './features/libros/components/libro-form/libro-form.component';



@NgModule({
  declarations: [
   AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibroFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
