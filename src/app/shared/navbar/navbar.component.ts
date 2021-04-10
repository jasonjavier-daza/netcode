import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private activeAnt: any;
  constructor() {}

  ngOnInit(): void {}
  over(event: MouseEvent) {
    console.log(event);
    const target = event.target as HTMLButtonElement;
    if(this.activeAnt && this.activeAnt != target){
      console.log(this.activeAnt);
      this.activeAnt.classList.remove('active');

    }
    this.activeAnt = target;
    target.classList.add('active');

    console.log(event);
  }
}
