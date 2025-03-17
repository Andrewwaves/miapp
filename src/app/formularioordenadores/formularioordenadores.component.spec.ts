import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioordenadoresComponent } from './formularioordenadores.component';

describe('FormularioordenadoresComponent', () => {
  let component: FormularioordenadoresComponent;
  let fixture: ComponentFixture<FormularioordenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioordenadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioordenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
