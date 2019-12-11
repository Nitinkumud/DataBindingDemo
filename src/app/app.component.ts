import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data binding using String Interpolation & Property Binding';

  numberA = 50;
  numberB = 60;

  imgUrl = 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png';

  fullName = 'Nitin';

  addTwoNumbers() {
    return this.numberA + this.numberB;
  }

  onSave($event) {
    $event.stopPropagation();
    console.log('Save button is clicked!', $event);
  }
  onDivClick() {
    console.log('DIV is clicked!');
  }

  onPressEnter($event) {
    console.log('Entered text: ', $event.target.value);
  }
}
