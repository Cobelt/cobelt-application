import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreatorTextComponent } from './page-creator-text.component';

describe('PageCreatorTextComponent', () => {
  let component: PageCreatorTextComponent;
  let fixture: ComponentFixture<PageCreatorTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCreatorTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreatorTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
