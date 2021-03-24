import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';


@NgModule({
  declarations:[
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})

export class SharedModule { }
