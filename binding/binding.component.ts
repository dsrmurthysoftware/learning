import {Component,ViewEncapsulation} from "@angular/core";

@Component({
    selector: 'app-binding',
    templateUrl: './binding.component.html',
    styles:[`
        .panel {background-color:orange}
   `],
    encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.Native
  // encapsulation: ViewEncapsulation.None   
})
export class BindingComponent {
    clicked:boolean=false;
     public Items:any = [
                     {name: "Kendo UI"},
                     {name: "Ext JS"},
                     {name: "Angular JS"},
                     {name: "Ember JS"}
                  ];

     public clickedItem:any = {name: ""};//property    
  
     onItemClicked(Item:any) {
        this.clickedItem = Item;
        this.clicked=true;
     }
}




