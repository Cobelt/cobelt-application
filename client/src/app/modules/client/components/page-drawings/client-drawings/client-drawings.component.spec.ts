import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDrawingsComponent } from './client-drawings.component';

describe('ClientDrawingsComponent', () => {
  let component: ClientDrawingsComponent;
  let fixture: ComponentFixture<ClientDrawingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDrawingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDrawingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
