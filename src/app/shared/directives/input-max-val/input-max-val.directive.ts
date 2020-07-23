import { Directive, Input, ElementRef, Renderer2, HostListener, OnInit, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[maxLength]',
})
export class InputMaxValDirective implements OnInit, OnDestroy {

  counterEl: HTMLElement;
  counterLength: HTMLElement;
  counterMaxLength: HTMLElement;
  counterSeparator: HTMLElement;
  @Input() maxLength: number;
  subscription: Subscription = new Subscription;


  constructor(private el: ElementRef, private renderer: Renderer2, private control: NgControl) {
    this.renderer.addClass(this.el.nativeElement, 'counter-class');
    console.log(control);
  }

  ngOnInit() {
    this.counterEl = this.renderer.createElement('div');
    this.counterLength = this.renderer.createElement('span');
    this.counterMaxLength = this.renderer.createElement('span');
    this.counterSeparator = this.renderer.createElement('span');

    this.renderer.addClass( this.counterLength, 'counter-length');
    this.renderer.addClass( this.counterSeparator, 'counter-separator');
    this.renderer.setProperty( this.counterSeparator, 'innerHTML', '/');
    this.renderer.addClass( this.counterMaxLength, 'counter-max-length');

    this.renderer.appendChild(this.counterEl, this.counterLength);
    this.renderer.appendChild(this.counterEl, this.counterSeparator);
    this.renderer.appendChild(this.counterEl, this.counterMaxLength);

    this.renderer.appendChild(this.el.nativeElement.parentNode, this.counterEl);

    this.updateCounter(this.el.nativeElement.value.length);
    //console.log(this.el.nativeElement.value);
    this.subscription.add(
      this.control.control.valueChanges
        .subscribe(value => {
          this.updateCounter(value.length)
        })
    );
    this.subscription.add(
      this.control.control.valueChanges
        .subscribe(value => {
          this.checkMaxLength(value.length)
        })
    );
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateCounter(counter) {
    //this.renderer.setProperty(this.counterEl, 'innerHTML', counter);   
    this.renderer.setProperty(this.counterLength, 'innerHTML', counter);   
    this.renderer.setProperty(this.counterMaxLength, 'innerHTML', this.maxLength);   
    //console.log(this.el.nativeElement.value.length);
  }

  checkMaxLength(currentLength) {
    console.log(currentLength);

    if (currentLength > this.maxLength) {
      console.log('above length');
      this.renderer.addClass(this.el.nativeElement, 'alert');
    } else if(this.el.nativeElement.classList.contains('alert')) {
      this.renderer.removeClass(this.el.nativeElement, 'alert');
    }
  }

}
