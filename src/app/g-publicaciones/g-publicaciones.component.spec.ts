import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GPublicacionesComponent } from './g-publicaciones.component';

describe('GPublicacionesComponent', () => {
  let component: GPublicacionesComponent;
  let fixture: ComponentFixture<GPublicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GPublicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
