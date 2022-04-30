import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ng-rating-bar',
  templateUrl: './ng-rating-bar.component.html',
  styleUrls: ['./ng-rating-bar.component.scss'],
})
export class NgRatingBarComponent implements OnInit {
  @Input() rating: number = 0;
  @Input() filledImgSrc?: string = '../../assets/ng-rating-bar/star_filled.png';
  @Input() emptyImgSrc?: string = '../../assets/ng-rating-bar/star_empty.png';
  @Input() halfFilledImgSrc?: string =
    '../../assets/ng-rating-bar/star_half.png';
  @Input() size: string = '15px';
  @Input() totalStars: number = 5;
  @Output() ratingChanged = new EventEmitter<number>();

  editableRating: number = 0;
  filledStars: number = 0;
  hasFractions: boolean = false;
  emptyStars: number = 5;

  constructor() {}

  ngOnInit(): void {
    this.editableRating = this.rating;
    this.calculateStars();
  }

  private calculateStars() {
    //If totalStars supplied by user is a number with decimal point
    this.totalStars = Math.ceil(this.totalStars);
    if (this.editableRating != null && this.editableRating > this.totalStars) {
      this.editableRating = this.totalStars;
    }
    let tokens = this.editableRating
      ? this.editableRating?.toString().split('.')
      : null;
    if (tokens) {
      var wholeNumbers = tokens[0]
        ? tokens[0]
        : this.editableRating?.toString();
      this.hasFractions = tokens[1] ? true : false;
      this.filledStars = wholeNumbers ? parseInt(wholeNumbers) : 0;
      this.emptyStars = this.totalStars - Math.ceil(this.editableRating!);
    }
  }

  mouseEnteredFilledStar(index: number) {
    this.filledStars = index + 1;
    this.editableRating = this.filledStars;
    this.calculateStars();
  }

  mouseEnteredEmptyStar(index: number) {
    this.editableRating = this.filledStars + (index + 1);
    this.calculateStars();
  }

  mouseLeftFilledStar(index: number) {
    this.editableRating = this.filledStars - (index - 1);
    this.calculateStars();
  }

  mouseLeftEmptyStar(index: number) {}

  onMouseLeftContainer() {
    this.editableRating = this.rating;
    this.calculateStars();
  }

  filledStarClicked(index: number) {
    this.rating = index + 1;
    this.editableRating = this.rating;
    this.calculateStars();
    this.ratingChanged?.emit(this.rating);
  }
}
