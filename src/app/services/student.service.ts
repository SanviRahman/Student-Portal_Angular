import { Injectable } from '@angular/core';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [
    { id: 1, name: 'Shanto', email: 'shanto@mail.com', course: 'Data Structure' },
    { id: 2, name: 'Sanvi', email: 'sanvi@mail.com', course: 'Algorithm' },
    { id: 3, name: 'Shanta', email: 'shanta@mail.com', course: 'Management' },
    { id: 4, name: 'Oboni', email: 'oboni@mail.com', course: 'Accounting' },
  ];

  getStudents() {
    return this.students;
  }

  addStudent(student: Student) {
    this.students.push({ ...student, id: this.students.length + 1 });
  }
}
