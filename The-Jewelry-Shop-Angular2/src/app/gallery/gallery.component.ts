import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
  
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}