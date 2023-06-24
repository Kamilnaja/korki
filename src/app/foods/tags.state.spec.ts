import { TestBed } from '@angular/core/testing';
import { TagsState } from './tags.state';
import { MockProvider } from 'ng-mocks';
import { TagsService } from './tags.service';
import { TagsResponse } from './tags.model';
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
            console.log('mock getTags');
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

  it('should have value from service', (done) => {
    tagsState.tags$.subscribe((tags) => {
      expect(tags).toEqual(tagsResponse.data);
      done();
    });

    tagsState.getTags();
  });
});
