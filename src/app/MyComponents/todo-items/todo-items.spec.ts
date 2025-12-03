import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItems } from './todo-items';

describe('TodoItems', () => {
  let component: TodoItems;
  let fixture: ComponentFixture<TodoItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
