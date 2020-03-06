import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Display a secret button if true
  display: boolean = true;
  // increment the number of times the button is clicked
  count: number = 0;
  logCount: number[] = [];

  onClick(): void {
    this.display = !this.display;
    this.count++;
    this.logCount.push(this.count);
  }
}
