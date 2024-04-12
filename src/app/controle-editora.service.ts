import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Editora } from './editora';

export const EDITORA_ARRAY_TOKEN = new InjectionToken<Editora[]>(
  'EditoraArray'
);

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  editoras: Editora[];

  constructor(
    @Inject(EDITORA_ARRAY_TOKEN)
    editoras: Editora[] = [
      { codEditora: 0, nome: 'Editora 0' },
      { codEditora: 1, nome: 'Editora 1' },
      { codEditora: 2, nome: 'Editora 2' },
    ]
  ) {
    this.editoras = editoras;
  }

  getNomeEditora(codEditora: number): string {
    return (
      this.editoras.find((editora) => editora.codEditora === codEditora)
        ?.nome || 'Código invalido'
    );
  }

  getEditoras(): Editora[] {
    return this.editoras;
  }
}
