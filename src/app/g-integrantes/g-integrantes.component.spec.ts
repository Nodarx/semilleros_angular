import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GIntegrantesComponent } from './g-integrantes.component';

describe('GIntegrantesComponent', () => {
  let component: GIntegrantesComponent;
  let fixture: ComponentFixture<GIntegrantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GIntegrantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GIntegrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
