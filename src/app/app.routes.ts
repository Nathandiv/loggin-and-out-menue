import { Routes } from '@angular/router';
import { DashbordComponent } from './Pages/dashbord/dashbord.component';
import { PackageComponent } from './Pages/package/package.component';
import { ClientComponent } from './Pages/client/client.component';
import { RoomsComponent } from './Pages/rooms/rooms.component';
import { BookingComponent } from './Pages/booking/booking.component';
import { UsersComponent } from './Pages/users/users.component';

export const routes: Routes = [
    {path:'Dashbord',component:DashbordComponent},
    {path:'Package',component:PackageComponent},
    {path:'Client',component:ClientComponent},
    {path:'Rooms',component:RoomsComponent},
    {path:'Booking',component:BookingComponent},
    {path:'Users',component:UsersComponent},

];
