import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { New } from 'src/app/shared/interfaces/new';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  data$: Observable<New[]> = this.newsService.getPageNews()

  frameworks: {name: string, icon: string}[] = [
    {name: 'angular', icon: 'assets/img/angular/image-138@3x.jpg'},
    {name: 'react', icon: 'assets/img/react/image-140@3x.jpg'},
    {name: 'vuejs', icon: 'assets/img/vue/image-141@3x.jpg'},
  ]

  currentFramework: string = 'angular'
  currentPage: number = 0

  id: string = 'all'

  constructor(
    private newsService: NewsService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.currentFramework = this.localStorageService.getCurrentFramework(this.id)
    this.currentPage = this.localStorageService.getCurrentPage(this.id)
  }

  updateNews(framework: string, page: number): void {
    this.currentFramework = framework
    this.currentPage = page
    this.localStorageService.setCurrentFramework(this.currentFramework, this.id)
    this.localStorageService.setCurrentPage(this.currentPage, this.id)
    this.data$ = this.newsService.getPageNews(framework, page)
  }

}
