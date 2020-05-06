import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarPassComponent } from './recuperar-pass.component';

describe('RecuperarPassComponent', () => {
  let component: RecuperarPassComponent;
  let fixture: ComponentFixture<RecuperarPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
