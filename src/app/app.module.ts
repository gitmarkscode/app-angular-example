import { environment } from "../environments/environment";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./approuter.module";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import reducers from "./services/store/store.reducers";
import { TmdbApi } from "./services/store/tmdb/tmdb.api";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.provideStore(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [TmdbApi],
  bootstrap: [AppComponent]
})
export class AppModule {}
