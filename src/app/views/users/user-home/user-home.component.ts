import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/interfaces/user.model';
import { UserService } from '../../../shared/services/user.service';
import { CardComponent } from "../../../shared/components/card/card.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-home',
  imports: [CardComponent, CommonModule],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements OnInit {

  users: User[] =[]

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

  public onDelete(id: string){
    console.log('delete' + id);
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
