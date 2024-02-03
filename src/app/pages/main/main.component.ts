import { Component } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MatLabel,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NavbarComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
