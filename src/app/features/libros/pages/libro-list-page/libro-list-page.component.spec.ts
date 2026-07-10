import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroListPageComponent } from './libro-list-page.component';

describe('LibroListPageComponent', () => {
  let component: LibroListPageComponent;
  let fixture: ComponentFixture<LibroListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LibroListPageComponent]
    });
    fixture = TestBed.createComponent(LibroListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
