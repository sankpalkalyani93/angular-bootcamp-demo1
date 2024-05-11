import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<string[]>{
    return of(['Monitor', 'Keyboard', 'PenDrive', 'Mouse', 'Laptop']);
  }
}
