import { Component } from '@angular/core';
import { EditorialService } from '@/services/editorial.service';
import { EditorialModel } from '@/models';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  editoriales: EditorialModel[] = [];
  displayedColumns: string[] = ['acciones','id', 'codigo', 'nombre', 'fechaRegistro', 'estado'];

  constructor(
    private editorialService: EditorialService
  ) {}

  ngOnInit(){
    this.editorialService.getAllEditoriales()
      .subscribe(data => this.editoriales = data);
  }

}
