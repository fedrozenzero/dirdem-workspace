import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { error } from 'protractor';

/**
 * For correct use wrap input inside a div container
 */
@Directive({
  selector: '[dirdemInput]'
})
export class DirdemInputDirective {

  constructor(private el: ElementRef, private control: NgControl) { }
  private errorMessage: string;

  @HostListener('keyup') onKeyUp() {
    const parentDiv: HTMLDivElement = this.el?.nativeElement?.parentNode;
    this.clearErrors(parentDiv);

    if (this.control?.invalid) {
      if (this.control?.errors) {
        this.setErrors(parentDiv, this.control.errors)
      }
    }
  }


  private setErrors(parentDiv: HTMLDivElement, errors: any) {
    if (errors?.required) {
      this.errorMessage = `Mandatory`
    }
    else if (errors?.minlength) {
      this.errorMessage = `Min length is ${errors?.minlength?.requiredLength}`
    }
    else if (errors?.maxlength) {
      this.errorMessage = `Max length is ${errors?.maxlength?.requiredLength}`
    }
    else if (errors?.email) {
      this.errorMessage = `Invalid email`
    }
    else if(errors?.pattern) {
      this.errorMessage = `Invalid pattern`
    }

    const errorDiv = document.createElement('div')
    errorDiv.classList.add('caen-error-message')
    errorDiv.classList.add('mat-small')
    errorDiv.appendChild(document.createTextNode(this.errorMessage))
    parentDiv.appendChild(errorDiv)
  }


  private clearErrors(parentDiv: HTMLDivElement) {
    this.errorMessage = ''
    let errorDiv = parentDiv?.getElementsByClassName('caen-error-message')[0]
    errorDiv?.remove()
  }

}
