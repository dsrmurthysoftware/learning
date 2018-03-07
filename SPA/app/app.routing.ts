import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './components/login.component'
import {ContactListComponent} from './components/contactlist.component';
import  {NewContactComponent} from './components/newcontact.component';
import {ShowComponent} from './components/show.component';
import {ServiceComponent} from './components/service.component';
import {AlwaysAuthGuard} from './services/AlwaysAuthGuard';

export const customRoutes: Routes = [    
	{path:'',component:LoginComponent,canActivate: [AlwaysAuthGuard]},   
    {path: 'contacts',component: ContactListComponent},
    {path: 'newcontact', component: NewContactComponent},
    {path:'show/:selected',component:ShowComponent},
    {path:'services',component:ServiceComponent},
    {path: 'mycontacts', redirectTo: 'contacts'}, // redirecting
    {path: '**', component: LoginComponent} //catch all = **    
];
export const SPArouting = RouterModule.forRoot(customRoutes);