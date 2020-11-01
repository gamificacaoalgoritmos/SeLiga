import { Problema } from './problema';
import { CompetenciaInterface } from '../interfaces/competencia';
import { CompetenciaService } from '../services/competencia.service';

export class Competencia{
    nome: string;
    descricao: string;
    codigo: string;
    imagem: string;
    problemas: string; 
    teoria: string;
    exemplo: string;
    competencia: CompetenciaInterface;
    competenciaService: CompetenciaService;

    constructor(competencia?){
        if (competencia) {
            this.nome=competencia.nome;
            this.descricao=competencia.descricao;
            this.codigo=competencia.codigo;
            this.imagem=competencia.imagem;
            this.problemas=competencia.problemas;
            this.teoria=competencia.teoria;
            this.exemplo=competencia.exemplo;
            this.competencia = competencia;
        }
        this.competenciaService = new CompetenciaService();
        
    }
    
    addCompetencia(){
        this.competenciaService.addCompetencia(this.competencia);
    }
    
    getCompetencia(codigo: string) {
        return this.competenciaService.getCompetencia(codigo);
    }
    
     getCompetencias() {
        return this.competenciaService.getCompetencias();
    }

    getProblemasCompetencia(codigo: string) {
        return this.competenciaService.getProblemasCompetencia(codigo);
    }
}