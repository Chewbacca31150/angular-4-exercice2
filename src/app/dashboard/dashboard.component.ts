import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(param => {
      this.name = param.username;
    });
  }

  

}
