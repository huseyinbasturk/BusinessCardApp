import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cards!: Card[];

  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private http: HttpClient
  ) {}

  getCards(): void {
    this.http.get<Card[]>(this.apiUrl + '/cards').subscribe((data: Card[]) => {
      this.cards = data;
    });
  }

  addCard(card: Card): Observable<any> {
    return this.http.post(this.apiUrl + '/cards', JSON.stringify(card));
  }
  updateCard(card: Card, cardId: number): Observable<any> {
    return this.http.put(
      this.apiUrl + '/cards/' + cardId,
      JSON.stringify(card)
    );
  }

  deleteCard(cardId: number){
    return this.http.delete(this.apiUrl+'/cards/' + cardId)
  }
}
