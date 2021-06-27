import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TabsLinksComponent} from './tabs-links.component';

describe('TabsLinksComponent', () => {
  let component: TabsLinksComponent;
  let fixture: ComponentFixture<TabsLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsLinksComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
