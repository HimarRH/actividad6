import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/interfaces/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';
import { CommonModule } from '@angular/common';
import { DeleteConfirmComponent } from "../../../shared/components/delete-confirm/delete-confirm.component";

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule, DeleteConfirmComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {

  user: User | undefined;
  userDelete: User | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly userService: UserService,


  ) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];
    console.log(userId);

    if(userId){
      this.userService.getUserByID(userId).subscribe((user: User) =>{ this.user = user; console.log(this.user); });


    }
  }



  public onDelete(user: User){
    this.userDelete = user;
  }

  public confirmDelete(): void {
    if (this.userDelete?._id) {
      this.userService.deleteUser(this.userDelete._id).subscribe({
        next: () => {
          console.log('Usuario eliminado');
          this.userDelete = null;
          this.router.navigate(['/users']);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  public cancelDelete(): void {
    this.userDelete = null;
  }

  public onUpdate(id: string){
    this.router.navigate(['/editUser', id]);

  }

  public onBack(){
    this.router.navigate(['/users']);

  }

}
