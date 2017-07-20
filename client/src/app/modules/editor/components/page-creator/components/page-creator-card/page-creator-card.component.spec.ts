import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreatorCardComponent } from './page-creator-card.component';

describe('PageCreatorCardComponent', () => {
  let component: PageCreatorCardComponent;
  let fixture: ComponentFixture<PageCreatorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCreatorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreatorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
