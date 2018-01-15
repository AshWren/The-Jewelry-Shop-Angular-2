import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ItemRotatorComponent } from '../shared/components/item-rotator/item-rotator.component';
import { ThumbnailsComponent } from '../shared/components/thumbnails/thumbnails.component';
import { Jewelry } from '../shared/jewelryclass';
import { JEWELRY } from '../shared/data/jewelry';
import { JewelryService } from '../shared/services/jewelry.service';

declare var jQuery:any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
  
})
export class GalleryComponent implements OnInit {
 jewelry: Jewelry [] ;
  constructor() { }

  ngOnInit() {
    this.jewelry = JEWELRY;
    window.setTimeout(function(){
    jQuery(".slick").slick({
      dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });
  }, 200)
  }

  

}