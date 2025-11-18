import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as JsBarcode from 'jsbarcode';

@Directive({
  selector: '[appBarcode]'
})
export class BarcodeDirective implements AfterViewInit, OnChanges {
  @Input() value: string = '';

  constructor(private el: ElementRef<SVGElement>) {}

  ngAfterViewInit(): void {
    this.render();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.render();
    }
  }

  private render(): void {
    if (!this.value) {
      return;
    }

    try {
      (JsBarcode as any)(this.el.nativeElement, this.value, {
        format: 'CODE39',
        displayValue: false,
        height: 40,
        margin: 0
      });
    } catch (e) {
      // If JsBarcode throws for invalid value, just clear the element
      this.el.nativeElement.innerHTML = '';
    }
  }
}


