import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { EventEmitter } from 'events';
import { Produtos } from 'src/app/entidades/Produtos';
import { url } from 'inspector';

const httOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

 @Injectable({
  providedIn: 'root'
})
export class GerenciamentoService {
  url = 'http://localhost:3000';

idProduto: Produtos;

  constructor(private HttpClient: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  adicionarProduto(produto: Produtos): Observable<any> {   
    return this.HttpClient
      .post(this.url + '/produtos/novos', produto, this.httpOptions)
      .map(res => res)
      .catch(err => Observable.throw(err.message));

  }

  buscarTodosProdutos(): Observable<any> {
    return this.HttpClient
      .get(this.url +'/produtos', this.httpOptions)
      .map(res => res)
      .catch(err => Observable.throw(err.messange));
  }

  deletarProduto(idProduto:number): Observable<any> {
    debugger;
    return this.HttpClient
    .delete(this.url + '/delete/'+ idProduto, this.httpOptions)
    .map(res => res)
    .catch(err => Observable.throw(err.message));
  
    
  }
 
  
}