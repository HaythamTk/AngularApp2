import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observ1Component } from './observ1.component';

describe('Observ1Component', () => {
  let component: Observ1Component;
  let fixture: ComponentFixture<Observ1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Observ1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Observ1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
