import { Component } from '@angular/core';
import { NavBarComponent } from "../../UI/Shared-UI/nav-bar/nav-bar.component";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

}
