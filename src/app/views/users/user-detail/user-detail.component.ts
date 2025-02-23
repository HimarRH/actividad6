import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/interfaces/user.model';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {

  user: User | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
