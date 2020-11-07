import { UsuarioInterface } from '../interfaces/usuario';
import { UsuarioService } from '../services/usuario.service';

export class Usuario{
    codigo: string;
    nome: string;
    email: string;
    senha: string;
    pontuacao: number;
    problemas_respondidos: string;
    quantidade_problemas_respondidos: number;
    medalhas: string;
    usuarioService: UsuarioService;

    constructor(usuario?: UsuarioInterface) {
        if(usuario) {
            this.codigo = usuario.codigo;
            this.nome = usuario.nome;
            this.email = usuario.email;
            this.senha = usuario.senha;
            this.pontuacao = usuario.pontuacao;
            this.problemas_respondidos = usuario.problemas_respondidos;
            this.quantidade_problemas_respondidos = usuario.quantidade_problemas_respondidos;
            this.medalhas = usuario.medalhas;
        }

        this.usuarioService = new UsuarioService();
        
    }

    addUsuaraio(usuario: UsuarioInterface) {
        this.usuarioService.addUsuario(usuario);
    }

    getUsuario(codigo: string){
        return this.usuarioService.getUsuario(codigo);
    }

    getProblemasRespondidos() {
        return this.usuarioService.getProblemasRespondido();
    }

    getQuantidadeProblemasRespondidos() {
        return this.usuarioService.getQuantidadeProblemasRespondidos()
    }

    setProblemaRespondido(codigo_usuario: string, codigo_problema: string) {
        this.usuarioService.problemaRespondido(codigo_usuario, codigo_problema)
    }

    somarPontuacao(pontuacao: number) {
        this.usuarioService.somarPontuacao(pontuacao);
    }
}