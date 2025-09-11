import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  clickArray = [];
  numClicks = 0;
  displayParagraph = true;

  onClickDisplayButton() {
    this.numClicks = this.clickArray.push(this.numClicks + 1);
    this.displayParagraph = !this.displayParagraph;
  }

  getButtonText() {
    if (this.displayParagraph) {
      return 'Hide Details';
    } else {
      return 'Display Details';
    }
  }

  getBackgroundColor(entry: number) {
    return entry > 4 ? 'blue' : 'auto';
  }

  getColor(entry: number) {
    return entry > 4;
  }
}
