import { Component } from '@angular/core';
import { EditorialService } from '@/services/editorial.service';
import { EditorialModel } from '@/models';
import { swalAlertConfirm } from '@/utils/swal.helper'

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

  getAllEditoriales(){
    this.editorialService.getAllEditoriales()
      .subscribe(data => this.editoriales = data);
  }

  async onRemoveEditorial(payload: EditorialModel) {
    console.log('Editorial: ', payload);

    const question = `¿Seguro que quiere eliminar el editorial <b>${payload.nombre}</b>?`;
    const optionSelected = await swalAlertConfirm(question);
    if(!optionSelected.isConfirmed) return;

    this.editorialService.removeEditorialById(payload.id)
      .subscribe(data => {
        console.log("Remove: ", data);
        this.getAllEditoriales();
      })

  }

  ngOnInit(){
    this.getAllEditoriales();
  }

}
