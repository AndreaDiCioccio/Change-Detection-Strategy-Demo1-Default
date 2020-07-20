import { Component, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <h2>Child Component</h2>
        <h3>name: {{person.name}}</h3>
    `
})

export class ChildComponent implements OnChanges, DoCheck {

@Input() person

    //it is called whenever the input properties change their value(reference)
    ngOnChanges(changes: SimpleChanges){
        console.log('childComponent ->> change detection')
    }

    ngDoCheck(){
        console.log('childComponent --> check')
    }

}
