import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientVisualModifierComponent } from './client-visual-modifier.component';

describe('ClientVisualModifierComponent', () => {
  let component: ClientVisualModifierComponent;
  let fixture: ComponentFixture<ClientVisualModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientVisualModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientVisualModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
