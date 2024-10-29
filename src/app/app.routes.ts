import { Routes } from '@angular/router';
import { DashbordComponent } from './Pages/dashbord/dashbord.component';
import { PackageComponent } from './Pages/package/package.component';
import { ClientComponent } from './Pages/client/client.component';
import { RoomsComponent } from './Pages/rooms/rooms.component';
import { BookingComponent } from './Pages/booking/booking.component';
import { UsersComponent } from './Pages/users/users.component';

export const routes: Routes = [
        // admin and client
    {path:'',component:DashbordComponent},
        // admin
    {path:'Package',component:PackageComponent},
    // admin
    {path:'Client',component:ClientComponent},
        // client
    {path:'Rooms',component:RoomsComponent},
        // client
    {path:'Booking',component:BookingComponent},
        // admin and client
    {path:'Users',component:UsersComponent},

];
