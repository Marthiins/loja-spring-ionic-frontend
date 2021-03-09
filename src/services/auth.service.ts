import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { API_CONFIG } from "../config/api.config";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.service";



@Injectable()
export class AuthService {

  jwtHelperService: JwtHelperService = new JwtHelperService(); //email para estrair do token dependencia

  constructor(public http: HttpClient, public storage: StorageService) { //requisição email e senha do meu back no andpoint login
  }

  authenticate(creds : CredenciaisDTO) {
      return this.http.post(
          `${API_CONFIG.baseUrl}/login`,
          creds,
          {
              observe: 'response', //pegar o header da minha resposta
              responseType: 'text'
          });
  }
  successfulLogin(authorizationValue : string) {
    let tok = authorizationValue.substring(7); //tirar a palavra Barry do token reportar o string apartir do 7 caractere
    let user : LocalUser = {
        token: tok,
        email: this.jwtHelperService.decodeToken(tok).sub
    };
    this.storage.setLocalUser(user);//Armazenar usuario no local store
}

logout() {
    this.storage.setLocalUser(null);
  }

}



