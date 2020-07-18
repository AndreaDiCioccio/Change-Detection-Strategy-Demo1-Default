import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>Default Change Detection Demo1</h1>
        <h3>name: {{person.name}}</h3>
        <button (click)="changeName1()">Chanage Name 1</button>
        <button (click)="changeName2()">Chanage Name 2</button>
        <app-child [person]="person"></app-child>
    `
})

export class AppComponent implements OnChanges {

    person = {
        name: 'Paperino'
    }

    //it is never called in the root component because it is used only for @Input properties
    ngOnChanges(changes: SimpleChanges){

        console.log('appComponent ->> change detection')

    }

    changeName1(){
        this.person.name = 'Gastone'
    }

    changeName2(){
        this.person = {
            name: 'Zio Paperone'
        }
    }

}
