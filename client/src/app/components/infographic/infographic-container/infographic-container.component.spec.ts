import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicContainerComponent } from './infographic-container.component';

describe('InfographicContainerComponent', () => {
  let component: InfographicContainerComponent;
  let fixture: ComponentFixture<InfographicContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfographicContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfographicContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
