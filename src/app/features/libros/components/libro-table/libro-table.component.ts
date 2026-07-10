import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { libro } from '../../models/libros.model' 
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-libro-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './libro-table.component.html',
  styleUrls: ['./libro-table.component.css']
})
export class LibroTableComponent {


  @Input() libro: libro[] = []; 
}

