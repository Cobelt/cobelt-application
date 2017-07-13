import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientStoriesComponent } from './client-stories.component';

describe('ClientStoriesComponent', () => {
  let component: ClientStoriesComponent;
  let fixture: ComponentFixture<ClientStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
