import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';
import { HomeContent } from '../../interfaces/home-content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homePageData$: Observable<HomeContent[]> | undefined;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.homePageData$ = this.contentService.homeContent$;
  }


}
