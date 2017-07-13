import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreatorContainerComponent } from './page-creator-container.component';

describe('PageCreatorContainerComponent', () => {
  let component: PageCreatorContainerComponent;
  let fixture: ComponentFixture<PageCreatorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCreatorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreatorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
