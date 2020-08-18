import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competencia } from '../model/competencia';

@Component({
  selector: 'app-teoria',
  templateUrl: './teoria.page.html',
  styleUrls: ['./teoria.page.scss'],
})
export class TeoriaPage implements OnInit {
  competencia_id;
  teorias = []

  ngOnInit() {
  }
  
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private route: ActivatedRoute) {
    this.competencia_id = this.route.snapshot.params['comp']
    let isso = this

    let competencia = new Competencia();
    competencia.getCompetencia(this.competencia_id).then(function(snapshot) {
      isso.teorias = snapshot.teoria.split(', ')
    })
  }

}