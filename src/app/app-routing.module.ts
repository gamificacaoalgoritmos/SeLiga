import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'modalidades', loadChildren: './modalidades/modalidades.module#ModalidadesPageModule'},
  { path: 'competencias', loadChildren: './competencias/competencias.module#CompetenciasPageModule' },
  { path: 'problemas', loadChildren: './problemas/problemas.module#ProblemasPageModule' },
  { path: 'problema', loadChildren: './problema/problema.module#ProblemaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
