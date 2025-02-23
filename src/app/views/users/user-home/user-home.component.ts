import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/interfaces/user.model';
import { UserService } from '../../../shared/services/user.service';
import { CardComponent } from "../../../shared/components/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-home',
  imports: [CardComponent, CommonModule],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements OnInit {

  users: User[] =[]

  constructor (private userService: UserService) {

  }

  ngOnInit(): void {
    this.getUsers();

  }

  public onViewDetail(id: number){
    console.log('view detail ' + id);
  }

  public onEdit(id: number){
    console.log('edit' + id);
  }

  public onDelete(id: number){
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
