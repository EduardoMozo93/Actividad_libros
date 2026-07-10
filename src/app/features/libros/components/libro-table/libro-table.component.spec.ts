import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroTableComponent } from './libro-table.component';

describe('LibroTableComponent', () => {
  let component: LibroTableComponent;
  let fixture: ComponentFixture<LibroTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LibroTableComponent]
    });
    fixture = TestBed.createComponent(LibroTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
