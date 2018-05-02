import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  constructor() { }

  @Input() id: number;

  ngOnInit() {
  }

}
