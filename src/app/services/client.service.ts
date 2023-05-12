import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError} from 'rxjs';
import { Client } from '../models/client.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url = "http://localhost:3000/clientes";
  constructor(private http: HttpClient) { }

  getClient(query?: string, page?: number, limit?: number): Observable<any> {
    if (query) {
      return this.http.get<any>(`${this.url}?q=${query}`).pipe(
        catchError((error: any) => {
          console.error(error);
          return throwError(() => new Error('Error en solicitud Http por query de busqueda'));
        })
      );
    } else {
      return this.http.get<any>(`${this.url}?_page=${page}&_limit=${15}`).pipe(
        catchError((error: any) => {
          console.error(error);
          return throwError(() => new Error('Error en solicitud Http por paginacion'));
        })
      );
    }
  }

  getDetailClient(id: number): Observable<Client>{
    return this.http.get<Client>(`${this.url}/${id}`).pipe(
      catchError((error: any) => {
        console.error(error);
        return throwError(() => new Error('Error en solicitud Http por detalle de cliente'));
      })
    );
  }

  deleteCliente(id: number): Observable<Client>{
    return this.http.delete<Client>(`${this.url}/${id}`).pipe(
      catchError((error: any) => {
        console.error(error);
        return throwError(() => new Error('Error en solicitud Http en delete client'));
      })
    );
  }
}
