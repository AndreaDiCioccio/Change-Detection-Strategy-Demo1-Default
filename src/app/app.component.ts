import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>Default Change Detection Strategy Demo</h1>
        <h3>name: {{person.name}}</h3>
        <button (click)="changePropertyValue()">Chanage Property Value</button>
        <button (click)="changeObjectReference()">Chanage Object Reference</button>
        <button (click)="doNothing()">Do Nothing</button>
        <app-child [person]="person"></app-child>
        {{cd()}}
    `
})

export class AppComponent implements OnChanges {

    person = {
        name: 'Paperino'
    }

    // it is called whenever CD detects at least one change in @Input variables, 
    // here is never called 'couse there is not @Input
    ngOnChanges(changes: SimpleChanges){
        console.log('appComponent --> change detected')
    }

    // do not change reference
    // the value in the child component is updated 'couse the CD snaps on every events, then does rendering
    changePropertyValue(){
        this.person.name = 'Gastone'
    }

    // change reference
    changeObjectReference(){
        this.person = {
            name: 'Zio Paperone'
        }
    }

    doNothing(){

    }

    // it is called to every rendering
    cd(){
        console.log('appComponent --> rendering')
    }

}
