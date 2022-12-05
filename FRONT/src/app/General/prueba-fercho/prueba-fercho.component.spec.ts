import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaFerchoComponent } from './prueba-fercho.component';

describe('PruebaFerchoComponent', () => {
  let component: PruebaFerchoComponent;
  let fixture: ComponentFixture<PruebaFerchoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaFerchoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaFerchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
