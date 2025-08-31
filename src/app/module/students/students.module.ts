import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { StudentListComponent } from './student-list/student-list.component';
import { AddTemplateComponent } from './add-template/add-template.component';
import { AddReactiveComponent } from './add-reactive/add-reactive.component';
import { PracticeComponent } from './practice/practice.component';


const routes: Routes = [
  { path: '', component: StudentListComponent },          // /students
  { path: 'add-template', component: AddTemplateComponent }, // /students/add-template
  { path: 'add-reactive', component: AddReactiveComponent }, // /students/add-reactive
];

@NgModule({
  declarations: [
    StudentListComponent,
    AddTemplateComponent,
    AddReactiveComponent,
    PracticeComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentsModule { }
