export interface UsuarioInterface {
    codigo: string,
    nome: string,
    nick: string,
    email: string,
    pontuacao: number,
    problemas_respondidos: string
    medalhas: string;
    quantidade_problemas_respondidos: number;
    senha?: string;
}

