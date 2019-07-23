import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Item} from './item.model'

@Injectable()
export class ItemService{
    public API = 'http://localhost:8080';
    public item_api = this.API + '/items';
    public add_item_api = this.API + '/items/addItem';
    public delete_item = this.API + '/items/deleteItem/';
    public deposit_item = this.API + '/items/Deposit/';

    constructor(private htttp :HttpClient){}
    

showall(): Observable<any> {
    return this.htttp.get(this.item_api);
}
 
add(item: any){

    const body={
        item_number: item.item_number,
        name: item.name,
        amount: item.amount,
        code: item.code
    };
      
    return this.htttp.post(this.add_item_api, body, {responseType: 'text'});
}

delete(id: number){
    return this.htttp.delete(this.delete_item + id).subscribe(result => {
        location.reload();}, error => console.error(error));
}

depwwid(id: number, amount: number){
   return this.htttp.post(this.deposit_item + '?amount to add=' + amount + "&" + 'id=' + id,{},{responseType: 'text'});
}

}