import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ng-rating-bar",
  templateUrl: "./ng-rating-bar.component.html",
  styleUrls: ["./ng-rating-bar.component.scss"],
})
export class NgRatingBarComponent implements OnInit {
  @Input() rating: number | undefined;
  emptyStars: number = 5;
  wholeNumbers: number | undefined;
  hasFractions: boolean = false;

  constructor() {}

  ngOnInit(): void {
    let tokens = this.rating ? this.rating?.toString().split(".") : null;
    if (tokens) {
      var wholeNumbers = tokens[0] ? tokens[0] : this.rating?.toString();
      this.hasFractions = tokens[1] ? true : false;
      this.wholeNumbers = wholeNumbers ? parseInt(wholeNumbers) : undefined;
      this.emptyStars = this.emptyStars - Math.ceil(this.rating!);
    }
  }
}
