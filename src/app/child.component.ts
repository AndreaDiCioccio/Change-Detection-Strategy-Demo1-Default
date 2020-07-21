import { Component, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <h2>Child Component</h2>
        <h3>name: {{person.name}}</h3>
        {{cd()}}
    `
})

export class ChildComponent implements OnChanges {

@Input() person

    //it is called whenever CD detect at least one change in @Input variables
    ngOnChanges(changes: SimpleChanges){
        console.log('childComponent --> change detected')
    }

    cd(){
        console.log('childComponent --> change detection')
    }


}
