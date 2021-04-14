import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private activeAnt: any;
  public scrollOffset: number = 0;
  public logo: string = '../../../assets/img/Logo-netcode-blanco.png';
  constructor() {}

  ngOnInit(): void {}
  over(event: MouseEvent) {
    console.log(event);
    const target = event.target as HTMLButtonElement;
    if (this.activeAnt && this.activeAnt != target) {
      console.log(this.activeAnt);
      this.activeAnt.classList.remove('active');
    }
    this.activeAnt = target;
    target.classList.add('active');

    console.log(event);
  }
  @HostListener('window:scroll', ['$event'])
  private handleScroll(event: Event) {
    console.log(event);
    const target = event.target as HTMLButtonElement;
    this.scrollOffset = target.children[0].scrollTop;
    if (this.scrollOffset > 80) {
      this.logo = '../../../assets/img/Logo-netcode-verde.png';
    }else{
      this.logo = '../../../assets/img/Logo-netcode-blanco.png';
    }
    console.log('window scroll: ', this.scrollOffset);
  }
}
