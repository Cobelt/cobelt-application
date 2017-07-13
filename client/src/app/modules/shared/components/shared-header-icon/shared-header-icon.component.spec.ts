import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHeaderIconComponent } from './shared-header-icon.component';

describe('ClientHeaderIconComponent', () => {
  let component: ClientHeaderIconComponent;
  let fixture: ComponentFixture<ClientHeaderIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientHeaderIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientHeaderIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
