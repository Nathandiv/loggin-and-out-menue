import { Component } from '@angular/core';
import { NavBarComponent } from "../../UI/Shared-UI/nav-bar/nav-bar.component";

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {

}
