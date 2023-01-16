import {
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostListener,
} from "@angular/core";

@Directive({
  selector: "[clickOutside]",
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener("document:click", ["$event.target"])
  public onClick(target) {
    if (!this.elementRef.nativeElement.contains(target)) {
      this.clickOutside.emit();
    }
  }
}
/*
 <input type="text" class="input-edit"
                            [maxlength]="10" 
                             id="input"
                            name="name"
                            input-unicod
                            (clickOutside)="file.editMode = false;"
*/
