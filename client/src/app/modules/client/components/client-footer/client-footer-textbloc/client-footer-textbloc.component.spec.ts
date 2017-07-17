import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFooterTextblocComponent } from './client-footer-textbloc.component';

describe('ClientFooterTextblocComponent', () => {
  let component: ClientFooterTextblocComponent;
  let fixture: ComponentFixture<ClientFooterTextblocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFooterTextblocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFooterTextblocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
