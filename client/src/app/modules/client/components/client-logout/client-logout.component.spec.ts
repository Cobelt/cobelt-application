import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLogoutComponent } from './client-logout.component';

describe('ClientLogoutComponent', () => {
  let component: ClientLogoutComponent;
  let fixture: ComponentFixture<ClientLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
