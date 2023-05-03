import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @Output() optionSelectClicked = new EventEmitter<string>();
  
  constructor(private dataStorageService: DataStorageService) {}

  onOptionSelectClicked(option: string) {
    this.optionSelectClicked.emit(option);
  }
  
  onSave() {
    this.dataStorageService.onSaveData();
  }
  onFetch() {
    this.dataStorageService.onFetchData();
  }
}
