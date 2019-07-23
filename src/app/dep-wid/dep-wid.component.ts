import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-dep-wid',
  templateUrl: './dep-wid.component.html',
  styleUrls: ['./dep-wid.component.css']
})
export class DepWidComponent implements OnInit {

  amount: number;
  id: number;

  constructor(private ItemService: ItemService) { }

  ngOnInit() {
  }

  depwidsave(){
    this.ItemService.depwwid(this.id,this.amount).subscribe(result => {location.assign('/all-items');},
    error => console.error(error));
  }

}
