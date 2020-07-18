import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <h2>Child Component</h2>
        <h3>name: {{person.name}}</h3>
    `
})

export class ChildComponent implements OnChanges {

@Input() person

  ngOnChanges(changes: SimpleChanges){

      console.log('childComponent ->> change detection')
      
  }

}
