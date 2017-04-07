import { Component, Directive, TemplateRef, ContentChildren, QueryList, Input, AfterContentChecked, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

let nextId = 0;

@Component({
  selector: 'app-hero-rotator',
  templateUrl: './hero-rotator.component.html',
  styleUrls: ['./hero-rotator.component.scss'],
  // host: {
  //   'class': 'carousel slide',
  //   '[style.display]': '"block"',
  //   'tabIndex': '0',
  //   '(mouseenter)': 'pause()',
  //   '(mouseleave)': 'cycle()',
  //   '(keydown.arrowLeft)': 'keyPrev()',
  //   '(keydown.arrowRight)': 'keyNext()'
  // },
  // providers: [NgbCarouselConfig]
})
export class HeroRotatorComponent implements  OnInit {

   ngOnInit(){}
 
} 


//@Directive({selector: 'template[ngbSlide]'})
//export class NgbSlide {
  /**
   * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
   * Will be auto-generated if not provided.
   */
 // @Input() id = `ngb-slide-${nextId++}`;
 // constructor(public tplRef: TemplateRef<any>) {}
//}

//export const NGB_CAROUSEL_DIRECTIVES = [HeroRotatorComponent, NgbSlide];