import { Component, OnInit } from '@angular/core';

// icons for side bar
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  homeIcon = faHome;
  constructor() { }

  ngOnInit(): void {
  }

}
