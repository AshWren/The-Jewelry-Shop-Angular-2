import { Component, OnInit, Input } from '@angular/core';
import { Jewelry } from '../../../shared/jewelryclass';
import { JEWELRY } from '../../../shared/data/jewelry';
import { JewelryService } from '../../../shared/services/jewelry.service';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss']
})
export class ThumbnailsComponent implements OnInit {

  jewelry: Jewelry [];

  @Input() jewel;
  

  constructor() { }

  ngOnInit() {
    this.jewelry = JEWELRY;
    
  }

}
