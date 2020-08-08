import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <h2>Child Component</h2>
        <h3>name: {{person.name}}</h3>
        <button (click)="doNothing()">Do Nothing</button>
        {{cd()}}
    `
})

export class ChildComponent implements OnChanges {

// con la CD di dafault è sempre aggiornato, ad ogni evento
@Input() person

    //it is called whenever CD detects at least one change in @Input variables
    ngOnChanges(changes: SimpleChanges){
        console.log('childComponent --> change detected')
    }

    doNothing(){
        
    }

    //it is called to every rendering
    cd(){
        console.log('childComponent --> rendering')
    }

}
