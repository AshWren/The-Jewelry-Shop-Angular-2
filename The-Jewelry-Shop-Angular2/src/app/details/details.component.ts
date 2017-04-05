import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { JewelryService } from '../shared/services/jewelry.service';
import { JEWELRY } from '../shared/data/jewelry';
import { Jewelry } from '../shared/jewelryclass';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'], 
  providers: [JewelryService]
})
export class DetailsComponent implements OnInit {
  id: number;
  private sub: any; 

  jewelry: Jewelry;

  getJewelry(): void {
    this.jewelryService.getById(this.id).then(jewelry =>{
     this.jewelry = jewelry}); 
  }

  constructor(private jewelryService: JewelryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
      this.id = +params['id'];
    this.getJewelry();}})
  }

}
