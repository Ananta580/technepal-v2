import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { TextAreaComponent } from './components/text-area/text-area.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    TextAreaComponent,
    CardComponent,
  ],
  imports: [CommonModule],
  providers: [],
  exports: [ButtonComponent, InputComponent, TextAreaComponent, CardComponent],
})
export class SharedModule {}
