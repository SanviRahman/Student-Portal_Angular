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

  showPopup: boolean = false;       // Success modal
  errorPopup: boolean = false;      // Error modal

  constructor(private fb: FormBuilder, private studentService: StudentService) { }

  onSubmit() {
    if (this.studentForm.valid) {
      this.studentService.addStudent(this.studentForm.value as any);
      this.showPopup = true; 
      this.studentForm.reset();
    } else {
      this.errorPopup = true;        // Show error modal
      this.studentForm.markAllAsTouched(); // Show errors on all invalid fields
    }
  }

  closePopup(type: 'success' | 'error') {
    if (type === 'success') this.showPopup = false;
    if (type === 'error') this.errorPopup = false;
  }
}
