import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LatestListComponent } from './latest-list.component';
import { LatestListRoutingModule } from './latest-list-routing.module';

@NgModule({
  declarations: [LatestListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LatestListRoutingModule,
  ],
})
export class LatestListModule {}
