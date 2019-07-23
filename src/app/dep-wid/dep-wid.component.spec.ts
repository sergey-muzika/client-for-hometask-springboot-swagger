import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepWidComponent } from './dep-wid.component';

describe('DepWidComponent', () => {
  let component: DepWidComponent;
  let fixture: ComponentFixture<DepWidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepWidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepWidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
