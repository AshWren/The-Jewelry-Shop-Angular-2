import { Component, OnInit, Input } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ThumbnailsComponent } from '../shared/components/thumbnails/thumbnails.component'
import { Jewelry } from '../shared/jewelryclass';
import { JEWELRY } from '../shared/data/jewelry';
import { JewelryService } from '../shared/services/jewelry.service';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss']
})
export class NewArrivalsComponent implements OnInit {
  //jewelry = JEWELRY;
  jewelry: Jewelry []
 
  constructor() { }

  ngOnInit() {
   this.jewelry = JEWELRY;
  }

}
