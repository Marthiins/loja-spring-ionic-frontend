import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

import { API_CONFIG } from "../../config/api.config";
import { CategoriaDTO } from "../../models/categoria.dto";

@Injectable ()// para essa classe ser injetado em outras classe utilizo o @Injectable
export class CategoriaService {

  constructor(public http: HttpClient) {

  }

  //Metodo findAll vai me retornar uma lista de categoria DTO
  findAll() : Observable<CategoriaDTO[]> { // a crase no javascript permite colocar variaveis no meio do String sem precisar concatenar com o operador +
   //posso usar chamando o retorno //return this.http.get("{{host}}/categorias"); //{{host}} é igual a http://localhost:8080

   return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);   //vou utilizar a configuração global do api.config
  }






}
