import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
//import { HeroRotatorComponent } from '../shared/components/hero-rotator/hero-rotator.component';
import { FooterComponent } from '../shared/components/footer/footer.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
