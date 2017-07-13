import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreatorHtmlComponent } from './page-creator-html.component';

describe('PageCreatorHtmlComponent', () => {
  let component: PageCreatorHtmlComponent;
  let fixture: ComponentFixture<PageCreatorHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCreatorHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreatorHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
