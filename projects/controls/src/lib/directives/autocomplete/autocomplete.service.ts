import {ElementRef, EmbeddedViewRef, Injectable, OnDestroy, ViewContainerRef} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {fromEvent, Observable, Subscription} from 'rxjs';
import {ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef} from '@angular/cdk/overlay';
import {TemplatePortal} from '@angular/cdk/portal';
import {filter} from 'rxjs/operators';
import {AutocompleteComponent} from '../../components';

const CONNECTED_POSITIONS: ConnectedPosition[] = [
  {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top',
  },
  {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'bottom',
  },
];

@Injectable()
@UntilDestroy()
export class AutocompleteService implements OnDestroy {
  private overlayRef: OverlayRef = this.overlay.create({
    hasBackdrop: true,
    backdropClass: 'cdk-overlay-transparent-backdrop',
    positionStrategy: this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions(CONNECTED_POSITIONS)
  });

  private activationSub?: Subscription;

  private autocomplete!: AutocompleteComponent;

  private viewRef?: EmbeddedViewRef<AutocompleteComponent>;

  constructor(private elementRef: ElementRef<HTMLInputElement | HTMLTextAreaElement>,
              private viewContainerRef: ViewContainerRef,
              private overlay: Overlay,
              private overlayPositionBuilder: OverlayPositionBuilder) {
    this.listenShowEvent();
    this.listenHideEvent();
    this.listenKeydown();
  }

  setAutocomplete(autocomplete: AutocompleteComponent): void {
    this.autocomplete = autocomplete;
    this.activationSub?.unsubscribe();
    this.activationSub = autocomplete.onValueChange
      .pipe(untilDestroyed(this))
      .subscribe((value: string) => {
        this.elementRef.nativeElement.value = value;
        this.hide();
      });
  }


  show(): void {
    if (this.viewRef || this.overlayRef.hasAttached()) {
      return;
    }
    if (!this.autocomplete) {
      throw new Error('Please set popover component');
    }

    const portal = new TemplatePortal(this.autocomplete.template, this.viewContainerRef);
    this.viewRef = this.overlayRef.attach(portal);
    this.setOverlaySize();
  }

  hide(): void {
    this.viewRef?.detach();
    this.overlayRef.detach();
    this.viewRef = undefined;
  }

  private setOverlaySize(): void {
    this.overlayRef.updateSize({
      width: this.elementRef.nativeElement.offsetWidth
    });
  }

  ngOnDestroy(): void {
    this.hide();
  }

  private listenShowEvent(): void {
    fromEvent(this.elementRef.nativeElement, 'focus').pipe(untilDestroyed(this)).subscribe(() => this.show());
  }

  private listenHideEvent(): void {
    this.overlayRef.backdropClick().pipe(untilDestroyed(this)).subscribe(() => this.hide());
  }

  private listenKeydown(): void {
    fromEvent<KeyboardEvent>(this.elementRef.nativeElement, 'keydown')
      .pipe(untilDestroyed(this), filter(e => e.code !== 'Escape'))
      .subscribe(() => this.show());
    this.onKeyDown('ArrowDown').subscribe(() => this.autocomplete.down());
    this.onKeyDown('ArrowUp').subscribe(() => this.autocomplete.up());
    this.onKeyDown('Escape').subscribe(() => this.hide());
    this.onKeyDown('Enter')
      .pipe(filter(() => this.overlayRef.hasAttached()))
      .subscribe(() => this.autocomplete.setActive());
  }

  private onKeyDown(key: string): Observable<KeyboardEvent> {
    return fromEvent<KeyboardEvent>(this.elementRef.nativeElement, 'keydown')
      .pipe(untilDestroyed(this), filter((e: KeyboardEvent) => {
        return e.key === key;
      }));
  }
}
