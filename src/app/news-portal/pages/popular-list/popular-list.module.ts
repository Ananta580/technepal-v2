import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PopularListComponent } from './popular-list.component';
import { PopularListRoutingModule } from './popular-list-routing.module';

@NgModule({
  declarations: [PopularListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PopularListRoutingModule,
  ],
})
export class PopularListModule {}
