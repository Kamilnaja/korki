import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TagsResponse } from './tags.model';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  readonly API_TAGS = 'http://localhost:8080/api/dicts/tags/';

  constructor(private httpClient: HttpClient) {}

  getTags(): Observable<TagsResponse> {
    return this.httpClient.get<TagsResponse>(this.API_TAGS);
  }
}
