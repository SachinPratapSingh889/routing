import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  users: { id: string; name1: string };
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.users = {
      id: this.route.snapshot.params['id'],
      name1: this.route.snapshot.params['name1']
    }; 
    
  }


}
