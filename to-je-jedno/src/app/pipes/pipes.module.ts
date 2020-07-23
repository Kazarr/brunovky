import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalLettersPipe } from './capital-letters/capital-letters.pipe';



@NgModule({
    declarations: [CapitalLettersPipe],
    exports: [
        CapitalLettersPipe
    ],
    imports: [
        CommonModule
    ]
})
export class PipesModule { }
