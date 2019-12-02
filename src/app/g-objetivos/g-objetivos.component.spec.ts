import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GObjetivosComponent } from './g-objetivos.component';

describe('GObjetivosComponent', () => {
  let component: GObjetivosComponent;
  let fixture: ComponentFixture<GObjetivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GObjetivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GObjetivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
