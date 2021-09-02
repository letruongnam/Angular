import { ComponentFixture, TestBed } from '@angular/core/testing';

import { First.Component.TsComponent } from './first.component.ts.component';

describe('First.Component.TsComponent', () => {
  let component: First.Component.TsComponent;
  let fixture: ComponentFixture<First.Component.TsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ First.Component.TsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(First.Component.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
