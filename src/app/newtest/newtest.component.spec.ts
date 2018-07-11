import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtestComponent } from './newtest.component';

describe('NewtestComponent', () => {
  let component: NewtestComponent;
  let fixture: ComponentFixture<NewtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
