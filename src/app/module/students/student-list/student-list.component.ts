import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/model/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

  users = [
    {
      id: 1,
      name: "Shanto"
    },
    {
      id: 2,
      name: "Sanvi"
    },
    {
      id: 3,
      name: "Shanta"
    },
    {
      id: 4,
      name: "Oboni"
    },

  ]
}
