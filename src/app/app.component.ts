import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
    private messageService: MessageService,
    private router: Router
  ) {}

  exibindoNavbar() {
    return this.router.url !== '/login';
  }
}
