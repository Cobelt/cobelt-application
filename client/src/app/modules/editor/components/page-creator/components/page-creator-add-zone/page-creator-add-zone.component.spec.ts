import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreatorAddZoneComponent } from './page-creator-add-zone.component';

describe('PageCreatorAddZoneComponent', () => {
  let component: PageCreatorAddZoneComponent;
  let fixture: ComponentFixture<PageCreatorAddZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCreatorAddZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreatorAddZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
