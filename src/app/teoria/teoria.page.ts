import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teoria',
  templateUrl: './teoria.page.html',
  styleUrls: ['./teoria.page.scss'],
})
export class TeoriaPage implements OnInit {
  ngOnInit() {
  }
  
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() {}

}