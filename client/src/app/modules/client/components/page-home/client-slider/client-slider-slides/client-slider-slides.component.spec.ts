import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSliderSlidesComponent } from './client-slider-slides.component';

describe('ClientSliderSlidesComponent', () => {
  let component: ClientSliderSlidesComponent;
  let fixture: ComponentFixture<ClientSliderSlidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSliderSlidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSliderSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
