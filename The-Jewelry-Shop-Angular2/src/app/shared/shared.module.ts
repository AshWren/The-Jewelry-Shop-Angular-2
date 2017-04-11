import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroRotatorComponent } from './components/hero-rotator/hero-rotator.component';
import { ItemRotatorComponent } from './components/item-rotator/item-rotator.component';
import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AppRoutingModule } from '../../app/app-routing.module';

//import { NgbSlide } from '../shared/components/hero-rotator/hero-rotator.component'
//import {NGB_CAROUSEL_DIRECTIVES} from '../shared/components/hero-rotator/hero-rotator.component'


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    HeroRotatorComponent, 
    ItemRotatorComponent, 
    ThumbnailsComponent, 
    SearchBarComponent//, 
    //NgbSlide
    //NGB_CAROUSEL_DIRECTIVES
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    HeroRotatorComponent, 
    ItemRotatorComponent, 
    ThumbnailsComponent, 
    SearchBarComponent, 
    //NgbSlide
   //NGB_CAROUSEL_DIRECTIVES
  ]
})
export class SharedModule { }