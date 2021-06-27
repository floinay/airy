import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener, Inject,
  Input, TemplateRef
} from '@angular/core';
import {EXPANSION_MODULE_OPTIONS, ExpansionModuleOptions} from '../../options';
import {ThemeSize} from '../../../../../../cdk/src/lib';
import {indicatorRotate} from '../../expansion-animtaions';

@Component({
  selector: 'air-expansion-header, [air-expansion-header]',
  templateUrl: './expansion-header.component.html',
  styleUrls: ['./expansion-header.component.scss'],
  animations: [indicatorRotate],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpansionHeaderComponent {
  @Input()
  @HostBinding('class.active')
  status?: boolean;

  onClick = new EventEmitter<void>();

  @Input() icon?: TemplateRef<void>;

  @Input() iconName = this.options.defaultIconName;
  @Input() iconSize: ThemeSize = this.options.defaultIconSize;

  @HostListener('click', ['$event'])
  clicked(e: MouseEvent): void {
    if (this.isClickedOnIgnore(e)) {
      return;
    }

    this.onClick.emit();
  }

  constructor(private elementRef: ElementRef<HTMLDivElement>,
              @Inject(EXPANSION_MODULE_OPTIONS) readonly options: ExpansionModuleOptions) {
  }

  private isClickedOnIgnore(e: MouseEvent): boolean {
    if (e.target) {
      const elements = this.elementRef.nativeElement.querySelectorAll('[expansion-ignore]');
      if (elements.length) {
        for (const element of Array.from(elements)) {
          if (element.contains(e.target as Node)) {
            return true;
          }
        }
      }
    }

    return false;
  }
}
