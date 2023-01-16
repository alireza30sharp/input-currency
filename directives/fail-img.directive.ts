import {
  Directive,
  HostListener,
  Input,
  ViewChild,
  ElementRef,
} from "@angular/core";
@Directive({ selector: "img[fail-img]" })
export class FailImgDirective {
  constructor(private el: ElementRef) {}

  @HostListener("error")
  private onError() {
    this.el.nativeElement.src = "https://sata.sys/assets/svg/sata.svg";
  }
}
/**
 *   <img src="{{item.LogoUri}}" fail-img class="img-system float-end ">
 */
