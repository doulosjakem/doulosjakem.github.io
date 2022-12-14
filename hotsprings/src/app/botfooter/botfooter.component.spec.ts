import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotfooterComponent } from './botfooter.component';

describe('BotfooterComponent', () => {
  let component: BotfooterComponent;
  let fixture: ComponentFixture<BotfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
