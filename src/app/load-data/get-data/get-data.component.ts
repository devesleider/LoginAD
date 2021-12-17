import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {

  constructor(private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.actRoute.snapshot.params);
    console.log(this.router.routerState.snapshot.root);

  }
}
