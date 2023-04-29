import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EditorialModel } from '@/models'

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  constructor(
    private http: HttpClient
  ) { }

  getAllEditoriales(){
    return this.http.get<EditorialModel[]>('http://localhost:8080/editoriales');
  }

  createEditorial(payload: EditorialModel){
    return this.http.post<EditorialModel>('http://localhost:8080/editoriales',payload);
  }
}
