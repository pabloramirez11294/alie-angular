import { TestBed, async, inject } from '@angular/core/testing';

import { AdministradorGuard } from './administrador.guard';

describe('AdministradorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdministradorGuard]
    });
  });

  it('should ...', inject([AdministradorGuard], (guard: AdministradorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
