import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCarousel } from './tech-carousel';

describe('TechCarousel', () => {
  let component: TechCarousel;
  let fixture: ComponentFixture<TechCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
