import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @Output() optionSelectClicked = new EventEmitter<string>();
  
  constructor(private dataStorageService: DataStorageService) {}

  constructor(private dataStorageService: DataStorageService) {}

  onOptionSelectClicked(option: string) {
    this.optionSelectClicked.emit(option);
  }
<<<<<<< HEAD

=======
  
>>>>>>> f0e781b3fe6b5a376cd3d575d97dd30861ca18cd
  onSave() {
    this.dataStorageService.onSaveData();
  }
  onFetch() {
    this.dataStorageService.onFetchData();
  }
}
