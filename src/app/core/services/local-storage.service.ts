import { Injectable } from '@angular/core';
import { New } from 'src/app/shared/interfaces/new';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public saveFavorite(object: New): void {
    const data = localStorage.getItem('favorites')
    if (data === null){
      const favorites: New[] =  [object]
      localStorage.setItem('favorites', JSON.stringify(favorites))
    } else {
      let favorites: New[] = JSON.parse(data)
      favorites.push(object)
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
  }

  public removeFavorite(object: New): void {
    const data = localStorage.getItem('favorites')
    if (data !== null){
      let favorites: New[] = JSON.parse(data)
      favorites = favorites.filter(item => item.objectID !== object.objectID)
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
  }

  public isFavorite(story_id: number): boolean {
    const data = localStorage.getItem('favorites')
    if (data !== null){
      let favorites: New[] = JSON.parse(data)
      return favorites.find(item => item.objectID === story_id) ? true : false
    } else return false
  }

  public getFavorites(): New[] {
    const data = localStorage.getItem('favorites')
    return data ? JSON.parse(data) : []
  } 

  public setCurrentFramework(framework: string, id: string): void {
    localStorage.setItem('framework'+id, framework)
  }

  public getCurrentFramework(id: string): string {
    const framework = localStorage.getItem('framework'+id)
    return framework ? framework : 'angular'
  }

  public setCurrentPage(page: number, id: string): void {
    localStorage.setItem('page' + id, page.toString())
  }

  public getCurrentPage(id: string): number {
    const value = localStorage.getItem('page' + id)
    return value ? parseInt(value) : 0
  }
}
