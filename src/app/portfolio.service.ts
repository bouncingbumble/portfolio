import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio-object';

@Injectable()
export class PortfolioService {

  private portfolios: Portfolio[] = [
    new Portfolio('https://images.unsplash.com/photo-1519211975560-4ca611f5a72a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6ae34625b8db390fb2b784800d76d225&auto=format&fit=crop&w=1050&q=80', 'description'),
    new Portfolio('https://images.unsplash.com/photo-1504608245011-62d9758c1bb9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f55a58cec78baa23d950fd25871e463&auto=format&fit=crop&w=1050&q=80', 'description'),
    new Portfolio('https://images.unsplash.com/photo-1504608245011-62d9758c1bb9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f55a58cec78baa23d950fd25871e463&auto=format&fit=crop&w=1050&q=80', 'description'),
    new Portfolio('https://images.unsplash.com/photo-1504608245011-62d9758c1bb9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f55a58cec78baa23d950fd25871e463&auto=format&fit=crop&w=1050&q=80', 'description'),
    new Portfolio('https://images.unsplash.com/photo-1504608245011-62d9758c1bb9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f55a58cec78baa23d950fd25871e463&auto=format&fit=crop&w=1050&q=80', 'description')

    ];

  constructor() { }

  getPortfolios(){
    return this.portfolios.slice();
  }

}
