import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAyudaComponent } from './user-ayuda.component';

describe('UserAyudaComponent', () => {
  let component: UserAyudaComponent;
  let fixture: ComponentFixture<UserAyudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAyudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
