import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, fakeAsync } from '@angular/core/testing';
import { TagsResponse } from './tags.model';
import { TagsService } from './tags.service';

describe('TagsService', () => {
  let service: TagsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TagsService],
    });
    service = TestBed.inject(TagsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return tags', fakeAsync(() => {
    const mockTags: TagsResponse = {
      data: [
        { id: 'tag1', name: 'tag1' },
        { id: 'tag2', name: 'tag1' },
        { id: 'tag3', name: 'tag3' },
      ],
      length: 3,
    };

    service.getTags().subscribe((tags) => {
      expect(tags).toEqual(mockTags);
    });

    const req = httpMock.expectOne(service.API_TAGS);
    expect(req.request.method).toBe('GET');

    req.flush(mockTags);
  }));
});
