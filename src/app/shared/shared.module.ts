import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { PlaceHolderDirective } from './placeholder/placeholder.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
    AlertComponent,
    PlaceHolderDirective,
    LoadingSpinnerComponent,
    DropdownDirective
    ],
    imports:[
    CommonModule
    ],
    exports:[
    AlertComponent,
    PlaceHolderDirective,
    LoadingSpinnerComponent,
    DropdownDirective,
    CommonModule
    ],
    entryComponents: [AlertComponent]
})

export class SharedModule {

}