import { Router, NavigationStart } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  showHead: boolean = true;
  showFiller = false;
  isExpanded = false;

  ngOnInit() {
  }

  collapseMenu() {
    if (!this.isExpanded) {
      this.isExpanded = true;
    } else {
      this.isExpanded = false;
    }
  }

  // constructor(private router: Router) {
  // // on route change to '/login', set the variable showHead to false
  //   router.events.forEach((event) => {
  //     if (event instanceof NavigationStart) {
  //       if (event['url'] == '/login') {
  //         this.showHead = false;
  //       } else {
  //         // console.log("NU")
  //         this.showHead = true;
  //       }
  //     }
  //   });
  // }

}
