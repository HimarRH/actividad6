import { Component, ViewChild } from '@angular/core';
import { FormComponent } from '../../../shared/components/form/form.component';
import { FormGroup } from '@angular/forms';
import { User } from '../../../shared/interfaces/user.model';
import { UserService } from '../../../shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  imports: [FormComponent, CommonModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {

  @ViewChild(FormComponent) formComponent!: FormComponent;
  user: User | undefined;
  formInvalid = false;
  formSuccess = false;

  constructor(
    private readonly userService: UserService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService.getUserByID(userId).subscribe((user: User) => {
        this.user = user;
      });
    }
  }

  submitForm(): void {
    if (this.formComponent.userForm.invalid) {
      this.formInvalid = true;
      this.formComponent.userForm.markAllAsTouched();
    } else {
      this.formInvalid = false;
      this.formComponent.onSubmit();
    }
  }

  onSubmit(form: FormGroup): void {
    if (form.valid) {
      const updatedUser: User = { ...this.user, ...form.value };
      this.userService.updateUser(updatedUser).subscribe({
        next: (response) => {
          console.log('Usuario actualizado:', response);
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

