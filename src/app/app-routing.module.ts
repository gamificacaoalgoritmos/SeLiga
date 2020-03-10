import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'modalidades', loadChildren: './modalidades/modalidades.module#ModalidadesPageModule'},
  { path: 'competencias/:id', loadChildren: './competencias/competencias.module#CompetenciasPageModule' },
  { path: 'lista-problemas/:comp', loadChildren: './lista-problemas/lista-problemas.module#ListaProblemasPageModule' },
  { path: 'lista-problemas', loadChildren: './lista-problemas/lista-problemas.module#ListaProblemasPageModule' },
  { path: 'problema/:id', loadChildren: './problema/problema.module#ProblemaPageModule' },
  { path: 'teoria', loadChildren: './teoria/teoria.module#TeoriaPageModule' },
  { path: 'exemplificacao', loadChildren: './exemplificacao/exemplificacao.module#ExemplificacaoPageModule' },
  { path: 'problemas', loadChildren: './pagina-crud/problemas/problemas.module#ProblemasPageModule' },
  { path: 'competencia', loadChildren: './pagina-crud/competencia/competencia.module#CompetenciaPageModule' },
  { path: 'modalidade', loadChildren: './pagina-crud/modalidade/modalidade.module#ModalidadePageModule' },
  { path: 'pagina-crud', loadChildren: './pagina-crud/pagina-crud.module#PaginaCRUDPageModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
