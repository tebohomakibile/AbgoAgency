import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeContent } from '../interfaces/home-content';
import { ErrorService } from './error.service';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private homeContentUrl = 'api/homeData';

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  homeContent$ = this.http.get<HomeContent[]>(this.homeContentUrl).pipe(
    tap(data => console.log('Home Content: ', JSON.stringify(data))),
    catchError(this.errorService.handleError)
  );
}
