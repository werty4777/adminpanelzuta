import {Injectable} from '@angular/core';
import {UrlServiceService} from '../url-service.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoTapasService {

  constructor(private url: UrlServiceService, private http: HttpClient) {
  }

/*
  getToken() {
    return localStorage.getItem('token');
  }
*/

  getOrdenes(): Observable<any> {


    const hh: HttpHeaders = new HttpHeaders();
    /*hh = hh.append('Authorization', this.getToken());*/
    return this.http.get(this.url.getUrl() + 'pedidos/api/order/pedidos/lista', {headers: hh});

  }
}
