import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBreadcrumbComponent } from './shared-breadcrumb.component';

describe('SharedBreadcrumbComponent', () => {
  let component: SharedBreadcrumbComponent;
  let fixture: ComponentFixture<SharedBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
