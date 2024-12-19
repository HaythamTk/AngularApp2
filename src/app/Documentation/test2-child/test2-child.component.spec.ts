import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2ChildComponent } from './test2-child.component';

describe('Test2ChildComponent', () => {
  let component: Test2ChildComponent;
  let fixture: ComponentFixture<Test2ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Test2ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
