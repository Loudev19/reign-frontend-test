import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, retry } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { New } from '../interfaces/new';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private path: string = environment.url
  
  constructor(
    private httpService: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  public getPageNews(framework: string = 'angular', page: number = 0): Observable<New[]> {
    return this.httpService.get<any>(this.path + 'search_by_date?query='+ framework + '&page=' + page).pipe(
      retry(1),
      map( all => all.hits
        .filter((item: any) => item.created_at && item.story_title && item.story_url && item.author)
        .map((item: any) => ({
          ...item,
          created_at: new Date(item.created_at),
          is_favorite: this.localStorageService.isFavorite(item.objectID)
        }))
      ),
      catchError(()=>of()) 
    )
  }
}
