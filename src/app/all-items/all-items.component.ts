import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit {

  items: Array<any>;
  
  displayedColumns: string[] = ['id','name','amount','code'];

  constructor(private ItemService: ItemService){}

  ngOnInit(){
    return this.ItemService.showall()
      .subscribe(data => this.items = data);   
}
  deleteItem(id: any){
  this.ItemService.delete(id);
  
}   
}
