import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rotation } from './rotation';

describe('Rotation', () => {
  let component: Rotation;
  let fixture: ComponentFixture<Rotation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rotation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rotation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
