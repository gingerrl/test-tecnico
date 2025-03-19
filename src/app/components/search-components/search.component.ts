import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-search-components',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Input() nameInput: string = '';
  @Input() placeholder: string = '';

  @Output() searchEvent = new EventEmitter();

  onInputSearch(e: any) {
    this.searchEvent.emit(e);
  }
}
