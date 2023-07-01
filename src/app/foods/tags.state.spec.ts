import { TestBed, fakeAsync } from '@angular/core/testing';
import { TagsState } from './tags.state';
import { MockProvider } from 'ng-mocks';
import { TagsService } from './tags.service';
import { Tag, TagsResponse } from './tags.model';
import { of } from 'rxjs';

describe('TagsState', () => {
  let tagsState: TagsState;
  const tagsResponse: TagsResponse = {
    data: [
      {
        id: '1',
        name: 'tag1',
      },
    ],
    length: 1,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TagsState,
        MockProvider(TagsService, {
          getTags: () => {
            return of(tagsResponse);
          },
        }),
      ],
    });

    tagsState = TestBed.inject(TagsState);
  });

  it('should works', () => {
    expect(tagsState).toBeTruthy();
  });

  xit('should have value from service', (done) => {
    tagsState.tags$.subscribe((tags) => {
      expect(tags).toEqual(tagsResponse.data);
      // It’s a marker for test runners not to finish the test until we call it.
      done();
    });

    tagsState.getTags();
  });

  it('should have value from service', () => {
    const res: Tag[] = [];
    tagsState.tags$.subscribe((tags) => {
      res.push(...tags);
    });

    tagsState.getTags();

    expect(res).toEqual(tagsResponse.data);
  });

  it('should have value from service', fakeAsync(() => {
    tagsState.tags$.subscribe((res) => {
      expect(res).toEqual(tagsResponse.data);
    });

    tagsState.getTags();
  }));
});
