import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills.component';

import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SkillsComponent],
  exports :[SkillsComponent]
})
export class SkillsModule { }
