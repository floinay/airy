import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DelimiterComponent} from './deliver.component';

describe('DeliverComponent', () => {
  let component: DelimiterComponent;
  let fixture: ComponentFixture<DelimiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DelimiterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelimiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
