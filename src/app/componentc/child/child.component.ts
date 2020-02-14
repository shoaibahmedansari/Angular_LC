import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  //@Input() myNewNumber: number;
  private myNumber: number;
  @Input() myNumber2: string;
  constructor() { }

  @Input()
  set myNewNumber(number: number){
    this.myNumber = number;
  }

  get myNewNumber() {
    return this.myNumber;
  }

  //first fun of lifeCycle
  ngOnChanges(changes: SimpleChanges){
    const newNumberChange: SimpleChange = changes.myNewNumber
    
    console.log("Previous Value - (ng on change)", newNumberChange.previousValue);
    console.log("Current Value - (ng on change)", newNumberChange.currentValue);
    this.myNewNumber = newNumberChange.currentValue;
    // execute every time 
  }

  //second fun of lifeCycle
  ngOnInit() {
    console.log("ngOnInit Value", this.myNewNumber);
    // execute onle once initialy
  }

  //third fun of lifeCycle
  ngDoCheck(){
    console.log(this.myNumber2);
   //concept of pass by value and pass by ref
  }

  //fourth fun of lifeCycle
  ngAfterContentInit() {
    console.log('yeyyyyyyyyyy');
    // execute onle once initialy also not required to import as OnInit, OnChanges, DoCheck initialy
  }

  //fifth fun of lifeCycle
  ngAfterContentChecked() {
    console.log('This was executed after ngAfterContentInit');
    //It calles while clicking on ngDoCheck, so we can use this fun if want explore more aput ngDoCheck variable changes
  }

  //sixth fun of lifeCycle
  ngAfterViewInit() {
    console.log('This was executed after ngAfterContentChecked');
    // It calls ones after calling ngAfterContentChecked
  }

  //seventh fun of lifeCycle
  ngAfterViewChecked() {
    console.log('This was executed after ngAfterViewInit');
    //It calles every time while calling ngAfterViewInit by clicking ngDoCheck
  }

  //eighth fun of lifeCycle
  ngOnDestroy() {
    console.log('Component has been destroyed');
    //It use for destroying the dom tree elements
  }
}
