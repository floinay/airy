import {ElementRef, Inject, Injectable, InjectionToken, Input, OnDestroy, Optional, SimpleChanges} from '@angular/core';
import {InputsList} from './types/inputs-list';
import {BreakpointsChanges} from './breakpoints-changes';
import {BreakpointObserver} from '../breakpoint-observer';
import {Subject, Subscription} from 'rxjs';
import {Breakpoint} from '../breakpoints';
import {mapObjectKeys} from '../../helpers/map-object-keys';


export const PROPERTIES_LIST = new InjectionToken('Breakpoints styles manager properties list');

@Injectable()
export class BreakpointsStylesManager implements OnDestroy {
  protected changes?: BreakpointsChanges;
  private onDestroy = new Subject<boolean>();
  private currentBreakpoints?: Breakpoint[];
  private breakpointsSub?: Subscription;
  private propertiesMap: InputsList = {};
  private stylesMap: InputsList = {};
  private currentProperties: string[] = [];

  constructor(private elementRef: ElementRef<HTMLDivElement>,
              private observer: BreakpointObserver,
              @Inject(PROPERTIES_LIST) @Optional() readonly propertiesList: InputsList) {
  }

  onChanges(event: SimpleChanges): void {
    this.clear();
    this.changes = new BreakpointsChanges(event);
    this.observeBreakpoint();
  }

  setPropertiesMap(map: InputsList): void {
    this.propertiesMap = mapObjectKeys(map, (key) => key.toLowerCase());
  }

  setStylesMap(map: {}): void {
    this.stylesMap = map;
  }

  private observeBreakpoint(): void {
    if (this.breakpointsSub) {
      this.breakpointsSub.unsubscribe();
    }
    if (this.changes && this.changes.current.breakpoints().length) {
      this.breakpointsSub = this.observer.matches$(this.changes.current.breakpoints())
        .subscribe(value => {
          this.currentBreakpoints = value;
          this.clear();
          this.style();
        });
    }
  }

  style(): void {
    if (this.changes?.current) {
      const props = this.changes.current.currentProperties(this.currentBreakpoints);
      Object.keys(props)
        .forEach(key => this.elementRef.nativeElement.style.setProperty(this.propertyName(key), this.propertyValue(props[key] as string)));
    }
  }

  private propertyName(key: string): string {
    const name = this.propertiesMap[key.toLowerCase()] as string;
    this.currentProperties.push(name);
    return name;
  }

  private propertyValue(value: string): string {
    return this.stylesMap[value ? value.toLowerCase() : undefined as any] as string;
  }

  clear(): void {
    if (this.changes?.previous) {
      Object.keys(this.changes.previous.currentProperties(this.currentBreakpoints))
        .forEach(key => this.elementRef.nativeElement.style.removeProperty(key));
    }

    this.currentProperties.forEach(name => {
      this.elementRef.nativeElement.style.removeProperty(name);
      console.log(name);
    });

    this.currentProperties = [];
  }

  ngOnDestroy(): void {
    this.breakpointsSub?.unsubscribe();
  }
}
