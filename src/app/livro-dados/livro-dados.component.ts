import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
})
export class LivroDadosComponent {
  public livro: Livro = new Livro(0, 0, '0', '0,0', ['0']);
  public autoresForm: string = '';
  public editoras: Editora[] = [];

  private servEditora: ControleEditoraService;
  private servLivros: ControleLivrosService;
  private router: Router;

  constructor() {
    this.servEditora = new ControleEditoraService();
    this.servLivros = new ControleLivrosService();
    this.router = new Router();
  }

  ngOnInit() {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = () => {
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivros.incluir(this.livro);
    console.log(this.servLivros.obterLivros());
    this.router.navigateByUrl('/livros');
  };
}
