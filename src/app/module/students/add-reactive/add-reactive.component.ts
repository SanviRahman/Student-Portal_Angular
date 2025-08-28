import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-reactive',
  templateUrl: './add-reactive.component.html',
  styleUrls: ['./add-reactive.component.css']
})
export class AddReactiveComponent {
  studentForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    course: ['', Validators.required]
  });

  showPopup: boolean = false; 

  constructor(private fb: FormBuilder, private studentService: StudentService) { }

  onSubmit() {
    if (this.studentForm.valid) {
      this.studentService.addStudent(this.studentForm.value as any);
      this.showPopup = true; 
      this.studentForm.reset();
    }
  }

  closePopup() {
    this.showPopup = false;
  }
}
