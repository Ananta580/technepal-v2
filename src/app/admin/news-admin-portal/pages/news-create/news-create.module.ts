import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsCreateRoutingModule } from './news-create-routing.module';
import { NewsCreateComponent } from './news-create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [NewsCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    SharedModule,
    NewsCreateRoutingModule,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
})
export class NewsCreateModule {}
