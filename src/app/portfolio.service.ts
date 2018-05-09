import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio-object';
import { StitchClientFactory } from 'mongodb-stitch';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

let appId = 'yetistudio-bqpnl';

@Injectable()
export class PortfolioService {

  private portfolios: Portfolio[] = [
    new Portfolio('https://images.unsplash.com/photo-1519211975560-4ca611f5a72a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6ae34625b8db390fb2b784800d76d225&auto=format&fit=crop&w=1050&q=80', 'www.website.com', 'Eloquent javascript machine learning'),
    new Portfolio('https://images.unsplash.com/photo-1504608245011-62d9758c1bb9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f55a58cec78baa23d950fd25871e463&auto=format&fit=crop&w=1050&q=80', 'www.website.com', 'Disruptive reactive gamechanging technology')
  ];

  constructor(private jsonp: Jsonp) { }

  mClient;

  connect(){
    this.mClient = StitchClientFactory.create(appId);  // Slitch apps > Clients > App ID
    this.mClient.then(stitchClient => stitchClient.login())
      .then((stitchClient) => console.log('logged in as: ' + stitchClient))
      .catch(e => console.log('error: ', e));
  }

  // getPortfolios() {
  //   this.connect();
  //   return this.mClient.then(stitchClient => {
  //     let db = stitchClient.service('mongodb', 'mongodb-atlas').db('portfolio'); // Slitch apps > mongodb-atlas > Name database.Collection
  //     let itemsCollection = db.collection('portfolioItems'); // Slitch apps > mongodb-atlas > Name database.Collection
  //     console.log(itemsCollection.find().execute());
  //     return itemsCollection.find().execute();
  //   })
  //    .then(result => {return result})
  //    .catch(e => console.log('error: ', e));
  //  }

  getPortfolios(){
    let clientPromise = StitchClientFactory.create('yetistudio-bqpnl');
    clientPromise.then(client => {
        let db = client.service('mongodb', 'mongodb-atlas').db('portfolio');
      client.login().then(() =>
        db.collection('Items').insertOne(
          {
            owner_id: client.authedId(),
            item:{
              description: 'hello',
              gifUrl: 'google.com',
              liveUrl: 'amazon.com'
            }
          })
      ).then(()=>
        db.collection('Items').find({owner_id: client.authedId()}).limit(100).execute()
      ).then(docs => {
        console.log("Found docs", docs)
        console.log("[MongoDB Stitch] Connected to Stitch")
      }).catch(err => {
        console.error(err)
      });
    });
  }

   // getPortfolios(){
   //   return this.portfolios.slice();
   // }

 }
