import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecoinComponent } from './createcoin.component';

describe('CreatecoinComponent', () => {
  let component: CreatecoinComponent;
  let fixture: ComponentFixture<CreatecoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
