import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [LoginGuard] },
  { path: 'modalidades', loadChildren: './modalidades/modalidades.module#ModalidadesPageModule', canActivate: [AuthGuard]},
  { path: 'competencias/:id', loadChildren: './competencias/competencias.module#CompetenciasPageModule', canActivate: [AuthGuard]},
  { path: 'lista-problemas/:mod/:comp', loadChildren: './lista-problemas/lista-problemas.module#ListaProblemasPageModule', canActivate: [AuthGuard] },
  { path: 'lista-problemas', loadChildren: './lista-problemas/lista-problemas.module#ListaProblemasPageModule', canActivate: [AuthGuard] },
  { path: 'problema/:mod/:comp/:id', loadChildren: './problema/problema.module#ProblemaPageModule', canActivate: [AuthGuard] },
  { path: 'teoria/:comp', loadChildren: './teoria/teoria.module#TeoriaPageModule', canActivate: [AuthGuard] },
  { path: 'exemplificacao/:comp', loadChildren: './exemplificacao/exemplificacao.module#ExemplificacaoPageModule', canActivate: [AuthGuard] },
  { path: 'problemas', loadChildren: './pagina-crud/problemas/problemas.module#ProblemasPageModule' },
  { path: 'competencia', loadChildren: './pagina-crud/competencia/competencia.module#CompetenciaPageModule' },
  { path: 'modalidade', loadChildren: './pagina-crud/modalidade/modalidade.module#ModalidadePageModule' },
  { path: 'pagina-crud', loadChildren: './pagina-crud/pagina-crud.module#PaginaCRUDPageModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule', canActivate: [LoginGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [LoginGuard] },  { path: 'conquistas', loadChildren: './conquistas/conquistas.module#ConquistasPageModule' },
  { path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
