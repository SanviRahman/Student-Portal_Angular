import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PracticeComponent } from './module/students/practice/practice.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  {
    path: 'students',
    loadChildren: () =>
      import('./module/students/students.module').then(m => m.StudentsModule)
  },

  { path: 'practice/:id/:name', component: PracticeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
