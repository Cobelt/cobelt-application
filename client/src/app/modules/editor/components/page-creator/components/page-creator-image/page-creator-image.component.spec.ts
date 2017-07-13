import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreatorImageComponent } from './page-creator-image.component';

describe('PageCreatorImageComponent', () => {
  let component: PageCreatorImageComponent;
  let fixture: ComponentFixture<PageCreatorImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCreatorImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreatorImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
