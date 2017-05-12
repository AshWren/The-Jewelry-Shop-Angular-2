import { Component, Directive, TemplateRef, ContentChildren, QueryList, Input, AfterContentChecked, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

let nextId = 0;

@Component({
  selector: 'app-hero-rotator',
  templateUrl: './hero-rotator.component.html',
  styleUrls: ['./hero-rotator.component.scss'],
  providers: [NgbCarouselConfig]
})

export class HeroRotatorComponent implements  OnInit {

  constructor(config: NgbCarouselConfig){
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }

   ngOnInit(){}
 
} 


