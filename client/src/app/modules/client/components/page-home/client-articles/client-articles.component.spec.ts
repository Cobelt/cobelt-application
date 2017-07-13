import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientArticlesComponent } from './client-articles.component';

describe('ClientArticlesComponent', () => {
  let component: ClientArticlesComponent;
  let fixture: ComponentFixture<ClientArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
