import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {


  private url = 'https://adminpanelzuta.herokuapp.com';

  constructor(private http: HttpClient) {


    /*this.http.get('https://raw.githubusercontent.com/werty4777/jsonurl/main/nuevaurl.json').subscribe((value: any) => {

      this.setURL(value.url);

    });*/


  }

  getUrl(): string {


    return this.url;
  }

  setURL(url): void {

    this.url = url;
  }
}
