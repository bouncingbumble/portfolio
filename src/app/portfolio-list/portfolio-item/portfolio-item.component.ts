import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from '../../portfolio-object';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {
  @Input() portfolio: Portfolio;
  constructor() { }

  ngOnInit() {
  }

}
