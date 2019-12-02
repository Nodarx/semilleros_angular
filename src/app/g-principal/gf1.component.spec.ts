import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gf1Component } from './gf1.component';

describe('Gf1Component', () => {
  let component: Gf1Component;
  let fixture: ComponentFixture<Gf1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gf1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
