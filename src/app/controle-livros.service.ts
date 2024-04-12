import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Livro } from './livro';

export const LIVRO_ARRAY_TOKEN = new InjectionToken<Livro[]>('LivroArray');

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Livro[];

  constructor(
    @Inject(LIVRO_ARRAY_TOKEN)
    livros: Livro[] = [
      {
        codigo: 0,
        codEditora: 0,
        titulo: 'Livro 0',
        resumo: 'Resumo 0',
        autores: ['autor 0'],
      },
      {
        codigo: 1,
        codEditora: 1,
        titulo: 'Livro 1',
        resumo: 'Resumo 1',
        autores: ['autor 1', 'autor 1.1', 'autor 1.2'],
      },
      {
        codigo: 2,
        codEditora: 2,
        titulo: 'Livro 2',
        resumo: 'Resumo 2',
        autores: ['autor 2'],
      },
    ]
  ) {
    this.livros = livros;
  }

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(novoLivro: Livro) {
    novoLivro.codigo =
      this.livros.sort((a, b) => b.codigo - a.codigo)[0].codigo + 1;
    this.livros.push(novoLivro);
  }

  excluir(codigo: number) {
    const index = this.livros.findIndex((livro) => livro.codigo === codigo);
    this.livros.splice(index, 1);
  }
}
