import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  slidestoshow!: number;
  arrowmark!: boolean;

  ngOnInit(): void {
    this.initializeMenu();
    this.initializeSliders();
    this.detectEscKey();
  }

  private initializeMenu(): void {
    // Detect viewport size
    this.setMenuBehavior();

    // Handle clicks for menu
    document.querySelector('.ham')?.addEventListener('click', () => {
      document.querySelector('.side_menu')?.setAttribute('style', 'right: 0px');
      document.querySelector('.overlay')?.setAttribute('style', 'opacity: 1; z-index: 99');
    });

    document.querySelector('.close')?.addEventListener('click', () => {
      this.closeMenu();
    });

    document.querySelector('.overlay')?.addEventListener('click', () => {
      this.closeMenu();
    });
  }
  setMenuBehavior() {
    throw new Error('Method not implemented.');
  }

  private closeMenu(): void {
    const contact = document.querySelector('.contact') as HTMLElement;
    const sideMenu = document.querySelector('.side_menu') as HTMLElement;
    const overlay = document.querySelector('.overlay') as HTMLElement;

    if (contact && contact.style.top >= '10%') {
      contact.style.top = '-100%';
  
    } else if (sideMenu) {
      sideMenu.style.right = this.isMobile() ? '-120%' : '-500px';
    }

    if (overlay) {
      overlay.style.opacity = '0';
      overlay.style.zIndex = '-1';
    }
  }

  private initializeSliders(): void {
    this.slidestoshow = this.isMobile() ? 1 : 4;
    this.arrowmark = !this.isMobile();

  }

  private isMobile(): boolean {
    return window.matchMedia("(max-width: 920px)").matches;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const nav = document.querySelector('nav');
    if (nav) {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.classList.add('fixed_nav');
      } else {
        nav.classList.remove('fixed_nav');
      }
    }
  }

  private detectEscKey(): void {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
        const overlay = document.querySelector('.overlay') as HTMLElement;
        if (overlay && overlay.style.opacity === '1') {
          this.closeMenu();
        }
      }
    });
  }

  showSearch: boolean = false;
  searchText:any
  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (this.showSearch) {
      setTimeout(() => {
        const inputElement = document.querySelector('.form-control .search') as HTMLInputElement;
        if (inputElement) {
          inputElement.focus();
        }
      }, 0);
    }
  }
}

