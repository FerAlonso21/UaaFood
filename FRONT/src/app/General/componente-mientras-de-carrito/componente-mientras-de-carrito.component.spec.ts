import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteMientrasDeCarritoComponent } from './componente-mientras-de-carrito.component';

describe('ComponenteMientrasDeCarritoComponent', () => {
  let component: ComponenteMientrasDeCarritoComponent;
  let fixture: ComponentFixture<ComponenteMientrasDeCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteMientrasDeCarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteMientrasDeCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
