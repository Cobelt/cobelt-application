import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGamesComponent } from './client-games.component';

describe('ClientGamesComponent', () => {
  let component: ClientGamesComponent;
  let fixture: ComponentFixture<ClientGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
