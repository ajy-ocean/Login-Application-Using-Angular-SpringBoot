import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  user:any

  constructor(private userService : UserService) {}

  ngOnInit(): void {
      
  }

  getUser(){
    this.userService.getUser().subscribe(
      user=>{
        console.log(user);
        this.user = user;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
