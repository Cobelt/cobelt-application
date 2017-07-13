import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreatorBaseComponent } from './page-creator-base.component';

describe('PageCreatorBaseComponent', () => {
  let component: PageCreatorBaseComponent;
  let fixture: ComponentFixture<PageCreatorBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCreatorBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreatorBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
