import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  // @Input() highLightColor = 'blue';
  @Input('appBetterHighlight') highLightColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    // this.renderer.setStyle
    // (this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
}
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer.setStyle
    // (this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highLightColor;
  }@HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle
    // (this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
