import { Component } from '@angular/core';
import { NavBarComponent } from "../../UI/Shared-UI/nav-bar/nav-bar.component";

@Component({
  selector: 'app-package',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './package.component.html',
  styleUrl: './package.component.css'
})
export class PackageComponent {

}
