import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { libro } from '../../models/libros.model';
import { LibroTableComponent } from '../../components/libro-table/libro-table.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-libro-list-page',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterLink, LibroTableComponent],
  templateUrl: './libro-list-page.component.html',
  styleUrls: ['./libro-list-page.component.css']
})
export class LibroListPageComponent implements OnInit {

  libroList: libro[] = []; 

  ngOnInit(): void {
    
    const localData = localStorage.getItem('libro');
    if (localData) {
      this.libroList = JSON.parse(localData);
    } else {
      // Datos por defecto si está vacío
      this.libroList = [
        { id: 1, titulo: 'El Alquimista', autor: 'Paulo Coelho', precio: 150 },
        { id: 2, titulo: '1984', autor: 'George Orwell', precio: 180 }
      ];
      localStorage.setItem('libro', JSON.stringify(this.libroList));
    }
  }

}






