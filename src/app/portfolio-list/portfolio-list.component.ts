import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from '../portfolio-object';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  @Input() portfolios;
  constructor(private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    this.portfolioService.get()
      .then(result => {
        this.portfolios = result;
      }
    );

  }

}
