import { NgModule } from "@angular/core";
import { TradeShiftComponent } from './trade-shift.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

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
                ]),
            SharedModule
        ]
    }
)
export class TradeShiftModule{}