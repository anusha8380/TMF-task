import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollContainerComponent } from './scroll-container.component';

describe('ScrollContainerComponent', () => {
  let component: ScrollContainerComponent;
  let fixture: ComponentFixture<ScrollContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollContainerComponent]
    });
    fixture = TestBed.createComponent(ScrollContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
