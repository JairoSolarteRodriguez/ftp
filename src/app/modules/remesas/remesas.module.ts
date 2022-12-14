import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RemesasRoutingModule } from './remesas-routing.module'
import { RemesaComponent } from './pages/remesa/remesa.component'
import { SharedModule } from '@shared/shared.module'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatNativeDateModule } from '@angular/material/core'

@NgModule({
  declarations: [
    RemesaComponent,
  ],
  imports: [
    CommonModule,
    RemesasRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ]
})
export class RemesasModule { }
