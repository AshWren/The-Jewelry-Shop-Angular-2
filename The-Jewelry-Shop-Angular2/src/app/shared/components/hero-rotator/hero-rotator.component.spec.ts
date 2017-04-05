import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroRotatorComponent } from './hero-rotator.component';

describe('HeroRotatorComponent', () => {
  let component: HeroRotatorComponent;
  let fixture: ComponentFixture<HeroRotatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroRotatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroRotatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
