import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  public starWidth: number;
  @Input() rating;
  @Output() ratingCliked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.starWidth = 0;
    this.rating = 0;
  }
  ngOnChanges() {
    this.starWidth = (this.rating * 75) / 5;
  }

  clickMe(): void {
    this.ratingCliked.emit(this.rating);
  }
}
