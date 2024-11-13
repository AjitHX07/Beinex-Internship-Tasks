import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeFontStyle]',
  standalone: true
})
export class ChangeFontStyleDirective {
  @Input() isActive: boolean = true; // Enables/disables the directive
  @Input() fontColor: string = 'red'; // Default font color
  @Input() fontWeight: string = 'normal'; // Font weight
  @Input() trigger: 'hover' | 'click' = 'hover'; // Determines event type

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.trigger === 'hover' && this.isActive) {
      this.applyStyles();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.trigger === 'hover' && this.isActive) {
      this.resetStyles();
    }
  }

  @HostListener('click') onClick() {
    if (this.trigger === 'click' && this.isActive) {
      this.applyStyles();
    }
  }

  private applyStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.fontColor);
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', this.fontWeight);
  }

  private resetStyles() {
    this.renderer.removeStyle(this.el.nativeElement, 'color');
    this.renderer.removeStyle(this.el.nativeElement, 'font-weight');
  }
}