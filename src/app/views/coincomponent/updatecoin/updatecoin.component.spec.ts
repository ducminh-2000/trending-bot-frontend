import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecoinComponent } from './updatecoin.component';

describe('UpdatecoinComponent', () => {
  let component: UpdatecoinComponent;
  let fixture: ComponentFixture<UpdatecoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
