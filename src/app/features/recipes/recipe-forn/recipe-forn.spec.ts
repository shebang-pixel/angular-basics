import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeForn } from './recipe-forn';

describe('RecipeForn', () => {
  let component: RecipeForn;
  let fixture: ComponentFixture<RecipeForn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeForn],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeForn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
