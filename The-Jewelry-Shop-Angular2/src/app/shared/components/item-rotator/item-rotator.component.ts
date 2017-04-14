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

  constructor() { }

  ngOnInit() {
    jQuery(".slick").slick();
  }

}
