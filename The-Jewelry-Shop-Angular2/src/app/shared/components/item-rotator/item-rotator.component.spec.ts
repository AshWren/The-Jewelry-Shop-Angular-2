import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRotatorComponent } from './item-rotator.component';

describe('ItemRotatorComponent', () => {
  let component: ItemRotatorComponent;
  let fixture: ComponentFixture<ItemRotatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRotatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRotatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
