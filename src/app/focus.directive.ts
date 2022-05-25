import { OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit {

  constructor(private elementRef:ElementRef, private rendered2:Renderer2) { }

  ngOnInit(): void {
    const element = this.elementRef.nativeElement;
    element.focus();
    this.rendered2.setStyle(element, 'background-color', 'pink');
  }
}
