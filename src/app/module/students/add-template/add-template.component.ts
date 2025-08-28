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
  showPopup: boolean = false; // success modal
  errorPopup: boolean = false; // error modal

  constructor(private studentService: StudentService) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.studentService.addStudent(this.student);
      this.showPopup = true;
      form.reset();
      this.student = { id: 0, name: '', email: '', course: '' };
    } else {
      this.errorPopup = true; // show error modal
    }
  }

  closePopup(type: 'success' | 'error') {
    if (type === 'success') this.showPopup = false;
    if (type === 'error') this.errorPopup = false;
  }
}
