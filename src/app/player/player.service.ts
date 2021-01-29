import { Injectable } from "@angular/core";
import { PlayerComponent } from "./player.component";
import { Howl } from 'howler';
import { HttpDownloadProgressEvent } from "@angular/common/http";
import { tokenize } from "@angular/compiler/src/ml_parser/lexer";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor () {
  }

  public play(url : string, descriptions : string[], src : string) {
    PlayerComponent.setDescriptions(descriptions[0], descriptions[1]);
    PlayerComponent.setUrl(url);
    PlayerComponent.setSrc(src);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', src, true);
    xhr.withCredentials = true;
    xhr.send(null);
    const sound = new Howl({
      src: {
        xhr: {
          method: 'POST',
          headers: {
            Authorization: 'Bearer + BQBeL3K9Kv2WJWN3e1NUHigXsioeUVtULbAcPLjTamlvcZpJsNoYPjj3w3MApKP8lbCVIYvdDDw27CXMpuAGMKkN5pSx0K_ExauOsU5X0kvodRFxZnxxs4PRLYIavkCF4wmEm-lTLbkwzEErU_paEhvKCYFFPFKlVVPW3P9ZP1RKVwHSighE9A3NabG50geJ68iHgnxaq7I0Sg6chgHnFea70raphrCiO45avRK1q3ClT1H0alNJFAHM6JpoCVxlVtN7DgeBoauOsXeS6XJv4Lu46OtBIY527Zo',
          },
          withCredentials: true,
        },
      }
    }).play();
  }
}