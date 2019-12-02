import { TestBed } from '@angular/core/testing';

import { GrafoService } from './grafo.service';

describe('GrafoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrafoService = TestBed.get(GrafoService);
    expect(service).toBeTruthy();
  });
});
