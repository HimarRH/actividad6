import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/interfaces/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {

  user: User | undefined;

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



  public onDelete(){
    console.log('Delete user');
  }

  public onUpdate(){
    console.log('Edit user');

  }

  public onBack(){
    this.router.navigate(['/users']);

  }

}
