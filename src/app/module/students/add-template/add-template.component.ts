import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/model/student.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.css']
})
export class AddTemplateComponent {
  student: Student = { id: 0, name: '', email: '', course: '' };
  showPopup: boolean = false; // modal visibility

  constructor(private studentService: StudentService) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.studentService.addStudent(this.student);
      this.showPopup = true; // show modal
      form.reset();
      this.student = { id: 0, name: '', email: '', course: '' };
    }
  }

  closePopup() {
    this.showPopup = false;
  }
}
