import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DetailsComponent } from './details/details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
//import { FooterComponent } from './shared/components/footer/footer.component';
//import { HeaderComponent } from './shared/components/header/header.component';
//import { HeroRotatorComponent } from './shared/components/hero-rotator/hero-rotator.component';
//import { ItemRotatorComponent } from './shared/components/item-rotator/item-rotator.component';
//import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
//import { ThumbnailsComponent } from './shared/components/thumbnails/thumbnails.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    DetailsComponent,
    GalleryComponent,
    HomeComponent,
    NewArrivalsComponent,
    //FooterComponent,
    //HeaderComponent,
    //HeroRotatorComponent,
    //ItemRotatorComponent,
    //SearchBarComponent,
    //ThumbnailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(), 
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
