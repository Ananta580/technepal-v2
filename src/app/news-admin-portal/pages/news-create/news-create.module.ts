import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsCreateRoutingModule } from './news-create-routing.module';
import { NewsCreateComponent } from './news-create.component';
import { QuillModule } from 'ngx-quill';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewsCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
    SharedModule,
    NewsCreateRoutingModule,
  ],
})
export class NewsCreateModule {}