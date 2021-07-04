import {Directive, Input, OnDestroy} from '@angular/core';
import {AutocompleteService} from './autocomplete.service';
import {AutocompleteComponent} from '../../components';

@Directive({
  selector: 'input[airAutocomplete], textarea[airAutocomplete]',
  exportAs: 'autocomplete',
  providers: [AutocompleteService]
})
export class AutocompleteDirective implements OnDestroy {
  @Input() set airAutocomplete(component: AutocompleteComponent) {
    this.autocompleteService.setAutocomplete(component);
  }

  constructor(private autocompleteService: AutocompleteService) {
  }

  ngOnDestroy(): void {
  }

}
