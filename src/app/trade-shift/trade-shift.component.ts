import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/user-data.service';
import { User } from '../shared/user-data';


@Component({
  templateUrl: './trade-shift.component.html',
  styleUrls: ['./trade-shift.component.css']
})
export class TradeShiftComponent implements OnInit {

  errorMessage = '';

  users: User[] = [];

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.userDataService.getUsers().subscribe({

      //"next" is the function/key that will process the next emitted value.
      //"products" is that emitted value.

      next: users => {
        this.users = users;
      },

      //"error" is the function/key that will process when an error occurs.

      error: err => this.errorMessage = err
    });
  }

}
