import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-another',
  template: ``
})

export class AnotherComponent implements OnChanges {

    ngOnChanges(changes: SimpleChanges){

        console.log('anotherComponent ->> change detection')

    }

}
