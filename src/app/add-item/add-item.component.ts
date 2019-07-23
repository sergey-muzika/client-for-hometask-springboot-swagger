import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { Item } from '../item/item.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  
  item = new Item;

  constructor(private itemService: ItemService,
              private router: Router,) { 

  }

  ngOnInit() {

  }
  
  newForm(form?: NgForm) {
      this.item = {
      item_number: 0,
      name: '',
      amount: 0,
      code: 0
       }
      }
  

  saveItem(itemForm: NgForm){
    this.itemService.add(itemForm.value).subscribe(result => {location.assign('/all-items');},
    error => console.error(error));
  }

}
