import { NgModule } from "@angular/core";
import { TradeShiftComponent } from './trade-shift.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TradeShiftDayComponent } from './trade-shift-day.component';

@NgModule(
    {
        declarations: 
        [
            TradeShiftComponent,
            TradeShiftDayComponent
        ],
        imports:
        [
            RouterModule.forChild(
                [
                    { 
                        path: 'tradeShift', component: TradeShiftComponent 
                    },
                    {
                        path: 'tradeShift/:id',component: TradeShiftDayComponent
                    }
                ]),
            SharedModule
        ]
    }
)
export class TradeShiftModule{}