import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  optionSelect = 'recipes';

  onOptionSelect(option: string) {
    this.optionSelect = option;
  }
}
