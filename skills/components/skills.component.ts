import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  items:any;
  newItem:string="";
      
  constructor() {
    this.items=["Angular 4.0", "React", "Node"];
   }

   AddItem(){
    if(this.newItem !=''){
      this.items.push(this.newItem);
      this.newItem='';
    }
  }

  RemoveItem(index:number){
     this.items.splice(index,1);
  }

  ngOnInit() {
  }

}
