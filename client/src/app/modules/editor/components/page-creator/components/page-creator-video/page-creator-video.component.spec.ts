import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreatorVideoComponent } from './page-creator-video.component';

describe('PageCreatorVideoComponent', () => {
  let component: PageCreatorVideoComponent;
  let fixture: ComponentFixture<PageCreatorVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCreatorVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreatorVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
