import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MockPipe } from 'ng-mocks';
import { FoodsComponent } from './foods.component';
import { UppercaseEverySecondPipe } from './uppercase-every-second.pipe';

describe('FoodsComponent', () => {
  let component: FoodsComponent;
  let fixture: ComponentFixture<FoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodsComponent, MockPipe(UppercaseEverySecondPipe)],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
