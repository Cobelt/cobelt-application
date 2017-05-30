import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupActivationComponent } from './signup-activation.component';

describe('SignupActivationComponent', () => {
  let component: SignupActivationComponent;
  let fixture: ComponentFixture<SignupActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
