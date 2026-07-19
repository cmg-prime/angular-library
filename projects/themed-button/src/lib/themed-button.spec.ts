import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemedButton } from './themed-button';

describe('ThemedButton', () => {
  let component: ThemedButton;
  let fixture: ComponentFixture<ThemedButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemedButton],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemedButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
