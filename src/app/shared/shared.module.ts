import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { SelectComponent } from './components/select/select.component';
import { PreviewComponent } from './components/preview/preview.component';
import { NoSanitizePipe } from './pipe/nosanitize.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MyAdsComponent } from './components/my-ads/my-ads.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    TextAreaComponent,
    CardComponent,
    SelectComponent,
    PreviewComponent,
    NoSanitizePipe,
    SpinnerComponent,
    MyAdsComponent,
  ],
  imports: [CommonModule, OverlayModule],
  providers: [],
  exports: [
    SpinnerComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    TextAreaComponent,
    CardComponent,
    PreviewComponent,
    NoSanitizePipe,
    MyAdsComponent,
  ],
})
export class SharedModule {}
