import { NgModule } from "@angular/core";
import { TradeShiftComponent } from './trade-shift.component';
import { RouterModule } from '@angular/router';

@NgModule(
    {
        declarations: 
        [
            TradeShiftComponent
        ],
        imports:
        [
            RouterModule.forChild(
                [
                    { 
                        path: 'tradeShift', component: TradeShiftComponent 
                    }
                ])
        ]
    }
)
export class TradeShiftModule{}