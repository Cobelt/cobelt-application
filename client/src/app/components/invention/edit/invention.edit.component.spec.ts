import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InventionEditComponent} from './invention.edit.component';

describe('InventionEditComponent', () => {
  let component: InventionEditComponent;
  let fixture: ComponentFixture<InventionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InventionEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
