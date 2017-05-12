import { Injectable } from '@angular/core';
import { Jewelry } from '../jewelryclass';

import { JEWELRY } from '../data/jewelry';

@Injectable()

export class JewelryService {
  getById(id: number):Promise<Jewelry>{
    return Promise.resolve(JEWELRY.find(function(jewelry){
      return jewelry.id === id;
    }))
  }
  getJewelry(): Promise<Jewelry[]> {
    return Promise.resolve(JEWELRY);
  }
  constructor() { }

}
