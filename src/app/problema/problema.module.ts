import { SlidesProblemaComponent } from './../slides-problema/slides-problema.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProblemaPage } from './problema.page';

const routes: Routes = [
  {
    path: '',
    component: ProblemaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],

  declarations: [SlidesProblemaComponent, ProblemaPage]
})
export class ProblemaPageModule {}
