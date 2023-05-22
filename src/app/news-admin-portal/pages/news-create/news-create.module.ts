import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsCreateRoutingModule } from './news-create-routing.module';
import { NewsCreateComponent } from './news-create.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [NewsCreateComponent],
  imports: [CommonModule, QuillModule, NewsCreateRoutingModule],
})
export class NewsCreateModule {}
