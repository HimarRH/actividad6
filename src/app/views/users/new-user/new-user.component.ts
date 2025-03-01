import { Component, ViewChild } from '@angular/core';
import { FormComponent } from "../../../shared/components/form/form.component";
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/interfaces/user.model';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  imports: [FormComponent, CommonModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  @ViewChild(FormComponent)
  private formComponent!: FormComponent;
  formInvalid = false;
  formSuccess= false;
  constructor(private readonly userService: UserService, private readonly router: Router ) { }

  submitForm(): void {
    if (this.formComponent.userForm.invalid) {
      this.formInvalid = true;
      this.formComponent.userForm.markAllAsTouched();
    } else {
      this.formInvalid = false;
      this.formComponent.onSubmit();
    }
  }

  onSubmit(form: FormGroup){

    if(form.valid){
      const user: User = form.value;
      this.userService.createUser(user).subscribe({
        next: (response) => {
          console.log('Usuario creado:', response);
          this.formSuccess = true;
          setTimeout(() => {
            this.formSuccess = false;
            this.router.navigate(['/']);
          }, 3000);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }


  }

}
