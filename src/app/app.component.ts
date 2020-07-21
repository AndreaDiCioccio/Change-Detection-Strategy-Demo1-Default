import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>Default Change Detection Demo1</h1>
        <h3>name: {{person.name}}</h3>
        <button (click)="changeName1()">Chanage Name 1</button>
        <button (click)="changeName2()">Chanage Name 2</button>
        <button (click)="doNothing()">Do Nothing</button>
        <app-child [person]="person"></app-child>
        {{cd()}}
    `
})

export class AppComponent implements OnChanges {

    person = {
        name: 'Paperino'
    }

    //it is called whenever CD detect at least one change in @Input variables, here is never called 'couse there is not @Input
    ngOnChanges(changes: SimpleChanges){
        console.log('appComponent --> change detected')
    }

    //do not change reference
    changeName1(){
        this.person.name = 'Gastone'
    }

    //change reference
    changeName2(){
        this.person = {
            name: 'Zio Paperone'
        }
    }

    doNothing(){

    }

    ///it is called to every rendering
    cd(){
        console.log('appComponent --> rendering')
    }

}
