import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFound } from './not-found';
import { provideRouter } from '@angular/router';

describe('NotFound', () => {
  let component: NotFound;
  let fixture: ComponentFixture<NotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFound],
      providers: [
        provideRouter([]) // Provide mock routes for routerLink directives
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 404 header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.text-8xl')?.textContent).toContain('404');
  });

  it('should have a return home button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const homeBtn = compiled.querySelector('#404-btn-home');
    expect(homeBtn).toBeTruthy();
    expect(homeBtn?.textContent).toContain('Return Home');
  });
});
