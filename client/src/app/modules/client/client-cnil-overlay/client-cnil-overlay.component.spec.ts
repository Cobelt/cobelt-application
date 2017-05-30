import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnilOverlayComponent } from './cnil-overlay.component';

describe('CnilOverlayComponent', () => {
  let component: CnilOverlayComponent;
  let fixture: ComponentFixture<CnilOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnilOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnilOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
