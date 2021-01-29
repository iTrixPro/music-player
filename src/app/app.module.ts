import { NgModule } from '@angular/core';

// our components
import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PlayerComponent } from './player/player.component';

// externs modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// our services
import { SongsService } from './songs/songs.service';
import { PlayerService } from './player/player.service';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    SideBarComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [SongsService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
