import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio-object';
import { StitchClientFactory } from 'mongodb-stitch';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PortfolioService {


  constructor(private jsonp: Jsonp) { }

  get(){
    let clientPromise = StitchClientFactory.create('yetistudio-bqpnl');
    return clientPromise.then(client => {
        let db = client.service('mongodb', 'mongodb-atlas').db('portfolio');
      return client.login().then(() =>
        db.collection('Items').find({owner_id: client.authedId()}).limit(100).execute()
      ).then(docs => {
        return docs;
      }).catch(err => {
        console.error(err)
      });
    });
  }

  post(){

  }

  patch(){

  }

  put(){

  }

 }
