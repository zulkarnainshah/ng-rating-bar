import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ng-rating-bar",
  templateUrl: "./ng-rating-bar.component.html",
  styleUrls: ["./ng-rating-bar.component.scss"],
})
export class NgRatingBarComponent implements OnInit {
  @Input() rating: number | undefined;
  @Input() filledImgSrc?: string = "../../assets/star_filled.png";
  @Input() emptyImgSrc?: string = "../../assets/star_empty.png";
  @Input() halfFilledImgSrc?: string = "../../assets/star_half.png";
  @Input() size: string = "20px";
  @Input() totalStars: number = 5;

  wholeNumbers: number | undefined;
  hasFractions: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (this.rating != null && this.rating > this.totalStars) {
      this.rating = this.totalStars;
    }
    let tokens = this.rating ? this.rating?.toString().split(".") : null;
    if (tokens) {
      var wholeNumbers = tokens[0] ? tokens[0] : this.rating?.toString();
      this.hasFractions = tokens[1] ? true : false;
      this.wholeNumbers = wholeNumbers ? parseInt(wholeNumbers) : undefined;
      this.totalStars = this.totalStars - Math.ceil(this.rating!);
    }
  }
}
