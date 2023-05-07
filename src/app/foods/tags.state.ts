import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tag } from './tags.model';
import { TagsService } from './tags.service';

@Injectable({
  providedIn: 'root',
})
export class TagsState {
  private tagsSource = new Subject<Tag[]>();
  tags$ = this.tagsSource.asObservable();

  constructor(private tagsService: TagsService) {}

  getTags(): void {
    this.tagsService.getTags().subscribe((response) => {
      this.tagsSource.next(response.data);
    });
  }
}
