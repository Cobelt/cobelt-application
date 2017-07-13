import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreatorInputComponent } from './page-creator-input.component';

describe('PageCreatorInputComponent', () => {
  let component: PageCreatorInputComponent;
  let fixture: ComponentFixture<PageCreatorInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCreatorInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreatorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
