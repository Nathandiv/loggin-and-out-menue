import { Component } from '@angular/core';
import { NavBarComponent } from "../../UI/Shared-UI/nav-bar/nav-bar.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

}
