import {Injectable} from '@angular/core';
import {UrlServiceService} from '../url-service.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CrearTapa} from '../../models/crearTapa';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TapaModel} from '../../models/tapaModel';

@Injectable({
  providedIn: 'root'
})
export class TapasServiceService {

  constructor(private url: UrlServiceService, private http: HttpClient) {
  }


  agregarProducto(data: CrearTapa): Observable<any> {

    const hh: HttpHeaders = new HttpHeaders();
    /*    hh = hh.append('Authorization', this.getToken());*/
    return this.http.post(this.url.getUrl() + '/api/tapa', data, {headers: hh});
  }

  cargarTapas(): Observable<TapaModel[]> {
    const hh: HttpHeaders = new HttpHeaders();
    /*  hh = hh.append('Authorization', this.getToken());*/
    return this.http.get(this.url.getUrl() + '/api/tapa', {headers: hh}).pipe(map((value: TapaModel[]) => {

      return value;

    }));
  }

  /*  getToken() {
      return localStorage.getItem('token');
    }*/

  borrarProducto(id): Observable<any> {
    const hh: HttpHeaders = new HttpHeaders();
    /* hh = hh.append('Authorization', this.getToken());*/


    return this.http.delete(this.url.getUrl() + '/api/tapa/' + id, {headers: hh});


  }

  cargarTiposTapas(): Observable<any> {

    return this.http.get(this.url.getUrl() + '/api/tapa/tipos');
  }

}
