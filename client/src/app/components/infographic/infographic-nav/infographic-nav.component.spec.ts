import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicNavComponent } from './infographic-nav.component';

describe('InfographicNavComponent', () => {
  let component: InfographicNavComponent;
  let fixture: ComponentFixture<InfographicNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfographicNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfographicNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
