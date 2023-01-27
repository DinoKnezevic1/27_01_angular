import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent {
  title: string = 'firstApp';
  opisNaslova = 'Ja sluzim kao test -.-';
  numVariable: number = 7;

  constructor() {
    setTimeout(() => {
      this.title = 'Changed';
      this.opisNaslova = 'Changed opis';
      this.numVariable = 77;
    }, 3000);

    // setInterval(()=>{
    //   this.numVariable+=1;
    // },250);
  }

  foo() {
    //console.log("foo");
    this.numVariable+=1;
  }



}
