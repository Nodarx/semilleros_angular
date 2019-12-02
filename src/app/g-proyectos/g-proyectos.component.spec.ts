import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GProyectosComponent } from './g-proyectos.component';

describe('GProyectosComponent', () => {
  let component: GProyectosComponent;
  let fixture: ComponentFixture<GProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
