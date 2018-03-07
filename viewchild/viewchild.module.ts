import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ViewChildParentComponent} from './viewchildparent.component';
import {ViewChildComponent} from './viewchild.component';

import {ViewChildrenComponent,AlertComponent} from './viewchildren.component';

import {ContentChildrenComponent ,TabsComponent,TabComponent} 
      from './contentchildren.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViewChildParentComponent,
                    ViewChildComponent,
                    ViewChildrenComponent,
                    AlertComponent,

                    ContentChildrenComponent,
                    TabsComponent,
                    TabComponent
                  ],
  exports :[ViewChildParentComponent,
                ViewChildComponent,

                
                ViewChildrenComponent,
                AlertComponent,

                ContentChildrenComponent,
                TabsComponent,
                TabComponent
                ]
})
export class ViewchildModule { }
