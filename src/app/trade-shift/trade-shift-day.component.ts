import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/user-data.service';
import { PostsDataService } from '../shared/posts-data.service';
import { User } from '../shared/user-data';
import { Posts } from '../shared/posts-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './trade-shift-day.component.html',
  styleUrls: ['./trade-shift-day.component.css']
})
export class TradeShiftDayComponent implements OnInit 
{
  imageWidth = 55;
  imageMargin = 2;

  dayNumber: number;
  errorMessage = '';

  users: User[] = [];
  filteredPosts: Posts[] = [];
  posts: Posts[] = [];
  
  constructor(private userDataService: UserDataService, 
              private postsDataService: PostsDataService,
              private route: ActivatedRoute) { }


  performFilter(filterBy: number): Posts[] 
  {
    return this.posts.filter((post: Posts) => post.dayNumber.valueOf() === this.dayNumber);
  }

  returnUserInfo(userId: number, choice: number): string
  {
    for(let i = 0; i < this.users.length; i++)
    {
      if((this.users[i].userId === userId) && (choice === 1))
      {
        return this.users[i].userName;
      }
      else if((this.users[i].userId === userId) && (choice === 2))
      {
        return this.users[i].email;
      }
      else if ((this.users[i].userId === userId) && (choice === 3))
      {
        return this.users[i].imageUrl;
      }
    }
  }

  ngOnInit(): void 
  {
    this.postsDataService.getPosts().subscribe({

      //"next" is the function/key that will process the next emitted value.
      //"products" is that emitted value.

      next: posts => {
        this.posts = posts;

        const param = this.route.snapshot.paramMap.get('id');
        if (param) 
        {
          //The "+" sign in front of "param" converts the string value into a numeric ID.

          const id = +param;
          this.dayNumber = id;
          this.filteredPosts = this.performFilter(this.dayNumber);
        }
      },

      //"error" is the function/key that will process when an error occurs.

      error: err => this.errorMessage = err
    });

    this.userDataService.getUsers().subscribe({

      next: users => {
        this.users = users;
      },

      error: err => this.errorMessage = err
    });
  }

}
