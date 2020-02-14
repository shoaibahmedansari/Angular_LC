import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private number: number = 23234;
  name: string = "Shoaib";
  isVisible: boolean = true;
  
  user = {
    name: 'Shoaib'
  }

  switchVisibility() {
    this.isVisible = !this.isVisible;
  }

  updateValue(){
    this.user.name = 'Ahmed';
  }

  get counter(){
    return this.number;
  }

  set counter(value){
    this.number = value;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
