import { Component } from '@angular/core';
import { NavBarComponent } from "../../UI/Shared-UI/nav-bar/nav-bar.component";

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {

}
