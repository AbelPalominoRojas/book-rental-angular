import { EditorialModel } from '@/models';
import { EditorialService } from '@/services/editorial.service';
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  @Input() editorial: EditorialModel = {
    id: 0,
    codigo: '',
    nombre: '',
    fechaRegistro: new Date(),
    estado: true,
  };

  idEditorial: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private editorialService: EditorialService,
  ){}

  ngOnInit(){
    this.route.params.subscribe(params=>{
      console.log('params', params)

      this.idEditorial = Number(params['id']);

      this.editorialService.getEditorialById(this.idEditorial)
        .subscribe(data=>this.editorial = data);

    });
  }

  saveEditorial(){
    this.editorialService.editEditorial(this.idEditorial, this.editorial)
      .subscribe(data=>{
        console.log('data: ', data)
        this.router.navigate(['/editorial']);
      })
  }

}
