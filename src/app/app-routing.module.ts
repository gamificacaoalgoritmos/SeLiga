import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'modalidades', loadChildren: './modalidades/modalidades.module#ModalidadesPageModule'},
  { path: 'competencias', loadChildren: './competencias/competencias.module#CompetenciasPageModule' },
  { path: 'lista-problemas', loadChildren: './lista-problemas/lista-problemas.module#ListaProblemasPageModule' },
  { path: 'problema', loadChildren: './problema/problema.module#ProblemaPageModule' },
  { path: 'teoria', loadChildren: './teoria/teoria.module#TeoriaPageModule' },
  { path: 'exemplificacao', loadChildren: './exemplificacao/exemplificacao.module#ExemplificacaoPageModule' },
  { path: 'problemas', loadChildren: './pages/problemas/problemas.module#ProblemasPageModule' },
  { path: 'competencia', loadChildren: './pages/competencia/competencia.module#CompetenciaPageModule' },
  { path: 'modalidade', loadChildren: './pages/modalidade/modalidade.module#ModalidadePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
