import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEventBox]',
})
export class EventBoxDirective {
  constructor(private el: ElementRef) {}
  @HostListener('click') onClick() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
