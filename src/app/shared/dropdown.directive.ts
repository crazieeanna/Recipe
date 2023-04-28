import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isToggle = false;

  @HostListener('click') onToggle() {
    this.isToggle = !this.isToggle;
  }

  constructor() { }

}
