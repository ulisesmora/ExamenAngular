import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { routing, appRoutingProviders} from "./app-routing";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent} from "./character/character.component";
import { NgxPaginationModule} from "ngx-pagination";
import { FilterPipe } from './pipes/filter.pipe';
import { Filter2Pipe } from './pipes/filter2.pipe';
import { FormsModule } from "@angular/forms";
import { LocationComponent } from './location/location.component';



@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    FilterPipe,
    LocationComponent,
    Filter2Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
