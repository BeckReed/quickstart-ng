import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {
  /**
   @Input装饰器都告诉Angular，该属性是公共的，并且能被父组件绑定。 如果没有@Input，Angular就会拒绝绑定到该属性
   */
  @Input('myHighlight') hightlightcolor:string; //myHighlight 别名
  @Input() defaultColor:string; //默认颜色  

  constructor(private el: ElementRef) {
    //el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onmouseenter(){
    this.highlight(this.hightlightcolor || this.defaultColor || 'red');    
  }

  @HostListener('mouseleave') onmouseleave(){
    this.highlight(null);
  }

  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor=color;
  }

}