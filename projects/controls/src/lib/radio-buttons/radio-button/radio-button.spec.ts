import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioButtonComponent } from './radio-button.component';
import { randomId, SelectionDispatcherService } from '@airy-ui/cdk';
import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { MockProvider } from 'ng-mocks';

describe('RadioButtonComponent', () => {
  let component!: RadioButtonComponent;
  let selectionDispatcherService!: SelectionDispatcherService;
  const name = randomId('name');
  const value = randomId('value');
  let fixture: ComponentFixture<RadioButtonComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioButtonComponent],
      providers: [MockProvider(ChangeDetectorRef), MockProvider(ElementRef)]
    });
    fixture = TestBed.createComponent(RadioButtonComponent);
    component = fixture.componentInstance;
    component.name = name;
    component.value = value;
    selectionDispatcherService = TestBed.inject(SelectionDispatcherService);
    selectionDispatcherService.listen(name).subscribe();
  });

  it('activate', () => {
    expect(component.active).toBe(false);
    component.activate();
    expect(component.active).toBe(true);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('active')).toBe(true);
  });
});
