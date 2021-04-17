import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'netcode';
  public proyectos: number = 0;
  public miembros: number = 0;
  public jefes: number = 0;
  public clientes: number = 0;
  public scrollOffset: number = 0;
  public counter: object = {
    proyectos: 78,
    miembros: 23,
    jefes: 7,
    clientes: 374,
  };
  parentMessage = 'message from parent';
  constructor() {}

  ngOnInit(): void {}
  @HostListener('window:scroll', ['$event'])
  private handleScroll(event: Event) {
    var self = this;
    console.log(event);
    const target = event.target as HTMLButtonElement;
    this.scrollOffset = target.children[0].scrollTop;
    if (this.scrollOffset > 1764) {
      let limit = 0;
      let intercount = setInterval(function () {
        if (self.counter['proyectos'] > self.proyectos) {
          self.proyectos++;
        }else if(self.counter['proyectos'] > self.proyectos){
          limit++;
        }
        if (self.counter['miembros'] > self.miembros) {
          self.miembros++;
        }else if(self.counter['miembros'] > self.miembros){
          limit++;
        }
        if (self.counter['jefes'] > self.jefes) {
          self.jefes++;
        }else if(self.counter['jefes'] > self.jefes){
          limit++;
        }
        if (self.counter['clientes'] > self.clientes) {
          self.clientes++;
        }else if(self.counter['clientes'] == self.clientes){
          limit++;
        }
        if (limit == 4) {
          clearInterval(intercount);
        }
        console.log("entra");
      }, 100);
    }
    console.log('window scroll2: ', this.scrollOffset);
  }
}
