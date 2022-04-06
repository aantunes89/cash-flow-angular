import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display logo', () => {
    const logo= fixture.nativeElement.querySelector('[data-test="logo"]');
    expect(logo).toBeTruthy();
  });

  it('should display header button', () => {
    const headerBtn = fixture.nativeElement.querySelector('[data-test="header-button"]')
    
    expect(headerBtn).toBeTruthy();

  });
  
});
