import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroCreatePageComponent } from './libro-create-page.component';

describe('LibroCreatePageComponent', () => {
  let component: LibroCreatePageComponent;
  let fixture: ComponentFixture<LibroCreatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LibroCreatePageComponent]
    });
    fixture = TestBed.createComponent(LibroCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
