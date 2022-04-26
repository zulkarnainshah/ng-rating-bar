# NgRatingBar

**ng-rating-bar** is a fully customizable rating bar component for Angular based applications (including ionic apps which have Angular as their underlying framework). It supports displaying read-only ratings, editable ratings, average ratings, customizable icons/images to use in place of the default stars and much more.

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## Installation

Run `npm i @zulkarnainshah/ng-rating-bar` to install the library

## Usage

1. In your `app.module.ts` file add the following import:

   ```
   import NgRatingBarModule from @zulkarnainshah/ng-rating-bar
   ```

2. Then add `NgRatingBarModule` in the imports array of `app.module.ts`:

   ```
   imports: [...., NgRatingBarModule]
   ```

3. Now you can use the component in any of your templates like below:
4. ```
   <ng-rating-bar [rating]="4" [maxStars]="5"></ng-rating-bar>
   ```
