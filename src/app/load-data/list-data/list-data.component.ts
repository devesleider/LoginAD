import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss']
})
export class ListDataComponent implements OnInit {

  constructor(private router: Router, private actRoute: ActivatedRoute, private dataService:DataService) { }

  ngOnInit(): void {
    console.log(this.actRoute.snapshot.params);
    console.log(this.router.routerState.snapshot.root);
    let uri = ((this.router.routerState.snapshot.root.fragment).split('&'))[0].split('=');
this.dataService.getEmployees(uri[1]).subscribe(
  data => {
    console.log(data);
  },
  error => {
    console.error(error);
  }
)
    //this.router.navigate(['/data/get'], { queryParams: {uri} });

  }

}
