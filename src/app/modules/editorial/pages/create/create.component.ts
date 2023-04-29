import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EditorialService } from '@/services/editorial.service';
import { EditorialModel } from '@/models';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  @Input() editorial: EditorialModel = {
    id: 0,
    codigo: '',
    nombre: '',
    fechaRegistro: new Date(),
    estado: true,
  }

  constructor(
    private editorialService: EditorialService,
    private router: Router
  ){}

  saveEditorial(){
    console.log('Editorial: ', this.editorial)

    this.editorialService.createEditorial(this.editorial)
    .subscribe(data=>{
      console.log('Save: ', data);
      this.router.navigate(['/editorial']);
    });
  }

}
