import { Component, OnInit, Input } from '@angular/core';
import { ThumbnailsComponent } from '../../components/thumbnails/thumbnails.component';
import { Jewelry } from '../../../shared/jewelryclass';
import { JEWELRY } from '../../../shared/data/jewelry';
import { JewelryService } from '../../../shared/services/jewelry.service';

declare var jQuery:any;

@Component({
  selector: 'app-item-rotator',
  templateUrl: './item-rotator.component.html',
  styleUrls: ['./item-rotator.component.scss']
})
export class ItemRotatorComponent implements OnInit {
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
