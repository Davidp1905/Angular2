import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/itemModels';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'https://backend-ejemplo-acm.onrender.com/api/items';

  constructor(private http: HttpClient) { }

  getItems(): Observable <Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.apiUrl}/${id}`);
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item);
  }

  updateItem (id: number, item: Item): Observable<Item>{
    return this.http.put<Item>(`${this.apiUrl}/${id}`, item);
  }

  deleteItem(id:number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
