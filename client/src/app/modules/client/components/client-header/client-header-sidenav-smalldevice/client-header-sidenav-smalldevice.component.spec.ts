import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHeaderSidenavSmalldeviceComponent } from './client-header-sidenav-smalldevice.component';

describe('ClientHeaderSidenavSmalldeviceComponent', () => {
  let component: ClientHeaderSidenavSmalldeviceComponent;
  let fixture: ComponentFixture<ClientHeaderSidenavSmalldeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientHeaderSidenavSmalldeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientHeaderSidenavSmalldeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
