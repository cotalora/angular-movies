import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinArrayByPipe } from './pipes/join-array-by.pipe';
import { DateUSFormatPipe } from './pipes/date-usformat.pipe';
import { ClickOutsideDirective } from './directives/click-outside.directive';



@NgModule({
  declarations: [
    JoinArrayByPipe,
    DateUSFormatPipe,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JoinArrayByPipe,
    DateUSFormatPipe,
    ClickOutsideDirective
  ]
})
export class SharedModule { }
