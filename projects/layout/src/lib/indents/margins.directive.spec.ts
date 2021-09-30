import {Component, NO_ERRORS_SCHEMA} from "@angular/core";
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MarginsDirective} from './margins.directive';
import {By} from '@angular/platform-browser';

interface ExpectHasStyleOptions {
  id: string;
  name: keyof CSSStyleDeclaration;
  value: string;
}

@Component({
  template: `
    <div id="single" airMargin="l"></div>
    <div id="double" airMargin="xl l"></div>
    <div id="triple" airMargin="xs xl l"></div>
    <div id="quadruple" airMargin="xs l s xxl"></div>

  `
})
class HostComponent {
}

describe('[airMargin] directive', () => {
  let fixture: ComponentFixture<HostComponent>;
  let component: HostComponent;

  const elementById = (id: string): HTMLElement => fixture.debugElement.query(By.css(`#${id}`)).nativeElement;
  const expectHasStyle = ({id, name, value}: ExpectHasStyleOptions) => expect(elementById(id).style[name]).toBe(value);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarginsDirective, HostComponent], schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('set single margin', () => {
    expectHasStyle({id: 'single', name: 'margin', value: 'var(--indent-l'})
  })


});
