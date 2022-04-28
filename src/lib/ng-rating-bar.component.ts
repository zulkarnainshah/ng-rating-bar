import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ng-rating-bar",
  templateUrl: "./ng-rating-bar.component.html",
  styleUrls: ["./ng-rating-bar.component.scss"],
})
export class NgRatingBarComponent implements OnInit {
  @Input() rating: number = 0;
  @Input() filledImgSrc?: string = "../../assets/ng-rating-bar/star_filled.png";
  @Input() emptyImgSrc?: string = "../../assets/ng-rating-bar/star_empty.png";
  @Input() halfFilledImgSrc?: string =
    "../../assets/ng-rating-bar/star_half.png";
  @Input() size: string = "15px";
  @Input() totalStars: number = 5;

  wholeNumbers: number = 0;
  hasFractions: boolean = false;

  constructor() {}

  ngOnInit(): void {
    //If totalStars supplied by user is a number with decimal point
    this.totalStars = Math.ceil(this.totalStars);
    if (this.rating != null && this.rating > this.totalStars) {
      this.rating = this.totalStars;
    }
    let tokens = this.rating ? this.rating?.toString().split(".") : null;
    if (tokens) {
      var wholeNumbers = tokens[0] ? tokens[0] : this.rating?.toString();
      this.hasFractions = tokens[1] ? true : false;
      this.wholeNumbers = wholeNumbers ? parseInt(wholeNumbers) : 0;
      this.totalStars = this.totalStars - Math.ceil(this.rating!);
    }
  }
}
