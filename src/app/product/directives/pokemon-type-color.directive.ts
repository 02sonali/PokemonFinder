import { Directive, ElementRef, Input} from '@angular/core';
import * as typeConstants from '../product-type-color.const';

@Directive({
  selector: '[appPokemonTypeColor]'
})
export class PokemonTypeColorDirective {
  @Input() type: any;

  constructor(private el: ElementRef) {}

  ngOnInit():void {
    this.el.nativeElement.style.backgroundColor = typeConstants[this.type] || '#808080';
  }

}
