import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoincomponentComponent } from './coincomponent.component';

describe('CoincomponentComponent', () => {
  let component: CoincomponentComponent;
  let fixture: ComponentFixture<CoincomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoincomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
