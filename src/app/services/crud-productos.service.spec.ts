import { TestBed } from '@angular/core/testing';

import { CrudProductosService } from './crud-productos.service';

describe('CrudProductosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudProductosService = TestBed.get(CrudProductosService);
    expect(service).toBeTruthy();
  });
});
