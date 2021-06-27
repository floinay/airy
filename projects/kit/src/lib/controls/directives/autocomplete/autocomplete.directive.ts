import {Directive, Input, OnDestroy} from '@angular/core';
import {AutocompleteComponent} from '@airy-ui/controls/components/autocomplete/autocomplete.component';
import {AutocompleteService} from './autocomplete.service';

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
