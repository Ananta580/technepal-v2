import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsDetailRoutingModule } from './news-detail-routing.module';
import { NewsDetailComponent } from './news-detail.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewsDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    NewsDetailRoutingModule,
  ],
})
export class NewsDetailModule {}
