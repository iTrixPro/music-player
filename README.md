# music-player
Music player which display data under the album cover
purpose : try to duplicate an interface similar to spotify 

# Technos

* Angular/Typescript
* Spotify API
* HowlerJS

# Windows - Configuration 

* git clone 'https://github.com/iTrixPro/music-player'
* install nodeJS
* npm install 

# Linux - Configuration 

* git clone 'https://github.com/iTrixPro/music-player'
* sudo apt install nodejs 
* npm install

# Launching 

* npm start 
(It will be launch on the PORT -> 4200, so you need to connect at 'http://localhost:4200')

# Issues

* To use the spotify API you need to use a token, if you have some issue it is possible that you just need to generate a new one. You need to change it in 'src/app/songs/songs.service.ts' line 14. 
* To generate the token go to 'https://developer.spotify.com/console/get-artist-top-tracks/?country=SE&id=43ZHCT0cAZBISjO8DG9PnE'

# Fix needed

* I didn't success to make work the listening to music feature with HowlerJS
