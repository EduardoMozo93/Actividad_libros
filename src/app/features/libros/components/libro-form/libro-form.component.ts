import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { libro } from '../../models/libros.model';

@Component({
  selector: 'app-libro-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.css']
})
export class LibroFormComponent {

  @Output() libroAdded = new EventEmitter<libro>();
  LibroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.LibroForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      autor: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.min(1)]]
    });

  const newlibros: libro = {
  id: Date.now(),
  titulo: this.LibroForm.value.titulo,
  autor: this.LibroForm.value.autor,
  precio: this.LibroForm.value.precio
};

}

 onSubmit(): void {
    if (this.LibroForm.valid) {
      const newlibro: libro = {
        id: Date.now(), 
        ...this.LibroForm.value
      };
      this.libroAdded.emit(newlibro);
      this.LibroForm.reset();
    } else {
      this.LibroForm.markAllAsTouched();
    }
  }

}






