import { Injectable } from '@angular/core';
import { List } from '../models/Lista';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public data: List[];

  constructor() {
    console.log('services running');
    
   }
}
