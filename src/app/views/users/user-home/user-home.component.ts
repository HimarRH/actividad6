import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/interfaces/user.model';
import { UserService } from '../../../shared/services/user.service';
import { CardComponent } from "../../../shared/components/card/card.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DeleteConfirmComponent } from "../../../shared/components/delete-confirm/delete-confirm.component";


@Component({
  selector: 'app-user-home',
  imports: [CardComponent, CommonModule, DeleteConfirmComponent],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements OnInit {

  users: User[] =[]
  userDelete: User | null = null;

  constructor (
    private readonly route: Router,
    private readonly userService: UserService) {

  }

  ngOnInit(): void {
    this.getUsers();

  }

  public onViewDetail(id: string){
    this.route.navigate(['/users', id]);
  }

  public onEdit(id: string){
    this.route.navigate(['/editUser', id]);
  }

  public onDelete(user: User): void {
    this.userDelete = user;
  }

  public confirmDelete(): void {
    if (this.userDelete?._id) {
      this.userService.deleteUser(this.userDelete._id).subscribe({
        next: () => {
          console.log('Usuario eliminado');
          this.userDelete = null;
          this.getUsers();
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

  private getUsers(){
    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users.results;
        console.log(this.users);
      }
    );
  }

}
