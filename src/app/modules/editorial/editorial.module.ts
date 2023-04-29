import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { EditorialRoutingModule } from './editorial-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { CreateComponent } from './pages/create/create.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    EditorialRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class EditorialModule { }
