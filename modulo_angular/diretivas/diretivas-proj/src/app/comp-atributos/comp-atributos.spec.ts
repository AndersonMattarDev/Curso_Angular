import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompAtributos } from './comp-atributos';

describe('CompAtributos', () => {
  let component: CompAtributos;
  let fixture: ComponentFixture<CompAtributos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompAtributos],
    }).compileComponents();

    fixture = TestBed.createComponent(CompAtributos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
