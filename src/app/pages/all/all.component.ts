import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { New } from 'src/app/shared/interfaces/new';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  date: Date = new Date('03-01-2022')
  url: string = "https://www.theguardian.com/media/2022/feb/01/vice-media-secretly-organised-20m-saudi-government-festival"

  data$: Observable<New[]> = this.newsService.getPageNews()

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
  }

}
