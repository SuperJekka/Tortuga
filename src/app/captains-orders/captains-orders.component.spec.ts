import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainsOrdersComponent } from './captains-orders.component';

describe('CaptainsOrdersComponent', () => {
  let component: CaptainsOrdersComponent;
  let fixture: ComponentFixture<CaptainsOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptainsOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
