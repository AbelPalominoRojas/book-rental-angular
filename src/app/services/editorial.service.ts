import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EditorialModel } from '@/models'
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  constructor(
    private http: HttpClient
  ) { }

  getAllEditoriales(){
    return this.http.get<EditorialModel[]>(`${environment.apiBaseUrl}/editoriales`);
  }

  getEditorialById(id: number){
    return this.http.get<EditorialModel>(`${environment.apiBaseUrl}/editoriales/${id}`);
  }

  createEditorial(payload: EditorialModel){
    return this.http.post<EditorialModel>(`${environment.apiBaseUrl}/editoriales`,payload);
  }

  editEditorial(id: number,payload: EditorialModel){
    return this.http.put<EditorialModel>(`${environment.apiBaseUrl}/editoriales/${id}`, payload);
  }

  removeEditorialById(id: number){
    return this.http.delete<EditorialModel>(`${environment.apiBaseUrl}/editoriales/${id}`);
  }
}
