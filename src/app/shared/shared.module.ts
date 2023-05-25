import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    TextAreaComponent,
    CardComponent,
    SelectComponent,
  ],
  imports: [CommonModule, OverlayModule],
  providers: [],
  exports: [
    ButtonComponent,
    InputComponent,
    SelectComponent,
    TextAreaComponent,
    CardComponent,
  ],
})
export class SharedModule {}
