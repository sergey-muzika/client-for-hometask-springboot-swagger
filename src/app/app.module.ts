import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule,MatCardModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router';
import { ItemService } from './item/item.service';
import { AddItemComponent } from './add-item/add-item.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { DepWidComponent } from './dep-wid/dep-wid.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/all-items', pathMatch: 'full'},
  {
    path: 'all-items',
    component: AllItemsComponent
  },
  {
    path: 'add-item',
    component: AddItemComponent
  },
  {
    path: 'dep-wid',
    component: DepWidComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    AllItemsComponent,
    DepWidComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule


  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
