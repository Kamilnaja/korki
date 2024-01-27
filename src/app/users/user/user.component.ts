import { Component, Inject, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  private readonly usersService = Inject(UsersService);

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((users) => {
      console.log(users);
    });
  }
}
