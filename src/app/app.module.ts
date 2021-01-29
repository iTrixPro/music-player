import { NgModule } from '@angular/core';

// our components
import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { SideBarComponent } from './side-bar/side-bar.component';

// externs modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// our services
import { SongsService } from './songs/songs.service';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [SongsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
