import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DetailsComponent } from './details/details.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'new-arrivals', component: NewArrivalsComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'details/:id', component: DetailsComponent }
]

@NgModule({

   imports: [
       RouterModule.forRoot(appRoutes)
   ],
   exports: [
       RouterModule
   ]

})
export class AppRoutingModule { }