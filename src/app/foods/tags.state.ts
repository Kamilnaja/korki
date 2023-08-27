import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tag } from './tags.model';
import { TagsService } from './tags.service';

@Injectable({
  providedIn: 'root',
})
export class TagsState {
  private tagsSource = new BehaviorSubject<Tag[]>([]);
  get tags$() {
    console.log(1);
    return this.tagsSource.asObservable();
  }

  constructor(private tagsService: TagsService) {}

  getTags(): void {
    this.tagsService.getTags().subscribe((response) => {
      this.tagsSource.next(response.data);
    });
  }
}
