import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreatorElementComponent } from './page-creator-element.component';

describe('PageCreatorElementComponent', () => {
  let component: PageCreatorElementComponent;
  let fixture: ComponentFixture<PageCreatorElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCreatorElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreatorElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
