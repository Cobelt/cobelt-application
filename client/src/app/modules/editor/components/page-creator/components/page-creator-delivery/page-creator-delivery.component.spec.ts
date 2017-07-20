import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreatorDeliveryComponent } from './page-creator-delivery.component';

describe('PageCreatorDeliveryComponent', () => {
  let component: PageCreatorDeliveryComponent;
  let fixture: ComponentFixture<PageCreatorDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCreatorDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreatorDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
