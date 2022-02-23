import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: string; name1: string };
  constructor(private route: ActivatedRoute, private router: Router) { }



  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name1: this.route.snapshot.params['name1']
    };
    this.route.params.subscribe((data: Params) => {
      this.user = {
        id: data['id'],
        name1: data['name1'],
      }
    });
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(data => {
      console.log(data);
    })

    this.route.fragment.subscribe(data => {
      console.log(data);
    })
  }
  getRamaDetail() {
    this.router.navigate(['/users', 2, 'Ram'],
      {
        queryParams: { page: 1, search: 'sachin' },
        fragment: 'loading'
      });
  }

  onUserEdit() {
    this.router.navigate(['/users', this.user.id, this.user.name1, 'edit'],
    {
      queryParamsHandling:'preserve'
    });
  }

}
