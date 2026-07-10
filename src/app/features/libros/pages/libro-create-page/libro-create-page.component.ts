import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LibroFormComponent } from '../../components/libro-form/libro-form.component';
import { libro } from '../../models/libros.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-libro-create-page',
  standalone: true,
  imports: [CommonModule, RouterModule, LibroFormComponent,RouterLink],
  templateUrl: './libro-create-page.component.html',
  //styleUrls: ['./libro-create-page.component.css']
})
export class LibroCreatePageComponent {
  constructor(private router: Router) {}

  onSaveBook(newlibro: libro): void {
    const localData = localStorage.getItem('libro');
    const libro: libro[] = localData ? JSON.parse(localData) : [];
    libro.push(newlibro);
    localStorage.setItem('libro', JSON.stringify(libro));
    
    
    this.router.navigate(['/libro/lista']);
  }
}
