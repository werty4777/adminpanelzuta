import {Injectable} from '@angular/core';
import {UrlServiceService} from '../url-service.service';
import {AuthModel} from '../../models/authModel';
import {Observable} from 'rxjs';
import {TokenModel} from '../../models/tokenModel';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private url: UrlServiceService, private http: HttpClient) {
  }

  /*  getToken() {
      return localStorage.getItem('token');
    }*/

  authLogin(auth: AuthModel): Observable<TokenModel> {

    return this.http.post(this.url.getUrl() + 'account/login', auth).pipe(map((value: TokenModel) => {

      localStorage.setItem('token', value.Token);


      return value;
    }));


  }


}
