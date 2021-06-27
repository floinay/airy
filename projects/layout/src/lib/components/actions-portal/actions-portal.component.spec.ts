import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ActionsPortalComponent} from './actions-portal.component';

describe('ActionsPortalComponent', () => {
  let component: ActionsPortalComponent;
  let fixture: ComponentFixture<ActionsPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionsPortalComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
