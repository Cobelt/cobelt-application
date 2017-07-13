import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGenealogyComponent } from './client-genealogy.component';

describe('ClientGenealogyComponent', () => {
  let component: ClientGenealogyComponent;
  let fixture: ComponentFixture<ClientGenealogyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientGenealogyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientGenealogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
