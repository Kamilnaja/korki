import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MockPipe, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { FoodsComponent } from './foods.component';
import { Tag } from './tags.model';
import { TagsState } from './tags.state';
import { UppercaseEverySecondPipe } from './uppercase-every-second.pipe';

describe('FoodsComponent', () => {
  let component: FoodsComponent;
  let fixture: ComponentFixture<FoodsComponent>;
  let tags$: BehaviorSubject<Tag[]>;

  beforeEach(async () => {
    tags$ = new BehaviorSubject<Tag[]>([]);

    await TestBed.configureTestingModule({
      declarations: [FoodsComponent, MockPipe(UppercaseEverySecondPipe)],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [
        MockProvider(TagsState, {
          tags$,
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have tags', fakeAsync(() => {
    const tag = {
      id: '1',
      name: 'tag1',
    };
    tags$.next([tag]);

    component.tags$.subscribe((tags) => {
      expect(tags).toEqual([tag]);
      expect(tags.length).toBe(1);
    });
    flush();
  }));

  it('should have no tags', fakeAsync(() => {
    component.tags$.subscribe((tags) => {
      expect(tags).toEqual([]);
      expect(tags.length).toBe(0);
    });
    flush();
  }));

  it('should have 3 tags', fakeAsync(() => {
    const tag = {
      id: '1',
      name: 'tag1',
    };
    tags$.next([tag, tag, tag]);

    component.tags$.subscribe((tags) => {
      expect(tags.length).toBe(3);
    });
    flush();
  }));
});
